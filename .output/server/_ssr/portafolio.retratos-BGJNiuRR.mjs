import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getPortfolioCategory } from "./portfolio-DtHcaEWg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portafolio.retratos-BGJNiuRR.js
var $$splitComponentImporter = () => import("./portafolio.retratos-wGvMotBJ.mjs");
var Route = createFileRoute("/portafolio/retratos")({
	head: () => ({ meta: [{ title: "Retratos — Portafolio | AYACX Photography" }, {
		name: "description",
		content: "Galería de retratos personales, profesionales y editoriales por Alex Yaguana."
	}] }),
	loader: () => {
		const category = getPortfolioCategory("retratos");
		if (!category) throw notFound();
		return { category };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
