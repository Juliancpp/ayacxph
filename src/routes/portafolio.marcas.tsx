import { createFileRoute, notFound } from "@tanstack/react-router";
import { PortfolioCategoryPage } from "@/components/PortfolioCategoryPage";
import { getPortfolioCategory } from "@/data/portfolio";

export const Route = createFileRoute("/portafolio/marcas")({
  head: () => ({
    meta: [
      { title: "Fotografía para marcas — Portafolio | AYACX Photography" },
      {
        name: "description",
        content:
          "Galería de fotografía para productos, espacios, equipos y marcas por Alex Yaguana.",
      },
    ],
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
