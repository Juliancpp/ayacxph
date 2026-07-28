export const SITE_URL = "https://ayacxph.com";
export const SITE_NAME = "AYACX Photography";
export const SITE_TITLE = "AYACX Photography | Fotógrafo en Quito";
export const SITE_DESCRIPTION =
  "Fotografía auténtica para retratos, eventos y marcas en Quito, Ecuador. Conoce el trabajo de Anthony Yaguana y consulta disponibilidad para tu próxima sesión.";
export const SITE_AUTHOR = "Anthony Yaguana";
export const OG_IMAGE = `${SITE_URL}/social/ayacx-og.jpg`;
export const THEME_COLOR = "#0F0F0F";

export const canonicalUrl = (path = "/") =>
  `${SITE_URL}${path === "/" ? "/" : path}`;

export function pageHead({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = canonicalUrl(path);

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: SITE_AUTHOR },
      { name: "robots", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "es_EC" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  email: "nthnyaguana@gmail.com",
  image: OG_IMAGE,
  areaServed: {
    "@type": "City",
    name: "Quito",
    containedInPlace: {
      "@type": "Country",
      name: "Ecuador",
    },
  },
  sameAs: ["https://www.instagram.com/ayacx_10/"],
  founder: {
    "@type": "Person",
    name: SITE_AUTHOR,
    jobTitle: "Fotógrafo",
  },
  description: SITE_DESCRIPTION,
};
