import { createFileRoute, notFound } from "@tanstack/react-router";
import { PortfolioCategoryPage } from "@/components/PortfolioCategoryPage";
import { getPortfolioCategory } from "@/data/portfolio";

export const Route = createFileRoute("/portafolio/retratos")({
  head: () => ({
    meta: [
      { title: "Retratos — Portafolio | AYACX Photography" },
      {
        name: "description",
        content:
          "Galería de retratos personales, profesionales y editoriales por Alex Yaguana.",
      },
    ],
  }),
  loader: () => {
    const category = getPortfolioCategory("retratos");
    if (!category) throw notFound();
    return { category };
  },
  component: RetratosPage,
});

function RetratosPage() {
  const { category } = Route.useLoaderData();
  return <PortfolioCategoryPage category={category} />;
}
