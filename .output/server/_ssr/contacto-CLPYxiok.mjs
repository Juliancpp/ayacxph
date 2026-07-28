import { n as __toESM } from "../_runtime.mjs";
import { r as contact } from "./site-DD7LDg1W.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { c as LoaderCircle, d as CircleAlert, i as MessageCircle, l as Instagram, o as MapPin, s as Mail, u as CircleCheck } from "../_libs/lucide-react.mjs";
import { a as SiteLayout, i as Eyebrow, n as BtnAnchor, o as cn, t as Btn } from "./SiteLayout-DnIZqpiL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contacto-CLPYxiok.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initial = {
	nombre: "",
	email: "",
	whatsapp: "",
	servicio: "",
	fecha: "",
	ciudad: "",
	presupuesto: "",
	mensaje: ""
};
var servicioOpciones = [
	"Evento",
	"Retrato",
	"Fotografía para marca",
	"Contenido para redes",
	"Otro"
];
function validate(v) {
	const e = {};
	if (!v.nombre.trim()) e.nombre = "Escribe tu nombre completo.";
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Escribe un correo válido.";
	if (v.whatsapp.replace(/\D/g, "").length < 7) e.whatsapp = "Escribe un número de WhatsApp válido.";
	if (!v.servicio) e.servicio = "Selecciona un tipo de servicio.";
	if (!v.fecha) e.fecha = "Indica una fecha aproximada.";
	if (!v.ciudad.trim()) e.ciudad = "Indica la ciudad o ubicación.";
	if (v.mensaje.trim().length < 10) e.mensaje = "Cuéntame un poco más sobre tu proyecto.";
	return e;
}
var field = "mt-2 w-full min-h-11 border border-input bg-paper px-4 py-3 text-base outline-none transition-colors focus:border-ink";
function Contacto() {
	const [values, setValues] = (0, import_react.useState)(initial);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [status, setStatus] = (0, import_react.useState)("idle");
	const set = (k) => (e) => {
		setValues((p) => ({
			...p,
			[k]: e.target.value
		}));
		setErrors((p) => {
			if (!p[k]) return p;
			const next = { ...p };
			delete next[k];
			return next;
		});
	};
	const onSubmit = (e) => {
		e.preventDefault();
		const found = validate(values);
		setErrors(found);
		if (Object.keys(found).length > 0) {
			setStatus("error");
			return;
		}
		setStatus("loading");
		window.setTimeout(() => setStatus("success"), 900);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-paper pt-16 lg:pt-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				accent: "steel",
				className: "text-muted-foreground",
				children: "Contacto"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display-1 mt-6 max-w-[14ch]",
				children: "Cuéntame qué tienes en mente."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "lead max-w-xl self-end",
				children: "Comparte algunos detalles de tu evento, sesión o proyecto. Esta información ayudará a preparar una respuesta más útil."
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell grid gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "order-1 lg:order-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 sm:flex-row lg:flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BtnAnchor, {
						href: contact.whatsapp,
						target: "_blank",
						rel: "noreferrer noopener",
						className: "w-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
								className: "h-4 w-4",
								"aria-hidden": "true"
							}),
							" ",
							"Escribir por WhatsApp"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BtnAnchor, {
						href: `mailto:${contact.email}`,
						variant: "outline",
						className: "w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
							className: "h-4 w-4",
							"aria-hidden": "true"
						}), " Enviar correo"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-10 border-t border-ink/12",
					children: [
						{
							icon: MessageCircle,
							label: "WhatsApp",
							value: contact.phoneDisplay,
							href: contact.whatsapp
						},
						{
							icon: Mail,
							label: "Correo",
							value: contact.email,
							href: `mailto:${contact.email}`
						},
						{
							icon: Instagram,
							label: "Instagram",
							value: contact.instagramHandle,
							href: contact.instagram
						},
						{
							icon: MapPin,
							label: "Ubicación",
							value: contact.location
						}
					].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 border-b border-ink/12 py-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(row.icon, {
							className: "mt-1 h-4 w-4 shrink-0 text-muted-foreground",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "eyebrow text-muted-foreground",
								children: row.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1 break-words text-sm",
								children: row.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: row.href,
									target: row.href.startsWith("http") ? "_blank" : void 0,
									rel: "noreferrer noopener",
									className: "underline-offset-4 hover:underline",
									children: row.value
								}) : row.value
							})]
						})]
					}, row.label))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "order-2 lg:order-1",
				children: status === "success" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					role: "status",
					className: "flex flex-col items-start gap-4 border border-ink/15 bg-mist p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
							className: "h-6 w-6",
							"aria-hidden": "true"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "lead text-foreground",
							children: "Tu solicitud fue preparada correctamente. En esta versión, también puedes escribir directamente por WhatsApp para confirmar disponibilidad."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Btn, {
							variant: "outline",
							onClick: () => {
								setValues(initial);
								setStatus("idle");
							},
							children: "Escribir otro mensaje"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit,
					noValidate: true,
					className: "grid gap-6 sm:grid-cols-2",
					children: [
						status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							role: "alert",
							className: "sm:col-span-2 flex items-start gap-3 border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, {
								className: "mt-0.5 h-4 w-4 shrink-0",
								"aria-hidden": "true"
							}), "Revisa los campos marcados o escríbeme directamente por WhatsApp."]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "nombre",
							label: "Nombre completo",
							required: true,
							error: errors.nombre,
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "nombre",
								name: "nombre",
								autoComplete: "name",
								value: values.nombre,
								onChange: set("nombre"),
								"aria-invalid": !!errors.nombre,
								"aria-describedby": errors.nombre ? "nombre-error" : void 0,
								className: cn(field, errors.nombre && "border-destructive")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "email",
							label: "Correo",
							required: true,
							error: errors.email,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "email",
								name: "email",
								type: "email",
								autoComplete: "email",
								value: values.email,
								onChange: set("email"),
								"aria-invalid": !!errors.email,
								"aria-describedby": errors.email ? "email-error" : void 0,
								className: cn(field, errors.email && "border-destructive")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "whatsapp",
							label: "WhatsApp",
							required: true,
							error: errors.whatsapp,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "whatsapp",
								name: "whatsapp",
								type: "tel",
								autoComplete: "tel",
								value: values.whatsapp,
								onChange: set("whatsapp"),
								"aria-invalid": !!errors.whatsapp,
								"aria-describedby": errors.whatsapp ? "whatsapp-error" : void 0,
								className: cn(field, errors.whatsapp && "border-destructive")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "servicio",
							label: "Tipo de servicio",
							required: true,
							error: errors.servicio,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "servicio",
								name: "servicio",
								value: values.servicio,
								onChange: set("servicio"),
								"aria-invalid": !!errors.servicio,
								"aria-describedby": errors.servicio ? "servicio-error" : void 0,
								className: cn(field, errors.servicio && "border-destructive"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									children: "Selecciona una opción"
								}), servicioOpciones.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: o,
									children: o
								}, o))]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "fecha",
							label: "Fecha aproximada",
							required: true,
							error: errors.fecha,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "fecha",
								name: "fecha",
								type: "date",
								value: values.fecha,
								onChange: set("fecha"),
								"aria-invalid": !!errors.fecha,
								"aria-describedby": errors.fecha ? "fecha-error" : void 0,
								className: cn(field, errors.fecha && "border-destructive")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "ciudad",
							label: "Ciudad o ubicación",
							required: true,
							error: errors.ciudad,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "ciudad",
								name: "ciudad",
								autoComplete: "address-level2",
								value: values.ciudad,
								onChange: set("ciudad"),
								"aria-invalid": !!errors.ciudad,
								"aria-describedby": errors.ciudad ? "ciudad-error" : void 0,
								className: cn(field, errors.ciudad && "border-destructive")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "presupuesto",
							label: "Presupuesto aproximado (opcional)",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "presupuesto",
								name: "presupuesto",
								value: values.presupuesto,
								onChange: set("presupuesto"),
								className: field
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							id: "mensaje",
							label: "Mensaje",
							required: true,
							error: errors.mensaje,
							help: "Incluye el tipo de sesión, lugar y cualquier detalle importante.",
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "mensaje",
								name: "mensaje",
								rows: 6,
								value: values.mensaje,
								onChange: set("mensaje"),
								"aria-invalid": !!errors.mensaje,
								"aria-describedby": errors.mensaje ? "mensaje-error" : void 0,
								className: cn(field, "resize-y", errors.mensaje && "border-destructive")
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "sm:col-span-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Btn, {
								type: "submit",
								disabled: status === "loading",
								className: "w-full sm:w-auto",
								children: [status === "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, {
									className: "h-4 w-4 animate-spin",
									"aria-hidden": "true"
								}), status === "loading" ? "Enviando solicitud" : "Enviar solicitud"]
							})
						})
					]
				})
			})]
		})
	})] });
}
function Field({ id, label, required = false, error, help, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				htmlFor: id,
				className: "ui-label",
				children: [
					label,
					" ",
					required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "*"
					})
				]
			}),
			help && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: help
			}),
			children,
			error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				id: `${id}-error`,
				className: "mt-2 text-sm text-destructive",
				children: error
			})
		]
	});
}
//#endregion
export { Contacto as component };
