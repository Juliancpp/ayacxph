import { contact } from "@/data/site";
import { generatedPortfolioImages } from "@/data/portfolio.generated";
import { BtnAnchor } from "./ui-kit";
import { PortfolioImage } from "./PortfolioImage";

const closingImage = generatedPortfolioImages.retratos.find(
  (image) => image.originalFilename === "DSC04979.jpg",
);

export function FinalCta({
  title = "¿Tienes una historia que quieres conservar?",
  text = "Cuéntame sobre tu evento, sesión o proyecto y preparemos una propuesta adecuada para ti.",
  withImage = true,
}: {
  title?: string;
  text?: string;
  withImage?: boolean;
}) {
  return (
    <section className="section-y bg-ink text-paper">
      <div className="shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <h2 className="display-2 max-w-xl">{title}</h2>
          <p className="lead mt-6 max-w-lg">{text}</p>
          <div className="mt-10">
            <BtnAnchor
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              variant="light"
              className="w-full sm:w-auto"
            >
              Consultar disponibilidad
            </BtnAnchor>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm opacity-80">
            <li>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="underline-offset-4 hover:underline"
              >
                WhatsApp {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="underline-offset-4 hover:underline"
              >
                Instagram {contact.instagramHandle}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="underline-offset-4 hover:underline"
              >
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
        {withImage && (
          <div className="relative aspect-[3/2] overflow-hidden border border-paper/12 bg-paper/5">
            {closingImage && (
              <>
                <PortfolioImage
                  image={closingImage}
                  variant="display"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 42%" }}
                />
                <div className="pointer-events-none absolute inset-0 bg-ink/10" />
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
