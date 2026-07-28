import { createFileRoute, notFound } from "@tanstack/react-router";
import { PortfolioCategoryPage } from "@/components/PortfolioCategoryPage";
import { getPortfolioCategory } from "@/data/portfolio";

export const Route = createFileRoute("/portafolio/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos — Portafolio | AYACX Photography" },
      {
        name: "description",
        content:
          "Galería de fotografía de eventos por Alex Yaguana para AYACX Photography en Quito, Ecuador.",
      },
    ],
  }),
  loader: () => {
    const category = getPortfolioCategory("eventos");
    if (!category) throw notFound();
    return { category };
  },
  component: EventosPage,
});

function EventosPage() {
  const { category } = Route.useLoaderData();
  return <PortfolioCategoryPage category={category} />;
}
