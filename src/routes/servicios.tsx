import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Faq } from "@/components/Faq";
import { ProcessSection } from "@/components/ProcessSection";
import { SiteLayout } from "@/components/SiteLayout";
import { BtnAnchor, Eyebrow } from "@/components/ui-kit";
import {
  additionalHour,
  brandAndContentServices,
  eventCoveragePlans,
  servicesGeneralMessage,
  sessionPlans,
  whatsappUrl,
  type ServicePlan,
} from "@/data/service-plans";
import { contact } from "@/data/site";
import { cn } from "@/lib/utils";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/servicios")({
  head: () =>
    pageHead({
      title: "Servicios y precios de fotografía | AYACX Photography",
      description:
        "Planes claros para sesiones fotográficas, cobertura de eventos y proyectos visuales para marcas en Quito.",
      path: "/servicios",
    }),
  component: Servicios,
});

function Servicios() {
  const visibleSessions = sessionPlans
    .filter((plan) => plan.isVisible)
    .sort((a, b) => a.order - b.order);
  const visibleEvents = eventCoveragePlans
    .filter((plan) => plan.isVisible)
    .sort((a, b) => a.order - b.order);

  return (
    <SiteLayout>
      <section className="bg-paper pt-16 lg:pt-24">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
          <div>
            <Eyebrow accent="sage" className="text-muted-foreground">
              Servicios
            </Eyebrow>
            <h1 className="display-1 mt-6 max-w-[13ch]">
              Fotografía pensada para cada historia.
            </h1>
          </div>
          <div className="max-w-2xl self-end">
            <p className="lead">
              Cada sesión y cada evento requieren una mirada diferente. AYACX
              Photography ofrece opciones diseñadas para adaptarse a distintos
              tiempos, necesidades y tipos de experiencia, manteniendo siempre
              una edición cuidada y una atención cercana durante todo el
              proceso.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Explora las opciones disponibles y elige la que mejor se adapte a
              lo que deseas crear o conservar.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <BtnAnchor
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="w-full whitespace-normal text-center leading-snug sm:w-auto"
              >
                Consultar disponibilidad
              </BtnAnchor>
              <BtnAnchor
                href="#planes-sesiones"
                variant="outline"
                className="w-full whitespace-normal text-center leading-snug sm:w-auto"
              >
                Ver planes
              </BtnAnchor>
            </div>
          </div>
        </div>
      </section>

      <section id="planes-sesiones" className="section-y scroll-mt-24 bg-paper">
        <div className="shell">
          <SectionIntro
            eyebrow="Sesiones fotográficas"
            title="Una sesión para cada momento."
            text="Desde una experiencia breve y puntual hasta una producción con mayor tiempo y variedad, cada opción está pensada para obtener fotografías naturales, cuidadosamente dirigidas y coherentes con el estilo de AYACX Photography."
            accent="steel"
          />

          <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleSessions.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="cobertura-eventos"
        className="section-y scroll-mt-24 bg-mist"
      >
        <div className="shell">
          <SectionIntro
            eyebrow="Cobertura de eventos"
            title="Presencia, emoción y recuerdos bien conservados."
            text="Cada evento reúne momentos que ocurren una sola vez. La cobertura está pensada para documentar el ambiente, las personas y los detalles importantes con una mirada natural, discreta y profesional."
            supportingText="Selecciona el tiempo de cobertura que mejor se adapte a la duración y dinámica de tu evento."
            accent="sage"
          />

          <div className="mt-12 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
            {visibleEvents.map((plan) => (
              <CoverageCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div className="mt-6 border border-ink/15 bg-paper p-6 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="eyebrow text-muted-foreground">Complemento</p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-light">
                {additionalHour.name}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {additionalHour.description}
              </p>
            </div>
            <p className="mt-5 font-[family-name:var(--font-display)] text-5xl font-light md:mt-0">
              {additionalHour.price}
            </p>
          </div>

          <div className="mt-8 grid gap-8 border border-ink/15 bg-ink p-7 text-paper md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:p-9">
            <div>
              <p className="eyebrow opacity-65">Entrega</p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-light">
                Todas las coberturas incluyen
              </h3>
            </div>
            <div>
              <p className="text-sm leading-relaxed text-paper/75">
                Cada cobertura contempla la selección y edición del material
                fotográfico, con una entrega digital preparada para conservar y
                compartir las imágenes con calidad.
              </p>
              <ul className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
                {[
                  "Fotografías editadas.",
                  "Entrega en alta resolución mediante enlace de descarga.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-3 h-px w-5 bg-sage"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="shell">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div>
              <Eyebrow accent="sand" className="text-muted-foreground">
                Cotización personalizada
              </Eyebrow>
              <h2 className="display-2 mt-5">
                Proyectos para marcas y contenido digital
              </h2>
              <p className="lead mt-6">
                Las producciones para marcas, productos y contenido para redes
                se planifican de acuerdo con el objetivo, la cantidad de piezas
                y las necesidades específicas de cada proyecto.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {brandAndContentServices.map((service) => (
                <article
                  key={service.id}
                  className="flex min-h-full flex-col border border-ink/15 bg-mist p-6"
                >
                  <h3 className="font-[family-name:var(--font-display)] text-3xl font-light">
                    {service.name}
                  </h3>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <BtnAnchor
                    href={whatsappUrl(service.contactMessage)}
                    target="_blank"
                    rel="noreferrer noopener"
                    variant="outline"
                    className="mt-8 w-full whitespace-normal text-center leading-snug"
                  >
                    {service.ctaLabel}
                  </BtnAnchor>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProcessSection tone="muted" />
      <Faq />

      <section className="section-y bg-ink text-paper">
        <div className="shell grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <h2 className="display-2 max-w-3xl">
              ¿Qué tipo de experiencia estás buscando?
            </h2>
            <p className="lead mt-6 max-w-2xl">
              Cuéntame sobre tu sesión, evento o proyecto. Con algunos detalles
              podremos identificar la opción que mejor se adapte a lo que
              necesitas.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:flex-col">
            <BtnAnchor
              href="/contacto"
              variant="light"
              className="w-full whitespace-normal text-center leading-snug lg:w-auto"
            >
              Consultar disponibilidad
            </BtnAnchor>
            <BtnAnchor
              href={whatsappUrl(servicesGeneralMessage)}
              target="_blank"
              rel="noreferrer noopener"
              variant="outline"
              className="w-full whitespace-normal border-paper/70 text-center leading-snug text-paper hover:bg-paper/10 lg:w-auto"
            >
              Escribir por WhatsApp
            </BtnAnchor>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function SectionIntro({
  eyebrow,
  title,
  text,
  supportingText,
  accent,
}: {
  eyebrow: string;
  title: string;
  text: string;
  supportingText?: string;
  accent: "sage" | "steel" | "sand";
}) {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
      <div>
        <Eyebrow accent={accent} className="text-muted-foreground">
          {eyebrow}
        </Eyebrow>
        <h2 className="display-2 mt-5 max-w-3xl">{title}</h2>
      </div>
      <div className="max-w-2xl self-end">
        <p className="lead">{text}</p>
        {supportingText && (
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {supportingText}
          </p>
        )}
      </div>
    </div>
  );
}

function PlanCard({ plan }: { plan: ServicePlan }) {
  return (
    <article className="flex min-h-full flex-col border border-ink/15 bg-paper p-6 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-[family-name:var(--font-display)] text-3xl font-light md:text-4xl">
          {plan.name}
        </h3>
        <p className="shrink-0 font-[family-name:var(--font-display)] text-4xl font-light md:text-5xl">
          {plan.price}
        </p>
      </div>
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        {plan.description}
      </p>
      <ul className="mt-7 flex-1 space-y-3 text-sm">
        {[plan.duration, ...plan.features].map((feature) => (
          <Feature key={feature}>{feature}</Feature>
        ))}
      </ul>
      <BtnAnchor
        href={whatsappUrl(plan.contactMessage)}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-8 w-full whitespace-normal text-center leading-snug"
      >
        {plan.ctaLabel}
      </BtnAnchor>
    </article>
  );
}

function CoverageCard({ plan }: { plan: ServicePlan }) {
  return (
    <article className="flex min-h-full flex-col border border-ink/15 bg-paper p-6 md:p-7">
      <p className="eyebrow text-muted-foreground">Cobertura</p>
      <div className="mt-4 flex items-end justify-between gap-4">
        <h3 className="font-[family-name:var(--font-display)] text-5xl font-light">
          {plan.name}
        </h3>
        <p className="font-[family-name:var(--font-display)] text-4xl font-light">
          {plan.price}
        </p>
      </div>
      <p className="mt-7 flex-1 text-sm leading-relaxed text-muted-foreground">
        {plan.description}
      </p>
      <BtnAnchor
        href={whatsappUrl(plan.contactMessage)}
        target="_blank"
        rel="noreferrer noopener"
        className="mt-8 w-full whitespace-normal text-center leading-snug"
      >
        {plan.ctaLabel}
      </BtnAnchor>
    </article>
  );
}

function Feature({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <li className={cn("flex items-start gap-3", className)}>
      <span aria-hidden="true" className="mt-3 h-px w-5 shrink-0 bg-ink/45" />
      <span>{children}</span>
    </li>
  );
}
