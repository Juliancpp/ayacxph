import { r as contact } from "./site-DD7LDg1W.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as BtnAnchor } from "./SiteLayout-DnIZqpiL.mjs";
import { t as generatedPortfolioImages } from "./portfolio.generated-BiWpjP-O.mjs";
import { t as PortfolioImage } from "./PortfolioImage-B4ap599g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FinalCta-CIB92onh.js
var import_jsx_runtime = require_jsx_runtime();
var closingImage = generatedPortfolioImages.retratos.find((image) => image.originalFilename === "DSC04979.jpg");
function FinalCta({ title = "¿Tienes una historia que quieres conservar?", text = "Cuéntame sobre tu evento, sesión o proyecto y preparemos una propuesta adecuada para ti.", withImage = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y bg-ink text-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-2 max-w-xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lead mt-6 max-w-lg",
					children: text
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnAnchor, {
						href: contact.whatsapp,
						target: "_blank",
						rel: "noreferrer noopener",
						variant: "light",
						className: "w-full sm:w-auto",
						children: "Consultar disponibilidad"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm opacity-80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.whatsapp,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "underline-offset-4 hover:underline",
							children: ["WhatsApp ", contact.phoneDisplay]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.instagram,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "underline-offset-4 hover:underline",
							children: ["Instagram ", contact.instagramHandle]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${contact.email}`,
							className: "underline-offset-4 hover:underline",
							children: contact.email
						}) })
					]
				})
			] }), withImage && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative aspect-[3/2] overflow-hidden border border-paper/12 bg-paper/5",
				children: closingImage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioImage, {
					image: closingImage,
					variant: "display",
					sizes: "(min-width: 1024px) 50vw, 100vw",
					loading: "lazy",
					decoding: "async",
					className: "h-full w-full object-cover",
					style: { objectPosition: "50% 42%" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 bg-ink/10" })] })
			})]
		})
	});
}
//#endregion
export { FinalCta as t };
