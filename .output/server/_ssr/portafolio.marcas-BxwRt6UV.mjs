import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getPortfolioCategory } from "./portfolio-DtHcaEWg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portafolio.marcas-BxwRt6UV.js
var $$splitComponentImporter = () => import("./portafolio.marcas-DnhJi3ho.mjs");
var Route = createFileRoute("/portafolio/marcas")({
	head: () => ({ meta: [{ title: "Fotografía para marcas — Portafolio | AYACX Photography" }, {
		name: "description",
		content: "Galería de fotografía para productos, espacios, equipos y marcas por Alex Yaguana."
	}] }),
	loader: () => {
		const category = getPortfolioCategory("marcas");
		if (!category) throw notFound();
		return { category };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
