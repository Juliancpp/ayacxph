import { a as processSteps } from "./site-DD7LDg1W.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as Eyebrow } from "./SiteLayout-DnIZqpiL.mjs";
import { t as Reveal } from "./Reveal-DwrD6Sdu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProcessSection-DhcwGXHU.js
var import_jsx_runtime = require_jsx_runtime();
function ProcessSection({ tone = "light" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: tone === "muted" ? "section-y bg-mist" : "section-y bg-paper",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
					accent: "steel",
					className: "text-muted-foreground",
					children: "Proceso"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-2 mt-5 max-w-3xl",
					children: "Una experiencia clara, de principio a fin."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8",
					children: processSteps.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						as: "li",
						delay: i * 70,
						className: "relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-6 hidden h-px w-full bg-ink/15 lg:block" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6 h-10 w-px bg-ink/15 lg:hidden",
								"aria-hidden": "true"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-[family-name:var(--font-display)] text-4xl font-light text-ink/35",
								children: step.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 text-xl md:text-2xl",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[0.95rem] leading-relaxed text-muted-foreground",
								children: step.text
							})
						]
					}, step.number))
				})
			]
		})
	});
}
//#endregion
export { ProcessSection as t };
