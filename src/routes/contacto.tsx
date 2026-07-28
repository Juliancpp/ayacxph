import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { Btn, BtnAnchor, Eyebrow } from "@/components/ui-kit";
import { contact } from "@/data/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — AYACX Photography" },
      {
        name: "description",
        content:
          "Escríbeme por WhatsApp o el formulario para consultar disponibilidad de eventos, retratos y proyectos de marca en Quito.",
      },
      { property: "og:title", content: "Contacto — AYACX Photography" },
      { property: "og:description", content: "Cuéntame qué tienes en mente." },
    ],
  }),
  component: Contacto,
});

type Values = {
  nombre: string;
  email: string;
  whatsapp: string;
  servicio: string;
  fecha: string;
  ciudad: string;
  presupuesto: string;
  mensaje: string;
};

const initial: Values = {
  nombre: "",
  email: "",
  whatsapp: "",
  servicio: "",
  fecha: "",
  ciudad: "",
  presupuesto: "",
  mensaje: "",
};

const servicioOpciones = [
  "Evento",
  "Retrato",
  "Fotografía para marca",
  "Contenido para redes",
  "Otro",
];

function validate(v: Values) {
  const e: Partial<Record<keyof Values, string>> = {};
  if (!v.nombre.trim()) e.nombre = "Escribe tu nombre completo.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    e.email = "Escribe un correo válido.";
  if (v.whatsapp.replace(/\D/g, "").length < 7)
    e.whatsapp = "Escribe un número de WhatsApp válido.";
  if (!v.servicio) e.servicio = "Selecciona un tipo de servicio.";
  if (!v.fecha) e.fecha = "Indica una fecha aproximada.";
  if (!v.ciudad.trim()) e.ciudad = "Indica la ciudad o ubicación.";
  if (v.mensaje.trim().length < 10)
    e.mensaje = "Cuéntame un poco más sobre tu proyecto.";
  return e;
}

const field =
  "mt-2 w-full min-h-11 border border-input bg-paper px-4 py-3 text-base outline-none transition-colors focus:border-ink";

function Contacto() {
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>(
    {},
  );
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setValues((p) => ({ ...p, [k]: e.target.value }));
    setErrors((p) => {
      if (!p[k]) return p;
      const next = { ...p };
      delete next[k];
      return next;
    });
  };

  const onSubmit = (e: FormEvent) => {
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

  return (
    <SiteLayout>
      <section className="bg-paper pt-16 lg:pt-24">
        <div className="shell grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Eyebrow accent="steel" className="text-muted-foreground">
              Contacto
            </Eyebrow>
            <h1 className="display-1 mt-6 max-w-[14ch]">
              Cuéntame qué tienes en mente.
            </h1>
          </div>
          <p className="lead max-w-xl self-end">
            Comparte algunos detalles de tu evento, sesión o proyecto. Esta
            información ayudará a preparar una respuesta más útil.
          </p>
        </div>
      </section>

      <section className="section-y">
        <div className="shell grid gap-14 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-20">
          {/* Accesos rápidos (primero en móvil) */}
          <aside className="order-1 lg:order-2">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <BtnAnchor
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />{" "}
                Escribir por WhatsApp
              </BtnAnchor>
              <BtnAnchor
                href={`mailto:${contact.email}`}
                variant="outline"
                className="w-full"
              >
                <Mail className="h-4 w-4" aria-hidden="true" /> Enviar correo
              </BtnAnchor>
            </div>

            <dl className="mt-10 border-t border-ink/12">
              {[
                {
                  icon: MessageCircle,
                  label: "WhatsApp",
                  value: contact.phoneDisplay,
                  href: contact.whatsapp,
                },
                {
                  icon: Mail,
                  label: "Correo",
                  value: contact.email,
                  href: `mailto:${contact.email}`,
                },
                {
                  icon: Instagram,
                  label: "Instagram",
                  value: contact.instagramHandle,
                  href: contact.instagram,
                },
                { icon: MapPin, label: "Ubicación", value: contact.location },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex gap-4 border-b border-ink/12 py-5"
                >
                  <row.icon
                    className="mt-1 h-4 w-4 shrink-0 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <dt className="eyebrow text-muted-foreground">
                      {row.label}
                    </dt>
                    <dd className="mt-1 break-words text-sm">
                      {row.href ? (
                        <a
                          href={row.href}
                          target={
                            row.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel="noreferrer noopener"
                          className="underline-offset-4 hover:underline"
                        >
                          {row.value}
                        </a>
                      ) : (
                        row.value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </aside>

          {/* Formulario */}
          <div className="order-2 lg:order-1">
            {status === "success" ? (
              <div
                role="status"
                className="flex flex-col items-start gap-4 border border-ink/15 bg-mist p-8"
              >
                <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                <p className="lead text-foreground">
                  Tu solicitud fue preparada correctamente. En esta versión,
                  también puedes escribir directamente por WhatsApp para
                  confirmar disponibilidad.
                </p>
                <Btn
                  variant="outline"
                  onClick={() => {
                    setValues(initial);
                    setStatus("idle");
                  }}
                >
                  Escribir otro mensaje
                </Btn>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="grid gap-6 sm:grid-cols-2"
              >
                {status === "error" && (
                  <p
                    role="alert"
                    className="sm:col-span-2 flex items-start gap-3 border border-destructive/40 bg-destructive/5 p-4 text-sm text-destructive"
                  >
                    <AlertCircle
                      className="mt-0.5 h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />
                    Revisa los campos marcados o escríbeme directamente por
                    WhatsApp.
                  </p>
                )}

                <Field
                  id="nombre"
                  label="Nombre completo"
                  required
                  error={errors.nombre}
                  className="sm:col-span-2"
                >
                  <input
                    id="nombre"
                    name="nombre"
                    autoComplete="name"
                    value={values.nombre}
                    onChange={set("nombre")}
                    aria-invalid={!!errors.nombre}
                    aria-describedby={
                      errors.nombre ? "nombre-error" : undefined
                    }
                    className={cn(field, errors.nombre && "border-destructive")}
                  />
                </Field>

                <Field id="email" label="Correo" required error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={set("email")}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={cn(field, errors.email && "border-destructive")}
                  />
                </Field>

                <Field
                  id="whatsapp"
                  label="WhatsApp"
                  required
                  error={errors.whatsapp}
                >
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    value={values.whatsapp}
                    onChange={set("whatsapp")}
                    aria-invalid={!!errors.whatsapp}
                    aria-describedby={
                      errors.whatsapp ? "whatsapp-error" : undefined
                    }
                    className={cn(
                      field,
                      errors.whatsapp && "border-destructive",
                    )}
                  />
                </Field>

                <Field
                  id="servicio"
                  label="Tipo de servicio"
                  required
                  error={errors.servicio}
                >
                  <select
                    id="servicio"
                    name="servicio"
                    value={values.servicio}
                    onChange={set("servicio")}
                    aria-invalid={!!errors.servicio}
                    aria-describedby={
                      errors.servicio ? "servicio-error" : undefined
                    }
                    className={cn(
                      field,
                      errors.servicio && "border-destructive",
                    )}
                  >
                    <option value="">Selecciona una opción</option>
                    {servicioOpciones.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field
                  id="fecha"
                  label="Fecha aproximada"
                  required
                  error={errors.fecha}
                >
                  <input
                    id="fecha"
                    name="fecha"
                    type="date"
                    value={values.fecha}
                    onChange={set("fecha")}
                    aria-invalid={!!errors.fecha}
                    aria-describedby={errors.fecha ? "fecha-error" : undefined}
                    className={cn(field, errors.fecha && "border-destructive")}
                  />
                </Field>

                <Field
                  id="ciudad"
                  label="Ciudad o ubicación"
                  required
                  error={errors.ciudad}
                >
                  <input
                    id="ciudad"
                    name="ciudad"
                    autoComplete="address-level2"
                    value={values.ciudad}
                    onChange={set("ciudad")}
                    aria-invalid={!!errors.ciudad}
                    aria-describedby={
                      errors.ciudad ? "ciudad-error" : undefined
                    }
                    className={cn(field, errors.ciudad && "border-destructive")}
                  />
                </Field>

                <Field
                  id="presupuesto"
                  label="Presupuesto aproximado (opcional)"
                  className="sm:col-span-2"
                >
                  <input
                    id="presupuesto"
                    name="presupuesto"
                    value={values.presupuesto}
                    onChange={set("presupuesto")}
                    className={field}
                  />
                </Field>

                <Field
                  id="mensaje"
                  label="Mensaje"
                  required
                  error={errors.mensaje}
                  help="Incluye el tipo de sesión, lugar y cualquier detalle importante."
                  className="sm:col-span-2"
                >
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={6}
                    value={values.mensaje}
                    onChange={set("mensaje")}
                    aria-invalid={!!errors.mensaje}
                    aria-describedby={
                      errors.mensaje ? "mensaje-error" : undefined
                    }
                    className={cn(
                      field,
                      "resize-y",
                      errors.mensaje && "border-destructive",
                    )}
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Btn
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full sm:w-auto"
                  >
                    {status === "loading" && (
                      <Loader2
                        className="h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                    )}
                    {status === "loading"
                      ? "Enviando solicitud"
                      : "Enviar solicitud"}
                  </Btn>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({
  id,
  label,
  required = false,
  error,
  help,
  children,
  className,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  help?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="ui-label">
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {help && <p className="mt-2 text-sm text-muted-foreground">{help}</p>}
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}
