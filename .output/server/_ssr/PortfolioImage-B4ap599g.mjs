import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PortfolioImage-B4ap599g.js
var import_jsx_runtime = require_jsx_runtime();
function PortfolioImage({ image, variant = "display", sizes, ...props }) {
	const src = getSrc(image, variant);
	const srcSet = getSrcSet(image, variant);
	const sources = getSources(image, variant);
	if (!src) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [sources?.map((source) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
		type: source.type,
		srcSet: source.srcSet,
		sizes
	}, `${source.type}-${source.srcSet}`)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		...props,
		src,
		srcSet,
		sizes,
		width: image.width,
		height: image.height,
		alt: image.alt
	})] });
}
function getSrc(image, variant) {
	if (variant === "thumbnail") return image.thumbnailSrc ?? image.src;
	if (variant === "lightbox") return image.highResolutionSrc ?? image.src;
	return image.src ?? image.mediumSrc;
}
function getSrcSet(image, variant) {
	if (variant === "thumbnail") return image.thumbnailSrcSet ?? image.srcSet;
	if (variant === "lightbox") return image.highResolutionSrcSet ?? image.srcSet;
	return image.srcSet;
}
function getSources(image, variant) {
	if (variant === "thumbnail") return image.thumbnailSources;
	if (variant === "lightbox") return image.lightboxSources;
	return image.sources;
}
//#endregion
export { PortfolioImage as t };
