import { createFileRoute, notFound } from "@tanstack/react-router";
import { PortfolioCategoryPage } from "@/components/PortfolioCategoryPage";
import { getPortfolioCategory } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/portafolio/eventos")({
  head: () =>
    pageHead({
      title: "Fotografía de eventos en Quito | AYACX Photography",
      description:
        "Coberturas de graduaciones, celebraciones, eventos privados y momentos importantes fotografiados en Quito.",
      path: "/portafolio/eventos",
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
