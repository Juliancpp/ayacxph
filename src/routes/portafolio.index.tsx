import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Eyebrow } from "@/components/ui-kit";
import { PortfolioCategoryMosaic } from "@/components/PortfolioCategoryMosaic";
import { FinalCta } from "@/components/FinalCta";
import { visiblePortfolioCategories } from "@/data/portfolio";

export const Route = createFileRoute("/portafolio/")({
  head: () => ({
    meta: [
      { title: "Portafolio — AYACX Photography" },
      {
        name: "description",
        content:
          "Explora retratos, eventos, fotografía para marcas y contenido para redes por Alex Yaguana.",
      },
      { property: "og:title", content: "Portafolio — AYACX Photography" },
      {
        property: "og:description",
        content:
          "Retratos, eventos y contenido visual para personas y marcas que quieren contar algo real.",
      },
    ],
  }),
  component: Portafolio,
});

function Portafolio() {
  return (
    <SiteLayout>
      <section className="bg-paper pb-4 pt-16 lg:pt-24">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
          <div>
            <Eyebrow accent="steel" className="text-muted-foreground">
              Portafolio
            </Eyebrow>
            <h1 className="display-1 mt-6 max-w-[15ch]">
              Explora el trabajo por especialidad.
            </h1>
          </div>
          <p className="lead max-w-xl self-end">
            Retratos, eventos y contenido visual para personas y marcas que
            quieren contar algo real.
          </p>
        </div>
      </section>

      <section className="pb-24 pt-12 lg:pb-32 lg:pt-16">
        <div className="shell">
          <PortfolioCategoryMosaic categories={visiblePortfolioCategories} />
        </div>
      </section>

      <FinalCta withImage={false} />
    </SiteLayout>
  );
}
