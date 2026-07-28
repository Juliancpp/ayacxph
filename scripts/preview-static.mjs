import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const host = process.env.HOST ?? "0.0.0.0";
const port = Number(process.env.PORT ?? 4173);

const contentTypes = {
  ".avif": "image/avif",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
  ".xml": "application/xml; charset=utf-8",
};

function resolveFile(pathname) {
  const decoded = decodeURIComponent(pathname);
  const normalized = normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const candidate = join(dist, normalized);

  if (existsSync(candidate) && statSync(candidate).isFile()) {
    return { file: candidate, statusCode: 200 };
  }

  const indexCandidate = join(candidate, "index.html");
  if (existsSync(indexCandidate))
    return { file: indexCandidate, statusCode: 200 };

  return { file: join(dist, "404.html"), statusCode: 404 };
}

const server = createServer((req, res) => {
  const url = new URL(req.url ?? "/", `http://${host}:${port}`);
  const { file, statusCode } = resolveFile(url.pathname);
  const ext = extname(file);

  res.statusCode = statusCode;
  res.setHeader(
    "Content-Type",
    contentTypes[ext] ?? "application/octet-stream",
  );
  if (file.includes("/assets/")) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  }

  createReadStream(file)
    .on("error", () => {
      res.writeHead(500);
      res.end("Static preview error");
    })
    .pipe(res);
});

server.listen(port, host, () => {
  console.log(`Static preview ready at http://${host}:${port}`);
});
