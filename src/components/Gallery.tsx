import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MutableRefObject,
} from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImagePlaceholder, type Ratio } from "./ImagePlaceholder";
import { PortfolioImage as ResponsivePortfolioImage } from "./PortfolioImage";
import type { PortfolioImage } from "@/data/portfolio";

export type GalleryItem = PortfolioImage | { label: string; ratio: Ratio };

export function Gallery({
  items,
  itemLabel = "fotografía",
}: {
  items: GalleryItem[];
  itemLabel?: string;
}) {
  const visualItems = items;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggersRef = useRef<(HTMLButtonElement | null)[]>([]);

  const close = useCallback(() => {
    const i = openIndex;
    setOpenIndex(null);
    if (i !== null)
      requestAnimationFrame(() => triggersRef.current[i]?.focus());
  }, [openIndex]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {visualItems.map((item, index) => (
          <GalleryButton
            key={`${index}-${getItemKey(item)}`}
            item={item}
            index={index}
            count={visualItems.length}
            itemLabel={itemLabel}
            triggersRef={triggersRef}
            onOpen={setOpenIndex}
          />
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          items={visualItems}
          index={openIndex}
          onIndexChange={setOpenIndex}
          onClose={close}
        />
      )}
    </>
  );
}

function GalleryButton({
  item,
  index,
  count,
  itemLabel,
  triggersRef,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  count: number;
  itemLabel: string;
  triggersRef: MutableRefObject<(HTMLButtonElement | null)[]>;
  onOpen: (index: number) => void;
}) {
  return (
    <button
      type="button"
      ref={(el) => {
        triggersRef.current[index] = el;
      }}
      onClick={() => onOpen(index)}
      aria-label={`Abrir ${itemLabel} ${index + 1} de ${count} en vista ampliada: ${getItemLabel(item)}`}
      className="group block aspect-square w-full cursor-pointer overflow-hidden text-left focus-visible:outline-offset-4 active:translate-y-px"
    >
      <div className="relative h-full w-full overflow-hidden border border-transparent transition-colors group-hover:border-ink/25">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.02]">
          <GalleryThumb item={item} />
        </div>
      </div>
    </button>
  );
}

function Lightbox({
  items,
  index,
  onIndexChange,
  onClose,
}: {
  items: GalleryItem[];
  index: number;
  onIndexChange: (i: number) => void;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);

  const prev = useCallback(
    () => onIndexChange((index - 1 + items.length) % items.length),
    [index, items.length, onIndexChange],
  );
  const next = useCallback(
    () => onIndexChange((index + 1) % items.length),
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    dialogRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        ),
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  const item = items[index];
  const itemSrc = getLightboxSrc(item);
  const [status, setStatus] = useState<"idle" | "loading" | "loaded" | "error">(
    itemSrc ? "loading" : "idle",
  );

  useEffect(() => {
    setStatus(itemSrc ? "loading" : "idle");
  }, [itemSrc]);

  useEffect(() => {
    const sources = [
      items[(index - 1 + items.length) % items.length],
      items[(index + 1) % items.length],
    ]
      .map(getLightboxSrc)
      .filter((src): src is string => Boolean(src));

    const preloads = sources.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    return () => {
      preloads.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [index, items]);

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Galería, imagen ${index + 1} de ${items.length}`}
      tabIndex={-1}
      className="fixed inset-0 z-[60] flex flex-col bg-ink text-paper"
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
        touchX.current = null;
      }}
    >
      <div className="shell flex h-[76px] shrink-0 items-center justify-between">
        <span className="eyebrow opacity-70">
          {index + 1} / {items.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar galería"
          className="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center gap-2 px-3 pb-6 sm:gap-6 sm:px-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Fotografía anterior"
          className="group flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center bg-transparent text-paper/80 transition-opacity hover:text-paper focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-paper/70 active:scale-95 sm:h-14 sm:w-14"
        >
          <ChevronLeft
            className="h-6 w-6 transition-transform duration-200 group-hover:-translate-x-0.5 sm:h-7 sm:w-7"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </button>
        <div className="max-h-full w-full max-w-3xl">
          {itemSrc ? (
            <div className="relative flex max-h-[calc(100vh-8rem)] items-center justify-center">
              {status === "loading" && (
                <p role="status" className="eyebrow absolute text-paper/70">
                  Cargando fotografía
                </p>
              )}
              {status === "error" ? (
                <div className="border border-paper/20 bg-paper/5 p-8 text-center">
                  <p className="lead text-paper">
                    No se pudo cargar esta fotografía.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("loading")}
                    className="ui-label mt-6 min-h-11 underline-offset-4 hover:underline"
                  >
                    Intentar de nuevo
                  </button>
                </div>
              ) : isPortfolioImage(item) ? (
                <ResponsivePortfolioImage
                  image={item}
                  variant="lightbox"
                  sizes="100vw"
                  decoding="async"
                  className="max-h-[calc(100vh-8rem)] w-auto max-w-full object-contain"
                  onLoad={() => setStatus("loaded")}
                  onError={() => setStatus("error")}
                />
              ) : null}
            </div>
          ) : (
            <ImagePlaceholder
              label={getItemLabel(item)}
              ratio={item.ratio}
              tone="paper"
            />
          )}
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Fotografía siguiente"
          className="group flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center bg-transparent text-paper/80 transition-opacity hover:text-paper focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-paper/70 active:scale-95 sm:h-14 sm:w-14"
        >
          <ChevronRight
            className="h-6 w-6 transition-transform duration-200 group-hover:translate-x-0.5 sm:h-7 sm:w-7"
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}

function GalleryThumb({ item }: { item: GalleryItem }) {
  const src = getThumbSrc(item);

  if (!src) {
    return (
      <ImagePlaceholder
        label={getItemLabel(item)}
        ratio="1:1"
        compact
        className="h-full w-full"
      />
    );
  }

  if (isPortfolioImage(item)) {
    return (
      <ResponsivePortfolioImage
        image={item}
        variant="thumbnail"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        loading="lazy"
        decoding="async"
        className="aspect-square h-full w-full object-cover"
        style={{
          aspectRatio: "1 / 1",
          objectPosition: item.focalPoint ?? "50% 50%",
        }}
      />
    );
  }

  return null;
}

function isPortfolioImage(item: GalleryItem): item is PortfolioImage {
  return "id" in item;
}

function getItemLabel(item: GalleryItem) {
  return isPortfolioImage(item) ? item.alt : item.label;
}

function getItemWidth(item: GalleryItem) {
  return isPortfolioImage(item) ? item.width : 1200;
}

function getItemHeight(item: GalleryItem) {
  return isPortfolioImage(item) ? item.height : 1500;
}

function getThumbSrc(item: GalleryItem) {
  return isPortfolioImage(item) ? (item.thumbnailSrc ?? item.src) : undefined;
}

function getLightboxSrc(item: GalleryItem) {
  return isPortfolioImage(item)
    ? (item.highResolutionSrc ?? item.src)
    : undefined;
}

function getItemKey(item: GalleryItem) {
  return isPortfolioImage(item) ? item.id : item.label;
}
