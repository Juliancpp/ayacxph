import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as visiblePortfolioCategories } from "./portfolio-DtHcaEWg.mjs";
import { t as Route$7 } from "./portafolio.contenido-para-redes-CX5xW-PJ.mjs";
import { t as Route$8 } from "./portafolio.eventos-BPv3q8Bo.mjs";
import { t as Route$9 } from "./portafolio.marcas-BxwRt6UV.mjs";
import { t as Route$10 } from "./portafolio.retratos-BGJNiuRR.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-M04YiCEw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-HhQ2G_Ko.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	window.__lovableReportRuntimeError?.({
		message,
		stack: error instanceof Error ? error.stack : void 0,
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow opacity-60",
				children: "Error 404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-1 mt-6 max-w-2xl text-center",
				children: "Esta página no existe."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lead mt-6 max-w-md text-center",
				children: "Puede que el enlace haya cambiado. Vuelve al inicio o revisa el portafolio."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 flex flex-col gap-3 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "inline-flex min-h-11 items-center justify-center bg-paper px-6 py-3 font-[family-name:var(--font-ui)] text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ink",
					children: "Volver al inicio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/portafolio",
					className: "inline-flex min-h-11 items-center justify-center border border-paper/40 px-6 py-3 font-[family-name:var(--font-ui)] text-[0.8125rem] font-semibold uppercase tracking-[0.14em]",
					children: "Ver portafolio"
				})]
			})
		]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display-3",
					children: "Esta página no cargó"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-muted-foreground",
					children: "Algo falló de nuestro lado. Puedes intentar de nuevo o volver al inicio."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-wrap justify-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex min-h-11 items-center justify-center bg-ink px-6 py-3 font-[family-name:var(--font-ui)] text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-paper",
						children: "Intentar de nuevo"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex min-h-11 items-center justify-center border border-ink/25 px-6 py-3 font-[family-name:var(--font-ui)] text-[0.8125rem] font-semibold uppercase tracking-[0.14em]",
						children: "Ir al inicio"
					})]
				})
			]
		})
	});
}
var Route$6 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "AYACX Photography — Fotografía en Quito" },
			{
				name: "description",
				content: "Fotografía auténtica de eventos, retratos y marcas en Quito, Ecuador, por Alex Yaguana."
			},
			{
				name: "author",
				content: "Alex Yaguana"
			},
			{
				property: "og:site_name",
				content: "AYACX Photography"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			},
			{
				rel: "icon",
				href: "/icons/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png"
			},
			{
				rel: "icon",
				href: "/icons/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png"
			},
			{
				rel: "apple-touch-icon",
				href: "/icons/apple-touch-icon.png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "es",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$6.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter$4 = () => import("./routes-DyDUxbnA.mjs");
var Route$5 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "AYACX Photography — Fotografía de eventos, retratos y marcas en Quito" },
		{
			name: "description",
			content: "Alex Yaguana, fotógrafo en Quito. Fotografía auténtica para eventos, personas y marcas que quieren contar algo real."
		},
		{
			property: "og:title",
			content: "AYACX Photography — Fotografía en Quito"
		},
		{
			property: "og:description",
			content: "Fotografía auténtica para eventos, personas y marcas. Por Alex Yaguana."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contacto-CLPYxiok.mjs");
var Route$4 = createFileRoute("/contacto")({
	head: () => ({ meta: [
		{ title: "Contacto — AYACX Photography" },
		{
			name: "description",
			content: "Escríbeme por WhatsApp o el formulario para consultar disponibilidad de eventos, retratos y proyectos de marca en Quito."
		},
		{
			property: "og:title",
			content: "Contacto — AYACX Photography"
		},
		{
			property: "og:description",
			content: "Cuéntame qué tienes en mente."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./servicios-DgB3kNDX.mjs");
var Route$3 = createFileRoute("/servicios")({
	head: () => ({ meta: [
		{ title: "Servicios — AYACX Photography" },
		{
			name: "description",
			content: "Sesiones fotográficas desde $80 y cobertura de eventos desde $150 por AYACX Photography en Quito, Ecuador."
		},
		{
			property: "og:title",
			content: "Servicios — AYACX Photography"
		},
		{
			property: "og:description",
			content: "Planes claros para sesiones fotográficas, cobertura de eventos y proyectos visuales para marcas."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var BASE_URL = "";
var Route$2 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "monthly",
				priority: "1.0"
			},
			{
				path: "/portafolio",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/servicios",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/sobre-mi",
				changefreq: "yearly",
				priority: "0.7"
			},
			{
				path: "/contacto",
				changefreq: "yearly",
				priority: "0.8"
			},
			...visiblePortfolioCategories.map((category) => ({
				path: `/portafolio/${category.slug}`,
				changefreq: "monthly",
				priority: "0.8"
			}))
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$1 = () => import("./sobre-mi-tbnD9zbb.mjs");
var Route$1 = createFileRoute("/sobre-mi")({
	head: () => ({ meta: [
		{ title: "Sobre mí — Alex Yaguana | AYACX Photography" },
		{
			name: "description",
			content: "Alex Yaguana, fotógrafo y creador de contenido en Quito. Dirección cercana, estética elegante y mirada cinematográfica."
		},
		{
			property: "og:title",
			content: "Sobre mí — Alex Yaguana | AYACX Photography"
		},
		{
			property: "og:description",
			content: "Fotografía cercana, dirección clara y una mirada personal."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./portafolio.index-DZKvzwN8.mjs");
var Route = createFileRoute("/portafolio/")({
	head: () => ({ meta: [
		{ title: "Portafolio — AYACX Photography" },
		{
			name: "description",
			content: "Explora retratos, eventos, fotografía para marcas y contenido para redes por Alex Yaguana."
		},
		{
			property: "og:title",
			content: "Portafolio — AYACX Photography"
		},
		{
			property: "og:description",
			content: "Retratos, eventos y contenido visual para personas y marcas que quieren contar algo real."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$5.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$6
});
var ContactoRoute = Route$4.update({
	id: "/contacto",
	path: "/contacto",
	getParentRoute: () => Route$6
});
var ServiciosRoute = Route$3.update({
	id: "/servicios",
	path: "/servicios",
	getParentRoute: () => Route$6
});
var SitemapDotxmlRoute = Route$2.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$6
});
var SobreMiRoute = Route$1.update({
	id: "/sobre-mi",
	path: "/sobre-mi",
	getParentRoute: () => Route$6
});
var PortafolioIndexRoute = Route.update({
	id: "/portafolio/",
	path: "/portafolio/",
	getParentRoute: () => Route$6
});
var rootRouteChildren = {
	IndexRoute,
	ContactoRoute,
	ServiciosRoute,
	SitemapDotxmlRoute,
	SobreMiRoute,
	PortafolioContenidoParaRedesRoute: Route$7.update({
		id: "/portafolio/contenido-para-redes",
		path: "/portafolio/contenido-para-redes",
		getParentRoute: () => Route$6
	}),
	PortafolioEventosRoute: Route$8.update({
		id: "/portafolio/eventos",
		path: "/portafolio/eventos",
		getParentRoute: () => Route$6
	}),
	PortafolioMarcasRoute: Route$9.update({
		id: "/portafolio/marcas",
		path: "/portafolio/marcas",
		getParentRoute: () => Route$6
	}),
	PortafolioRetratosRoute: Route$10.update({
		id: "/portafolio/retratos",
		path: "/portafolio/retratos",
		getParentRoute: () => Route$6
	}),
	PortafolioIndexRoute
};
var routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
