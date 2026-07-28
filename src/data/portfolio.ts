import { contact } from "./site";
import { generatedPortfolioImages } from "./portfolio.generated";
import type { Ratio } from "@/components/ImagePlaceholder";

export type PortfolioCategorySlug =
  "eventos" | "retratos" | "marcas" | "contenido-para-redes";

export type PortfolioImage = {
  id: string;
  category?: PortfolioCategorySlug;
  originalFilename?: string;
  src?: string;
  thumbnailSrc?: string;
  highResolutionSrc?: string;
  mediumSrc?: string;
  srcSet?: string;
  thumbnailSrcSet?: string;
  highResolutionSrcSet?: string;
  sources?: PortfolioImageSource[];
  thumbnailSources?: PortfolioImageSource[];
  lightboxSources?: PortfolioImageSource[];
  originalSrc?: string;
  sizes?: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio?: number;
  ratio: Ratio;
  orientation: "vertical" | "horizontal" | "square";
  caption?: string;
  location?: string;
  date?: string;
  credits?: string;
  featured?: boolean;
  hero?: boolean;
  cover?: boolean;
  focalPoint?: string;
  placeholderLabel: string;
  order?: number;
  isVisible?: boolean;
};

export type PortfolioImageSource = {
  type: string;
  srcSet: string;
};

export type PortfolioCategory = {
  id: string;
  slug: PortfolioCategorySlug;
  name: string;
  shortDescription: string;
  longDescription?: string;
  coverImage: PortfolioImage;
  heroImage: PortfolioImage;
  heroFocalPoint: string;
  galleryImages: PortfolioImage[];
  order: number;
  isVisible: boolean;
  accent: "sage" | "steel" | "sand";
  ctaTitle: string;
  ctaButton: string;
  contactService: string;
};

const whatsappFor = (service: string) =>
  `https://wa.me/593939666272?text=${encodeURIComponent(
    `Hola, Anthony. Encontré AYACX Photography y me gustaría consultar disponibilidad para ${service}.`,
  )}`;

const image = (
  id: string,
  placeholderLabel: string,
  ratio: Ratio,
  width: number,
  height: number,
  featured = false,
): PortfolioImage => ({
  id,
  alt: placeholderLabel,
  width,
  height,
  ratio,
  orientation:
    width === height ? "square" : width > height ? "horizontal" : "vertical",
  placeholderLabel,
  featured,
});

const portraitImages = generatedPortfolioImages.retratos ?? [];

const eventImages = generatedPortfolioImages.eventos ?? [];
const visibleEventImages = eventImages.filter(
  (item) => item.id !== "evento-007",
);
const generatedBrandImages = generatedPortfolioImages.marcas ?? [];

const brandPlaceholder = image(
  "marcas-hero",
  "Fotografía hero para Marca",
  "3:2",
  1800,
  1200,
  true,
);

const brandPlaceholderImages = [
  image(
    "marcas-square-01",
    "Fotografía cuadrada para marca — 1:1",
    "1:1",
    1400,
    1400,
  ),
  image(
    "marcas-square-02",
    "Producto, espacio o equipo de marca — 1:1",
    "1:1",
    1400,
    1400,
  ),
  image(
    "marcas-square-03",
    "Fotografía para identidad de marca — 1:1",
    "1:1",
    1400,
    1400,
  ),
  image(
    "marcas-horizontal-01",
    "Fotografía horizontal para marca — 16:9",
    "16:9",
    1920,
    1080,
  ),
];

const contentPlaceholder = image(
  "contenido-hero",
  "Fotografía hero de Contenido para Redes",
  "4:5",
  1200,
  1500,
  true,
);

const contentImages = [
  image(
    "contenido-square-01",
    "Contenido vertical para redes — recorte de miniatura 1:1",
    "1:1",
    1400,
    1400,
  ),
  image(
    "contenido-square-02",
    "Contenido visual para marca personal — 1:1",
    "1:1",
    1400,
    1400,
  ),
  image(
    "contenido-square-03",
    "Fotografía para publicación social — 1:1",
    "1:1",
    1400,
    1400,
  ),
  image(
    "contenido-horizontal-01",
    "Fotografía horizontal de campaña — proporción original",
    "16:9",
    1920,
    1080,
  ),
];

const pickHero = (images: PortfolioImage[], fallback: PortfolioImage) =>
  images.find((item) => item.hero) ??
  images.find((item) => item.featured) ??
  images[0] ??
  fallback;

const pickCover = (images: PortfolioImage[], fallback: PortfolioImage) =>
  images.find((item) => item.cover) ??
  images.find((item) => item.featured) ??
  images[0] ??
  fallback;

const portraitFallback = image(
  "retratos-hero",
  "Fotografía hero de Retratos",
  "4:5",
  1200,
  1500,
  true,
);

const eventFallback = image(
  "eventos-hero",
  "Fotografía hero de Eventos",
  "3:2",
  1800,
  1200,
  true,
);

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: "portfolio-retratos",
    slug: "retratos",
    name: "Retratos",
    shortDescription:
      "Retratos personales, profesionales y editoriales creados con dirección, naturalidad y una mirada cinematográfica.",
    longDescription:
      "Retratos con dirección cercana para que cada imagen conserve presencia, personalidad y naturalidad.",
    coverImage: pickCover(portraitImages, portraitFallback),
    heroImage: pickHero(portraitImages, portraitFallback),
    heroFocalPoint:
      pickHero(portraitImages, portraitFallback).focalPoint ?? "58% 44%",
    galleryImages: portraitImages,
    order: 1,
    isVisible: true,
    accent: "steel",
    ctaTitle: "¿Creamos una sesión que se sienta como tú?",
    ctaButton: "Consultar sesión de retrato",
    contactService: "una sesión de retrato",
  },
  {
    id: "portfolio-eventos",
    slug: "eventos",
    name: "Eventos",
    shortDescription:
      "Coberturas de graduaciones, celebraciones, presentaciones, eventos privados y momentos que merecen permanecer.",
    longDescription:
      "Una galería pensada para recorrer coberturas completas de eventos, desde los momentos principales hasta los detalles que sostienen la historia.",
    coverImage: pickCover(eventImages, eventFallback),
    heroImage: pickHero(eventImages, eventFallback),
    heroFocalPoint:
      pickHero(eventImages, eventFallback).focalPoint ?? "50% 42%",
    galleryImages: visibleEventImages,
    order: 2,
    isVisible: true,
    accent: "sage",
    ctaTitle: "¿Tienes un evento que quieres conservar?",
    ctaButton: "Consultar cobertura",
    contactService: "una cobertura de evento",
  },
  {
    id: "portfolio-marcas",
    slug: "marcas",
    name: "Fotografía para marcas",
    shortDescription:
      "Imágenes de productos, espacios, equipos y negocios creadas para comunicar la identidad de una marca con claridad, intención y una estética cuidada.",
    longDescription:
      "Fotografía para que productos, espacios y equipos comuniquen con claridad en web, redes y materiales de marca.",
    coverImage: pickCover(generatedBrandImages, brandPlaceholder),
    heroImage: pickHero(generatedBrandImages, brandPlaceholder),
    heroFocalPoint:
      pickHero(generatedBrandImages, brandPlaceholder).focalPoint ?? "54% 52%",
    galleryImages:
      generatedBrandImages.length > 0
        ? generatedBrandImages
        : brandPlaceholderImages,
    order: 3,
    isVisible: true,
    accent: "sand",
    ctaTitle: "¿Tu marca necesita imágenes que comuniquen mejor?",
    ctaButton: "Consultar proyecto para marca",
    contactService: "un proyecto fotográfico para marca",
  },
  {
    id: "portfolio-contenido",
    slug: "contenido-para-redes",
    name: "Contenido para redes",
    shortDescription:
      "Fotografías y contenido visual pensado para creadores, profesionales, emprendimientos y marcas personales.",
    longDescription:
      "Contenido visual para publicar con intención, mantener una presencia clara y contar mejor lo que haces.",
    coverImage: contentPlaceholder,
    heroImage: contentPlaceholder,
    heroFocalPoint: "50% 40%",
    galleryImages: contentImages,
    order: 4,
    isVisible: true,
    accent: "sage",
    ctaTitle: "¿Necesitas contenido visual para tus redes?",
    ctaButton: "Consultar producción de contenido",
    contactService: "producción de contenido para redes",
  },
];

export const visiblePortfolioCategories = portfolioCategories
  .filter((category) => category.isVisible)
  .sort((a, b) => a.order - b.order);

export function getPortfolioCategory(slug: PortfolioCategorySlug) {
  return visiblePortfolioCategories.find((category) => category.slug === slug);
}

export function getCategoryContactHref(category: PortfolioCategory) {
  return category.contactService
    ? whatsappFor(category.contactService)
    : contact.whatsapp;
}
