import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { Eyebrow } from "@/components/ui-kit";
import { FinalCta } from "@/components/FinalCta";
import { Reveal } from "@/components/Reveal";
import { aboutStory, brand } from "@/data/site";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Alex Yaguana | AYACX Photography" },
      {
        name: "description",
        content:
          "Alex Yaguana, fotógrafo y creador de contenido en Quito. Dirección cercana, estética elegante y mirada cinematográfica.",
      },
      {
        property: "og:title",
        content: "Sobre mí — Alex Yaguana | AYACX Photography",
      },
      {
        property: "og:description",
        content: "Fotografía cercana, dirección clara y una mirada personal.",
      },
    ],
  }),
  component: SobreMi,
});

const principios = [
  "Escuchar antes de fotografiar.",
  "Dirigir sin forzar.",
  "Editar sin borrar la autenticidad.",
];

function SobreMi() {
  return (
    <SiteLayout>
      <section className="bg-paper pt-16 lg:pt-24">
        <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <Eyebrow accent="sand" className="text-muted-foreground">
              Sobre mí
            </Eyebrow>
            <h1 className="display-1 mt-6 max-w-[15ch]">
              Fotografía cercana, dirección clara y una mirada personal.
            </h1>
            <p className="lead mt-10 max-w-xl">
              Hola, soy Alex Yaguana, fotógrafo y creador de contenido en Quito,
              Ecuador.
            </p>
            <p className="lead mt-5 max-w-xl">
              Me especializo en eventos, retratos, fotografía para marcas y
              contenido visual para medios digitales. Durante cada sesión busco
              que las personas se sientan cómodas y que el resultado conserve su
              personalidad.
            </p>
            <p className="lead mt-5 max-w-xl">
              Mi trabajo combina una dirección natural con una estética elegante
              y cinematográfica.
            </p>
            <p className="eyebrow mt-10 text-muted-foreground">
              {brand.years} · {brand.location}
            </p>
          </div>
          <ImagePlaceholder label="Retrato real de Alex Yaguana" ratio="4:5" />
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow accent="sage" className="text-muted-foreground">
              Historia
            </Eyebrow>
            <h2 className="display-2 mt-5">El camino hasta aquí.</h2>
            <div className="mt-8 max-w-2xl space-y-5 text-base leading-[1.85] text-foreground/75">
              {aboutStory.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow accent="steel" className="text-muted-foreground">
              Forma de trabajo
            </Eyebrow>
            <h2 className="display-2 mt-5">Principios.</h2>
            <ol className="mt-8 border-t border-ink/12">
              {principios.map((p, i) => (
                <li key={p} className="flex gap-6 border-b border-ink/12 py-6">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-light text-ink/35">
                    0{i + 1}
                  </span>
                  <span className="text-lg">{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-ink py-28 text-paper lg:py-40">
        <div className="shell max-w-4xl text-center">
          <blockquote className="display-2 text-balance">
            “{brand.philosophy}”
          </blockquote>
          <p className="eyebrow mt-10 opacity-55">
            Alex Yaguana — AYACX Photography
          </p>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="shell">
          <Eyebrow accent="sand" className="text-muted-foreground">
            Detrás de cámaras
          </Eyebrow>
          <h2 className="display-2 mt-5 max-w-2xl">
            Cómo se ve el trabajo en proceso.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Alex fotografiando un evento", ratio: "4:5" as const },
              { label: "Alex dirigiendo una sesión", ratio: "4:5" as const },
              { label: "Preparación de iluminación", ratio: "4:5" as const },
              { label: "Fotografía detrás de cámaras", ratio: "4:5" as const },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 60}>
                <ImagePlaceholder
                  label={item.label}
                  ratio={item.ratio}
                  tone="paper"
                  compact
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title="Hablemos de tu próxima sesión."
        text="Cuéntame qué necesitas y preparamos juntos la mejor forma de fotografiarlo."
      />
    </SiteLayout>
  );
}
