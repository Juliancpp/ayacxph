import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getPortfolioCategory } from "./portfolio-DtHcaEWg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/portafolio.eventos-BPv3q8Bo.js
var $$splitComponentImporter = () => import("./portafolio.eventos-C8mFKmrB.mjs");
var Route = createFileRoute("/portafolio/eventos")({
	head: () => ({ meta: [{ title: "Eventos — Portafolio | AYACX Photography" }, {
		name: "description",
		content: "Galería de fotografía de eventos por Alex Yaguana para AYACX Photography en Quito, Ecuador."
	}] }),
	loader: () => {
		const category = getPortfolioCategory("eventos");
		if (!category) throw notFound();
		return { category };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
