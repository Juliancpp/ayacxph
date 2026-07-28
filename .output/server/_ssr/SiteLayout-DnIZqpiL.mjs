import { n as __toESM } from "../_runtime.mjs";
import { n as brand, o as services, r as contact } from "./site-DD7LDg1W.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link, l as useLocation } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as MessageCircle, l as Instagram, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-DnIZqpiL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var logos = {
	full: {
		light: {
			src: "/branding/ayacx/ayacx-logo-white.png",
			width: 577,
			height: 338
		},
		dark: {
			src: "/branding/ayacx/ayacx-logo-black.png",
			width: 573,
			height: 330
		}
	},
	monogram: {
		light: {
			src: "/branding/ayacx/ayacx-monogram-white.png",
			width: 290,
			height: 247
		},
		dark: {
			src: "/branding/ayacx/ayacx-monogram-black.png",
			width: 289,
			height: 232
		}
	}
};
function BrandLogo({ variant, type = "full", className, alt = "AYACX Photography" }) {
	const logo = logos[type][variant];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logo.src,
		width: logo.width,
		height: logo.height,
		alt,
		decoding: "sync",
		fetchPriority: "high",
		className: cn("block h-auto w-auto object-contain", className)
	});
}
var base = "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-6 py-3 font-[family-name:var(--font-ui)] text-[0.8125rem] font-semibold uppercase tracking-[0.14em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 active:translate-y-px disabled:pointer-events-none disabled:opacity-55";
var variants = {
	solid: "bg-ink text-paper hover:bg-ink/85",
	light: "bg-paper text-ink hover:bg-mist",
	outline: "border border-current hover:bg-current/10",
	ghost: "px-0 underline-offset-[6px] hover:underline"
};
function Btn({ variant = "solid", className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn(base, variants[variant], className),
		...rest,
		children
	});
}
function BtnLink({ variant = "solid", className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		className: cn(base, variants[variant], className),
		...rest,
		children
	});
}
function BtnAnchor({ variant = "solid", className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		className: cn(base, variants[variant], className),
		...rest,
		children
	});
}
function Eyebrow({ children, className, accent }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: cn("eyebrow flex items-center gap-3", className),
		children: [accent && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			"aria-hidden": "true",
			className: cn("inline-block h-px w-8", accent === "sage" && "bg-sage", accent === "steel" && "bg-steel", accent === "sand" && "bg-sand")
		}), children]
	});
}
var nav = [
	{
		to: "/",
		label: "Inicio"
	},
	{
		to: "/portafolio",
		label: "Portafolio"
	},
	{
		to: "/servicios",
		label: "Servicios"
	},
	{
		to: "/sobre-mi",
		label: "Sobre mí"
	},
	{
		to: "/contacto",
		label: "Contacto"
	}
];
function Header({ overHero = false }) {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const location = useLocation();
	const menuButtonRef = (0, import_react.useRef)(null);
	const dialogRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const previous = document.body.style.overflow;
		document.body.style.overflow = open ? "hidden" : previous;
		if (open) requestAnimationFrame(() => dialogRef.current?.focus());
		return () => {
			document.body.style.overflow = previous;
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => {
			if (e.key === "Escape") {
				setOpen(false);
				requestAnimationFrame(() => menuButtonRef.current?.focus());
				return;
			}
			if (e.key !== "Tab" || !dialogRef.current) return;
			const focusable = Array.from(dialogRef.current.querySelectorAll("a[href], button:not([disabled]), [tabindex]:not([tabindex=\"-1\"])"));
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
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);
	const transparent = overHero && !scrolled;
	const logoVariant = transparent ? "light" : "dark";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-colors duration-300", transparent ? "bg-transparent text-paper" : "bg-paper text-ink border-b border-ink/8"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid h-[76px] grid-cols-[1fr_auto] items-center gap-6 lg:h-20 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "flex min-h-11 items-center gap-2 justify-self-start",
					"aria-label": "AYACX Photography, inicio",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
						variant: logoVariant,
						className: "h-[34px] max-w-[134px] transition-opacity duration-200 sm:h-9 sm:max-w-[150px]"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Principal",
					className: "hidden h-full items-center gap-8 justify-self-center lg:flex",
					children: nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						activeProps: {
							className: "opacity-100 underline underline-offset-[6px]",
							"aria-current": "page"
						},
						inactiveProps: { className: "opacity-70" },
						className: "ui-label inline-flex min-h-11 items-center transition-opacity hover:opacity-100 focus-visible:outline-offset-4",
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center justify-end gap-5 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: contact.instagram,
						target: "_blank",
						rel: "noreferrer noopener",
						"aria-label": "Instagram de AYACX Photography",
						className: "flex h-11 w-11 shrink-0 items-center justify-center opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-offset-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
							className: "h-[18px] w-[18px]",
							"aria-hidden": "true"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnAnchor, {
						href: contact.whatsapp,
						target: "_blank",
						rel: "noreferrer noopener",
						variant: transparent ? "light" : "solid",
						className: "px-5 py-2.5",
						children: "Consultar disponibilidad"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					ref: menuButtonRef,
					onClick: () => setOpen(true),
					"aria-label": "Abrir menú",
					"aria-expanded": open,
					"aria-controls": "menu-movil",
					className: "-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center justify-self-end lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
						className: "h-6 w-6",
						"aria-hidden": "true"
					})
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			id: "menu-movil",
			ref: dialogRef,
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Menú de navegación",
			tabIndex: -1,
			className: "fixed inset-0 z-50 flex flex-col bg-ink text-paper lg:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shell flex h-[76px] shrink-0 items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
						variant: "light",
						className: "h-[34px] max-w-[134px]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setOpen(false);
							requestAnimationFrame(() => menuButtonRef.current?.focus());
						},
						"aria-label": "Cerrar menú",
						className: "-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
							className: "h-6 w-6",
							"aria-hidden": "true"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Principal móvil",
					className: "shell flex flex-1 flex-col justify-center gap-1 overflow-y-auto py-8",
					children: nav.map((item) => {
						const active = item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							"aria-current": active ? "page" : void 0,
							className: cn("display-3 flex min-h-16 items-center justify-between border-b border-paper/10 py-4 focus-visible:outline-offset-[-2px]", active && "text-sage"),
							children: [item.label, active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ui-label text-paper/70",
								children: "Actual"
							})]
						}, item.to);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shell flex flex-col gap-4 pb-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.whatsapp,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "ui-label flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								" ",
								"WhatsApp"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: contact.instagram,
							target: "_blank",
							rel: "noreferrer noopener",
							className: "ui-label flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
									className: "h-4 w-4",
									"aria-hidden": "true"
								}),
								" ",
								contact.instagramHandle
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BtnAnchor, {
						href: contact.whatsapp,
						target: "_blank",
						rel: "noreferrer noopener",
						variant: "light",
						className: "w-full",
						children: "Consultar disponibilidad"
					})]
				})
			]
		})]
	});
}
var navLinks = [
	{
		to: "/",
		label: "Inicio"
	},
	{
		to: "/portafolio",
		label: "Portafolio"
	},
	{
		to: "/sobre-mi",
		label: "Sobre mí"
	},
	{
		to: "/servicios",
		label: "Servicios"
	},
	{
		to: "/contacto",
		label: "Contacto"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-ink text-paper",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-24",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
					variant: "light",
					className: "h-12 max-w-[190px]"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-xs text-sm opacity-70",
					children: brand.value
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Servicios",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow opacity-50",
						children: "Servicios"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: services.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/servicios",
							hash: s.slug,
							className: "text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100",
							children: s.title
						}) }, s.slug))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Navegación del sitio",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow opacity-50",
						children: "Navegación"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3",
						children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100",
							children: l.label
						}) }, l.to))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow opacity-50",
					children: "Contacto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-3 text-sm opacity-80",
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
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: contact.location })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex flex-col gap-3 border-t border-paper/12 py-8 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "© 2026 AYACX Photography." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Fotografía por Alex Yaguana." }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Política de privacidad — pendiente" })
			]
		})]
	});
}
function SiteLayout({ children, overHero = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, { overHero }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "contenido",
				className: cn("flex-1", !overHero && "pt-[76px] lg:pt-20"),
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { SiteLayout as a, Eyebrow as i, BtnAnchor as n, cn as o, BtnLink as r, Btn as t };
