globalThis.__nitro_main__ = import.meta.url;
import { n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"a0-CKGXSIe7TSsqDTmGm/nY1t/o5d0\"",
		"mtime": "2026-07-28T07:07:40.255Z",
		"size": 160,
		"path": "../public/robots.txt"
	},
	"/assets/FinalCta-BxVDaDFX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"7e0-e9DOzdOl9ixrXFzZofOQ9IxtTb4\"",
		"mtime": "2026-07-28T07:07:39.666Z",
		"size": 2016,
		"path": "../public/assets/FinalCta-BxVDaDFX.js"
	},
	"/assets/ImagePlaceholder-CjpNePqa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"75e-+e3Df7PVYkT7Ol2eWNAh0G4huQM\"",
		"mtime": "2026-07-28T07:07:39.666Z",
		"size": 1886,
		"path": "../public/assets/ImagePlaceholder-CjpNePqa.js"
	},
	"/assets/PortfolioCategoryMosaic-BVBb4YvC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ba2-we15H3ikP4nFxZkhE+dNrJZDVXI\"",
		"mtime": "2026-07-28T07:07:39.666Z",
		"size": 2978,
		"path": "../public/assets/PortfolioCategoryMosaic-BVBb4YvC.js"
	},
	"/assets/PortfolioCategoryPage-_fxAn6QC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b83-OF7+FbepCbbjHhQAQvSocl6eCdM\"",
		"mtime": "2026-07-28T07:07:39.666Z",
		"size": 11139,
		"path": "../public/assets/PortfolioCategoryPage-_fxAn6QC.js"
	},
	"/assets/PortfolioImage-CLBb4ZHd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2d6-iWK++7SidVCG4nEBSF6ucg78El4\"",
		"mtime": "2026-07-28T07:07:39.666Z",
		"size": 726,
		"path": "../public/assets/PortfolioImage-CLBb4ZHd.js"
	},
	"/assets/ProcessSection-CEG_Qdga.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"490-IywGdufUvXgq09Ng1oYxDVet98s\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 1168,
		"path": "../public/assets/ProcessSection-CEG_Qdga.js"
	},
	"/assets/Reveal-C8CfLtzj.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"26e-d4ZE0hhZOm6FyTIiciTa5HSZAIw\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 622,
		"path": "../public/assets/Reveal-C8CfLtzj.js"
	},
	"/assets/SiteLayout-BG1bCVod.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"978d-Co01UVFmwbAtDvQW+Au6TxvB4zY\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 38797,
		"path": "../public/assets/SiteLayout-BG1bCVod.js"
	},
	"/assets/contacto-CablKZH8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"218a-uvszAa9WD3aIvcy2hXAsd9n5QVA\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 8586,
		"path": "../public/assets/contacto-CablKZH8.js"
	},
	"/assets/portafolio.contenido-para-redes-BNJGrJLP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-Ef+pjv3Ef4X8bsxX1usLhoZ7P9M\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 247,
		"path": "../public/assets/portafolio.contenido-para-redes-BNJGrJLP.js"
	},
	"/assets/portafolio.eventos-Yg2ff9Xd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-qtteurvVaL3ITyc8mV2vMFOOTzU\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 247,
		"path": "../public/assets/portafolio.eventos-Yg2ff9Xd.js"
	},
	"/assets/portafolio.index-9NvEwGKm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"41c-BjqsTtKnCb2EVaEYO2jL1QA3tV8\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 1052,
		"path": "../public/assets/portafolio.index-9NvEwGKm.js"
	},
	"/assets/portafolio.marcas-DvcOZmKz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f7-Jqd9GzPoRazRngQkyArZjzHrOxY\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 247,
		"path": "../public/assets/portafolio.marcas-DvcOZmKz.js"
	},
	"/assets/portafolio.retratos-CpszfWdu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f2-qab9m8uquSDAWB0lBW8zVVd9RPs\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 242,
		"path": "../public/assets/portafolio.retratos-CpszfWdu.js"
	},
	"/assets/portfolio.generated-eE-Qzw66.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1594c-ZmiG+UQiI0r/lD+aJjttlhLyoV0\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 88396,
		"path": "../public/assets/portfolio.generated-eE-Qzw66.js"
	},
	"/assets/index-2DSkNC9I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4e1e4-KUxtyizP65R2uc+7bKGWsbnV1DM\"",
		"mtime": "2026-07-28T07:07:39.665Z",
		"size": 319972,
		"path": "../public/assets/index-2DSkNC9I.js"
	},
	"/assets/routes-DV0EAOwk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d1e-NUYLmHFEv56hSFSjs3u4yFZL3j4\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 7454,
		"path": "../public/assets/routes-DV0EAOwk.js"
	},
	"/assets/servicios-B1sr3NNt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38e8-o6cjtkK0w0dq7VecoP4BeL4Yi4A\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 14568,
		"path": "../public/assets/servicios-B1sr3NNt.js"
	},
	"/assets/sobre-mi-DkFz1ev7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ed5-8hB1hd91BFeNJXNvPS12h6XpqB8\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 3797,
		"path": "../public/assets/sobre-mi-DkFz1ev7.js"
	},
	"/assets/site-CNDpoxmt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a475-60dFwHsAkTg/xTmALmSKS41rEzw\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 42101,
		"path": "../public/assets/site-CNDpoxmt.js"
	},
	"/assets/styles-HhQ2G_Ko.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"16fb0-EMlo8hVgNvQJRqyNsKuILzB+wPw\"",
		"mtime": "2026-07-28T07:07:39.667Z",
		"size": 94128,
		"path": "../public/assets/styles-HhQ2G_Ko.css"
	},
	"/icons/favicon-16x16.png": {
		"type": "image/png",
		"etag": "\"347-AZQVsyviCaGVC8fde15FlBXvOmQ\"",
		"mtime": "2026-07-28T07:07:40.253Z",
		"size": 839,
		"path": "../public/icons/favicon-16x16.png"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"33ee-S19L8fCwB7nPP1CXgI4Sj15xHE0\"",
		"mtime": "2026-07-28T07:07:40.255Z",
		"size": 13294,
		"path": "../public/favicon.ico"
	},
	"/icons/apple-touch-icon.png": {
		"type": "image/png",
		"etag": "\"28a9-cJP4SQWfXrXReWYKsEG5NZnKl5s\"",
		"mtime": "2026-07-28T07:07:40.253Z",
		"size": 10409,
		"path": "../public/icons/apple-touch-icon.png"
	},
	"/icons/favicon-32x32.png": {
		"type": "image/png",
		"etag": "\"65a-ly2XojxK0/MyEIR6fMw7Rm39Uxc\"",
		"mtime": "2026-07-28T07:07:40.254Z",
		"size": 1626,
		"path": "../public/icons/favicon-32x32.png"
	},
	"/branding/ayacx/ayacx-monogram-black.png": {
		"type": "image/png",
		"etag": "\"1d23f-51BctBD0gPkrpuLImpouOhRVt0s\"",
		"mtime": "2026-07-28T07:07:40.255Z",
		"size": 119359,
		"path": "../public/branding/ayacx/ayacx-monogram-black.png"
	},
	"/branding/ayacx/ayacx-logo-black.png": {
		"type": "image/png",
		"etag": "\"4c642-getgNvL6s6/ER5KDnmlmtLniXQo\"",
		"mtime": "2026-07-28T07:07:40.254Z",
		"size": 312898,
		"path": "../public/branding/ayacx/ayacx-logo-black.png"
	},
	"/branding/ayacx/ayacx-monogram-white.png": {
		"type": "image/png",
		"etag": "\"23246-rWHRhaJXj8MSZAho7S+goEmUOqU\"",
		"mtime": "2026-07-28T07:07:40.255Z",
		"size": 143942,
		"path": "../public/branding/ayacx/ayacx-monogram-white.png"
	},
	"/branding/ayacx/ayacx-logo-white.png": {
		"type": "image/png",
		"etag": "\"5049f-mZXkuHx267ij6/jdr3Jrkl9LdVw\"",
		"mtime": "2026-07-28T07:07:40.255Z",
		"size": 328863,
		"path": "../public/branding/ayacx/ayacx-logo-white.png"
	},
	"/images/portfolio/eventos/high/evento-003.webp": {
		"type": "image/webp",
		"etag": "\"6bbee-FNYgjkTLPkdTTfsVseHKW50Kj1Q\"",
		"mtime": "2026-07-28T07:07:40.264Z",
		"size": 441326,
		"path": "../public/images/portfolio/eventos/high/evento-003.webp"
	},
	"/images/portfolio/eventos/high/evento-004.webp": {
		"type": "image/webp",
		"etag": "\"4ba32-njiZOi9mbdOg5yQ0xj44FC5P5og\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 309810,
		"path": "../public/images/portfolio/eventos/high/evento-004.webp"
	},
	"/images/portfolio/eventos/high/evento-001.webp": {
		"type": "image/webp",
		"etag": "\"87794-RR7cxOcI0/YcQY7uyA1ua1ZBZDw\"",
		"mtime": "2026-07-28T07:07:40.256Z",
		"size": 554900,
		"path": "../public/images/portfolio/eventos/high/evento-001.webp"
	},
	"/images/portfolio/eventos/high/evento-002.webp": {
		"type": "image/webp",
		"etag": "\"8d958-5SJvehEZ/z1zuORAtgUMeAbtV04\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 579928,
		"path": "../public/images/portfolio/eventos/high/evento-002.webp"
	},
	"/images/portfolio/eventos/high/evento-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"f681a-sXlcEcZ3zTDqACa3ZY7RgTdGvwA\"",
		"mtime": "2026-07-28T07:07:40.264Z",
		"size": 1009690,
		"path": "../public/images/portfolio/eventos/high/evento-001.jpg"
	},
	"/images/portfolio/eventos/high/evento-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"cd162-YhCxjYGH6EYy3hOgSiltpeDY5HE\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 840034,
		"path": "../public/images/portfolio/eventos/high/evento-003.jpg"
	},
	"/images/portfolio/eventos/high/evento-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"9ec13-1XqRTXNFy4Fj/GXrr1Nh7EYhHyU\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 650259,
		"path": "../public/images/portfolio/eventos/high/evento-004.jpg"
	},
	"/images/portfolio/eventos/high/evento-006.webp": {
		"type": "image/webp",
		"etag": "\"c458c-AjyiDbkRl+yOmpfrUgH3oziyyMs\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 804236,
		"path": "../public/images/portfolio/eventos/high/evento-006.webp"
	},
	"/images/portfolio/eventos/high/evento-005.webp": {
		"type": "image/webp",
		"etag": "\"dcc20-U7XQopIlhiem6dE/+PZm6bjJSFc\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 904224,
		"path": "../public/images/portfolio/eventos/high/evento-005.webp"
	},
	"/images/portfolio/eventos/high/evento-007.webp": {
		"type": "image/webp",
		"etag": "\"d1ed6-LM6f8e4hHuGcDWpd8HmEguQK+sk\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 859862,
		"path": "../public/images/portfolio/eventos/high/evento-007.webp"
	},
	"/images/portfolio/eventos/high/evento-008.webp": {
		"type": "image/webp",
		"etag": "\"a9828-cgSKlrMr20pQdBBOnTpvOkiL6sQ\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 694312,
		"path": "../public/images/portfolio/eventos/high/evento-008.webp"
	},
	"/images/portfolio/eventos/high/evento-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"100f02-6H2sfmrQ08wja0cg3qJIoqTe3yE\"",
		"mtime": "2026-07-28T07:07:40.264Z",
		"size": 1052418,
		"path": "../public/images/portfolio/eventos/high/evento-002.jpg"
	},
	"/images/portfolio/eventos/high/evento-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"10f754-1pKrXMXEi+bdD33yZkbuAO3xu98\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 1111892,
		"path": "../public/images/portfolio/eventos/high/evento-007.jpg"
	},
	"/images/portfolio/eventos/high/evento-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"108801-MZLgiWpXNUmEvUq5FxzYqLKCq58\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 1083393,
		"path": "../public/images/portfolio/eventos/high/evento-006.jpg"
	},
	"/images/portfolio/eventos/high/evento-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"125b06-sMY2qX3iEccDg2zAJRVFjQdLgQk\"",
		"mtime": "2026-07-28T07:07:40.264Z",
		"size": 1202950,
		"path": "../public/images/portfolio/eventos/high/evento-005.jpg"
	},
	"/images/portfolio/eventos/high/evento-009.webp": {
		"type": "image/webp",
		"etag": "\"bf004-Uip7DVrxDFXT3wKlZzpEx4HvDAI\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 782340,
		"path": "../public/images/portfolio/eventos/high/evento-009.webp"
	},
	"/images/portfolio/eventos/high/evento-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"1156c5-k6e3EYIkm1YrG8jyQC2gk3x7e/A\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 1136325,
		"path": "../public/images/portfolio/eventos/high/evento-008.jpg"
	},
	"/images/portfolio/eventos/high/evento-010.webp": {
		"type": "image/webp",
		"etag": "\"94638-PszrAYeSJsq5j8vGqno/LoMnZpA\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 607800,
		"path": "../public/images/portfolio/eventos/high/evento-010.webp"
	},
	"/images/portfolio/eventos/medium/evento-001.webp": {
		"type": "image/webp",
		"etag": "\"36e0a-Qvk2hxaqujPJIdX4jI9AlyUtuVE\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 224778,
		"path": "../public/images/portfolio/eventos/medium/evento-001.webp"
	},
	"/images/portfolio/eventos/medium/evento-002.webp": {
		"type": "image/webp",
		"etag": "\"39518-3LDpsqM/wZi8SB6Ksh0Mx8UMtMs\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 234776,
		"path": "../public/images/portfolio/eventos/medium/evento-002.webp"
	},
	"/images/portfolio/eventos/high/evento-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"1239a5-jvvK7VcBtf+XHk3HaLaR9cRmNsc\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 1194405,
		"path": "../public/images/portfolio/eventos/high/evento-009.jpg"
	},
	"/images/portfolio/eventos/medium/evento-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"65f2c-DdEQWMD8oZxng/eXLJB4sDD0ylg\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 417580,
		"path": "../public/images/portfolio/eventos/medium/evento-002.jpg"
	},
	"/images/portfolio/eventos/medium/evento-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"60faa-craaDI9JOGVQbVXMFRRjgBiC4uk\"",
		"mtime": "2026-07-28T07:07:40.258Z",
		"size": 397226,
		"path": "../public/images/portfolio/eventos/medium/evento-001.jpg"
	},
	"/images/portfolio/eventos/high/evento-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"103e7c-OopeDGNEPn4lBn7X8Hl+70foJBQ\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 1064572,
		"path": "../public/images/portfolio/eventos/high/evento-010.jpg"
	},
	"/images/portfolio/eventos/medium/evento-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"50093-sqrOoCzsI9CfGwYEQhvKoQ4Un1M\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 327827,
		"path": "../public/images/portfolio/eventos/medium/evento-003.jpg"
	},
	"/images/portfolio/eventos/medium/evento-003.webp": {
		"type": "image/webp",
		"etag": "\"29aa2-Rw9TreW+rqkx+Fzittur5pZ339M\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 170658,
		"path": "../public/images/portfolio/eventos/medium/evento-003.webp"
	},
	"/images/portfolio/eventos/medium/evento-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"3bd96-wxixjwSwxGYbqDwKYMqZZUSpscc\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 245142,
		"path": "../public/images/portfolio/eventos/medium/evento-004.jpg"
	},
	"/images/portfolio/eventos/medium/evento-004.webp": {
		"type": "image/webp",
		"etag": "\"185da-+6VFkPxC7BL4Gnf4ckD7B6OrNeE\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 99802,
		"path": "../public/images/portfolio/eventos/medium/evento-004.webp"
	},
	"/images/portfolio/eventos/medium/evento-005.webp": {
		"type": "image/webp",
		"etag": "\"20b04-6eYn7GLfhWyXb4Jd4ygugmUYj2k\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 133892,
		"path": "../public/images/portfolio/eventos/medium/evento-005.webp"
	},
	"/images/portfolio/eventos/medium/evento-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"47938-UHAdX7tmL62GhtHWxeEMVPUPPvo\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 293176,
		"path": "../public/images/portfolio/eventos/medium/evento-006.jpg"
	},
	"/images/portfolio/eventos/medium/evento-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"503d5-q5Kvd2pEZPzIjvwD3DhxRegwxpg\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 328661,
		"path": "../public/images/portfolio/eventos/medium/evento-005.jpg"
	},
	"/images/portfolio/eventos/medium/evento-006.webp": {
		"type": "image/webp",
		"etag": "\"1d1d8-wmbW7jCbuPPew5rn//wAkVdL7eo\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 119256,
		"path": "../public/images/portfolio/eventos/medium/evento-006.webp"
	},
	"/images/portfolio/eventos/medium/evento-007.webp": {
		"type": "image/webp",
		"etag": "\"1b438-uq9Hz0sL4KnqemXM7yd1QXzCqzo\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 111672,
		"path": "../public/images/portfolio/eventos/medium/evento-007.webp"
	},
	"/images/portfolio/eventos/medium/evento-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"478f8-qUrXv4YME9mYTiuV/knh1M+y3+I\"",
		"mtime": "2026-07-28T07:07:40.265Z",
		"size": 293112,
		"path": "../public/images/portfolio/eventos/medium/evento-007.jpg"
	},
	"/images/portfolio/eventos/medium/evento-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"68231-a3xcyLStzhlzP+O299UqfaL7Cn4\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 426545,
		"path": "../public/images/portfolio/eventos/medium/evento-008.jpg"
	},
	"/images/portfolio/eventos/medium/evento-008.webp": {
		"type": "image/webp",
		"etag": "\"37b4c-FxlQo2zuskReINX+ld8HVZqQObo\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 228172,
		"path": "../public/images/portfolio/eventos/medium/evento-008.webp"
	},
	"/images/portfolio/eventos/medium/evento-009.webp": {
		"type": "image/webp",
		"etag": "\"3901a-NoG5er5eSt0upwruEXs5DAXg4Tg\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 233498,
		"path": "../public/images/portfolio/eventos/medium/evento-009.webp"
	},
	"/images/portfolio/eventos/medium/evento-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"6b41f-eRSZs7yTLtt/YKTX2ic6sTVTzrU\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 439327,
		"path": "../public/images/portfolio/eventos/medium/evento-009.jpg"
	},
	"/images/portfolio/eventos/medium/evento-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"65a39-kLFToG58/U80QrOh2mtN2QwlXNU\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 416313,
		"path": "../public/images/portfolio/eventos/medium/evento-010.jpg"
	},
	"/images/portfolio/eventos/medium/evento-010.webp": {
		"type": "image/webp",
		"etag": "\"36078-0Md9h8zPwC95JJcrdiDyBZYre6g\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 221304,
		"path": "../public/images/portfolio/eventos/medium/evento-010.webp"
	},
	"/images/portfolio/eventos/thumbnails/evento-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"147ba-VLeYJ9JenwkzNq5/Wh7lhJQtxaY\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 83898,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-001.jpg"
	},
	"/images/portfolio/eventos/thumbnails/evento-001.webp": {
		"type": "image/webp",
		"etag": "\"cca6-+0jIuVNCp9qZ2Jo9/P+9SSlmHaQ\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 52390,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-001.webp"
	},
	"/images/portfolio/eventos/thumbnails/evento-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"156cf-0ATCa7XAqPoPG/uAOaehc62dMG8\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 87759,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-002.jpg"
	},
	"/images/portfolio/eventos/thumbnails/evento-002.webp": {
		"type": "image/webp",
		"etag": "\"d87c-SJSNi8yGmzQntSfQsFP5Ht5fBnU\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 55420,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-002.webp"
	},
	"/images/portfolio/eventos/thumbnails/evento-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"10746-wj6r3Q/aQAr50MUgS7D54BWhV5w\"",
		"mtime": "2026-07-28T07:07:40.258Z",
		"size": 67398,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-003.jpg"
	},
	"/images/portfolio/eventos/thumbnails/evento-003.webp": {
		"type": "image/webp",
		"etag": "\"9870-ZL0QPvTZbG8NRYcDVMBhQzfgvAs\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 39024,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-003.webp"
	},
	"/images/portfolio/eventos/thumbnails/evento-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"d880-3M/8gU2QFqtf2w7NAT+SMAfl4T8\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 55424,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-004.jpg"
	},
	"/images/portfolio/eventos/thumbnails/evento-004.webp": {
		"type": "image/webp",
		"etag": "\"63ea-/Cw4B3agktP7oDwxxBXqgYec5og\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 25578,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-004.webp"
	},
	"/images/portfolio/eventos/thumbnails/evento-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"e7bb-IeOozFEPsAF+RvXrBE3yPmTbjk0\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 59323,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-005.jpg"
	},
	"/images/portfolio/eventos/thumbnails/evento-005.webp": {
		"type": "image/webp",
		"etag": "\"6888-8+aFPcHiX/kofOpcxoNstSYZyDc\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 26760,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-005.webp"
	},
	"/images/portfolio/eventos/thumbnails/evento-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"cf88-WD//IKxmrz+mtWlArH372JQNsAI\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 53128,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-006.jpg"
	},
	"/images/portfolio/eventos/thumbnails/evento-006.webp": {
		"type": "image/webp",
		"etag": "\"5d9a-Vpm0LzxROQZwpEmGXbLY3gBmSOY\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 23962,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-006.webp"
	},
	"/images/portfolio/eventos/thumbnails/evento-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"ca47-HjgRiB/IBeS+heNIiovaDUbAjDI\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 51783,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-007.jpg"
	},
	"/images/portfolio/eventos/thumbnails/evento-007.webp": {
		"type": "image/webp",
		"etag": "\"5788-6T6Tj7umboyFJ3upzP4QDK9fHLw\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 22408,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-007.webp"
	},
	"/images/portfolio/eventos/thumbnails/evento-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"147bf-HExh32xkGL9iVjBkSNbthiiKMT4\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 83903,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-008.jpg"
	},
	"/images/portfolio/eventos/thumbnails/evento-008.webp": {
		"type": "image/webp",
		"etag": "\"be92-mKuDDYegZ68R2DgQcKPcylE4CvI\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 48786,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-008.webp"
	},
	"/images/portfolio/eventos/thumbnails/evento-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"14a22-rlmH6H717guCdMu89Z2KjV8vf7s\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 84514,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-009.jpg"
	},
	"/images/portfolio/eventos/thumbnails/evento-009.webp": {
		"type": "image/webp",
		"etag": "\"c520-iZvb9QeYIO52+wdMvSXE2DoxNOc\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 50464,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-009.webp"
	},
	"/images/portfolio/eventos/originals/evento-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f7f6e-oZfy/wfMJUWzSCWWXJqVhcxjPXg\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 3112814,
		"path": "../public/images/portfolio/eventos/originals/evento-006.jpg"
	},
	"/images/portfolio/eventos/thumbnails/evento-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"150d0-LNgaAGJRhm8Ay4K2mdRxip+NW+Y\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 86224,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-010.jpg"
	},
	"/images/portfolio/eventos/thumbnails/evento-010.webp": {
		"type": "image/webp",
		"etag": "\"c814-L5vIy9EHutaT5eJOO3Jb3ivIzEg\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 51220,
		"path": "../public/images/portfolio/eventos/thumbnails/evento-010.webp"
	},
	"/images/portfolio/retratos/high/retrato-001.webp": {
		"type": "image/webp",
		"etag": "\"7ab14-YErE+CltzJrslIJhNZMuPinorZo\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 502548,
		"path": "../public/images/portfolio/retratos/high/retrato-001.webp"
	},
	"/images/portfolio/retratos/high/retrato-002.webp": {
		"type": "image/webp",
		"etag": "\"79870-zpzCwiDFL4QLVNGI1tGU0gjD+8s\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 497776,
		"path": "../public/images/portfolio/retratos/high/retrato-002.webp"
	},
	"/images/portfolio/retratos/high/retrato-003.webp": {
		"type": "image/webp",
		"etag": "\"6cbec-GN3Q89kLgdxvA+ixrbZSfG71t6E\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 445420,
		"path": "../public/images/portfolio/retratos/high/retrato-003.webp"
	},
	"/images/portfolio/retratos/high/retrato-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"78db8-Ex26x4iE3YYpc6cWrFLqt3oJWNo\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 495032,
		"path": "../public/images/portfolio/retratos/high/retrato-004.jpg"
	},
	"/images/portfolio/retratos/high/retrato-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"e43f7-l+84bzz1cxZrFo0LokJ2FCMtMLc\"",
		"mtime": "2026-07-28T07:07:40.262Z",
		"size": 934903,
		"path": "../public/images/portfolio/retratos/high/retrato-001.jpg"
	},
	"/images/portfolio/retratos/high/retrato-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"e60a1-rBsmFH5saLvyi93r+fIE9XcDNJ8\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 942241,
		"path": "../public/images/portfolio/retratos/high/retrato-002.jpg"
	},
	"/images/portfolio/retratos/high/retrato-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"c7e11-v4cda5BpMpA2FSjw5Lvm70D1LkQ\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 818705,
		"path": "../public/images/portfolio/retratos/high/retrato-003.jpg"
	},
	"/images/portfolio/retratos/high/retrato-004.webp": {
		"type": "image/webp",
		"etag": "\"4451e-8aFIpufryo5sRGUCw4v0S5msr84\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 279838,
		"path": "../public/images/portfolio/retratos/high/retrato-004.webp"
	},
	"/images/portfolio/retratos/high/retrato-005.webp": {
		"type": "image/webp",
		"etag": "\"63f98-fa19BVGrLxpep55mSe9960dv39U\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 409496,
		"path": "../public/images/portfolio/retratos/high/retrato-005.webp"
	},
	"/images/portfolio/retratos/high/retrato-006.webp": {
		"type": "image/webp",
		"etag": "\"63eec-g5etUMih2wKTL0Qb6QSAMSD5b4Q\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 409324,
		"path": "../public/images/portfolio/retratos/high/retrato-006.webp"
	},
	"/images/portfolio/retratos/high/retrato-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"9addf-T81nMvactbL2loMbxcff+aNv8GM\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 634335,
		"path": "../public/images/portfolio/retratos/high/retrato-005.jpg"
	},
	"/images/portfolio/retratos/high/retrato-007.webp": {
		"type": "image/webp",
		"etag": "\"6a33e-qXZpqH7BcaNmHpL27yFghNce7TQ\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 435006,
		"path": "../public/images/portfolio/retratos/high/retrato-007.webp"
	},
	"/images/portfolio/retratos/high/retrato-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"9af0b-myEYSLP4yHM5R9KyXMW38JcjRb4\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 634635,
		"path": "../public/images/portfolio/retratos/high/retrato-006.jpg"
	},
	"/images/portfolio/retratos/high/retrato-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"d45f1-WtLywD2nTT7Jcw8zvOiBask+ClU\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 869873,
		"path": "../public/images/portfolio/retratos/high/retrato-007.jpg"
	},
	"/images/portfolio/retratos/high/retrato-008.webp": {
		"type": "image/webp",
		"etag": "\"4e340-xd1blBDwPgnFOsuM2l1BnFd0gAM\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 320320,
		"path": "../public/images/portfolio/retratos/high/retrato-008.webp"
	},
	"/images/portfolio/retratos/high/retrato-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"9c46e-k2JWF/wabTGPNuCqfAM0Htsf8o4\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 640110,
		"path": "../public/images/portfolio/retratos/high/retrato-008.jpg"
	},
	"/images/portfolio/retratos/high/retrato-010.webp": {
		"type": "image/webp",
		"etag": "\"4f9ea-+FAVMnpbdL2X27JmimL7oucQUQg\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 326122,
		"path": "../public/images/portfolio/retratos/high/retrato-010.webp"
	},
	"/images/portfolio/retratos/high/retrato-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"e625c-ARyTCDVgBFzfmJzxQ2xa85zp5o0\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 942684,
		"path": "../public/images/portfolio/retratos/high/retrato-009.jpg"
	},
	"/images/portfolio/retratos/high/retrato-009.webp": {
		"type": "image/webp",
		"etag": "\"85f78-5cfshONgNzQqYLt3WSSK3vlQKhw\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 548728,
		"path": "../public/images/portfolio/retratos/high/retrato-009.webp"
	},
	"/images/portfolio/retratos/high/retrato-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"9dd82-P8K6Z+q1ICiCA0+aE6ggmZQkgYw\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 646530,
		"path": "../public/images/portfolio/retratos/high/retrato-010.jpg"
	},
	"/images/portfolio/retratos/high/retrato-011.webp": {
		"type": "image/webp",
		"etag": "\"542aa-izvVCbmjZXsJo9kaCgeLffVWKUk\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 344746,
		"path": "../public/images/portfolio/retratos/high/retrato-011.webp"
	},
	"/images/portfolio/retratos/high/retrato-011.jpg": {
		"type": "image/jpeg",
		"etag": "\"a4060-1pZI1FzKml+4VSNEGDUGsjgIBy4\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 671840,
		"path": "../public/images/portfolio/retratos/high/retrato-011.jpg"
	},
	"/images/portfolio/retratos/high/retrato-012.webp": {
		"type": "image/webp",
		"etag": "\"6ddb4-M+R4DQQ3Z+ZUC9KBwKaAK6gqQ3U\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 449972,
		"path": "../public/images/portfolio/retratos/high/retrato-012.webp"
	},
	"/images/portfolio/retratos/high/retrato-013.webp": {
		"type": "image/webp",
		"etag": "\"5a666-7paOJpOtm0qKIniS403L384VTYQ\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 370278,
		"path": "../public/images/portfolio/retratos/high/retrato-013.webp"
	},
	"/images/portfolio/retratos/high/retrato-012.jpg": {
		"type": "image/jpeg",
		"etag": "\"ce2d0-gYWduwPpUCrcIaECGL2CtJ8XXbc\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 844496,
		"path": "../public/images/portfolio/retratos/high/retrato-012.jpg"
	},
	"/images/portfolio/retratos/high/retrato-014.webp": {
		"type": "image/webp",
		"etag": "\"599da-rfQ0EyLv0Dv4ncocKhHciqiFaXE\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 367066,
		"path": "../public/images/portfolio/retratos/high/retrato-014.webp"
	},
	"/images/portfolio/retratos/high/retrato-013.jpg": {
		"type": "image/jpeg",
		"etag": "\"ac474-92RpA2wek6A4Uzz4ixRQ9wgDqg8\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 705652,
		"path": "../public/images/portfolio/retratos/high/retrato-013.jpg"
	},
	"/images/portfolio/retratos/high/retrato-014.jpg": {
		"type": "image/jpeg",
		"etag": "\"ad649-hovzdBV9i03PmYaRe6UOkJ6Feac\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 710217,
		"path": "../public/images/portfolio/retratos/high/retrato-014.jpg"
	},
	"/images/portfolio/retratos/high/retrato-015.webp": {
		"type": "image/webp",
		"etag": "\"51fe2-c4/fUTc43nOx/5PcPZ1ZehF4WnE\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 335842,
		"path": "../public/images/portfolio/retratos/high/retrato-015.webp"
	},
	"/images/portfolio/retratos/high/retrato-015.jpg": {
		"type": "image/jpeg",
		"etag": "\"a12d8-wIh3U/iP9gcFkvLEkYqmQ7oKlpM\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 660184,
		"path": "../public/images/portfolio/retratos/high/retrato-015.jpg"
	},
	"/images/portfolio/retratos/high/retrato-016.webp": {
		"type": "image/webp",
		"etag": "\"5f1e0-zgUWWtRRQa741w6SgZssiSBXEMA\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 389600,
		"path": "../public/images/portfolio/retratos/high/retrato-016.webp"
	},
	"/images/portfolio/eventos/originals/evento-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"7f59e7-Mj9g/2BEjNSpD1BOUrGH7YJV/48\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 8346087,
		"path": "../public/images/portfolio/eventos/originals/evento-007.jpg"
	},
	"/images/portfolio/retratos/high/retrato-016.jpg": {
		"type": "image/jpeg",
		"etag": "\"bed00-jqLXOjxcY+DnqFvRUSmj1cUrXuI\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 781568,
		"path": "../public/images/portfolio/retratos/high/retrato-016.jpg"
	},
	"/images/portfolio/eventos/originals/evento-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"83213e-wKuHW2S1nvqr593CGtY5Uujycx4\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 8593726,
		"path": "../public/images/portfolio/eventos/originals/evento-005.jpg"
	},
	"/images/portfolio/retratos/high/retrato-017.webp": {
		"type": "image/webp",
		"etag": "\"a6c92-nodvlUEUS9+25nOz3TOkWpIfxoY\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 683154,
		"path": "../public/images/portfolio/retratos/high/retrato-017.webp"
	},
	"/images/portfolio/retratos/high/retrato-019.webp": {
		"type": "image/webp",
		"etag": "\"3d348-D18FI8AGicdOLxJWK8ZhJF1qrxs\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 250696,
		"path": "../public/images/portfolio/retratos/high/retrato-019.webp"
	},
	"/images/portfolio/retratos/high/retrato-018.webp": {
		"type": "image/webp",
		"etag": "\"9ecde-mym59DpnpjB2gKS1HQaMVFEB1jU\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 650462,
		"path": "../public/images/portfolio/retratos/high/retrato-018.webp"
	},
	"/images/portfolio/retratos/high/retrato-020.webp": {
		"type": "image/webp",
		"etag": "\"40e3a-fXOhAqxjftgIpFPoh6ZvHdAbmiY\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 265786,
		"path": "../public/images/portfolio/retratos/high/retrato-020.webp"
	},
	"/images/portfolio/retratos/high/retrato-017.jpg": {
		"type": "image/jpeg",
		"etag": "\"11b9a8-QYyRcFq6Uqsf+HK5ywuMENOeJ8w\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 1161640,
		"path": "../public/images/portfolio/retratos/high/retrato-017.jpg"
	},
	"/images/portfolio/retratos/high/retrato-019.jpg": {
		"type": "image/jpeg",
		"etag": "\"91034-1b+YvF3u1XNFNx5Sj2runmL0Az8\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 593972,
		"path": "../public/images/portfolio/retratos/high/retrato-019.jpg"
	},
	"/images/portfolio/retratos/high/retrato-021.webp": {
		"type": "image/webp",
		"etag": "\"63ca6-VofcKA/7iRwh1U/8o94qu3jyO8I\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 408742,
		"path": "../public/images/portfolio/retratos/high/retrato-021.webp"
	},
	"/images/portfolio/retratos/high/retrato-020.jpg": {
		"type": "image/jpeg",
		"etag": "\"92267-Bb+OHhLsfWFH59mjMIydNX3g/MA\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 598631,
		"path": "../public/images/portfolio/retratos/high/retrato-020.jpg"
	},
	"/images/portfolio/retratos/high/retrato-018.jpg": {
		"type": "image/jpeg",
		"etag": "\"10e70f-pSIw7G1eFkSK4T7nVo8C1s71MIE\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 1107727,
		"path": "../public/images/portfolio/retratos/high/retrato-018.jpg"
	},
	"/images/portfolio/retratos/high/retrato-021.jpg": {
		"type": "image/jpeg",
		"etag": "\"c8119-ZKIRn8sYYTO3iOYGudAL95b+8D8\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 819481,
		"path": "../public/images/portfolio/retratos/high/retrato-021.jpg"
	},
	"/images/portfolio/retratos/high/retrato-022.jpg": {
		"type": "image/jpeg",
		"etag": "\"efade-LSiDxWhbI0kr2AZTSOFV9VKJtJ0\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 981726,
		"path": "../public/images/portfolio/retratos/high/retrato-022.jpg"
	},
	"/images/portfolio/retratos/high/retrato-022.webp": {
		"type": "image/webp",
		"etag": "\"8fe06-MsA7PtyWgaEIh8nJYSiUkExHuMM\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 589318,
		"path": "../public/images/portfolio/retratos/high/retrato-022.webp"
	},
	"/images/portfolio/retratos/high/retrato-023.jpg": {
		"type": "image/jpeg",
		"etag": "\"db2ce-3Uu1svl6Bp0DcS7ynbqXk5mJ+bQ\"",
		"mtime": "2026-07-28T07:07:40.283Z",
		"size": 897742,
		"path": "../public/images/portfolio/retratos/high/retrato-023.jpg"
	},
	"/images/portfolio/retratos/high/retrato-023.webp": {
		"type": "image/webp",
		"etag": "\"81aae-7TzUF3R3gF4NcfuxQy5WNgZNphM\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 531118,
		"path": "../public/images/portfolio/retratos/high/retrato-023.webp"
	},
	"/images/portfolio/eventos/originals/evento-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"ad9564-zXnVht6JPoqtDivoQq9Wtcm8ItY\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 11375972,
		"path": "../public/images/portfolio/eventos/originals/evento-003.jpg"
	},
	"/images/portfolio/eventos/originals/evento-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"ac9b72-lOk3vWKjDIbTkk+nJThwoVIV/TA\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 11311986,
		"path": "../public/images/portfolio/eventos/originals/evento-002.jpg"
	},
	"/images/portfolio/eventos/originals/evento-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"aca0e7-NXzGQxjCEDfcj8IxwLdGxgBs/8w\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 11313383,
		"path": "../public/images/portfolio/eventos/originals/evento-004.jpg"
	},
	"/images/portfolio/retratos/high/retrato-024.jpg": {
		"type": "image/jpeg",
		"etag": "\"f7633-UVgIVYoHOed3NWpgRA0pYkTF+Fs\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 1013299,
		"path": "../public/images/portfolio/retratos/high/retrato-024.jpg"
	},
	"/images/portfolio/retratos/high/retrato-024.webp": {
		"type": "image/webp",
		"etag": "\"95b84-RTW1sxD/X/Z5szzYLqu4JkmplgE\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 613252,
		"path": "../public/images/portfolio/retratos/high/retrato-024.webp"
	},
	"/images/portfolio/eventos/originals/evento-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"b00481-Cvn8jX1qEJU2f0HU292srKkHsjw\"",
		"mtime": "2026-07-28T07:07:40.258Z",
		"size": 11535489,
		"path": "../public/images/portfolio/eventos/originals/evento-001.jpg"
	},
	"/images/portfolio/eventos/originals/evento-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"afc5c0-rNi7GPcQTcI5ZbyfqxguyF554fE\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 11519424,
		"path": "../public/images/portfolio/eventos/originals/evento-008.jpg"
	},
	"/images/portfolio/eventos/originals/evento-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"e48e94-z3QFfDvLQz3bwphwY8oVfP4HlHU\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 14978708,
		"path": "../public/images/portfolio/eventos/originals/evento-009.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-012.jpg": {
		"type": "image/jpeg",
		"etag": "\"5c0cc7-AYRiFvTqMO5s9e8U1v3RmzgphdM\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 6032583,
		"path": "../public/images/portfolio/retratos/originals/retrato-012.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-020.jpg": {
		"type": "image/jpeg",
		"etag": "\"51e1de-tFN8/HOoEvEgztSwaqQOvQoSoGk\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 5366238,
		"path": "../public/images/portfolio/retratos/originals/retrato-020.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"72f4c9-wZYxLqm5y0ojI5oc0h+OsCVsF+k\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 7533769,
		"path": "../public/images/portfolio/retratos/originals/retrato-002.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-019.jpg": {
		"type": "image/jpeg",
		"etag": "\"5a2e74-iYaNdynUWjhExXIOCotlNf8Pjb0\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 5910132,
		"path": "../public/images/portfolio/retratos/originals/retrato-019.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-022.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d4b43-fXezEUsPW5Bu/1uic6zyO1yym4o\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 6114115,
		"path": "../public/images/portfolio/retratos/originals/retrato-022.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-021.jpg": {
		"type": "image/jpeg",
		"etag": "\"650c06-6Kpk8O/MSKafenv0brjIzzdwC7w\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 6622214,
		"path": "../public/images/portfolio/retratos/originals/retrato-021.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"54b9e-PbDT1pP9iJpzGrgw/ppL/+6NhIw\"",
		"mtime": "2026-07-28T07:07:40.261Z",
		"size": 347038,
		"path": "../public/images/portfolio/retratos/medium/retrato-001.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-001.webp": {
		"type": "image/webp",
		"etag": "\"2be62-XlqV0K3hZAfWt731IiQL8vagoCo\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 179810,
		"path": "../public/images/portfolio/retratos/medium/retrato-001.webp"
	},
	"/images/portfolio/retratos/medium/retrato-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"5347a-u+W603b9URUU/odcgcHzng3hHwc\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 341114,
		"path": "../public/images/portfolio/retratos/medium/retrato-002.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"916be9-nODScEAa5rMqNlId/yEzVMKLhd4\"",
		"mtime": "2026-07-28T07:07:40.258Z",
		"size": 9530345,
		"path": "../public/images/portfolio/retratos/originals/retrato-004.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"9699b5-Y12D9I8XwZVAc6zC08c0VDXOYgQ\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 9869749,
		"path": "../public/images/portfolio/retratos/originals/retrato-005.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"95c647-xwoygwnQdAiPAYnkCJkX4Lq2isE\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 9815623,
		"path": "../public/images/portfolio/retratos/originals/retrato-006.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-002.webp": {
		"type": "image/webp",
		"etag": "\"2873e-TUAGboLwpUubUzpndJibXUFezLQ\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 165694,
		"path": "../public/images/portfolio/retratos/medium/retrato-002.webp"
	},
	"/images/portfolio/retratos/originals/retrato-011.jpg": {
		"type": "image/jpeg",
		"etag": "\"9147bd-uLQLhGzyCbS9dgfbWmf2NooGxmc\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 9521085,
		"path": "../public/images/portfolio/retratos/originals/retrato-011.jpg"
	},
	"/images/portfolio/eventos/originals/evento-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"11ab6bf-n5fz9vslHRgnjo8Z3ojYA40Qmsc\"",
		"mtime": "2026-07-28T07:07:40.266Z",
		"size": 18527935,
		"path": "../public/images/portfolio/eventos/originals/evento-010.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"4b929-ZUXSH2c/znEPxWI9Cs5cbfMUIzc\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 309545,
		"path": "../public/images/portfolio/retratos/medium/retrato-003.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"a0e226-q0jPpRUeYKZEupqi+Zo5rhDL92E\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 10543654,
		"path": "../public/images/portfolio/retratos/originals/retrato-001.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-003.webp": {
		"type": "image/webp",
		"etag": "\"281ce-tNo3HyiwisKqJbEEq4b0NC6ufAM\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 164302,
		"path": "../public/images/portfolio/retratos/medium/retrato-003.webp"
	},
	"/images/portfolio/retratos/medium/retrato-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"2362f-Wui49OoivXiycLz75w/3UcBaSkw\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 144943,
		"path": "../public/images/portfolio/retratos/medium/retrato-004.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-004.webp": {
		"type": "image/webp",
		"etag": "\"f010-ZJsqxF2M+a1yy3lHMLK/fN1jK88\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 61456,
		"path": "../public/images/portfolio/retratos/medium/retrato-004.webp"
	},
	"/images/portfolio/retratos/medium/retrato-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"2bb8a-ybOxFBI4AoZpyb1sAGrklV70cLw\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 179082,
		"path": "../public/images/portfolio/retratos/medium/retrato-005.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"b4c2a9-zuLo50He0/HTKZj/NBawC0n3fHo\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 11846313,
		"path": "../public/images/portfolio/retratos/originals/retrato-003.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-005.webp": {
		"type": "image/webp",
		"etag": "\"15078-gyKRLWZkF2BI0iHDuoVVv3gKPag\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 86136,
		"path": "../public/images/portfolio/retratos/medium/retrato-005.webp"
	},
	"/images/portfolio/retratos/medium/retrato-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"2b985-ShHDuX4cBJdJd47lcW5Al5Qpxso\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 178565,
		"path": "../public/images/portfolio/retratos/medium/retrato-006.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"a3c362-tLPWoeiGPA/OFi3hBJ6HpfmONe0\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 10732386,
		"path": "../public/images/portfolio/retratos/originals/retrato-010.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-006.webp": {
		"type": "image/webp",
		"etag": "\"1467e-VgISHjL0edZKldvDHdPoLqr5v9M\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 83582,
		"path": "../public/images/portfolio/retratos/medium/retrato-006.webp"
	},
	"/images/portfolio/retratos/originals/retrato-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"b14967-FPs9VU6M+OBBfcKiXOyMKqfML3w\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 11618663,
		"path": "../public/images/portfolio/retratos/originals/retrato-007.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"b63675-GjD1oRBD1YCVg0FOEYjj8N//aVU\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 11941493,
		"path": "../public/images/portfolio/retratos/originals/retrato-008.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"507a2-yicBfjs0hfqKmIt38WoTMtnzzVY\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 329634,
		"path": "../public/images/portfolio/retratos/medium/retrato-007.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"a968f3-Bwc7WZFuZltng+zD2Mhi3TiiNNs\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 11102451,
		"path": "../public/images/portfolio/retratos/originals/retrato-009.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-007.webp": {
		"type": "image/webp",
		"etag": "\"25bfc-ysYILjjFDlpb6ahf+37Qci4HmfY\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 154620,
		"path": "../public/images/portfolio/retratos/medium/retrato-007.webp"
	},
	"/images/portfolio/retratos/medium/retrato-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b44e-s8w56IUVkEKj+FcdNqa3MxNJ2LA\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 242766,
		"path": "../public/images/portfolio/retratos/medium/retrato-008.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-008.webp": {
		"type": "image/webp",
		"etag": "\"1ac22-z3nB+Up95JVuEuYWSk1x1YXswQY\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 109602,
		"path": "../public/images/portfolio/retratos/medium/retrato-008.webp"
	},
	"/images/portfolio/retratos/medium/retrato-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"5315f-VBvXBtmrN2cEN6SxmnRorujCzWs\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 340319,
		"path": "../public/images/portfolio/retratos/medium/retrato-009.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-009.webp": {
		"type": "image/webp",
		"etag": "\"2a9f8-G6qpRJxkKRtsfygRlw3LdBK31kU\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 174584,
		"path": "../public/images/portfolio/retratos/medium/retrato-009.webp"
	},
	"/images/portfolio/retratos/medium/retrato-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"3cb31-cTlNYL1mwpUz4tjrWl+FmDbLbNY\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 248625,
		"path": "../public/images/portfolio/retratos/medium/retrato-010.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-010.webp": {
		"type": "image/webp",
		"etag": "\"1a68c-Pb/NpVfBbAx5pX8O16j43mcid6k\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 108172,
		"path": "../public/images/portfolio/retratos/medium/retrato-010.webp"
	},
	"/images/portfolio/retratos/originals/retrato-014.jpg": {
		"type": "image/jpeg",
		"etag": "\"bd3da4-zfRwitp/JBuzLbxrf3efbhN+lNg\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 12402084,
		"path": "../public/images/portfolio/retratos/originals/retrato-014.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-011.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e948-ZrCedJUB8Q2l5PFcCdz5ma8nIAs\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 256328,
		"path": "../public/images/portfolio/retratos/medium/retrato-011.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-011.webp": {
		"type": "image/webp",
		"etag": "\"1b2b2-2SiqEv4gGZloV8TL4hMHTlG4I/o\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 111282,
		"path": "../public/images/portfolio/retratos/medium/retrato-011.webp"
	},
	"/images/portfolio/retratos/medium/retrato-012.jpg": {
		"type": "image/jpeg",
		"etag": "\"4a213-ouTB/mot+0XR0wbiC0PPeiwvwGU\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 303635,
		"path": "../public/images/portfolio/retratos/medium/retrato-012.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-012.webp": {
		"type": "image/webp",
		"etag": "\"2041e-S1nwPwc9vSwZCerNBvhYcGriR2I\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 132126,
		"path": "../public/images/portfolio/retratos/medium/retrato-012.webp"
	},
	"/images/portfolio/retratos/medium/retrato-013.jpg": {
		"type": "image/jpeg",
		"etag": "\"3ea30-zwh160558Hotu1iGVp0xXMa+9M0\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 256560,
		"path": "../public/images/portfolio/retratos/medium/retrato-013.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-013.webp": {
		"type": "image/webp",
		"etag": "\"1c36c-u1NEYl3wreNJZXdd0J2FNqo6RfU\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 115564,
		"path": "../public/images/portfolio/retratos/medium/retrato-013.webp"
	},
	"/images/portfolio/retratos/medium/retrato-014.jpg": {
		"type": "image/jpeg",
		"etag": "\"40c3c-737aE4VaK2moHFZRJGj6pLQVWSo\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 265276,
		"path": "../public/images/portfolio/retratos/medium/retrato-014.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-014.webp": {
		"type": "image/webp",
		"etag": "\"1dfd0-xSsf8pJ9b5GCnkojshMW5D5jt5g\"",
		"mtime": "2026-07-28T07:07:40.280Z",
		"size": 122832,
		"path": "../public/images/portfolio/retratos/medium/retrato-014.webp"
	},
	"/images/portfolio/retratos/medium/retrato-015.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c790-HH3rZbic1PqIJUceepQuNaFVDA4\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 247696,
		"path": "../public/images/portfolio/retratos/medium/retrato-015.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-015.webp": {
		"type": "image/webp",
		"etag": "\"1c110-Tp488Pgm+ruPOtPD+EPJJjLQTXE\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 114960,
		"path": "../public/images/portfolio/retratos/medium/retrato-015.webp"
	},
	"/images/portfolio/retratos/medium/retrato-016.jpg": {
		"type": "image/jpeg",
		"etag": "\"45135-uomhk1HdNnBpHM4ouRrFY+uAFwg\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 282933,
		"path": "../public/images/portfolio/retratos/medium/retrato-016.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-016.webp": {
		"type": "image/webp",
		"etag": "\"21430-BAXzgfzXVJ7KyAEtsNjRM6Vi+Mc\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 136240,
		"path": "../public/images/portfolio/retratos/medium/retrato-016.webp"
	},
	"/images/portfolio/retratos/medium/retrato-017.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ead4-pHU1XxtSgR6FobkjDPqse81ts+A\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 453332,
		"path": "../public/images/portfolio/retratos/medium/retrato-017.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-017.webp": {
		"type": "image/webp",
		"etag": "\"41a94-dc2bTw33/yKPMbJhJ9DsBbTrK2I\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 268948,
		"path": "../public/images/portfolio/retratos/medium/retrato-017.webp"
	},
	"/images/portfolio/retratos/originals/retrato-015.jpg": {
		"type": "image/jpeg",
		"etag": "\"c2d261-G/YWEYFdOppRf7OXKw+1ogrNQK4\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 12767841,
		"path": "../public/images/portfolio/retratos/originals/retrato-015.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-018.jpg": {
		"type": "image/jpeg",
		"etag": "\"6ae07-NmPQJ+KKt9BhBuiem8aLPmhhQ1s\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 437767,
		"path": "../public/images/portfolio/retratos/medium/retrato-018.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-016.jpg": {
		"type": "image/jpeg",
		"etag": "\"c09472-mT23VvP7+0RFcSvNFhRQ7b6w+NA\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 12620914,
		"path": "../public/images/portfolio/retratos/originals/retrato-016.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-018.webp": {
		"type": "image/webp",
		"etag": "\"3fac6-D8gR69eITWW0tOR3mr6ShoNq9iA\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 260806,
		"path": "../public/images/portfolio/retratos/medium/retrato-018.webp"
	},
	"/images/portfolio/retratos/medium/retrato-019.jpg": {
		"type": "image/jpeg",
		"etag": "\"3841f-p88xAzXkYacxVqwZfdvUtPHuwJU\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 230431,
		"path": "../public/images/portfolio/retratos/medium/retrato-019.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-019.webp": {
		"type": "image/webp",
		"etag": "\"16250-HlbAl7EjWCaLipy/tHU6d96jzAM\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 90704,
		"path": "../public/images/portfolio/retratos/medium/retrato-019.webp"
	},
	"/images/portfolio/retratos/medium/retrato-020.jpg": {
		"type": "image/jpeg",
		"etag": "\"3619d-dXYctav6Bo4CHhnrOPGUSEkDGpA\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 221597,
		"path": "../public/images/portfolio/retratos/medium/retrato-020.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-013.jpg": {
		"type": "image/jpeg",
		"etag": "\"da788a-+UjYeOgUU/FjRmrFcpLBNSKf+8k\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 14317706,
		"path": "../public/images/portfolio/retratos/originals/retrato-013.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-020.webp": {
		"type": "image/webp",
		"etag": "\"15500-irexG5SNQhe5eftNClwyNgkxU80\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 87296,
		"path": "../public/images/portfolio/retratos/medium/retrato-020.webp"
	},
	"/images/portfolio/retratos/originals/retrato-023.jpg": {
		"type": "image/jpeg",
		"etag": "\"a6afca-Ry996pVl/f6R8RHMWV+P2kpNpbk\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 10923978,
		"path": "../public/images/portfolio/retratos/originals/retrato-023.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-021.jpg": {
		"type": "image/jpeg",
		"etag": "\"464be-9K5AAstWWW5F6QoTn2hkHzULPjg\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 287934,
		"path": "../public/images/portfolio/retratos/medium/retrato-021.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-021.webp": {
		"type": "image/webp",
		"etag": "\"1e3c8-5sYWgkUH9quHk8j+oXGCSttmRs4\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 123848,
		"path": "../public/images/portfolio/retratos/medium/retrato-021.webp"
	},
	"/images/portfolio/retratos/medium/retrato-022.jpg": {
		"type": "image/jpeg",
		"etag": "\"51901-rqKaNmcRrSX8y01NQxbmMAPcBG8\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 334081,
		"path": "../public/images/portfolio/retratos/medium/retrato-022.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-022.webp": {
		"type": "image/webp",
		"etag": "\"291fc-yMzLsaBouDnx3gQu0dyvp2OIhzc\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 168444,
		"path": "../public/images/portfolio/retratos/medium/retrato-022.webp"
	},
	"/images/portfolio/retratos/originals/retrato-017.jpg": {
		"type": "image/jpeg",
		"etag": "\"d2370a-V2lklOPk6oFnOinkoMjZTxQm61A\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 13776650,
		"path": "../public/images/portfolio/retratos/originals/retrato-017.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-023.jpg": {
		"type": "image/jpeg",
		"etag": "\"4c1f8-nDUJAIjb7WbM3HSfQ0zhbDaZ4FM\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 311800,
		"path": "../public/images/portfolio/retratos/medium/retrato-023.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-023.webp": {
		"type": "image/webp",
		"etag": "\"26dfc-U/3au8PUin1O1WCjkgJ4giNMDP4\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 159228,
		"path": "../public/images/portfolio/retratos/medium/retrato-023.webp"
	},
	"/images/portfolio/retratos/medium/retrato-024.jpg": {
		"type": "image/jpeg",
		"etag": "\"553cb-KENSx0SCma40HNEIV3o6SaLDk5M\"",
		"mtime": "2026-07-28T07:07:40.281Z",
		"size": 349131,
		"path": "../public/images/portfolio/retratos/medium/retrato-024.jpg"
	},
	"/images/portfolio/retratos/medium/retrato-024.webp": {
		"type": "image/webp",
		"etag": "\"2be9c-Jfpp3nbzAMCBbzey1AenJZnKOfU\"",
		"mtime": "2026-07-28T07:07:40.282Z",
		"size": 179868,
		"path": "../public/images/portfolio/retratos/medium/retrato-024.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"10b14-ixwHliWlcOeuVgUJDlW6ZhBc4Bw\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 68372,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-001.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-001.webp": {
		"type": "image/webp",
		"etag": "\"8ab4-sqtmk20lBvToJRxsERkT7LyONHY\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 35508,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-001.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"10572-r8La97ADKMzs+DZv5g4lyN/90v4\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 66930,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-002.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-002.webp": {
		"type": "image/webp",
		"etag": "\"85a4-1gJAOZie/q+HDTAlIzwO+mlQMU4\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 34212,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-002.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"ea52-2Ht83+yC5BNAQKZGsVij4krQPB4\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 59986,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-003.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-003.webp": {
		"type": "image/webp",
		"etag": "\"7f48-gr1f7YZZVfz1qqqfX0kpnDpaMLI\"",
		"mtime": "2026-07-28T07:07:40.264Z",
		"size": 32584,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-003.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"6459-2wvtxzlIUVw3Ft1U+6cFJfcVHQM\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 25689,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-004.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-004.webp": {
		"type": "image/webp",
		"etag": "\"2b8c-gvQli+Zxh/dT12Vejpa3sjSbTjA\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 11148,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-004.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"753b-ocpa9mW6UBmzf+VDxc92hd7x9co\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 30011,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-005.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-005.webp": {
		"type": "image/webp",
		"etag": "\"3572-qC0GLe0wov0Wn/nWNguM1Y6fq0c\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 13682,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-005.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"7479-aVN7DxmlJbqlUalZxfMJuGYUU/c\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 29817,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-006.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-006.webp": {
		"type": "image/webp",
		"etag": "\"3542-wSd0D7jF3HghtCAIHooNviX9YP8\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 13634,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-006.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"115e7-PEDXqByDaMpc9bg9yPqYIWDyY6M\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 71143,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-007.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-007.webp": {
		"type": "image/webp",
		"etag": "\"8648-dtGbW2ue0/zISmry3wz/8LCMB0c\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 34376,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-007.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"c4a1-8ZYZnsrsXCmDutn/a8xecAhQRbU\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 50337,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-008.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-008.webp": {
		"type": "image/webp",
		"etag": "\"60aa-PR/YKkvbim6I1u5SI2h6768TP94\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 24746,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-008.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"10938-WLa1xMMLi42tK4BfmrfzlrZ/ojQ\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 67896,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-009.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-009.webp": {
		"type": "image/webp",
		"etag": "\"8204-PLUfouFcnIMPfw1fPXvn3HJFUrI\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 33284,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-009.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"cf90-Ka0OBcok6wh/LxI9uifeHhpIMwo\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 53136,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-010.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-010.webp": {
		"type": "image/webp",
		"etag": "\"605e-ncT4Dn7ou9QVfQsrIi4qH0qZ3aI\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 24670,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-010.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-011.jpg": {
		"type": "image/jpeg",
		"etag": "\"d4a1-iip/m+2VIAWQtc56YQnIgI0YV0w\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 54433,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-011.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-011.webp": {
		"type": "image/webp",
		"etag": "\"62da-AtQEGGT6FgCWfXGpAgGHem6ZiYI\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 25306,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-011.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-012.jpg": {
		"type": "image/jpeg",
		"etag": "\"f5d2-bjqRgA6aiNIQzbpVGJqsd+jbbvE\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 62930,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-012.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-012.webp": {
		"type": "image/webp",
		"etag": "\"70d0-Z90sTDy76z4fqZb3bOcjZHj27Xc\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 28880,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-012.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-013.jpg": {
		"type": "image/jpeg",
		"etag": "\"d4f8-t1ly2RFwMIRJJ/hsqr3vzhm/S5o\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 54520,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-013.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-013.webp": {
		"type": "image/webp",
		"etag": "\"6a46-XjDmvGwv1Szy6RkNDZ9cOG0RrRs\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 27206,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-013.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-014.jpg": {
		"type": "image/jpeg",
		"etag": "\"da09-bQwGUvb2cSS/iNZJQpRj8jESNOU\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 55817,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-014.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-014.webp": {
		"type": "image/webp",
		"etag": "\"6ec8-D4iuMhpOLXbzy6IZAjp/JSz+/9w\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 28360,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-014.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-015.jpg": {
		"type": "image/jpeg",
		"etag": "\"cc9f-nqdbn7Mwp4GXBSjXLH/WXornU5M\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 52383,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-015.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-015.webp": {
		"type": "image/webp",
		"etag": "\"673a-Lkgt8rGlsmeH3hqEmai/Lts4OIk\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 26426,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-015.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-016.jpg": {
		"type": "image/jpeg",
		"etag": "\"e88d-iSOxChCq8PjuyD8b1rsuR4CE98o\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 59533,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-016.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-016.webp": {
		"type": "image/webp",
		"etag": "\"749c-02rWgRARuQbTjAhGvhmyezlWvMw\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 29852,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-016.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-017.jpg": {
		"type": "image/jpeg",
		"etag": "\"16106-ZT8l76z+92MwCgxsS1nH/Wm2BIM\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 90374,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-017.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-017.webp": {
		"type": "image/webp",
		"etag": "\"e48c-MfWmiq3wYEnqyJZvTZi0qj1t3sU\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 58508,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-017.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-018.jpg": {
		"type": "image/jpeg",
		"etag": "\"154f4-UdXVz66AEIIkwIfmyYvRfAmMeTM\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 87284,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-018.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-018.webp": {
		"type": "image/webp",
		"etag": "\"dad4-VHHSiok7FXi39xhlvZWIVQMs6/I\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 56020,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-018.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-019.jpg": {
		"type": "image/jpeg",
		"etag": "\"c184-kZPtfuWnjpvC+EQ7GqX+6UWPMJQ\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 49540,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-019.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-019.webp": {
		"type": "image/webp",
		"etag": "\"538c-zSwgifveNw04eszIFuXlHg2lYCo\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 21388,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-019.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-020.jpg": {
		"type": "image/jpeg",
		"etag": "\"b8c3-jcyDPaV1jW4CGoAEP8nw0+8fOGY\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 47299,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-020.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-020.webp": {
		"type": "image/webp",
		"etag": "\"5122-EyQ/Upou83POinh+wF5prPppH7M\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 20770,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-020.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-021.jpg": {
		"type": "image/jpeg",
		"etag": "\"ea22-ImQ8GrgfZ/QkZdm0MRrGVUsjDz4\"",
		"mtime": "2026-07-28T07:07:40.289Z",
		"size": 59938,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-021.jpg"
	},
	"/images/portfolio/retratos/originals/retrato-018.jpg": {
		"type": "image/jpeg",
		"etag": "\"f7e94a-h9UjFqaSiQawBpsyXMXczZRiJ04\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 16247114,
		"path": "../public/images/portfolio/retratos/originals/retrato-018.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-021.webp": {
		"type": "image/webp",
		"etag": "\"6a30-RZi1rasiT7fh6b/mKu8i9CdzcJo\"",
		"mtime": "2026-07-28T07:07:40.289Z",
		"size": 27184,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-021.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-022.jpg": {
		"type": "image/jpeg",
		"etag": "\"fed0-n3EoFJSGWkYTn2v4ZSBE+K5oVPU\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 65232,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-022.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-022.webp": {
		"type": "image/webp",
		"etag": "\"7eb4-T+NyD7Jk6gC1OzS3F5rwUhmiJAI\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 32436,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-022.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-023.jpg": {
		"type": "image/jpeg",
		"etag": "\"fc25-6TavlKcO7yRgfLv2vc719oP479s\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 64549,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-023.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-023.webp": {
		"type": "image/webp",
		"etag": "\"800e-nEsXP0yHIcpVdes+8NC3eMoAv5o\"",
		"mtime": "2026-07-28T07:07:40.288Z",
		"size": 32782,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-023.webp"
	},
	"/images/portfolio/retratos/thumbnails/retrato-024.jpg": {
		"type": "image/jpeg",
		"etag": "\"112f1-AU69XIdzW2Q8+fNCWyWbhKLtWVY\"",
		"mtime": "2026-07-28T07:07:40.289Z",
		"size": 70385,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-024.jpg"
	},
	"/images/portfolio/retratos/thumbnails/retrato-024.webp": {
		"type": "image/webp",
		"etag": "\"8afe-WBNu4HlryoalBZYneqZUvAKyl8Q\"",
		"mtime": "2026-07-28T07:07:40.289Z",
		"size": 35582,
		"path": "../public/images/portfolio/retratos/thumbnails/retrato-024.webp"
	},
	"/images/portfolio/retratos/originals/retrato-024.jpg": {
		"type": "image/jpeg",
		"etag": "\"ad2105-yg+tEO6dUPw6RWC9nXHSw1irsog\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 11346181,
		"path": "../public/images/portfolio/retratos/originals/retrato-024.jpg"
	},
	"/images/portfolio/marcas/medium/marca-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"5b27a-raTiH14+LZMJml2UBDpN2/1dnn8\"",
		"mtime": "2026-07-28T07:07:40.259Z",
		"size": 373370,
		"path": "../public/images/portfolio/marcas/medium/marca-001.jpg"
	},
	"/images/portfolio/marcas/medium/marca-001.webp": {
		"type": "image/webp",
		"etag": "\"2c5a4-FOrhrOSZ3LdKfl4O6azkcGJKOaI\"",
		"mtime": "2026-07-28T07:07:40.273Z",
		"size": 181668,
		"path": "../public/images/portfolio/marcas/medium/marca-001.webp"
	},
	"/images/portfolio/marcas/medium/marca-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"58314-vTtkE8QyZduNj5bWxOPDCHlpli4\"",
		"mtime": "2026-07-28T07:07:40.273Z",
		"size": 361236,
		"path": "../public/images/portfolio/marcas/medium/marca-002.jpg"
	},
	"/images/portfolio/marcas/medium/marca-002.webp": {
		"type": "image/webp",
		"etag": "\"2b5e2-ef9kxwjePeb0+bHRSKGEPTWLAL0\"",
		"mtime": "2026-07-28T07:07:40.273Z",
		"size": 177634,
		"path": "../public/images/portfolio/marcas/medium/marca-002.webp"
	},
	"/images/portfolio/marcas/medium/marca-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"58cfd-ia4OLY/fg0Swm+u3NmwVLALf18Q\"",
		"mtime": "2026-07-28T07:07:40.273Z",
		"size": 363773,
		"path": "../public/images/portfolio/marcas/medium/marca-003.jpg"
	},
	"/images/portfolio/marcas/medium/marca-003.webp": {
		"type": "image/webp",
		"etag": "\"2b97e-wd7Y8mrQPBp0Bi0m14W/M5MyyPI\"",
		"mtime": "2026-07-28T07:07:40.273Z",
		"size": 178558,
		"path": "../public/images/portfolio/marcas/medium/marca-003.webp"
	},
	"/images/portfolio/marcas/medium/marca-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"59156-0I9HksbVcR9lrZVAJ/tJXX6sKJU\"",
		"mtime": "2026-07-28T07:07:40.273Z",
		"size": 364886,
		"path": "../public/images/portfolio/marcas/medium/marca-004.jpg"
	},
	"/images/portfolio/marcas/medium/marca-004.webp": {
		"type": "image/webp",
		"etag": "\"2bbe6-jhFZNoLetprzg7gFZdYX+Wv2RkY\"",
		"mtime": "2026-07-28T07:07:40.273Z",
		"size": 179174,
		"path": "../public/images/portfolio/marcas/medium/marca-004.webp"
	},
	"/images/portfolio/marcas/medium/marca-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"588fa-TA9vP/rnbexdTbsjH4GzdpuhxC4\"",
		"mtime": "2026-07-28T07:07:40.273Z",
		"size": 362746,
		"path": "../public/images/portfolio/marcas/medium/marca-005.jpg"
	},
	"/images/portfolio/marcas/medium/marca-005.webp": {
		"type": "image/webp",
		"etag": "\"2b5be-xt6kHrNDUDlQMnWHdvIYhaQjW6o\"",
		"mtime": "2026-07-28T07:07:40.273Z",
		"size": 177598,
		"path": "../public/images/portfolio/marcas/medium/marca-005.webp"
	},
	"/images/portfolio/marcas/medium/marca-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"574c9-qzWTSuOGLmV7fJD6lndP/V9390c\"",
		"mtime": "2026-07-28T07:07:40.273Z",
		"size": 357577,
		"path": "../public/images/portfolio/marcas/medium/marca-006.jpg"
	},
	"/images/portfolio/marcas/medium/marca-006.webp": {
		"type": "image/webp",
		"etag": "\"2b0e4-tmJkyELimN/kiRxeU0reCEC0fIk\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 176356,
		"path": "../public/images/portfolio/marcas/medium/marca-006.webp"
	},
	"/images/portfolio/marcas/medium/marca-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"56285-AUqRDFnzoo4dzpJQA04xtu1kRq8\"",
		"mtime": "2026-07-28T07:07:40.273Z",
		"size": 352901,
		"path": "../public/images/portfolio/marcas/medium/marca-007.jpg"
	},
	"/images/portfolio/marcas/medium/marca-007.webp": {
		"type": "image/webp",
		"etag": "\"2a52e-AEWDCdWQzPjvVomMBCYq+lFcbuc\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 173358,
		"path": "../public/images/portfolio/marcas/medium/marca-007.webp"
	},
	"/images/portfolio/marcas/medium/marca-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"578f7-kDCkl5+kbriuQgDOZwe5jIcesPY\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 358647,
		"path": "../public/images/portfolio/marcas/medium/marca-008.jpg"
	},
	"/images/portfolio/marcas/medium/marca-008.webp": {
		"type": "image/webp",
		"etag": "\"2b2fc-ZIepuYKe8TEv0uWhMwmq0hqeU/0\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 176892,
		"path": "../public/images/portfolio/marcas/medium/marca-008.webp"
	},
	"/images/portfolio/marcas/medium/marca-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"56648-8Q+YO9UN8TqNhw1y9w0+DZUxuUQ\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 353864,
		"path": "../public/images/portfolio/marcas/medium/marca-009.jpg"
	},
	"/images/portfolio/marcas/medium/marca-009.webp": {
		"type": "image/webp",
		"etag": "\"2a2d8-4CHAIsidbLB2wqFdHyeNJ7LNQOU\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 172760,
		"path": "../public/images/portfolio/marcas/medium/marca-009.webp"
	},
	"/images/portfolio/marcas/medium/marca-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"56b94-PKCv2/Gfyrl7CiPftKF7Cpnb2/s\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 355220,
		"path": "../public/images/portfolio/marcas/medium/marca-010.jpg"
	},
	"/images/portfolio/marcas/medium/marca-010.webp": {
		"type": "image/webp",
		"etag": "\"2a34e-BsIKKO7G4+C5NZnfwlhG+i+GVjQ\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 172878,
		"path": "../public/images/portfolio/marcas/medium/marca-010.webp"
	},
	"/images/portfolio/marcas/medium/marca-011.jpg": {
		"type": "image/jpeg",
		"etag": "\"5652b-CPlkuTnqsvPInmbY6eNFPOwUrpc\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 353579,
		"path": "../public/images/portfolio/marcas/medium/marca-011.jpg"
	},
	"/images/portfolio/marcas/medium/marca-011.webp": {
		"type": "image/webp",
		"etag": "\"2a6de-QMzMDXJ9I0XU947U6xxOn9zpQZo\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 173790,
		"path": "../public/images/portfolio/marcas/medium/marca-011.webp"
	},
	"/images/portfolio/marcas/medium/marca-012.jpg": {
		"type": "image/jpeg",
		"etag": "\"56bb0-WvW2meIalYfhbrAnQ310GcBlJQs\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 355248,
		"path": "../public/images/portfolio/marcas/medium/marca-012.jpg"
	},
	"/images/portfolio/marcas/medium/marca-012.webp": {
		"type": "image/webp",
		"etag": "\"2a976-icIjWAUjIq+IC0syO50yY424C2I\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 174454,
		"path": "../public/images/portfolio/marcas/medium/marca-012.webp"
	},
	"/images/portfolio/marcas/medium/marca-013.jpg": {
		"type": "image/jpeg",
		"etag": "\"5681d-G4FnaVCmgO56PXHgI2U349i8tzM\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 354333,
		"path": "../public/images/portfolio/marcas/medium/marca-013.jpg"
	},
	"/images/portfolio/marcas/medium/marca-013.webp": {
		"type": "image/webp",
		"etag": "\"2a87e-OEptC4532Alu62KVs72BajDfrrA\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 174206,
		"path": "../public/images/portfolio/marcas/medium/marca-013.webp"
	},
	"/images/portfolio/marcas/medium/marca-014.jpg": {
		"type": "image/jpeg",
		"etag": "\"557a7-6qpxYcVg0U+XHomCGw/ePyGGpkE\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 350119,
		"path": "../public/images/portfolio/marcas/medium/marca-014.jpg"
	},
	"/images/portfolio/marcas/medium/marca-014.webp": {
		"type": "image/webp",
		"etag": "\"29d8e-Dcmna3vz1sBWVA5eIti7qzgsd0g\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 171406,
		"path": "../public/images/portfolio/marcas/medium/marca-014.webp"
	},
	"/images/portfolio/marcas/medium/marca-015.jpg": {
		"type": "image/jpeg",
		"etag": "\"1865c-tLwmJWXx2a3tD6pyQDqMt/rxiqo\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 99932,
		"path": "../public/images/portfolio/marcas/medium/marca-015.jpg"
	},
	"/images/portfolio/marcas/medium/marca-015.webp": {
		"type": "image/webp",
		"etag": "\"d002-5dFnYQ5uUJbu/Ly9ULeJ+E3LFpU\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 53250,
		"path": "../public/images/portfolio/marcas/medium/marca-015.webp"
	},
	"/images/portfolio/marcas/medium/marca-016.jpg": {
		"type": "image/jpeg",
		"etag": "\"26ff6-9igo7MyEfjx8/MfD2TlbbMDR5dE\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 159734,
		"path": "../public/images/portfolio/marcas/medium/marca-016.jpg"
	},
	"/images/portfolio/marcas/medium/marca-016.webp": {
		"type": "image/webp",
		"etag": "\"178ae-DctCMnTjCyIFa16h0HBxGPN2uKQ\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 96430,
		"path": "../public/images/portfolio/marcas/medium/marca-016.webp"
	},
	"/images/portfolio/marcas/medium/marca-017.jpg": {
		"type": "image/jpeg",
		"etag": "\"227f7-x6DV5T7hUddGUKqdjg1+mTaWDAg\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 141303,
		"path": "../public/images/portfolio/marcas/medium/marca-017.jpg"
	},
	"/images/portfolio/marcas/medium/marca-017.webp": {
		"type": "image/webp",
		"etag": "\"127c2-mJRKv8JJ7h+1hopuCGvc6sieGSE\"",
		"mtime": "2026-07-28T07:07:40.274Z",
		"size": 75714,
		"path": "../public/images/portfolio/marcas/medium/marca-017.webp"
	},
	"/images/portfolio/marcas/medium/marca-018.jpg": {
		"type": "image/jpeg",
		"etag": "\"344d6-JusXnUjgMYlLqdsjv4h4MYF1efU\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 214230,
		"path": "../public/images/portfolio/marcas/medium/marca-018.jpg"
	},
	"/images/portfolio/marcas/medium/marca-018.webp": {
		"type": "image/webp",
		"etag": "\"1511e-62oKx+RPm4rnBfMRoNO1JqVzAJc\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 86302,
		"path": "../public/images/portfolio/marcas/medium/marca-018.webp"
	},
	"/images/portfolio/marcas/medium/marca-019.jpg": {
		"type": "image/jpeg",
		"etag": "\"779e9-2VxX95rrzX77P/dQLa4MjB0NsvY\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 489961,
		"path": "../public/images/portfolio/marcas/medium/marca-019.jpg"
	},
	"/images/portfolio/marcas/medium/marca-019.webp": {
		"type": "image/webp",
		"etag": "\"62620-wbiWALTnpfuKYO022VRuWWkdkYg\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 402976,
		"path": "../public/images/portfolio/marcas/medium/marca-019.webp"
	},
	"/images/portfolio/marcas/medium/marca-020.jpg": {
		"type": "image/jpeg",
		"etag": "\"2bd3e-fRSOt/GW2xsOBBARnpwY7qgTJ6I\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 179518,
		"path": "../public/images/portfolio/marcas/medium/marca-020.jpg"
	},
	"/images/portfolio/marcas/medium/marca-020.webp": {
		"type": "image/webp",
		"etag": "\"199ce-kdZ3AhDGw99xg7wm0CzDKfgux1Y\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 104910,
		"path": "../public/images/portfolio/marcas/medium/marca-020.webp"
	},
	"/images/portfolio/marcas/medium/marca-021.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f9ca-OSEvbGlpyPkNtKm4brxvPO+Zym4\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 195018,
		"path": "../public/images/portfolio/marcas/medium/marca-021.jpg"
	},
	"/images/portfolio/marcas/medium/marca-021.webp": {
		"type": "image/webp",
		"etag": "\"1f70c-Ansb9uXGkYGltQRBnR/jEFvaBIc\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 128780,
		"path": "../public/images/portfolio/marcas/medium/marca-021.webp"
	},
	"/images/portfolio/marcas/medium/marca-022.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f326-EZrs//Ru6x5L/aJMn4dwQMQhmrA\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 193318,
		"path": "../public/images/portfolio/marcas/medium/marca-022.jpg"
	},
	"/images/portfolio/marcas/medium/marca-022.webp": {
		"type": "image/webp",
		"etag": "\"1f276-v6fwTPHsfeZ/ZXeWtmIMDP00jJA\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 127606,
		"path": "../public/images/portfolio/marcas/medium/marca-022.webp"
	},
	"/images/portfolio/marcas/medium/marca-023.jpg": {
		"type": "image/jpeg",
		"etag": "\"49029-zAM2YgmdGSNgFAdepkpjT7Ll8pg\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 299049,
		"path": "../public/images/portfolio/marcas/medium/marca-023.jpg"
	},
	"/images/portfolio/marcas/medium/marca-023.webp": {
		"type": "image/webp",
		"etag": "\"364d4-T41gcuaY9RchBZcBrJPR0QxLC04\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 222420,
		"path": "../public/images/portfolio/marcas/medium/marca-023.webp"
	},
	"/images/portfolio/marcas/medium/marca-024.jpg": {
		"type": "image/jpeg",
		"etag": "\"37946-qEdiy+yjQ8wHPcx8QQ7XCN1kgHQ\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 227654,
		"path": "../public/images/portfolio/marcas/medium/marca-024.jpg"
	},
	"/images/portfolio/marcas/medium/marca-024.webp": {
		"type": "image/webp",
		"etag": "\"19d3a-Yc2Zchl9hEdYNRAady138wNfGj8\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 105786,
		"path": "../public/images/portfolio/marcas/medium/marca-024.webp"
	},
	"/images/portfolio/marcas/medium/marca-025.jpg": {
		"type": "image/jpeg",
		"etag": "\"359b3-3d+7p6U/N7+FfDWWjbK9zlGqAUc\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 219571,
		"path": "../public/images/portfolio/marcas/medium/marca-025.jpg"
	},
	"/images/portfolio/marcas/medium/marca-025.webp": {
		"type": "image/webp",
		"etag": "\"1960e-91SbI3etWXpJg/UTygnrXP3mRIo\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 103950,
		"path": "../public/images/portfolio/marcas/medium/marca-025.webp"
	},
	"/images/portfolio/marcas/medium/marca-026.jpg": {
		"type": "image/jpeg",
		"etag": "\"35055-o3EnaN/Oksj6bnKU+SjSL5hNkws\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 217173,
		"path": "../public/images/portfolio/marcas/medium/marca-026.jpg"
	},
	"/images/portfolio/marcas/medium/marca-026.webp": {
		"type": "image/webp",
		"etag": "\"17cc2-/6j5OC49FrIZqwj3zUUDYFih6pE\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 97474,
		"path": "../public/images/portfolio/marcas/medium/marca-026.webp"
	},
	"/images/portfolio/marcas/medium/marca-027.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e977-7argWqhNS07Pol//0WLOxYSD82c\"",
		"mtime": "2026-07-28T07:07:40.276Z",
		"size": 256375,
		"path": "../public/images/portfolio/marcas/medium/marca-027.jpg"
	},
	"/images/portfolio/marcas/medium/marca-027.webp": {
		"type": "image/webp",
		"etag": "\"2a8c4-kTRSjIhKwAB5RJKMmpfphNUQScI\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 174276,
		"path": "../public/images/portfolio/marcas/medium/marca-027.webp"
	},
	"/images/portfolio/marcas/medium/marca-028.jpg": {
		"type": "image/jpeg",
		"etag": "\"3e325-CTxTGIeP9QCoKMMtQrPAFftfytQ\"",
		"mtime": "2026-07-28T07:07:40.276Z",
		"size": 254757,
		"path": "../public/images/portfolio/marcas/medium/marca-028.jpg"
	},
	"/images/portfolio/marcas/medium/marca-028.webp": {
		"type": "image/webp",
		"etag": "\"2e0c6-dSmvcFw0LPmFrizO3borI+HufWo\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 188614,
		"path": "../public/images/portfolio/marcas/medium/marca-028.webp"
	},
	"/images/portfolio/marcas/medium/marca-029.jpg": {
		"type": "image/jpeg",
		"etag": "\"3a5e5-7ZlPQ5TYevsOYMRBbgH8DtrEXsw\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 239077,
		"path": "../public/images/portfolio/marcas/medium/marca-029.jpg"
	},
	"/images/portfolio/marcas/medium/marca-029.webp": {
		"type": "image/webp",
		"etag": "\"268ac-Q6fKN8kMNfzBgHL+TskHZ8/oZzU\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 157868,
		"path": "../public/images/portfolio/marcas/medium/marca-029.webp"
	},
	"/images/portfolio/marcas/medium/marca-030.jpg": {
		"type": "image/jpeg",
		"etag": "\"474e8-evrW2hAYwv03/bpTgweLapdJHP8\"",
		"mtime": "2026-07-28T07:07:40.276Z",
		"size": 292072,
		"path": "../public/images/portfolio/marcas/medium/marca-030.jpg"
	},
	"/images/portfolio/marcas/medium/marca-030.webp": {
		"type": "image/webp",
		"etag": "\"3d8a4-By8tGjb/PabH4vCs9+pJjOK1rSw\"",
		"mtime": "2026-07-28T07:07:40.276Z",
		"size": 252068,
		"path": "../public/images/portfolio/marcas/medium/marca-030.webp"
	},
	"/images/portfolio/marcas/medium/marca-031.jpg": {
		"type": "image/jpeg",
		"etag": "\"446c3-yZcdgHKJCyWVDK6dnnpnqhV1IvY\"",
		"mtime": "2026-07-28T07:07:40.276Z",
		"size": 280259,
		"path": "../public/images/portfolio/marcas/medium/marca-031.jpg"
	},
	"/images/portfolio/marcas/medium/marca-031.webp": {
		"type": "image/webp",
		"etag": "\"36eea-y7N7IFqwlCTuDhVboX9biZ1+I5g\"",
		"mtime": "2026-07-28T07:07:40.275Z",
		"size": 225002,
		"path": "../public/images/portfolio/marcas/medium/marca-031.webp"
	},
	"/images/portfolio/marcas/medium/marca-032.jpg": {
		"type": "image/jpeg",
		"etag": "\"3c123-f0RrrnvShw8l/rqE4vQsS+5s8I0\"",
		"mtime": "2026-07-28T07:07:40.276Z",
		"size": 246051,
		"path": "../public/images/portfolio/marcas/medium/marca-032.jpg"
	},
	"/images/portfolio/marcas/medium/marca-032.webp": {
		"type": "image/webp",
		"etag": "\"2e6e2-7C7GM95PO/TW+ZA+xO9zoHqo0j0\"",
		"mtime": "2026-07-28T07:07:40.276Z",
		"size": 190178,
		"path": "../public/images/portfolio/marcas/medium/marca-032.webp"
	},
	"/images/portfolio/marcas/medium/marca-033.jpg": {
		"type": "image/jpeg",
		"etag": "\"3cb0b-1FCqXA0jrwTk0nZFcFBpd8Aye1Y\"",
		"mtime": "2026-07-28T07:07:40.276Z",
		"size": 248587,
		"path": "../public/images/portfolio/marcas/medium/marca-033.jpg"
	},
	"/images/portfolio/marcas/medium/marca-033.webp": {
		"type": "image/webp",
		"etag": "\"2eb78-wPZW+7apQuNeYI3WZEOHO85S05U\"",
		"mtime": "2026-07-28T07:07:40.276Z",
		"size": 191352,
		"path": "../public/images/portfolio/marcas/medium/marca-033.webp"
	},
	"/images/portfolio/marcas/originals/marca-015.png": {
		"type": "image/png",
		"etag": "\"18665d-k8nc79Wb7UOJFvrwAn4fIl8HY0w\"",
		"mtime": "2026-07-28T07:07:40.277Z",
		"size": 1599069,
		"path": "../public/images/portfolio/marcas/originals/marca-015.png"
	},
	"/images/portfolio/marcas/originals/marca-016.png": {
		"type": "image/png",
		"etag": "\"1cb249-BOzaJq1Oem61b8vCp6bLW6M+3oQ\"",
		"mtime": "2026-07-28T07:07:40.277Z",
		"size": 1880649,
		"path": "../public/images/portfolio/marcas/originals/marca-016.png"
	},
	"/images/portfolio/marcas/originals/marca-017.png": {
		"type": "image/png",
		"etag": "\"1a499d-9DjbQkXwWMGPTAX8fEDWfS9HY/M\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 1722781,
		"path": "../public/images/portfolio/marcas/originals/marca-017.png"
	},
	"/images/portfolio/marcas/originals/marca-020.png": {
		"type": "image/png",
		"etag": "\"1e60b3-mZjIhZkTVcB4XAp7rCLGO0Pvyps\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 1990835,
		"path": "../public/images/portfolio/marcas/originals/marca-020.png"
	},
	"/images/portfolio/marcas/originals/marca-021.png": {
		"type": "image/png",
		"etag": "\"1e4b36-0V5vH/6fOgvxMVGcJg9aIMu90+Q\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 1985334,
		"path": "../public/images/portfolio/marcas/originals/marca-021.png"
	},
	"/images/portfolio/marcas/originals/marca-022.png": {
		"type": "image/png",
		"etag": "\"1f2702-MCZdnRrvKYOjBqXKt6n72b8JpL4\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 2041602,
		"path": "../public/images/portfolio/marcas/originals/marca-022.png"
	},
	"/images/portfolio/marcas/originals/marca-023.png": {
		"type": "image/png",
		"etag": "\"2464eb-15CHF7BPYDWcM+uqTvpnFnY+UUc\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 2385131,
		"path": "../public/images/portfolio/marcas/originals/marca-023.png"
	},
	"/images/portfolio/marcas/originals/marca-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"59958f-ky+4Gc95wS3QMHE08ZeyOtWvwNk\"",
		"mtime": "2026-07-28T07:07:40.260Z",
		"size": 5870991,
		"path": "../public/images/portfolio/marcas/originals/marca-003.jpg"
	},
	"/images/portfolio/marcas/originals/marca-027.png": {
		"type": "image/png",
		"etag": "\"21e4ab-wFo01jvRF0rIFuUWd4MnxsM/+as\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 2221227,
		"path": "../public/images/portfolio/marcas/originals/marca-027.png"
	},
	"/images/portfolio/marcas/originals/marca-028.png": {
		"type": "image/png",
		"etag": "\"235efe-FRHzZ7oD3QuQkoMw5r8fGsNUVRg\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 2318078,
		"path": "../public/images/portfolio/marcas/originals/marca-028.png"
	},
	"/images/portfolio/marcas/originals/marca-029.png": {
		"type": "image/png",
		"etag": "\"221e82-9HMTPVp/BLYr8ZhLQByOqgQSvUA\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 2236034,
		"path": "../public/images/portfolio/marcas/originals/marca-029.png"
	},
	"/images/portfolio/marcas/originals/marca-032.png": {
		"type": "image/png",
		"etag": "\"25b3ce-u4Q+x3LgMhHnH213KZ8fn2oFsWo\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 2470862,
		"path": "../public/images/portfolio/marcas/originals/marca-032.png"
	},
	"/images/portfolio/marcas/originals/marca-031.png": {
		"type": "image/png",
		"etag": "\"2843db-KRgsDFtlhOkcdtxQmzzK4PwaoXQ\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 2638811,
		"path": "../public/images/portfolio/marcas/originals/marca-031.png"
	},
	"/images/portfolio/marcas/originals/marca-030.png": {
		"type": "image/png",
		"etag": "\"2830d8-EXIm7vSnWJ6FEQlrRuiIhpw108w\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 2633944,
		"path": "../public/images/portfolio/marcas/originals/marca-030.png"
	},
	"/images/portfolio/marcas/high/marca-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"ffe7b-aX94yNWfqAXZLogd5qxxz4T/K0s\"",
		"mtime": "2026-07-28T07:07:40.257Z",
		"size": 1048187,
		"path": "../public/images/portfolio/marcas/high/marca-001.jpg"
	},
	"/images/portfolio/marcas/originals/marca-033.png": {
		"type": "image/png",
		"etag": "\"25d28c-LSF6RTFUyqlel4rsm2KNSODNqoc\"",
		"mtime": "2026-07-28T07:07:40.279Z",
		"size": 2478732,
		"path": "../public/images/portfolio/marcas/originals/marca-033.png"
	},
	"/images/portfolio/marcas/high/marca-001.webp": {
		"type": "image/webp",
		"etag": "\"9e2da-vDAIVascKqvbc1g8YxXOQkxgBfI\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 647898,
		"path": "../public/images/portfolio/marcas/high/marca-001.webp"
	},
	"/images/portfolio/marcas/high/marca-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"f94ea-rYydOnYU4gUO3J7cV2Lb3qmOJ2o\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 1021162,
		"path": "../public/images/portfolio/marcas/high/marca-002.jpg"
	},
	"/images/portfolio/marcas/originals/marca-025.jpg": {
		"type": "image/jpeg",
		"etag": "\"9affdb-VFgITgCWqhviRTOZdU7EWTcsK+4\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 10158043,
		"path": "../public/images/portfolio/marcas/originals/marca-025.jpg"
	},
	"/images/portfolio/marcas/originals/marca-018.jpg": {
		"type": "image/jpeg",
		"etag": "\"a30d43-mYKMsvZWEEdXsbbzfMrxumpnSsk\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 10685763,
		"path": "../public/images/portfolio/marcas/originals/marca-018.jpg"
	},
	"/images/portfolio/marcas/high/marca-002.webp": {
		"type": "image/webp",
		"etag": "\"9b854-2FPXGKTZE9+ieb64c+9VeKUZrVk\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 637012,
		"path": "../public/images/portfolio/marcas/high/marca-002.webp"
	},
	"/images/portfolio/marcas/high/marca-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"fb0ed-1pYMwEjO0EUhFS6V0h6AST74D4Q\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 1028333,
		"path": "../public/images/portfolio/marcas/high/marca-003.jpg"
	},
	"/images/portfolio/marcas/high/marca-003.webp": {
		"type": "image/webp",
		"etag": "\"9ccf0-1LcK36AA8fnQFMyJss4gkmyRz6s\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 642288,
		"path": "../public/images/portfolio/marcas/high/marca-003.webp"
	},
	"/images/portfolio/marcas/high/marca-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"fd745-AT2zNmpGh5Qz7wkaFKRYQ7SBDag\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 1038149,
		"path": "../public/images/portfolio/marcas/high/marca-004.jpg"
	},
	"/images/portfolio/marcas/originals/marca-024.jpg": {
		"type": "image/jpeg",
		"etag": "\"89de41-kHBpm49O/RFj0X8mdqWq4pR5jvI\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 9035329,
		"path": "../public/images/portfolio/marcas/originals/marca-024.jpg"
	},
	"/images/portfolio/marcas/high/marca-004.webp": {
		"type": "image/webp",
		"etag": "\"a06e8-FZjOrKaaYDydJtiww56BSP5B1bw\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 657128,
		"path": "../public/images/portfolio/marcas/high/marca-004.webp"
	},
	"/images/portfolio/marcas/originals/marca-026.jpg": {
		"type": "image/jpeg",
		"etag": "\"8ba6e2-PbRXGkTyK5Xhq0PFnv42jpnLcG4\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 9152226,
		"path": "../public/images/portfolio/marcas/originals/marca-026.jpg"
	},
	"/images/portfolio/marcas/high/marca-005.webp": {
		"type": "image/webp",
		"etag": "\"9b5a0-AvXO3hP3t+cbRZDqfPrizvD7d8I\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 636320,
		"path": "../public/images/portfolio/marcas/high/marca-005.webp"
	},
	"/images/portfolio/marcas/high/marca-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"fa0ee-1nlbGakfNLUUy8p9JDJoeJF4LUQ\"",
		"mtime": "2026-07-28T07:07:40.267Z",
		"size": 1024238,
		"path": "../public/images/portfolio/marcas/high/marca-005.jpg"
	},
	"/images/portfolio/marcas/originals/marca-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"e762f2-GgTFi7xBiqY2kSMz8X2708WuFvA\"",
		"mtime": "2026-07-28T07:07:40.276Z",
		"size": 15164146,
		"path": "../public/images/portfolio/marcas/originals/marca-002.jpg"
	},
	"/images/portfolio/marcas/high/marca-006.webp": {
		"type": "image/webp",
		"etag": "\"92ab4-cVtSZyxmghSfVfrzOT2p1CcgljE\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 600756,
		"path": "../public/images/portfolio/marcas/high/marca-006.webp"
	},
	"/images/portfolio/marcas/high/marca-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"f2fe0-Ozfd/VJl5BGcG2hn+SM77D5o/L8\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 995296,
		"path": "../public/images/portfolio/marcas/high/marca-006.jpg"
	},
	"/images/portfolio/marcas/originals/marca-019.jpg": {
		"type": "image/jpeg",
		"etag": "\"c08db7-3X+CZj3XycPa+pq2OTCZXJpvIxY\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 12619191,
		"path": "../public/images/portfolio/marcas/originals/marca-019.jpg"
	},
	"/images/portfolio/marcas/high/marca-007.webp": {
		"type": "image/webp",
		"etag": "\"90cd6-ryClHpUTSWoj23A2uXheucBBF2E\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 593110,
		"path": "../public/images/portfolio/marcas/high/marca-007.webp"
	},
	"/images/portfolio/marcas/high/marca-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"f3e82-EFMv5GLJE2wdlUPHcolHF54m1UU\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 999042,
		"path": "../public/images/portfolio/marcas/high/marca-008.jpg"
	},
	"/images/portfolio/marcas/originals/marca-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"eda450-8RSpsXYQXUBC5dnE2RJN/5eklZY\"",
		"mtime": "2026-07-28T07:07:40.276Z",
		"size": 15574096,
		"path": "../public/images/portfolio/marcas/originals/marca-001.jpg"
	},
	"/images/portfolio/marcas/high/marca-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"f04c5-+1RaJJxQ1PWV8FQb9I7LYguM+M8\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 984261,
		"path": "../public/images/portfolio/marcas/high/marca-007.jpg"
	},
	"/images/portfolio/marcas/originals/marca-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"eaf2c7-S8cXZvc5J6s4fb+Z2M8SWc6zoj0\"",
		"mtime": "2026-07-28T07:07:40.276Z",
		"size": 15397575,
		"path": "../public/images/portfolio/marcas/originals/marca-004.jpg"
	},
	"/images/portfolio/marcas/originals/marca-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"eda5e8-J47lYi/XYuTCL9I3ayjY+rvWxQc\"",
		"mtime": "2026-07-28T07:07:40.277Z",
		"size": 15574504,
		"path": "../public/images/portfolio/marcas/originals/marca-005.jpg"
	},
	"/images/portfolio/marcas/high/marca-008.webp": {
		"type": "image/webp",
		"etag": "\"93ac8-fiRwxyhxabnxH+xL2KVYTlu/br8\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 604872,
		"path": "../public/images/portfolio/marcas/high/marca-008.webp"
	},
	"/images/portfolio/marcas/originals/marca-014.jpg": {
		"type": "image/jpeg",
		"etag": "\"edc1c4-Klp7rnRZyX6KgHGJc+EJ5qy6AaE\"",
		"mtime": "2026-07-28T07:07:40.278Z",
		"size": 15581636,
		"path": "../public/images/portfolio/marcas/originals/marca-014.jpg"
	},
	"/images/portfolio/marcas/high/marca-009.webp": {
		"type": "image/webp",
		"etag": "\"9128c-MvaEwQRwUT+V5h5uBoYH686mYEg\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 594572,
		"path": "../public/images/portfolio/marcas/high/marca-009.webp"
	},
	"/images/portfolio/marcas/high/marca-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"f0ec2-nYczh+kyb4D2Zhu49jWWCdMaJeo\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 986818,
		"path": "../public/images/portfolio/marcas/high/marca-009.jpg"
	},
	"/images/portfolio/marcas/originals/marca-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"ea6b56-cKZGh+wwApljdaMUy+6ut7qLhms\"",
		"mtime": "2026-07-28T07:07:40.277Z",
		"size": 15362902,
		"path": "../public/images/portfolio/marcas/originals/marca-010.jpg"
	},
	"/images/portfolio/marcas/high/marca-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"f44e8-ztBV7xPeQAFIbQgxNMWQJVza3HE\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 1000680,
		"path": "../public/images/portfolio/marcas/high/marca-010.jpg"
	},
	"/images/portfolio/marcas/high/marca-010.webp": {
		"type": "image/webp",
		"etag": "\"9640e-Z0YyFvCgmC/3f6RyCkO+nSRFdPE\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 615438,
		"path": "../public/images/portfolio/marcas/high/marca-010.webp"
	},
	"/images/portfolio/marcas/high/marca-011.jpg": {
		"type": "image/jpeg",
		"etag": "\"f0c02-6N8gzB4I2x7Q9jvz+rxrk64k8bg\"",
		"mtime": "2026-07-28T07:07:40.270Z",
		"size": 986114,
		"path": "../public/images/portfolio/marcas/high/marca-011.jpg"
	},
	"/images/portfolio/marcas/high/marca-011.webp": {
		"type": "image/webp",
		"etag": "\"8ff22-vjaA1QODHOEorHBVDD7ezj9MqGs\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 589602,
		"path": "../public/images/portfolio/marcas/high/marca-011.webp"
	},
	"/images/portfolio/marcas/high/marca-012.webp": {
		"type": "image/webp",
		"etag": "\"91910-vMa2Rs6ziYinq2/QpbpAFoff3lI\"",
		"mtime": "2026-07-28T07:07:40.269Z",
		"size": 596240,
		"path": "../public/images/portfolio/marcas/high/marca-012.webp"
	},
	"/images/portfolio/marcas/high/marca-013.webp": {
		"type": "image/webp",
		"etag": "\"91c48-DyT5i9mx8+oitmHq6lqM8Qk9Emw\"",
		"mtime": "2026-07-28T07:07:40.268Z",
		"size": 597064,
		"path": "../public/images/portfolio/marcas/high/marca-013.webp"
	},
	"/images/portfolio/marcas/high/marca-015.jpg": {
		"type": "image/jpeg",
		"etag": "\"2a844-kjtozGP215x6fhBCpvNVsi/XgvU\"",
		"mtime": "2026-07-28T07:07:40.270Z",
		"size": 174148,
		"path": "../public/images/portfolio/marcas/high/marca-015.jpg"
	},
	"/images/portfolio/marcas/high/marca-012.jpg": {
		"type": "image/jpeg",
		"etag": "\"f177f-p9X11fqvGJiyFp8xzNOpkndj/98\"",
		"mtime": "2026-07-28T07:07:40.269Z",
		"size": 989055,
		"path": "../public/images/portfolio/marcas/high/marca-012.jpg"
	},
	"/images/portfolio/marcas/high/marca-015.webp": {
		"type": "image/webp",
		"etag": "\"119e0-EV0OSQR72DEbxiwfbZwP1t7cuH4\"",
		"mtime": "2026-07-28T07:07:40.269Z",
		"size": 72160,
		"path": "../public/images/portfolio/marcas/high/marca-015.webp"
	},
	"/images/portfolio/marcas/high/marca-014.jpg": {
		"type": "image/jpeg",
		"etag": "\"f1afd-6LAP9r5IAfFYrIcg0iGfWS9N3ig\"",
		"mtime": "2026-07-28T07:07:40.269Z",
		"size": 989949,
		"path": "../public/images/portfolio/marcas/high/marca-014.jpg"
	},
	"/images/portfolio/marcas/high/marca-013.jpg": {
		"type": "image/jpeg",
		"etag": "\"f156f-bfdPYfaZ+fNcFvQhDHKDNDj237U\"",
		"mtime": "2026-07-28T07:07:40.269Z",
		"size": 988527,
		"path": "../public/images/portfolio/marcas/high/marca-013.jpg"
	},
	"/images/portfolio/marcas/high/marca-014.webp": {
		"type": "image/webp",
		"etag": "\"963d2-Wa6Al0BwdSIbNBELElAXyMce2Xo\"",
		"mtime": "2026-07-28T07:07:40.269Z",
		"size": 615378,
		"path": "../public/images/portfolio/marcas/high/marca-014.webp"
	},
	"/images/portfolio/marcas/originals/marca-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"10ec9ad-iwEy3nyKQoHcJ0B3/UxggPE+TbA\"",
		"mtime": "2026-07-28T07:07:40.277Z",
		"size": 17746349,
		"path": "../public/images/portfolio/marcas/originals/marca-008.jpg"
	},
	"/images/portfolio/marcas/originals/marca-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"10cc172-bKvilCId3lntaQ78Z1w5Yx6Inbc\"",
		"mtime": "2026-07-28T07:07:40.277Z",
		"size": 17613170,
		"path": "../public/images/portfolio/marcas/originals/marca-007.jpg"
	},
	"/images/portfolio/marcas/originals/marca-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"10cb4e1-sdD6K0fsIPTZaPUqgsz628rl4VM\"",
		"mtime": "2026-07-28T07:07:40.277Z",
		"size": 17609953,
		"path": "../public/images/portfolio/marcas/originals/marca-006.jpg"
	},
	"/images/portfolio/marcas/high/marca-016.jpg": {
		"type": "image/jpeg",
		"etag": "\"419d4-s160GvGtrDbOHg9Dzz4FGYgYWA4\"",
		"mtime": "2026-07-28T07:07:40.269Z",
		"size": 268756,
		"path": "../public/images/portfolio/marcas/high/marca-016.jpg"
	},
	"/images/portfolio/marcas/high/marca-016.webp": {
		"type": "image/webp",
		"etag": "\"2047a-pEjUV6bGMn3cFLfnuLBIc+ir++M\"",
		"mtime": "2026-07-28T07:07:40.270Z",
		"size": 132218,
		"path": "../public/images/portfolio/marcas/high/marca-016.webp"
	},
	"/images/portfolio/marcas/originals/marca-011.jpg": {
		"type": "image/jpeg",
		"etag": "\"10a8953-3OjWpVPEGy7VH4UVrC+x9uKN6C8\"",
		"mtime": "2026-07-28T07:07:40.277Z",
		"size": 17467731,
		"path": "../public/images/portfolio/marcas/originals/marca-011.jpg"
	},
	"/images/portfolio/marcas/high/marca-017.jpg": {
		"type": "image/jpeg",
		"etag": "\"3b724-9c+CN9BQO8VA7Icxcavju9ClSrE\"",
		"mtime": "2026-07-28T07:07:40.271Z",
		"size": 243492,
		"path": "../public/images/portfolio/marcas/high/marca-017.jpg"
	},
	"/images/portfolio/marcas/high/marca-017.webp": {
		"type": "image/webp",
		"etag": "\"19944-5TRCh+cWQvYxYhh/O+KeaAOA1eg\"",
		"mtime": "2026-07-28T07:07:40.270Z",
		"size": 104772,
		"path": "../public/images/portfolio/marcas/high/marca-017.webp"
	},
	"/images/portfolio/marcas/high/marca-018.webp": {
		"type": "image/webp",
		"etag": "\"3efe8-08asLwJPzkpQXKHJrR4SzhHSlEo\"",
		"mtime": "2026-07-28T07:07:40.270Z",
		"size": 258024,
		"path": "../public/images/portfolio/marcas/high/marca-018.webp"
	},
	"/images/portfolio/marcas/high/marca-018.jpg": {
		"type": "image/jpeg",
		"etag": "\"916fd-+zU9jLigGfpYD1Rb4aZ17doxFJ8\"",
		"mtime": "2026-07-28T07:07:40.270Z",
		"size": 595709,
		"path": "../public/images/portfolio/marcas/high/marca-018.jpg"
	},
	"/images/portfolio/marcas/high/marca-020.jpg": {
		"type": "image/jpeg",
		"etag": "\"44239-Z9+Jr1UPuPASlrKyZKVAXd+CoHM\"",
		"mtime": "2026-07-28T07:07:40.270Z",
		"size": 279097,
		"path": "../public/images/portfolio/marcas/high/marca-020.jpg"
	},
	"/images/portfolio/marcas/high/marca-020.webp": {
		"type": "image/webp",
		"etag": "\"22338-AXt0bMk1RNFgis/VAKvz7lepaI0\"",
		"mtime": "2026-07-28T07:07:40.270Z",
		"size": 140088,
		"path": "../public/images/portfolio/marcas/high/marca-020.webp"
	},
	"/images/portfolio/marcas/high/marca-021.webp": {
		"type": "image/webp",
		"etag": "\"2831a-khrU9sMDpFmVzqBWrHYRn/clw6A\"",
		"mtime": "2026-07-28T07:07:40.270Z",
		"size": 164634,
		"path": "../public/images/portfolio/marcas/high/marca-021.webp"
	},
	"/images/portfolio/marcas/high/marca-021.jpg": {
		"type": "image/jpeg",
		"etag": "\"4a05d-HrhI6IoSONKLMpxqfTpuRWMpW5g\"",
		"mtime": "2026-07-28T07:07:40.270Z",
		"size": 303197,
		"path": "../public/images/portfolio/marcas/high/marca-021.jpg"
	},
	"/images/portfolio/marcas/originals/marca-013.jpg": {
		"type": "image/jpeg",
		"etag": "\"10d4dd9-38O83cLsqmd784qnMBBXDAKvNz8\"",
		"mtime": "2026-07-28T07:07:40.277Z",
		"size": 17649113,
		"path": "../public/images/portfolio/marcas/originals/marca-013.jpg"
	},
	"/images/portfolio/marcas/high/marca-022.jpg": {
		"type": "image/jpeg",
		"etag": "\"47df2-VPWd1haE+x4lsCvDedKxejvfx3k\"",
		"mtime": "2026-07-28T07:07:40.271Z",
		"size": 294386,
		"path": "../public/images/portfolio/marcas/high/marca-022.jpg"
	},
	"/images/portfolio/marcas/high/marca-022.webp": {
		"type": "image/webp",
		"etag": "\"278f6-WbZfH8cKmIArzdUXADH41FxWBNU\"",
		"mtime": "2026-07-28T07:07:40.271Z",
		"size": 162038,
		"path": "../public/images/portfolio/marcas/high/marca-022.webp"
	},
	"/images/portfolio/marcas/high/marca-023.jpg": {
		"type": "image/jpeg",
		"etag": "\"76d10-tKNiO8qDvfKvmItOo8CTgoYOVDc\"",
		"mtime": "2026-07-28T07:07:40.271Z",
		"size": 486672,
		"path": "../public/images/portfolio/marcas/high/marca-023.jpg"
	},
	"/images/portfolio/marcas/high/marca-023.webp": {
		"type": "image/webp",
		"etag": "\"4b278-fqKhRGXen25euo242fqddFm4dwM\"",
		"mtime": "2026-07-28T07:07:40.271Z",
		"size": 307832,
		"path": "../public/images/portfolio/marcas/high/marca-023.webp"
	},
	"/images/portfolio/marcas/originals/marca-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"10bfe0b-7YYDok8mD8nmXwLaENhO6ULJsdU\"",
		"mtime": "2026-07-28T07:07:40.276Z",
		"size": 17563147,
		"path": "../public/images/portfolio/marcas/originals/marca-009.jpg"
	},
	"/images/portfolio/marcas/high/marca-024.webp": {
		"type": "image/webp",
		"etag": "\"65398-JyXAOekS69yGfvYvjDkLCLnQLjs\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 414616,
		"path": "../public/images/portfolio/marcas/high/marca-024.webp"
	},
	"/images/portfolio/marcas/high/marca-024.jpg": {
		"type": "image/jpeg",
		"etag": "\"a1589-uA0h0twLpoKSnU3OgyRiYw5XERA\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 660873,
		"path": "../public/images/portfolio/marcas/high/marca-024.jpg"
	},
	"/images/portfolio/marcas/high/marca-025.webp": {
		"type": "image/webp",
		"etag": "\"53dd8-NWGqVbBZnlfFUPGJKOVQkWenKcI\"",
		"mtime": "2026-07-28T07:07:40.271Z",
		"size": 343512,
		"path": "../public/images/portfolio/marcas/high/marca-025.webp"
	},
	"/images/portfolio/marcas/high/marca-026.webp": {
		"type": "image/webp",
		"etag": "\"49dfa-bPfaW1dmttPSh9H/6B87rXyHrmk\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 302586,
		"path": "../public/images/portfolio/marcas/high/marca-026.webp"
	},
	"/images/portfolio/marcas/high/marca-027.jpg": {
		"type": "image/jpeg",
		"etag": "\"5efd5-X+Ki9DAv/MkTZFGbeOyBVAxjhjE\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 389077,
		"path": "../public/images/portfolio/marcas/high/marca-027.jpg"
	},
	"/images/portfolio/marcas/high/marca-025.jpg": {
		"type": "image/jpeg",
		"etag": "\"92a52-jxNXv+5jm51Deok/JWaaFcVhO5E\"",
		"mtime": "2026-07-28T07:07:40.271Z",
		"size": 600658,
		"path": "../public/images/portfolio/marcas/high/marca-025.jpg"
	},
	"/images/portfolio/marcas/high/marca-019.webp": {
		"type": "image/webp",
		"etag": "\"19ab96-V/j/y3116WOeZJUZdeacEP/ryvs\"",
		"mtime": "2026-07-28T07:07:40.270Z",
		"size": 1682326,
		"path": "../public/images/portfolio/marcas/high/marca-019.webp"
	},
	"/images/portfolio/marcas/high/marca-027.webp": {
		"type": "image/webp",
		"etag": "\"37282-WEyq9YVT2fWaeanHzLpVuyeysGk\"",
		"mtime": "2026-07-28T07:07:40.271Z",
		"size": 225922,
		"path": "../public/images/portfolio/marcas/high/marca-027.webp"
	},
	"/images/portfolio/marcas/high/marca-026.jpg": {
		"type": "image/jpeg",
		"etag": "\"8eac4-voPIHt4NSuLwGihRPP7r7bWJYhg\"",
		"mtime": "2026-07-28T07:07:40.271Z",
		"size": 584388,
		"path": "../public/images/portfolio/marcas/high/marca-026.jpg"
	},
	"/images/portfolio/marcas/high/marca-019.jpg": {
		"type": "image/jpeg",
		"etag": "\"1c5adb-O7ULsv4xi0eu+aF57i/wpvhnZ80\"",
		"mtime": "2026-07-28T07:07:40.270Z",
		"size": 1858267,
		"path": "../public/images/portfolio/marcas/high/marca-019.jpg"
	},
	"/images/portfolio/marcas/high/marca-028.jpg": {
		"type": "image/jpeg",
		"etag": "\"5d252-YjZ22feEZj0zr8GPAxKkArCiTRE\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 381522,
		"path": "../public/images/portfolio/marcas/high/marca-028.jpg"
	},
	"/images/portfolio/marcas/high/marca-028.webp": {
		"type": "image/webp",
		"etag": "\"3cc14-b4D7hIM8ZWhvz6ePbRwiDGNM598\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 248852,
		"path": "../public/images/portfolio/marcas/high/marca-028.webp"
	},
	"/images/portfolio/marcas/high/marca-029.jpg": {
		"type": "image/jpeg",
		"etag": "\"57602-SF1D0KDfjs87qKqROMAw4kx442k\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 357890,
		"path": "../public/images/portfolio/marcas/high/marca-029.jpg"
	},
	"/images/portfolio/marcas/high/marca-029.webp": {
		"type": "image/webp",
		"etag": "\"33654-GyWwYuQv+27YYZtqNoKQ6wvsW5M\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 210516,
		"path": "../public/images/portfolio/marcas/high/marca-029.webp"
	},
	"/images/portfolio/marcas/high/marca-030.jpg": {
		"type": "image/jpeg",
		"etag": "\"6b873-Aihb/x929Kg9YnFSbtUr4lqxHl8\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 440435,
		"path": "../public/images/portfolio/marcas/high/marca-030.jpg"
	},
	"/images/portfolio/marcas/high/marca-030.webp": {
		"type": "image/webp",
		"etag": "\"4c5c8-4iIaOPENxhcgLO6wu33nq2GwrYc\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 312776,
		"path": "../public/images/portfolio/marcas/high/marca-030.webp"
	},
	"/images/portfolio/marcas/high/marca-031.jpg": {
		"type": "image/jpeg",
		"etag": "\"642e8-hDb+jkbRXS0ZpG7SYeVXH7+69vk\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 410344,
		"path": "../public/images/portfolio/marcas/high/marca-031.jpg"
	},
	"/images/portfolio/marcas/high/marca-031.webp": {
		"type": "image/webp",
		"etag": "\"49852-KyZi8wIH97Fod6VrLwWiJoShq4Q\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 301138,
		"path": "../public/images/portfolio/marcas/high/marca-031.webp"
	},
	"/images/portfolio/marcas/high/marca-032.jpg": {
		"type": "image/jpeg",
		"etag": "\"56566-Ds+DPkbtbIOp2ld3nO+ZBY+EHzU\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 353638,
		"path": "../public/images/portfolio/marcas/high/marca-032.jpg"
	},
	"/images/portfolio/marcas/high/marca-032.webp": {
		"type": "image/webp",
		"etag": "\"3c6e6-JkCeh5KHqJR719M4mvWX/rgSTYg\"",
		"mtime": "2026-07-28T07:07:40.272Z",
		"size": 247526,
		"path": "../public/images/portfolio/marcas/high/marca-032.webp"
	},
	"/images/portfolio/marcas/originals/marca-012.jpg": {
		"type": "image/jpeg",
		"etag": "\"10b765d-Jrk6ecKM+lO7WSZM9HI+bmwH1nA\"",
		"mtime": "2026-07-28T07:07:40.277Z",
		"size": 17528413,
		"path": "../public/images/portfolio/marcas/originals/marca-012.jpg"
	},
	"/images/portfolio/marcas/high/marca-033.jpg": {
		"type": "image/jpeg",
		"etag": "\"57f19-IqJNzmZ9w2NtzcJTntlZmGriuHs\"",
		"mtime": "2026-07-28T07:07:40.273Z",
		"size": 360217,
		"path": "../public/images/portfolio/marcas/high/marca-033.jpg"
	},
	"/images/portfolio/marcas/high/marca-033.webp": {
		"type": "image/webp",
		"etag": "\"3d8a6-0rhSsSl96TIQMPkL6O0zSdesVwo\"",
		"mtime": "2026-07-28T07:07:40.273Z",
		"size": 252070,
		"path": "../public/images/portfolio/marcas/high/marca-033.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-001.jpg": {
		"type": "image/jpeg",
		"etag": "\"125ab-2AqLXkaE1MgqzemCo/oL9plp3Jg\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 75179,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-001.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-001.webp": {
		"type": "image/webp",
		"etag": "\"9e8a-2GAR94CyUTRkFYNoP8ms9wZqu3g\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 40586,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-001.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-002.jpg": {
		"type": "image/jpeg",
		"etag": "\"11c15-7pYDsqYch0xAshcn3lMZmlrll2c\"",
		"mtime": "2026-07-28T07:07:40.263Z",
		"size": 72725,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-002.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-002.webp": {
		"type": "image/webp",
		"etag": "\"983a-HtqdeasY0Y7xrcK/TC7L6IHVqsg\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 38970,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-002.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-003.jpg": {
		"type": "image/jpeg",
		"etag": "\"11e2d-AI9u/SSMVQnjkUSJ3lFHHWwVmWU\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 73261,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-003.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-003.webp": {
		"type": "image/webp",
		"etag": "\"98f4-QZaC8krf3OTACRqt5ksXJbcvP9c\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 39156,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-003.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-004.jpg": {
		"type": "image/jpeg",
		"etag": "\"11d9f-LoKVQJWYSN6qsAeO+qqqB+PeiHM\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 73119,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-004.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-004.webp": {
		"type": "image/webp",
		"etag": "\"99b0-WHVj9qlXLW0DCdKxJyEOBXd3ZvQ\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 39344,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-004.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-005.jpg": {
		"type": "image/jpeg",
		"etag": "\"11bf5-s9WuLKJ6H0sc4N6OCIR/dyQ2BU0\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 72693,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-005.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-005.webp": {
		"type": "image/webp",
		"etag": "\"95e8-ba3zqe8s/FaRBd1l/UymkQXG1os\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 38376,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-005.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-006.jpg": {
		"type": "image/jpeg",
		"etag": "\"119ca-P+ZskRAe3a3vaSh9euCCfyLnDIE\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 72138,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-006.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-006.webp": {
		"type": "image/webp",
		"etag": "\"99e2-33luk8tcID7tgf1PPTs4+cqP/mM\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 39394,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-006.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-007.jpg": {
		"type": "image/jpeg",
		"etag": "\"11590-sv/rRORFGm6k6UnFXM0FWdXEJAY\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 71056,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-007.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-007.webp": {
		"type": "image/webp",
		"etag": "\"9478-ypPiXffksw0GX8xj2HdRZLEVKJE\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 38008,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-007.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-008.jpg": {
		"type": "image/jpeg",
		"etag": "\"11830-kg22kkll6BKWbvoI4bSmLWQs3Ds\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 71728,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-008.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-008.webp": {
		"type": "image/webp",
		"etag": "\"967a-D5lrvKOHT8LYhzENB9nAGjA+yTA\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 38522,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-008.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-009.jpg": {
		"type": "image/jpeg",
		"etag": "\"11493-iylRDJgZ0EwoLXyb/C5ROPlprQQ\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 70803,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-009.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-009.webp": {
		"type": "image/webp",
		"etag": "\"94b4-dnNcT+0lUCQ0h9MCZE8i1rlhArY\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 38068,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-009.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-010.jpg": {
		"type": "image/jpeg",
		"etag": "\"1186a-Eru3Kwfy7CL5be3ikIkXGY19rzo\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 71786,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-010.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-010.webp": {
		"type": "image/webp",
		"etag": "\"9192-SarqHfGU/yWLIBIVrQiA98lIrmc\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 37266,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-010.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-011.jpg": {
		"type": "image/jpeg",
		"etag": "\"1165c-E51HUe1XLN8Yqu6HDclIzcCtdM8\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 71260,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-011.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-011.webp": {
		"type": "image/webp",
		"etag": "\"9626-WSRADRlYJK/H1CvaJAyidGAYsW8\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 38438,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-011.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-012.jpg": {
		"type": "image/jpeg",
		"etag": "\"11745-YiKgxEyjYQS1taE0Wme7B21Ale0\"",
		"mtime": "2026-07-28T07:07:40.284Z",
		"size": 71493,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-012.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-012.webp": {
		"type": "image/webp",
		"etag": "\"970e-/rJIty6sxKuErRePXhiw/DFKytY\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 38670,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-012.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-013.jpg": {
		"type": "image/jpeg",
		"etag": "\"1160e-SJprq+nZPILU6Cg1utUjvZAt4Kc\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 71182,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-013.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-013.webp": {
		"type": "image/webp",
		"etag": "\"943c-t8+rojAo7/T84EGoPa23oXTXjC4\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 37948,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-013.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-014.jpg": {
		"type": "image/jpeg",
		"etag": "\"1126c-BOaaWJmgQcG4jHS07lh0ySMESOg\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 70252,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-014.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-014.webp": {
		"type": "image/webp",
		"etag": "\"91be-xmEfU+QPP986SLXN9RLtmawjBGU\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 37310,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-014.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-015.jpg": {
		"type": "image/jpeg",
		"etag": "\"5df7-bTSSBw2UMhgJ2YzZ9LQ+igNu4vs\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 24055,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-015.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-015.webp": {
		"type": "image/webp",
		"etag": "\"367e-RtvoetERTP7Cy9tiROegMDxIREQ\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 13950,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-015.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-016.jpg": {
		"type": "image/jpeg",
		"etag": "\"96ca-d2IRGSUh4dKtIvydTHkQM4FTFK8\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 38602,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-016.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-016.webp": {
		"type": "image/webp",
		"etag": "\"61b2-R1S42/ubzXX6qZKYCQ4oTEFU+ZM\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 25010,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-016.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-017.jpg": {
		"type": "image/jpeg",
		"etag": "\"8a07-whliaOTZgBqflceDqkCMkRy+Hsg\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 35335,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-017.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-017.webp": {
		"type": "image/webp",
		"etag": "\"5222-GteuswFKwmWWWfBSsb4IXoGm4ds\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 21026,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-017.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-018.jpg": {
		"type": "image/jpeg",
		"etag": "\"bbc1-YFLcjUx4FBks2XJceQqK/wU2Q60\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 48065,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-018.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-018.webp": {
		"type": "image/webp",
		"etag": "\"5310-rCKtIGNAPTpu3DWn195RY1agNfc\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 21264,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-018.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-019.jpg": {
		"type": "image/jpeg",
		"etag": "\"114da-W5X6/Own6PxYshS/2udlCHKg80U\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 70874,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-019.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-019.webp": {
		"type": "image/webp",
		"etag": "\"9806-XdyvOLNmPopijK1eVhjaFJ2HsQE\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 38918,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-019.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-020.jpg": {
		"type": "image/jpeg",
		"etag": "\"bdda-NuY769fxYYVuyPvwrz4PWQO16n8\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 48602,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-020.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-020.webp": {
		"type": "image/webp",
		"etag": "\"7e1a-tvqjI9ichTvkcNuMNF6LZlsKGh8\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 32282,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-020.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-021.jpg": {
		"type": "image/jpeg",
		"etag": "\"c1c1-+6thlDRROcBWaw3jx3cnHp7we9s\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 49601,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-021.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-021.webp": {
		"type": "image/webp",
		"etag": "\"8dbc-ZwKEgNG8mtmOINyew7+q7SPLecc\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 36284,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-021.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-022.jpg": {
		"type": "image/jpeg",
		"etag": "\"bfcb-lgZAK2GzGcx40KisbV+GdzurUEE\"",
		"mtime": "2026-07-28T07:07:40.285Z",
		"size": 49099,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-022.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-022.webp": {
		"type": "image/webp",
		"etag": "\"8c1c-vynWmy+wxh++QofCMVzP4KlY8L4\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 35868,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-022.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-023.jpg": {
		"type": "image/jpeg",
		"etag": "\"12fe9-yOmjq0ABHuM7OOjYNWDu5B/3VjY\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 77801,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-023.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-023.webp": {
		"type": "image/webp",
		"etag": "\"eeb0-hCnkFFacErrvJMlF+pPUK94Z+qY\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 61104,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-023.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-024.jpg": {
		"type": "image/jpeg",
		"etag": "\"b98d-qSeksHZlSBxIIILiSeAmRbM74+c\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 47501,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-024.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-024.webp": {
		"type": "image/webp",
		"etag": "\"5efc-mRZQRHgRbs14fuSj8uewkuew0C8\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 24316,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-024.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-025.jpg": {
		"type": "image/jpeg",
		"etag": "\"b99f-Rqz1BbW4VLEiP9b7B9+fAKjmb+o\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 47519,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-025.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-025.webp": {
		"type": "image/webp",
		"etag": "\"6112-/lxYhNT5mHkwEORjiAyDtZXDO3I\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 24850,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-025.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-026.jpg": {
		"type": "image/jpeg",
		"etag": "\"bb99-JO7iMn7ePEzG/ipt0VsyAGrCiDc\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 48025,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-026.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-026.webp": {
		"type": "image/webp",
		"etag": "\"631e-48c30saBFrobc2T5cZWqsaZrl7k\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 25374,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-026.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-027.jpg": {
		"type": "image/jpeg",
		"etag": "\"115c0-0SMSdRQGPpwY+QYEK1ymX7tn+TU\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 71104,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-027.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-027.webp": {
		"type": "image/webp",
		"etag": "\"cb40-JQjhVJDalY/QKzmMjvsp43Wrti0\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 52032,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-027.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-028.jpg": {
		"type": "image/jpeg",
		"etag": "\"da6c-6GB4n0UyDTFcWF1XPlpTe3NMBDA\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 55916,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-028.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-028.webp": {
		"type": "image/webp",
		"etag": "\"9c50-JfnVSqfIfXYwneOYO87l36GLq6Y\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 40016,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-028.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-029.jpg": {
		"type": "image/jpeg",
		"etag": "\"10bb7-X7BcRsaCB8f1et998pLbpPQaIEw\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 68535,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-029.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-029.webp": {
		"type": "image/webp",
		"etag": "\"b3be-8cPaOvkf9n3aixBSP8hmTYNGEWU\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 46014,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-029.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-030.jpg": {
		"type": "image/jpeg",
		"etag": "\"daa1-JFm1LYX9AH8PBAy8F+x+xOa6akI\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 55969,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-030.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-030.webp": {
		"type": "image/webp",
		"etag": "\"adb8-GecKVrJg+cp2N6WdLZ7buCCcf8Q\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 44472,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-030.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-031.jpg": {
		"type": "image/jpeg",
		"etag": "\"d556-6EebS5ioMlfAgEXiGOxWRXIUsiQ\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 54614,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-031.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-031.webp": {
		"type": "image/webp",
		"etag": "\"9e82-dc4VCeqkIEIe/ifzOjauj1jg5/Q\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 40578,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-031.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-032.jpg": {
		"type": "image/jpeg",
		"etag": "\"bf9a-Wfr1/C2Dle5czQjRVjKDuxqaO1w\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 49050,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-032.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-032.webp": {
		"type": "image/webp",
		"etag": "\"80e8-g67eMvUdqc9yATF15eZd5q17ZVQ\"",
		"mtime": "2026-07-28T07:07:40.286Z",
		"size": 33e3,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-032.webp"
	},
	"/images/portfolio/marcas/thumbnails/marca-033.jpg": {
		"type": "image/jpeg",
		"etag": "\"bb3a-aZsDGfYmLqGtM7tyMURh+NX2pog\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 47930,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-033.jpg"
	},
	"/images/portfolio/marcas/thumbnails/marca-033.webp": {
		"type": "image/webp",
		"etag": "\"7b28-gJQUUAJWep1ySnVABc5+YsvQ7XI\"",
		"mtime": "2026-07-28T07:07:40.287Z",
		"size": 31528,
		"path": "../public/images/portfolio/marcas/thumbnails/marca-033.webp"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy__dSmuP = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy__dSmuP
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
