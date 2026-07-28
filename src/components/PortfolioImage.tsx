import type { ImgHTMLAttributes } from "react";
import type { PortfolioImage as PortfolioImageData } from "@/data/portfolio";

type PortfolioImageVariant = "thumbnail" | "display" | "lightbox";

type Props = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "alt" | "height" | "src" | "srcSet" | "width"
> & {
  image: PortfolioImageData;
  variant?: PortfolioImageVariant;
};

export function PortfolioImage({
  image,
  variant = "display",
  sizes,
  ...props
}: Props) {
  const src = getSrc(image, variant);
  const srcSet = getSrcSet(image, variant);
  const sources = getSources(image, variant);

  if (!src) return null;

  return (
    <picture>
      {sources?.map((source) => (
        <source
          key={`${source.type}-${source.srcSet}`}
          type={source.type}
          srcSet={source.srcSet}
          sizes={sizes}
        />
      ))}
      <img
        {...props}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        width={image.width}
        height={image.height}
        alt={image.alt}
      />
    </picture>
  );
}

function getSrc(image: PortfolioImageData, variant: PortfolioImageVariant) {
  if (variant === "thumbnail") return image.thumbnailSrc ?? image.src;
  if (variant === "lightbox") return image.highResolutionSrc ?? image.src;
  return image.src ?? image.mediumSrc;
}

function getSrcSet(image: PortfolioImageData, variant: PortfolioImageVariant) {
  if (variant === "thumbnail") return image.thumbnailSrcSet ?? image.srcSet;
  if (variant === "lightbox") return image.highResolutionSrcSet ?? image.srcSet;
  return image.srcSet;
}

function getSources(image: PortfolioImageData, variant: PortfolioImageVariant) {
  if (variant === "thumbnail") return image.thumbnailSources;
  if (variant === "lightbox") return image.lightboxSources;
  return image.sources;
}
