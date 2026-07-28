import { cn } from "@/lib/utils";

const logos = {
  full: {
    light: {
      src: "/branding/ayacx/ayacx-logo-white.png",
      width: 577,
      height: 338,
    },
    dark: {
      src: "/branding/ayacx/ayacx-logo-black.png",
      width: 573,
      height: 330,
    },
  },
  monogram: {
    light: {
      src: "/branding/ayacx/ayacx-monogram-white.png",
      width: 290,
      height: 247,
    },
    dark: {
      src: "/branding/ayacx/ayacx-monogram-black.png",
      width: 289,
      height: 232,
    },
  },
} as const;

export function BrandLogo({
  variant,
  type = "full",
  className,
  alt = "AYACX Photography",
}: {
  variant: "light" | "dark";
  type?: "full" | "monogram";
  className?: string;
  alt?: string;
}) {
  const logo = logos[type][variant];

  return (
    <img
      src={logo.src}
      width={logo.width}
      height={logo.height}
      alt={alt}
      decoding="sync"
      fetchPriority="high"
      className={cn("block h-auto w-auto object-contain", className)}
    />
  );
}
