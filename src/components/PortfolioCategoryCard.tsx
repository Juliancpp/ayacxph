import type { PortfolioCategory } from "@/data/portfolio";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { PortfolioImage } from "./PortfolioImage";
import { cn } from "@/lib/utils";

const accentBar = {
  sage: "bg-sage",
  steel: "bg-steel",
  sand: "bg-sand",
};

export function PortfolioCategoryCard({
  category,
  featured = false,
}: {
  category: PortfolioCategory;
  featured?: boolean;
}) {
  const count = category.galleryImages.filter((image) => image.src).length;
  const href = `/portafolio/${category.slug}`;

  return (
    <article className={cn("h-full", featured && "lg:col-span-2")}>
      <a
        href={href}
        aria-label={`Ver galería de ${category.name}`}
        className={cn(
          "group grid h-full cursor-pointer gap-5 focus-visible:outline-offset-4 active:translate-y-px",
          featured &&
            "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end lg:gap-10",
        )}
      >
        <div className="overflow-hidden border border-ink/8 transition-colors group-hover:border-ink/35">
          {category.coverImage.thumbnailSrc || category.coverImage.src ? (
            <PortfolioImage
              image={category.coverImage}
              variant="thumbnail"
              sizes="(min-width: 1280px) 50vw, (min-width: 640px) 50vw, 100vw"
              loading={featured ? "eager" : "lazy"}
              fetchPriority={featured ? "high" : "auto"}
              decoding="async"
              className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <ImagePlaceholder
              label={category.coverImage.placeholderLabel}
              ratio={category.coverImage.ratio}
              tone="mist"
            />
          )}
        </div>
        <div>
          <span
            aria-hidden="true"
            className={cn("mb-5 block h-1 w-10", accentBar[category.accent])}
          />
          <div className="flex flex-wrap items-center gap-3">
            <p className="eyebrow text-muted-foreground">
              {count > 0
                ? `${count} ${count === 1 ? "fotografía" : "fotografías"}`
                : "Galería en preparación"}
            </p>
            {featured && (
              <span className="eyebrow bg-sage px-3 py-1 text-ink">
                Principal
              </span>
            )}
          </div>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-light md:text-4xl">
            {category.name}
          </h2>
          <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
            {category.shortDescription}
          </p>
          <span className="ui-label mt-6 inline-flex min-h-11 items-center underline underline-offset-[6px] decoration-ink/35 transition-colors group-hover:decoration-ink">
            Ver galería
          </span>
        </div>
      </a>
    </article>
  );
}
