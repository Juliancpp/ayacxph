import { createFileRoute, notFound } from "@tanstack/react-router";
import { PortfolioCategoryPage } from "@/components/PortfolioCategoryPage";
import { getPortfolioCategory } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/portafolio/marcas")({
  head: () =>
    pageHead({
      title: "Fotografía para marcas en Quito | AYACX Photography",
      description:
        "Fotografía comercial para productos, espacios, equipos y negocios que necesitan comunicar su identidad con claridad.",
      path: "/portafolio/marcas",
    }),
  loader: () => {
    const category = getPortfolioCategory("marcas");
    if (!category) throw notFound();
    return { category };
  },
  component: MarcasPage,
});

function MarcasPage() {
  const { category } = Route.useLoaderData();
  return <PortfolioCategoryPage category={category} />;
}
