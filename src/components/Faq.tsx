import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/site";
import { Eyebrow } from "./ui-kit";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const visibleFaqs = faqs
    .filter((faq) => faq.isVisible)
    .sort((a, b) => a.order - b.order);

  return (
    <section className="section-y bg-paper">
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div>
          <Eyebrow accent="sand" className="text-muted-foreground">
            Preguntas frecuentes
          </Eyebrow>
          <h2 className="display-2 mt-5">Antes de reservar.</h2>
        </div>
        <dl className="border-t border-ink/12">
          {visibleFaqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.id} className="border-b border-ink/12">
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-button-${i}`}
                    className="flex min-h-14 w-full items-center justify-between gap-6 py-5 pr-1 text-left"
                  >
                    <span className="font-[family-name:var(--font-ui)] text-base font-medium">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <Minus className="h-4 w-4 shrink-0" aria-hidden="true" />
                    ) : (
                      <Plus className="h-4 w-4 shrink-0" aria-hidden="true" />
                    )}
                  </button>
                </dt>
                <dd
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-button-${i}`}
                  hidden={!isOpen}
                  className="max-w-3xl pb-7 pr-10 text-[0.98rem] leading-relaxed text-muted-foreground"
                >
                  {faq.answer}
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
