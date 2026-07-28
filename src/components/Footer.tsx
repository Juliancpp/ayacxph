import { Link } from "@tanstack/react-router";
import { contact, brand, services } from "@/data/site";
import { BrandLogo } from "./BrandLogo";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/portafolio", label: "Portafolio" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/servicios", label: "Servicios" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-24">
        <div>
          <BrandLogo variant="light" className="h-12 max-w-[190px]" />
          <p className="mt-6 max-w-xs text-sm opacity-70">{brand.value}</p>
        </div>

        <nav aria-label="Servicios">
          <p className="eyebrow opacity-50">Servicios</p>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/servicios"
                  hash={s.slug}
                  className="text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Navegación del sitio">
          <p className="eyebrow opacity-50">Navegación</p>
          <ul className="mt-5 space-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm opacity-80 underline-offset-4 hover:underline hover:opacity-100"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow opacity-50">Contacto</p>
          <ul className="mt-5 space-y-3 text-sm opacity-80">
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
            <li>{contact.location}</li>
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-paper/12 py-8 text-xs opacity-60 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 AYACX Photography.</p>
        <p>Fotografía por Alex Yaguana.</p>
        <p>Política de privacidad — pendiente</p>
      </div>
    </footer>
  );
}
