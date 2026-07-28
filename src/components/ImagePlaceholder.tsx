import { cn } from "@/lib/utils";

export type Ratio = "4:5" | "3:2" | "1:1" | "16:9" | "5:4" | "2:3";

const ratioClass: Record<Ratio, string> = {
  "4:5": "aspect-[4/5]",
  "3:2": "aspect-[3/2]",
  "1:1": "aspect-square",
  "16:9": "aspect-[16/9]",
  "5:4": "aspect-[5/4]",
  "2:3": "aspect-[2/3]",
};

const toneClass = {
  mist: "bg-mist text-ink/55",
  sage: "bg-[color-mix(in_oklab,var(--sage)_38%,var(--mist))] text-ink/60",
  steel: "bg-[color-mix(in_oklab,var(--steel)_38%,var(--mist))] text-ink/60",
  sand: "bg-[color-mix(in_oklab,var(--sand)_38%,var(--mist))] text-ink/60",
  paper: "bg-paper text-ink/55",
} as const;

type Props = {
  label: string;
  ratio?: Ratio;
  tone?: keyof typeof toneClass;
  className?: string;
  compact?: boolean;
};

/**
 * ImagePlaceholder — reserva la proporción de la fotografía real que irá aquí.
 * Sustituir por <img> cuando las fotografías definitivas estén disponibles.
 */
export function ImagePlaceholder({
  label,
  ratio = "4:5",
  tone = "mist",
  className,
  compact = false,
}: Props) {
  return (
    <div
      role="img"
      aria-label={`Espacio reservado: ${label}. Proporción recomendada ${ratio}.`}
      className={cn(
        "relative w-full overflow-hidden border border-ink/8",
        ratioClass[ratio],
        toneClass[tone],
        className,
      )}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-45"
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
      <svg
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 w-[34%] max-w-24 -translate-x-1/2 -translate-y-[calc(50%+1.6rem)] opacity-70"
        viewBox="0 0 64 44"
        fill="none"
      >
        <rect
          x="0.5"
          y="0.5"
          width="63"
          height="43"
          stroke="currentColor"
          strokeWidth="1"
        />
        <circle cx="17" cy="14" r="5" stroke="currentColor" strokeWidth="1" />
        <path
          d="M2 40 22 22l12 11 10-8 18 15"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
      <div
        className={cn(
          "absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4 text-center sm:p-5",
          compact && "p-3",
        )}
      >
        <span className="ui-label leading-snug">{label}</span>
        <span className="eyebrow opacity-70">
          Proporción recomendada: {ratio}
        </span>
      </div>
    </div>
  );
}
