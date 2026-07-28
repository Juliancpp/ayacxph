import { createFileRoute, notFound } from "@tanstack/react-router";
import { PortfolioCategoryPage } from "@/components/PortfolioCategoryPage";
import { getPortfolioCategory } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/portafolio/contenido-para-redes")({
  head: () =>
    pageHead({
      title: "Contenido fotográfico para redes | AYACX Photography",
      description:
        "Contenido visual para redes, creadores, profesionales, emprendimientos y marcas personales.",
      path: "/portafolio/contenido-para-redes",
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
