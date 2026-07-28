import { n as brand, o as services, r as contact } from "./site-DD7LDg1W.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as SiteLayout, i as Eyebrow, n as BtnAnchor, o as cn, r as BtnLink } from "./SiteLayout-DnIZqpiL.mjs";
import { r as visiblePortfolioCategories } from "./portfolio-DtHcaEWg.mjs";
import { t as ImagePlaceholder } from "./ImagePlaceholder-BlPOlJje.mjs";
import { t as PortfolioImage } from "./PortfolioImage-B4ap599g.mjs";
import { t as PortfolioCategoryMosaic } from "./PortfolioCategoryMosaic-BVMPXi8E.mjs";
import { t as FinalCta } from "./FinalCta-CIB92onh.mjs";
import { t as Reveal } from "./Reveal-DwrD6Sdu.mjs";
import { t as ProcessSection } from "./ProcessSection-DhcwGXHU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DyDUxbnA.js
var import_jsx_runtime = require_jsx_runtime();
var accentBar = {
	sage: "bg-sage",
	steel: "bg-steel",
	sand: "bg-sand"
};
function ServiceCard({ service, featured = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "h-full",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/servicios",
			hash: service.slug,
			"aria-label": `Ver servicio de ${service.title}`,
			className: cn("group flex h-full cursor-pointer flex-col border-t border-ink/12 pt-6 transition-colors hover:border-ink/45 focus-visible:outline-offset-4 active:translate-y-px", featured && "md:pt-8"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					"aria-hidden": "true",
					className: cn("mb-6 block h-1 w-10", accentBar[service.accent])
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-muted-foreground",
						children: service.number
					}), featured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow bg-sage px-3 py-1 text-ink",
						children: "Servicio principal"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: cn("mt-3 font-[family-name:var(--font-display)] font-light", featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"),
					children: service.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground",
					children: service.short
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm leading-relaxed text-ink/70",
					children: [
						"Para: ",
						service.idealFor.slice(0, 3).join(", "),
						"."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ui-label mt-6 inline-flex min-h-11 items-center underline underline-offset-[6px] decoration-ink/35 transition-colors group-hover:decoration-ink",
					children: "Ver servicio"
				})
			]
		})
	});
}
function Home() {
	const primaryCategory = visiblePortfolioCategories[0];
	const heroImage = primaryCategory?.heroImage;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, {
		overHero: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "flex min-h-svh items-center bg-ink pt-[76px] text-paper lg:pt-20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shell grid w-full items-center gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-16 lg:py-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "order-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
								accent: "sage",
								className: "opacity-80",
								children: "AYACX Photography"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "mt-7 max-w-[16ch] text-balance font-[family-name:var(--font-display)] text-[clamp(2.75rem,4vw,4.25rem)] font-light leading-[1.04]",
								children: brand.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead mt-7 max-w-md",
								children: "Retratos, eventos y contenido visual con una estética natural, elegante y cinematográfica en Quito, Ecuador."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 flex flex-col gap-3 sm:flex-row sm:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnLink, {
									to: "/portafolio",
									variant: "light",
									className: "w-full sm:w-auto",
									children: "Ver portafolio"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnAnchor, {
									href: contact.whatsapp,
									target: "_blank",
									rel: "noreferrer noopener",
									variant: "outline",
									className: "w-full sm:w-auto",
									children: "Consultar disponibilidad"
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "order-2",
						children: heroImage?.src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioImage, {
							image: heroImage,
							variant: "display",
							sizes: "(min-width: 1024px) 42vw, 100vw",
							loading: "eager",
							fetchPriority: "high",
							decoding: "async",
							className: "mx-auto h-auto w-full object-contain lg:max-w-[540px]",
							style: { objectPosition: primaryCategory.heroFocalPoint }
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
							label: "Fotografía principal de retrato",
							ratio: "4:5",
							tone: "paper",
							className: "mx-auto lg:max-w-[540px]"
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						accent: "sand",
						className: "text-muted-foreground",
						children: "AYACX Photography"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-2 max-w-[18ch]",
						children: "Fotografía para recordar, mostrar y comunicar."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead mt-10 max-w-xl",
						children: "Cada persona, evento y marca tiene una historia diferente. Mi trabajo es entenderla y transformarla en imágenes auténticas, cuidadas y visualmente memorables."
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y bg-mist",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shell",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							accent: "sage",
							className: "text-muted-foreground",
							children: "Servicios"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-2 mt-5 max-w-2xl",
							children: "Servicios para eventos, personas y marcas."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead mt-5 max-w-2xl",
							children: "Retratos es la especialidad principal. También puedes consultar eventos, fotografía para marcas y contenido para redes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8",
							children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
								delay: i * 60,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServiceCard, {
									service: s,
									featured: i === 0
								})
							}, s.slug))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y bg-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shell",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
								accent: "steel",
								className: "text-muted-foreground",
								children: "Portafolio"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-2 mt-5",
								children: "Explora el trabajo por especialidad."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead mt-4 max-w-xl",
								children: "Entra a Retratos, Eventos, Fotografía para marcas o Contenido para redes para ver la galería completa de cada pilar."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/portafolio",
							className: "ui-label inline-flex min-h-11 items-center underline-offset-[6px] hover:underline",
							children: "Ver portafolio completo"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioCategoryMosaic, { categories: visiblePortfolioCategories })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "section-y bg-mist",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shell grid gap-12 lg:grid-cols-2 lg:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							accent: "sand",
							className: "text-muted-foreground",
							children: "Sobre mí"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-2 mt-5",
							children: "Hola, soy Alex Yaguana."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead mt-8 max-w-lg",
							children: "Soy fotógrafo y creador de contenido en Quito, Ecuador. Me especializo en eventos, retratos, fotografía para marcas y contenido visual para redes sociales."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead mt-5 max-w-lg",
							children: "Busco crear imágenes naturales, elegantes y con un estilo cinematográfico que transmitan personalidad y cuenten una historia."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mt-8 text-muted-foreground",
							children: brand.years
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnLink, {
							to: "/sobre-mi",
							variant: "outline",
							className: "mt-8 w-full sm:w-auto",
							children: "Conoce más sobre mí"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-square overflow-hidden border border-ink/8 bg-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid h-full grid-cols-2 grid-rows-2 gap-px bg-ink/10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
									label: "Retrato real de Alex Yaguana",
									ratio: "1:1",
									tone: "paper",
									compact: true,
									className: "h-full border-0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
									label: "Alex trabajando durante una sesión",
									ratio: "1:1",
									tone: "sage",
									compact: true,
									className: "h-full border-0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
									label: "Detalle real de producción fotográfica",
									ratio: "16:9",
									tone: "paper",
									compact: true,
									className: "col-span-2 h-full border-0"
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink py-28 text-paper lg:py-44",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shell max-w-5xl text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "display-2 text-balance",
						children: [
							"“",
							brand.philosophy,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow mt-12 opacity-55",
						children: "Alex Yaguana — AYACX Photography"
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
		]
	});
}
//#endregion
export { Home as component };
