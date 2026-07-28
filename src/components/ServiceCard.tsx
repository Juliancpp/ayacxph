import { Link } from "@tanstack/react-router";
import type { Service } from "@/data/site";
import { cn } from "@/lib/utils";

const accentBar = {
  sage: "bg-sage",
  steel: "bg-steel",
  sand: "bg-sand",
};

export function ServiceCard({
  service,
  featured = false,
}: {
  service: Service;
  featured?: boolean;
}) {
  return (
    <article className="h-full">
      <Link
        to="/servicios"
        hash={service.slug}
        aria-label={`Ver servicio de ${service.title}`}
        className={cn(
          "group flex h-full cursor-pointer flex-col border-t border-ink/12 pt-6 transition-colors hover:border-ink/45 focus-visible:outline-offset-4 active:translate-y-px",
          featured && "md:pt-8",
        )}
      >
        <span
          aria-hidden="true"
          className={cn("mb-6 block h-1 w-10", accentBar[service.accent])}
        />
        <div className="flex flex-wrap items-center gap-3">
          <p className="eyebrow text-muted-foreground">{service.number}</p>
          {featured && (
            <span className="eyebrow bg-sage px-3 py-1 text-ink">
              Servicio principal
            </span>
          )}
        </div>
        <h3
          className={cn(
            "mt-3 font-[family-name:var(--font-display)] font-light",
            featured ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl",
          )}
        >
          {service.title}
        </h3>
        <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
          {service.short}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink/70">
          Para: {service.idealFor.slice(0, 3).join(", ")}.
        </p>
        <span className="ui-label mt-6 inline-flex min-h-11 items-center underline underline-offset-[6px] decoration-ink/35 transition-colors group-hover:decoration-ink">
          Ver servicio
        </span>
      </Link>
    </article>
  );
}
