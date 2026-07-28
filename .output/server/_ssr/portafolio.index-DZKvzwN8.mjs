import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as SiteLayout, i as Eyebrow } from "./SiteLayout-DnIZqpiL.mjs";
import { r as visiblePortfolioCategories } from "./portfolio-DtHcaEWg.mjs";
import { t as PortfolioCategoryMosaic } from "./PortfolioCategoryMosaic-BVMPXi8E.mjs";
import { t as FinalCta } from "./FinalCta-CIB92onh.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portafolio.index-DZKvzwN8.js
var import_jsx_runtime = require_jsx_runtime();
function Portafolio() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper pb-4 pt-16 lg:pt-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					accent: "steel",
					className: "text-muted-foreground",
					children: "Portafolio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-1 mt-6 max-w-[15ch]",
					children: "Explora el trabajo por especialidad."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lead max-w-xl self-end",
					children: "Retratos, eventos y contenido visual para personas y marcas que quieren contar algo real."
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-24 pt-12 lg:pb-32 lg:pt-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shell",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCategoryMosaic, { categories: visiblePortfolioCategories })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, { withImage: false })
	] });
}
//#endregion
export { Portafolio as component };
