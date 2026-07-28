import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { PortfolioImage } from "@/components/PortfolioImage";
import { BtnAnchor, BtnLink, Eyebrow } from "@/components/ui-kit";
import { ServiceCard } from "@/components/ServiceCard";
import { PortfolioCategoryMosaic } from "@/components/PortfolioCategoryMosaic";
import { ProcessSection } from "@/components/ProcessSection";
import { FinalCta } from "@/components/FinalCta";
import { Reveal } from "@/components/Reveal";
import { brand, contact, services } from "@/data/site";
import { visiblePortfolioCategories } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "AYACX Photography — Fotografía de eventos, retratos y marcas en Quito",
      },
      {
        name: "description",
        content:
          "Alex Yaguana, fotógrafo en Quito. Fotografía auténtica para eventos, personas y marcas que quieren contar algo real.",
      },
      {
        property: "og:title",
        content: "AYACX Photography — Fotografía en Quito",
      },
      {
        property: "og:description",
        content:
          "Fotografía auténtica para eventos, personas y marcas. Por Alex Yaguana.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const primaryCategory = visiblePortfolioCategories[0];
  const heroImage = primaryCategory?.heroImage;

  return (
    <SiteLayout overHero>
      {/* HERO */}
      <section className="flex min-h-svh items-center bg-ink pt-[76px] text-paper lg:pt-20">
        <div className="shell grid w-full items-center gap-10 py-10 sm:py-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)] lg:gap-16 lg:py-16">
          <div className="order-1">
            <Eyebrow accent="sage" className="opacity-80">
              AYACX Photography
            </Eyebrow>
            <h1 className="mt-7 max-w-[16ch] text-balance font-[family-name:var(--font-display)] text-[clamp(2.75rem,4vw,4.25rem)] font-light leading-[1.04]">
              {brand.value}
            </h1>
            <p className="lead mt-7 max-w-md">
              Retratos, eventos y contenido visual con una estética natural,
              elegante y cinematográfica en Quito, Ecuador.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <BtnLink
                to="/portafolio"
                variant="light"
                className="w-full sm:w-auto"
              >
                Ver portafolio
              </BtnLink>
              <BtnAnchor
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline"
                className="w-full sm:w-auto"
              >
                Consultar disponibilidad
              </BtnAnchor>
            </div>
          </div>
          <div className="order-2">
            {heroImage?.src ? (
              <PortfolioImage
                image={heroImage}
                variant="display"
                sizes="(min-width: 1024px) 42vw, 100vw"
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="mx-auto h-auto w-full object-contain lg:max-w-[540px]"
                style={{ objectPosition: primaryCategory.heroFocalPoint }}
              />
            ) : (
              <ImagePlaceholder
                label="Fotografía principal de retrato"
                ratio="4:5"
                tone="paper"
                className="mx-auto lg:max-w-[540px]"
              />
            )}
          </div>
        </div>
      </section>

      {/* INTRO DE MARCA */}
      <section className="section-y bg-paper">
        <div className="shell grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-24">
          <Eyebrow accent="sand" className="text-muted-foreground">
            AYACX Photography
          </Eyebrow>
          <Reveal>
            <h2 className="display-2 max-w-[18ch]">
              Fotografía para recordar, mostrar y comunicar.
            </h2>
            <p className="lead mt-10 max-w-xl">
              Cada persona, evento y marca tiene una historia diferente. Mi
              trabajo es entenderla y transformarla en imágenes auténticas,
              cuidadas y visualmente memorables.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="section-y bg-mist">
        <div className="shell">
          <Eyebrow accent="sage" className="text-muted-foreground">
            Servicios
          </Eyebrow>
          <h2 className="display-2 mt-5 max-w-2xl">
            Servicios para eventos, personas y marcas.
          </h2>
          <p className="lead mt-5 max-w-2xl">
            Retratos es la especialidad principal. También puedes consultar
            eventos, fotografía para marcas y contenido para redes.
          </p>
          <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-4 xl:gap-8">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 60}>
                <ServiceCard service={s} featured={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PORTAFOLIO DESTACADO */}
      <section className="section-y bg-paper">
        <div className="shell">
          <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <div>
              <Eyebrow accent="steel" className="text-muted-foreground">
                Portafolio
              </Eyebrow>
              <h2 className="display-2 mt-5">
                Explora el trabajo por especialidad.
              </h2>
              <p className="lead mt-4 max-w-xl">
                Entra a Retratos, Eventos, Fotografía para marcas o Contenido
                para redes para ver la galería completa de cada pilar.
              </p>
            </div>
            <Link
              to="/portafolio"
              className="ui-label inline-flex min-h-11 items-center underline-offset-[6px] hover:underline"
            >
              Ver portafolio completo
            </Link>
          </div>

          <PortfolioCategoryMosaic categories={visiblePortfolioCategories} />
        </div>
      </section>

      {/* SOBRE ALEX */}
      <section className="section-y bg-mist">
        <div className="shell grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow accent="sand" className="text-muted-foreground">
              Sobre mí
            </Eyebrow>
            <h2 className="display-2 mt-5">Hola, soy Alex Yaguana.</h2>
            <p className="lead mt-8 max-w-lg">
              Soy fotógrafo y creador de contenido en Quito, Ecuador. Me
              especializo en eventos, retratos, fotografía para marcas y
              contenido visual para redes sociales.
            </p>
            <p className="lead mt-5 max-w-lg">
              Busco crear imágenes naturales, elegantes y con un estilo
              cinematográfico que transmitan personalidad y cuenten una
              historia.
            </p>
            <p className="eyebrow mt-8 text-muted-foreground">{brand.years}</p>
            <BtnLink
              to="/sobre-mi"
              variant="outline"
              className="mt-8 w-full sm:w-auto"
            >
              Conoce más sobre mí
            </BtnLink>
          </div>
          <div className="aspect-square overflow-hidden border border-ink/8 bg-paper">
            <div className="grid h-full grid-cols-2 grid-rows-2 gap-px bg-ink/10">
              <ImagePlaceholder
                label="Retrato real de Alex Yaguana"
                ratio="1:1"
                tone="paper"
                compact
                className="h-full border-0"
              />
              <ImagePlaceholder
                label="Alex trabajando durante una sesión"
                ratio="1:1"
                tone="sage"
                compact
                className="h-full border-0"
              />
              <ImagePlaceholder
                label="Detalle real de producción fotográfica"
                ratio="16:9"
                tone="paper"
                compact
                className="col-span-2 h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="bg-ink py-28 text-paper lg:py-44">
        <div className="shell max-w-5xl text-center">
          <blockquote className="display-2 text-balance">
            “{brand.philosophy}”
          </blockquote>
          <p className="eyebrow mt-12 opacity-55">
            Alex Yaguana — AYACX Photography
          </p>
        </div>
      </section>

      <ProcessSection />
      <FinalCta />
    </SiteLayout>
  );
}
