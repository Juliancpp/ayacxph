import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { Gallery } from "./Gallery";
import { PortfolioImage } from "./PortfolioImage";
import { BtnAnchor, BtnLink, Eyebrow } from "./ui-kit";
import {
  getCategoryContactHref,
  type PortfolioCategory,
  visiblePortfolioCategories,
} from "@/data/portfolio";

export function PortfolioCategoryPage({
  category,
}: {
  category: PortfolioCategory;
}) {
  const categoryIndex = visiblePortfolioCategories.findIndex(
    (item) => item.slug === category.slug,
  );
  const prev =
    visiblePortfolioCategories[
      (categoryIndex - 1 + visiblePortfolioCategories.length) %
        visiblePortfolioCategories.length
    ];
  const next =
    visiblePortfolioCategories[
      (categoryIndex + 1) % visiblePortfolioCategories.length
    ];
  const count = category.galleryImages.filter((image) => image.src).length;

  return (
    <SiteLayout>
      <article>
        <section className="bg-paper pt-12 lg:pt-18">
          <div className="shell">
            <nav aria-label="Ruta de navegación" className="mb-10">
              <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/"
                    className="underline-offset-4 hover:text-foreground hover:underline"
                  >
                    Inicio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    to="/portafolio"
                    className="underline-offset-4 hover:text-foreground hover:underline"
                  >
                    Portafolio
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-foreground">
                  {category.name}
                </li>
              </ol>
            </nav>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:items-end lg:gap-16">
              <div>
                <Eyebrow
                  accent={category.accent}
                  className="text-muted-foreground"
                >
                  Portafolio
                </Eyebrow>
                <h1 className="display-1 mt-6 max-w-[14ch]">{category.name}</h1>
                <p className="lead mt-6 max-w-xl">
                  {category.shortDescription}
                </p>
                <p className="eyebrow mt-6 text-muted-foreground">
                  {count > 0
                    ? `${count} ${count === 1 ? "fotografía" : "fotografías"}`
                    : "Galería en preparación"}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <BtnAnchor href="#galeria" variant="solid">
                    Explorar galería
                  </BtnAnchor>
                  <BtnLink to="/portafolio" variant="outline">
                    Volver al portafolio
                  </BtnLink>
                </div>
              </div>
              <div className="min-h-0">
                {category.heroImage.src ? (
                  <PortfolioImage
                    image={category.heroImage}
                    variant="display"
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="max-h-[82vh] w-full object-contain"
                    style={{ objectPosition: category.heroFocalPoint }}
                  />
                ) : (
                  <ImagePlaceholder
                    label={category.heroImage.placeholderLabel}
                    ratio={category.heroImage.ratio}
                    tone="mist"
                    className="lg:max-h-[82vh]"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section-y bg-paper">
          <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:gap-20">
            <h2 className="display-3">Sobre esta especialidad</h2>
            <p className="lead max-w-2xl">
              {category.longDescription ?? category.shortDescription}
            </p>
          </div>
        </section>

        <section id="galeria" className="scroll-mt-24 pb-24 lg:pb-32">
          <div className="shell">
            <div className="mb-10 grid gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div>
                <Eyebrow accent="steel" className="text-muted-foreground">
                  Galería
                </Eyebrow>
                <h2 className="display-2 mt-5">
                  Fotografías de {category.name}.
                </h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Selecciona cualquier fotografía para verla ampliada y navegar la
                galería completa.
              </p>
            </div>

            {category.galleryImages.length > 0 ? (
              <Gallery
                items={category.galleryImages}
                itemLabel={
                  category.slug === "eventos"
                    ? "fotografía de evento"
                    : category.slug === "retratos"
                      ? "retrato"
                      : "fotografía"
                }
              />
            ) : (
              <div className="border border-ink/12 bg-mist px-6 py-20 text-center">
                <p className="lead">
                  Esta galería se encuentra en preparación.
                </p>
                <BtnLink to="/portafolio" className="mt-8">
                  Volver al portafolio
                </BtnLink>
              </div>
            )}
          </div>
        </section>

        <section className="section-y bg-ink text-paper">
          <div className="shell max-w-3xl">
            <h2 className="display-2">{category.ctaTitle}</h2>
            <BtnAnchor
              href={getCategoryContactHref(category)}
              target="_blank"
              rel="noreferrer noopener"
              variant="light"
              className="mt-10 w-full sm:w-auto"
            >
              {category.ctaButton}
            </BtnAnchor>
          </div>
        </section>

        <nav
          aria-label="Navegación entre especialidades"
          className="shell grid gap-6 py-14 sm:grid-cols-3 sm:items-center"
        >
          <a
            href={`/portafolio/${prev.slug}`}
            className="ui-label flex min-h-11 items-center gap-2 underline-offset-4 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {prev.name}
          </a>
          <Link
            to="/portafolio"
            className="ui-label flex min-h-11 items-center underline-offset-4 hover:underline sm:justify-center"
          >
            Portafolio
          </Link>
          <a
            href={`/portafolio/${next.slug}`}
            className="ui-label flex min-h-11 items-center gap-2 underline-offset-4 hover:underline sm:justify-end"
          >
            {next.name}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </nav>
      </article>
    </SiteLayout>
  );
}
