import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const staticOutput = join(root, ".output", "public");
const serverEntry = join(root, ".output", "server", "index.mjs");
const dist = join(root, "dist");
const indexHtml = join(dist, "index.html");
const notFoundHtml = join(dist, "404.html");
const pages = [
  "/",
  "/portafolio",
  "/portafolio/retratos",
  "/portafolio/eventos",
  "/portafolio/marcas",
  "/portafolio/contenido-para-redes",
  "/servicios",
  "/sobre-mi",
  "/contacto",
];

if (!existsSync(staticOutput)) {
  throw new Error(
    "No existe .output/public. Ejecuta vite build antes de preparar GitHub Pages.",
  );
}

if (!existsSync(serverEntry)) {
  throw new Error(
    "No existe .output/server/index.mjs. No se pueden prerenderizar rutas.",
  );
}

rmSync(dist, { recursive: true, force: true });
cpSync(staticOutput, dist, { recursive: true });

const server = (await import(serverEntry)).default;
const context = {
  waitUntil() {},
  passThroughOnException() {},
};

async function render(path, allowedStatuses = [200]) {
  const response = await server.fetch(
    new Request(`https://ayacxph.com${path}`),
    {},
    context,
  );

  if (!allowedStatuses.includes(response.status)) {
    throw new Error(
      `No se pudo prerenderizar ${path}: HTTP ${response.status}`,
    );
  }

  return response.text();
}

for (const path of pages) {
  const pageDir = path === "/" ? dist : join(dist, path.slice(1));
  mkdirSync(pageDir, { recursive: true });
  writeFileSync(join(pageDir, "index.html"), await render(path));
}

if (!existsSync(indexHtml)) {
  throw new Error(
    "No existe dist/index.html. No se puede crear el fallback para GitHub Pages.",
  );
}

writeFileSync(notFoundHtml, await render("/__github_pages_404__", [404]));
writeFileSync(join(dist, ".nojekyll"), "");

const requiredFiles = [
  "CNAME",
  "robots.txt",
  "sitemap.xml",
  "favicon.ico",
  "manifest.webmanifest",
  "social/ayacx-og.jpg",
];

for (const file of requiredFiles) {
  const target = join(dist, file);
  if (!existsSync(target)) {
    throw new Error(`Falta ${file} en dist después del build.`);
  }
}

console.log("GitHub Pages artifact prepared in dist/");
