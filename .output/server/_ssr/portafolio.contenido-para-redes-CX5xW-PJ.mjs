import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getPortfolioCategory } from "./portfolio-DtHcaEWg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portafolio.contenido-para-redes-CX5xW-PJ.js
var $$splitComponentImporter = () => import("./portafolio.contenido-para-redes-B4bfKGG4.mjs");
var Route = createFileRoute("/portafolio/contenido-para-redes")({
	head: () => ({ meta: [{ title: "Contenido para redes — Portafolio | AYACX Photography" }, {
		name: "description",
		content: "Galería de contenido visual para redes, creadores, profesionales y marcas personales."
	}] }),
	loader: () => {
		const category = getPortfolioCategory("contenido-para-redes");
		if (!category) throw notFound();
		return { category };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
