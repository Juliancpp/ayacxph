import { createFileRoute, notFound } from "@tanstack/react-router";
import { PortfolioCategoryPage } from "@/components/PortfolioCategoryPage";
import { getPortfolioCategory } from "@/data/portfolio";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/portafolio/retratos")({
  head: () =>
    pageHead({
      title: "Fotografía de retratos en Quito | AYACX Photography",
      description:
        "Galería de retratos personales, profesionales y editoriales con una mirada natural y cinematográfica en Quito.",
      path: "/portafolio/retratos",
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
