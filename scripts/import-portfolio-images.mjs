import { copyFileSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { readdir, stat } from "node:fs/promises";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { extname, join } from "node:path";
import { pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const OUTPUT_ROOT = join(ROOT, "public/images/portfolio");
const MANIFEST_PATH = join(ROOT, "src/data/portfolio.generated.ts");
const REPORT_PATH = join(ROOT, "portfolio-import-report.json");

const categories = [
  {
    slug: "retratos",
    prefix: "retrato",
    sourceDir: process.env.RETRATOS_SRC,
    alt: "Retrato fotografiado por AYACX Photography.",
    heroFilename: process.env.RETRATOS_HERO ?? "DSC02546.jpg",
    coverFilename: process.env.RETRATOS_COVER ?? "DSC02546.jpg",
    heroFocalPoint: "58% 44%",
  },
  {
    slug: "eventos",
    prefix: "evento",
    sourceDir: process.env.EVENTOS_SRC,
    alt: "Fotografía de evento realizada por AYACX Photography.",
    heroFilename: process.env.EVENTOS_HERO ?? "DSC02516.jpg",
    coverFilename: process.env.EVENTOS_COVER ?? "DSC02516.jpg",
    heroFocalPoint: "50% 42%",
  },
  {
    slug: "marcas",
    prefix: "marca",
    sourceDir: process.env.MARCAS_SRC,
    alt: "Fotografía comercial realizada por AYACX Photography.",
    heroFilename: process.env.MARCAS_HERO ?? "Cerveza 2.jpg",
    coverFilename: process.env.MARCAS_COVER ?? "Cerveza 3.jpg",
    heroFocalPoint: "54% 52%",
  },
];

const selectedCategorySlugs = new Set(
  (
    process.env.IMPORT_CATEGORIES ??
    categories.map((item) => item.slug).join(",")
  )
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean),
);

const compatibleExtensions = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
]);
const recognizedButConditional = new Set([".heic", ".heif", ".tiff", ".tif"]);
const rawExtensions = new Set([
  ".arw",
  ".cr2",
  ".cr3",
  ".dng",
  ".nef",
  ".orf",
  ".raf",
  ".rw2",
]);

const imageMagick = findImageMagick();
const webpSupported = supportsFormat("WEBP");
const avifSupported = supportsFormat("AVIF");

const report = {
  generatedAt: new Date().toISOString(),
  tool: imageMagick,
  outputRoot: "public/images/portfolio",
  formats: {
    jpeg: true,
    webp: webpSupported,
    avif: avifSupported,
  },
  categories: {},
};

const generated = await readExistingManifest();

for (const category of categories) {
  if (selectedCategorySlugs.has(category.slug)) {
    generated[category.slug] = await processCategory(category);
  }
}

writeManifest(generated);
writeFileSync(REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`);

console.log("AYACX portfolio import complete");
for (const [slug, item] of Object.entries(report.categories)) {
  console.log(
    `${slug}: found ${item.filesFound}, valid ${item.validImages}, processed ${item.processedImages}, omitted ${item.omitted.length}, duplicates ${item.duplicates.length}`,
  );
  console.log(`  hero: ${item.hero.originalFilename}`);
  console.log(`  cover: ${item.cover.originalFilename}`);
}

async function readExistingManifest() {
  if (!existsSync(MANIFEST_PATH)) return {};

  try {
    const manifest = await import(
      `${pathToFileURL(MANIFEST_PATH).href}?t=${Date.now()}`
    );
    return { ...manifest.generatedPortfolioImages };
  } catch {
    return {};
  }
}

async function processCategory(category) {
  if (!category.sourceDir) {
    const envName = `${category.slug.toUpperCase().replaceAll("-", "_")}_SRC`;
    throw new Error(
      `Missing source directory for ${category.slug}. Set ${envName} before running import:portfolio.`,
    );
  }

  if (!existsSync(category.sourceDir)) {
    throw new Error(`Source directory not found: ${category.sourceDir}`);
  }

  const outputDir = join(OUTPUT_ROOT, category.slug);
  const dirs = {
    originals: join(outputDir, "originals"),
    thumbnails: join(outputDir, "thumbnails"),
    medium: join(outputDir, "medium"),
    high: join(outputDir, "high"),
  };

  Object.values(dirs).forEach((dir) => mkdirSync(dir, { recursive: true }));

  const entries = (await readdir(category.sourceDir))
    .filter((name) => !name.startsWith("."))
    .sort((a, b) => a.localeCompare(b, "es", { numeric: true }));

  const files = [];
  const omitted = [];
  const hashSeen = new Map();
  const duplicates = [];

  for (const name of entries) {
    const sourcePath = join(category.sourceDir, name);
    const info = await stat(sourcePath);
    const ext = extname(name).toLowerCase();

    if (!info.isFile()) continue;
    if (info.size === 0) {
      omitted.push({ originalFilename: name, reason: "zero-size" });
      continue;
    }
    if (rawExtensions.has(ext)) {
      omitted.push({
        originalFilename: name,
        reason: "raw-format-needs-manual-conversion",
      });
      continue;
    }
    if (recognizedButConditional.has(ext)) {
      omitted.push({
        originalFilename: name,
        reason: "format-needs-safe-conversion-review",
      });
      continue;
    }
    if (!compatibleExtensions.has(ext)) {
      omitted.push({
        originalFilename: name,
        reason: "not-a-supported-photo-format",
      });
      continue;
    }

    const hash = sha256(sourcePath);
    if (hashSeen.has(hash)) {
      const duplicateOf = hashSeen.get(hash);
      duplicates.push({ originalFilename: name, duplicateOf });
      omitted.push({
        originalFilename: name,
        reason: "duplicate",
        duplicateOf,
      });
      continue;
    }
    hashSeen.set(hash, name);

    let dimensions;
    try {
      dimensions = identify(sourcePath);
    } catch (error) {
      omitted.push({
        originalFilename: name,
        reason: "cannot-decode",
        detail: error.message,
      });
      continue;
    }

    files.push({ name, sourcePath, ext, hash, size: info.size, ...dimensions });
  }

  const images = [];

  files.forEach((file, index) => {
    const id = `${category.prefix}-${String(index + 1).padStart(3, "0")}`;
    const originalExt = file.ext === ".jpeg" ? ".jpg" : file.ext;
    const originalName = `${id}${originalExt}`;
    const originalPath = join(dirs.originals, originalName);

    copyFileSync(file.sourcePath, originalPath);

    const variant = {
      thumbnail: createVariants(file.sourcePath, dirs.thumbnails, id, 720, 82),
      medium: createVariants(file.sourcePath, dirs.medium, id, 1800, 86),
      high: createVariants(file.sourcePath, dirs.high, id, 2800, 90),
    };

    const hero = file.name === category.heroFilename;
    const cover = file.name === category.coverFilename;

    const alt = altFor(category, file.name);

    images.push({
      id,
      category: category.slug,
      originalFilename: file.name,
      thumbnailSrc: variant.thumbnail.jpeg.src,
      thumbnailSrcSet: srcSet(variant.thumbnail),
      mediumSrc: variant.medium.jpeg.src,
      src: variant.medium.jpeg.src,
      srcSet: srcSet(variant.medium),
      highResolutionSrc: variant.high.jpeg.src,
      highResolutionSrcSet: srcSet(variant.high),
      sources: pictureSources(variant.medium),
      thumbnailSources: pictureSources(variant.thumbnail),
      lightboxSources: pictureSources(variant.high),
      originalSrc: `/images/portfolio/${category.slug}/originals/${originalName}`,
      width: file.width,
      height: file.height,
      aspectRatio: Number((file.width / file.height).toFixed(4)),
      ratio: ratioFor(file.width, file.height),
      orientation: orientationFor(file.width, file.height),
      alt,
      focalPoint: hero ? category.heroFocalPoint : "50% 50%",
      placeholderLabel: alt,
      featured: hero || cover,
      hero,
      cover,
      order: index + 1,
      isVisible: true,
    });
  });

  const hero = images.find((image) => image.hero) ?? images[0];
  const cover = images.find((image) => image.cover) ?? hero;

  report.categories[category.slug] = {
    sourceDir: category.sourceDir,
    filesFound: entries.length,
    validImages: files.length,
    processedImages: images.length,
    omitted,
    duplicates,
    hero: hero
      ? {
          id: hero.id,
          originalFilename: hero.originalFilename,
          focalPoint: hero.focalPoint,
        }
      : null,
    cover: cover
      ? { id: cover.id, originalFilename: cover.originalFilename }
      : null,
  };

  return images;
}

function createVariants(sourcePath, outputDir, id, maxSize, quality) {
  const jpegPath = join(outputDir, `${id}.jpg`);
  magick([
    sourcePath,
    "-auto-orient",
    "-resize",
    `${maxSize}x${maxSize}>`,
    "-strip",
    "-quality",
    String(quality),
    jpegPath,
  ]);

  const variants = {
    jpeg: { src: publicPath(jpegPath), width: maxSize },
  };

  if (webpSupported) {
    const webpPath = join(outputDir, `${id}.webp`);
    magick([
      sourcePath,
      "-auto-orient",
      "-resize",
      `${maxSize}x${maxSize}>`,
      "-strip",
      "-quality",
      String(quality),
      webpPath,
    ]);
    variants.webp = { src: publicPath(webpPath), width: maxSize };
  }

  if (avifSupported) {
    const avifPath = join(outputDir, `${id}.avif`);
    magick([
      sourcePath,
      "-auto-orient",
      "-resize",
      `${maxSize}x${maxSize}>`,
      "-strip",
      "-quality",
      String(Math.min(quality, 84)),
      avifPath,
    ]);
    variants.avif = { src: publicPath(avifPath), width: maxSize };
  }

  return variants;
}

function writeManifest(data) {
  const serialized = JSON.stringify(data, null, 2).replaceAll(
    '"__undefined__"',
    "undefined",
  );
  writeFileSync(
    MANIFEST_PATH,
    `import type { PortfolioImage } from "./portfolio";\n\nexport const generatedPortfolioImages = ${serialized} satisfies Record<string, PortfolioImage[]>;\n`,
  );
}

function identify(file) {
  const output = magick(["identify", "-format", "%w %h", file]);
  const [width, height] = output.trim().split(/\s+/).map(Number);
  if (!width || !height) throw new Error("Invalid image dimensions");
  return { width, height };
}

function magick(args) {
  return execFileSync(imageMagick, args, {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function supportsFormat(format) {
  try {
    const output = magick(["-list", "format"]);
    return new RegExp(`^\\s*${format}\\*?\\s`, "m").test(output);
  } catch {
    return false;
  }
}

function findImageMagick() {
  try {
    execFileSync("magick", ["-version"], { stdio: "ignore" });
    return "magick";
  } catch {
    throw new Error(
      "ImageMagick `magick` is required to import portfolio images.",
    );
  }
}

function sha256(file) {
  return createHash("sha256").update(readFileSync(file)).digest("hex");
}

function publicPath(path) {
  return path.replace(join(ROOT, "public"), "").split("\\").join("/");
}

function srcSet(variants) {
  return [variants.jpeg, variants.webp, variants.avif]
    .filter(Boolean)
    .map((variant) => `${variant.src} ${variant.width}w`)
    .join(", ");
}

function pictureSources(variants) {
  return [
    variants.avif && { type: "image/avif", srcSet: variants.avif.src },
    variants.webp && { type: "image/webp", srcSet: variants.webp.src },
  ].filter(Boolean);
}

function orientationFor(width, height) {
  if (width === height) return "square";
  return width > height ? "horizontal" : "vertical";
}

function ratioFor(width, height) {
  const ratio = width / height;
  if (ratio > 1.55) return "16:9";
  if (ratio > 1.12) return "3:2";
  if (ratio > 0.9) return "1:1";
  return "4:5";
}

function altFor(category, originalFilename) {
  if (category.slug !== "marcas") return category.alt;

  const name = originalFilename.toLowerCase();

  if (/^\d+\.jpe?g$/.test(name)) {
    return "Fotografía comercial de un equipo en un espacio de marca.";
  }
  if (name.includes("bola roja")) {
    return "Fotografía de bebida realizada para comunicación comercial.";
  }
  if (name.includes("cerveza")) {
    return "Fotografía comercial de bebidas y producto para marca.";
  }
  if (name.includes("chimichurri")) {
    return "Fotografía gastronómica de producto realizada por AYACX Photography.";
  }
  if (name.startsWith("dsc030")) {
    return "Fotografía gastronómica de producto en plato realizada por AYACX Photography.";
  }
  if (name.includes("lume")) {
    return "Fotografía comercial de plato y comunicación de marca.";
  }
  if (name.includes("plato")) {
    return "Fotografía gastronómica de plato realizada por AYACX Photography.";
  }

  return category.alt;
}
