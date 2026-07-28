import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as ChevronRight, h as ArrowLeft, m as ArrowRight, p as ChevronLeft, t as X } from "../_libs/lucide-react.mjs";
import { a as SiteLayout, i as Eyebrow, n as BtnAnchor, r as BtnLink } from "./SiteLayout-DnIZqpiL.mjs";
import { r as visiblePortfolioCategories, t as getCategoryContactHref } from "./portfolio-DtHcaEWg.mjs";
import { t as ImagePlaceholder } from "./ImagePlaceholder-BlPOlJje.mjs";
import { t as PortfolioImage } from "./PortfolioImage-B4ap599g.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PortfolioCategoryPage-CGGHLsI0.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Gallery({ items, itemLabel = "fotografía" }) {
	const visualItems = items;
	const [openIndex, setOpenIndex] = (0, import_react.useState)(null);
	const triggersRef = (0, import_react.useRef)([]);
	const close = (0, import_react.useCallback)(() => {
		const i = openIndex;
		setOpenIndex(null);
		if (i !== null) requestAnimationFrame(() => triggersRef.current[i]?.focus());
	}, [openIndex]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6",
		children: visualItems.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryButton, {
			item,
			index,
			count: visualItems.length,
			itemLabel,
			triggersRef,
			onOpen: setOpenIndex
		}, `${index}-${getItemKey(item)}`))
	}), openIndex !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
		items: visualItems,
		index: openIndex,
		onIndexChange: setOpenIndex,
		onClose: close
	})] });
}
function GalleryButton({ item, index, count, itemLabel, triggersRef, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		ref: (el) => {
			triggersRef.current[index] = el;
		},
		onClick: () => onOpen(index),
		"aria-label": `Abrir ${itemLabel} ${index + 1} de ${count} en vista ampliada: ${getItemLabel(item)}`,
		className: "group block aspect-square w-full cursor-pointer overflow-hidden text-left focus-visible:outline-offset-4 active:translate-y-px",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative h-full w-full overflow-hidden border border-transparent transition-colors group-hover:border-ink/25",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "h-full w-full transition-transform duration-500 group-hover:scale-[1.02]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryThumb, { item })
			})
		})
	});
}
function Lightbox({ items, index, onIndexChange, onClose }) {
	const dialogRef = (0, import_react.useRef)(null);
	const touchX = (0, import_react.useRef)(null);
	const prev = (0, import_react.useCallback)(() => onIndexChange((index - 1 + items.length) % items.length), [
		index,
		items.length,
		onIndexChange
	]);
	const next = (0, import_react.useCallback)(() => onIndexChange((index + 1) % items.length), [
		index,
		items.length,
		onIndexChange
	]);
	(0, import_react.useEffect)(() => {
		dialogRef.current?.focus();
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") prev();
			if (e.key === "ArrowRight") next();
			if (e.key !== "Tab" || !dialogRef.current) return;
			const focusable = Array.from(dialogRef.current.querySelectorAll("button:not([disabled]), [href], [tabindex]:not([tabindex=\"-1\"])"));
			if (focusable.length === 0) return;
			const first = focusable[0];
			const last = focusable[focusable.length - 1];
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => {
			window.removeEventListener("keydown", onKey);
			document.body.style.overflow = prevOverflow;
		};
	}, [
		onClose,
		prev,
		next
	]);
	const item = items[index];
	const itemSrc = getLightboxSrc(item);
	const [status, setStatus] = (0, import_react.useState)(itemSrc ? "loading" : "idle");
	(0, import_react.useEffect)(() => {
		setStatus(itemSrc ? "loading" : "idle");
	}, [itemSrc]);
	(0, import_react.useEffect)(() => {
		const preloads = [items[(index - 1 + items.length) % items.length], items[(index + 1) % items.length]].map(getLightboxSrc).filter((src) => Boolean(src)).map((src) => {
			const img = new Image();
			img.src = src;
			return img;
		});
		return () => {
			preloads.forEach((img) => {
				img.onload = null;
				img.onerror = null;
			});
		};
	}, [index, items]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: dialogRef,
		role: "dialog",
		"aria-modal": "true",
		"aria-label": `Galería, imagen ${index + 1} de ${items.length}`,
		tabIndex: -1,
		className: "fixed inset-0 z-[60] flex flex-col bg-ink text-paper",
		onTouchStart: (e) => touchX.current = e.touches[0].clientX,
		onTouchEnd: (e) => {
			if (touchX.current === null) return;
			const dx = e.changedTouches[0].clientX - touchX.current;
			if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
			touchX.current = null;
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex h-[76px] shrink-0 items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "eyebrow opacity-70",
				children: [
					index + 1,
					" / ",
					items.length
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				"aria-label": "Cerrar galería",
				className: "-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					className: "h-6 w-6",
					"aria-hidden": "true"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 items-center justify-center gap-2 px-3 pb-6 sm:gap-6 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: prev,
					"aria-label": "Fotografía anterior",
					className: "group flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center bg-transparent text-paper/80 transition-opacity hover:text-paper focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-paper/70 active:scale-95 sm:h-14 sm:w-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {
						className: "h-6 w-6 transition-transform duration-200 group-hover:-translate-x-0.5 sm:h-7 sm:w-7",
						strokeWidth: 1.6,
						"aria-hidden": "true"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-h-full w-full max-w-3xl",
					children: itemSrc ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex max-h-[calc(100vh-8rem)] items-center justify-center",
						children: [status === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							role: "status",
							className: "eyebrow absolute text-paper/70",
							children: "Cargando fotografía"
						}), status === "error" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-paper/20 bg-paper/5 p-8 text-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lead text-paper",
								children: "No se pudo cargar esta fotografía."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setStatus("loading"),
								className: "ui-label mt-6 min-h-11 underline-offset-4 hover:underline",
								children: "Intentar de nuevo"
							})]
						}) : isPortfolioImage(item) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioImage, {
							image: item,
							variant: "lightbox",
							sizes: "100vw",
							decoding: "async",
							className: "max-h-[calc(100vh-8rem)] w-auto max-w-full object-contain",
							onLoad: () => setStatus("loaded"),
							onError: () => setStatus("error")
						}) : null]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
						label: getItemLabel(item),
						ratio: item.ratio,
						tone: "paper"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: next,
					"aria-label": "Fotografía siguiente",
					className: "group flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center bg-transparent text-paper/80 transition-opacity hover:text-paper focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-paper/70 active:scale-95 sm:h-14 sm:w-14",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {
						className: "h-6 w-6 transition-transform duration-200 group-hover:translate-x-0.5 sm:h-7 sm:w-7",
						strokeWidth: 1.6,
						"aria-hidden": "true"
					})
				})
			]
		})]
	});
}
function GalleryThumb({ item }) {
	if (!getThumbSrc(item)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
		label: getItemLabel(item),
		ratio: "1:1",
		compact: true,
		className: "h-full w-full"
	});
	if (isPortfolioImage(item)) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioImage, {
		image: item,
		variant: "thumbnail",
		sizes: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
		loading: "lazy",
		decoding: "async",
		className: "aspect-square h-full w-full object-cover",
		style: {
			aspectRatio: "1 / 1",
			objectPosition: item.focalPoint ?? "50% 50%"
		}
	});
	return null;
}
function isPortfolioImage(item) {
	return "id" in item;
}
function getItemLabel(item) {
	return isPortfolioImage(item) ? item.alt : item.label;
}
function getThumbSrc(item) {
	return isPortfolioImage(item) ? item.thumbnailSrc ?? item.src : void 0;
}
function getLightboxSrc(item) {
	return isPortfolioImage(item) ? item.highResolutionSrc ?? item.src : void 0;
}
function getItemKey(item) {
	return isPortfolioImage(item) ? item.id : item.label;
}
function PortfolioCategoryPage({ category }) {
	const categoryIndex = visiblePortfolioCategories.findIndex((item) => item.slug === category.slug);
	const prev = visiblePortfolioCategories[(categoryIndex - 1 + visiblePortfolioCategories.length) % visiblePortfolioCategories.length];
	const next = visiblePortfolioCategories[(categoryIndex + 1) % visiblePortfolioCategories.length];
	const count = category.galleryImages.filter((image) => image.src).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-paper pt-12 lg:pt-18",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Ruta de navegación",
					className: "mb-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "flex flex-wrap items-center gap-2 text-sm text-muted-foreground",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "underline-offset-4 hover:text-foreground hover:underline",
								children: "Inicio"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								"aria-hidden": "true",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/portafolio",
								className: "underline-offset-4 hover:text-foreground hover:underline",
								children: "Portafolio"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								"aria-hidden": "true",
								children: "/"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								"aria-current": "page",
								className: "text-foreground",
								children: category.name
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-end lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
							accent: category.accent,
							className: "text-muted-foreground",
							children: "Portafolio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display-1 mt-6 max-w-[14ch]",
							children: category.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead mt-6 max-w-xl",
							children: category.shortDescription
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mt-6 text-muted-foreground",
							children: count > 0 ? `${count} ${count === 1 ? "fotografía" : "fotografías"}` : "Galería en preparación"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnAnchor, {
								href: "#galeria",
								variant: "solid",
								children: "Explorar galería"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnLink, {
								to: "/portafolio",
								variant: "outline",
								children: "Volver al portafolio"
							})]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-h-0",
						children: category.heroImage.src ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioImage, {
							image: category.heroImage,
							variant: "display",
							sizes: "(min-width: 1024px) 58vw, 100vw",
							loading: "eager",
							fetchPriority: "high",
							decoding: "async",
							className: "max-h-[82vh] w-full object-contain",
							style: { objectPosition: category.heroFocalPoint }
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImagePlaceholder, {
							label: category.heroImage.placeholderLabel,
							ratio: category.heroImage.ratio,
							tone: "mist",
							className: "lg:max-h-[82vh]"
						})
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-3",
					children: "Sobre esta especialidad"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "lead max-w-2xl",
					children: category.longDescription ?? category.shortDescription
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "galeria",
			className: "scroll-mt-24 pb-24 lg:pb-32",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-10 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
						accent: "steel",
						className: "text-muted-foreground",
						children: "Galería"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "display-2 mt-5",
						children: [
							"Fotografías de ",
							category.name,
							"."
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-sm text-muted-foreground",
						children: "Selecciona cualquier fotografía para verla ampliada y navegar la galería completa."
					})]
				}), category.galleryImages.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {
					items: category.galleryImages,
					itemLabel: category.slug === "eventos" ? "fotografía de evento" : category.slug === "retratos" ? "retrato" : "fotografía"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-ink/12 bg-mist px-6 py-20 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "lead",
						children: "Esta galería se encuentra en preparación."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnLink, {
						to: "/portafolio",
						className: "mt-8",
						children: "Volver al portafolio"
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-ink text-paper",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shell max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-2",
					children: category.ctaTitle
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnAnchor, {
					href: getCategoryContactHref(category),
					target: "_blank",
					rel: "noreferrer noopener",
					variant: "light",
					className: "mt-10 w-full sm:w-auto",
					children: category.ctaButton
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Navegación entre especialidades",
			className: "shell grid gap-6 py-14 sm:grid-cols-3 sm:items-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `/portafolio/${prev.slug}`,
					className: "ui-label flex min-h-11 items-center gap-2 underline-offset-4 hover:underline",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					}), prev.name]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/portafolio",
					className: "ui-label flex min-h-11 items-center underline-offset-4 hover:underline sm:justify-center",
					children: "Portafolio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `/portafolio/${next.slug}`,
					className: "ui-label flex min-h-11 items-center gap-2 underline-offset-4 hover:underline sm:justify-end",
					children: [next.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						className: "h-4 w-4",
						"aria-hidden": "true"
					})]
				})
			]
		})
	] }) });
}
//#endregion
export { PortfolioCategoryPage as t };
