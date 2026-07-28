import { createFileRoute, notFound } from "@tanstack/react-router";
import { PortfolioCategoryPage } from "@/components/PortfolioCategoryPage";
import { getPortfolioCategory } from "@/data/portfolio";

export const Route = createFileRoute("/portafolio/contenido-para-redes")({
  head: () => ({
    meta: [
      {
        title: "Contenido para redes — Portafolio | AYACX Photography",
      },
      {
        name: "description",
        content:
          "Galería de contenido visual para redes, creadores, profesionales y marcas personales.",
      },
    ],
  }),
  loader: () => {
    const category = getPortfolioCategory("contenido-para-redes");
    if (!category) throw notFound();
    return { category };
  },
  component: ContenidoParaRedesPage,
});

function ContenidoParaRedesPage() {
  const { category } = Route.useLoaderData();
  return <PortfolioCategoryPage category={category} />;
}
