import type { PortfolioCategory } from "@/data/portfolio";
import { PortfolioImage } from "./PortfolioImage";
import { cn } from "@/lib/utils";

const accentLine = {
  sage: "bg-sage",
  steel: "bg-steel",
  sand: "bg-sand",
};

export function PortfolioCategoryMosaic({
  categories,
}: {
  categories: PortfolioCategory[];
}) {
  return (
    <div className="mx-auto mt-14 aspect-square w-full max-w-[1120px] overflow-hidden border border-ink/10 bg-ink">
      <div className="grid h-full grid-cols-2 grid-rows-2">
        {categories.map((category) => (
          <a
            key={category.id}
            href={`/portafolio/${category.slug}`}
            aria-label={`Ver galería de ${category.name}`}
            className="group relative isolate flex min-h-0 cursor-pointer items-end overflow-hidden border-ink/20 p-3 text-paper outline-offset-[-4px] transition-opacity active:opacity-90 sm:p-6 lg:p-8 [&:nth-child(1)]:border-b [&:nth-child(1)]:border-r [&:nth-child(2)]:border-b [&:nth-child(3)]:border-r"
          >
            <CategoryVisual category={category} />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/82 via-ink/34 to-ink/12 transition-colors duration-300 group-hover:from-ink/90" />
            <div className="relative w-full">
              <span
                aria-hidden="true"
                className={cn(
                  "mb-3 block h-1 w-8 transition-all duration-300 group-hover:w-12",
                  accentLine[category.accent],
                )}
              />
              <h3 className="text-balance font-[family-name:var(--font-display)] text-[clamp(1.2rem,5.1vw,1.55rem)] font-light leading-[1.02] sm:text-[clamp(1.65rem,4vw,3.25rem)]">
                {category.name}
              </h3>
              <p className="mt-3 hidden max-w-md text-sm leading-relaxed text-paper/78 md:block">
                {category.shortDescription}
              </p>
              <span className="ui-label mt-2 inline-flex min-h-8 items-center gap-2 text-paper sm:mt-4">
                <span className="hidden sm:inline">Ver galería</span>
                <span className="sm:hidden">Ver</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function CategoryVisual({ category }: { category: PortfolioCategory }) {
  const image = category.coverImage;

  if (image.thumbnailSrc || image.src) {
    return (
      <PortfolioImage
        image={image}
        variant="thumbnail"
        sizes="(min-width: 1280px) 560px, 50vw"
        loading={category.order === 1 ? "eager" : "lazy"}
        fetchPriority={category.order === 1 ? "high" : "auto"}
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        style={{ objectPosition: image.focalPoint ?? "50% 50%" }}
      />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-20 bg-mist text-ink/35"
    >
      <svg
        className="h-full w-full opacity-70"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="0"
          x2="100"
          y2="100"
          stroke="currentColor"
          strokeWidth="0.25"
        />
        <line
          x1="100"
          y1="0"
          x2="0"
          y2="100"
          stroke="currentColor"
          strokeWidth="0.25"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="eyebrow hidden bg-paper/65 px-3 py-2 text-ink/45 sm:inline-flex">
          Fotografía pendiente
        </span>
      </div>
    </div>
  );
}
