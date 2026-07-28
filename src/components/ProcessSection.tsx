import { processSteps } from "@/data/site";
import { Eyebrow } from "./ui-kit";
import { Reveal } from "./Reveal";

export function ProcessSection({ tone = "light" }: { tone?: "light" | "muted" }) {
  return (
    <section className={tone === "muted" ? "section-y bg-mist" : "section-y bg-paper"}>
      <div className="shell">
        <Eyebrow accent="steel" className="text-muted-foreground">
          Proceso
        </Eyebrow>
        <h2 className="display-2 mt-5 max-w-3xl">Una experiencia clara, de principio a fin.</h2>

        <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {processSteps.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 70} className="relative">
              <div className="mb-6 hidden h-px w-full bg-ink/15 lg:block" />
              <div className="mb-6 h-10 w-px bg-ink/15 lg:hidden" aria-hidden="true" />
              <p className="font-[family-name:var(--font-display)] text-4xl font-light text-ink/35">
                {step.number}
              </p>
              <h3 className="mt-3 text-xl md:text-2xl">{step.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
