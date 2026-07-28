import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Instagram, Menu, X, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { contact } from "@/data/site";
import { BrandLogo } from "./BrandLogo";
import { BtnAnchor } from "./ui-kit";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/portafolio", label: "Portafolio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/sobre-mi", label: "Sobre mí" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header({ overHero = false }: { overHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : previous;
    if (open) requestAnimationFrame(() => dialogRef.current?.focus());
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
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
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const transparent = overHero && !scrolled;
  const logoVariant = transparent ? "light" : "dark";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        transparent
          ? "bg-transparent text-paper"
          : "bg-paper text-ink border-b border-ink/8",
      )}
    >
      <div className="shell grid h-[76px] grid-cols-[1fr_auto] items-center gap-6 lg:h-20 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
        <Link
          to="/"
          className="flex min-h-11 items-center gap-2 justify-self-start"
          aria-label="AYACX Photography, inicio"
        >
          <BrandLogo
            variant={logoVariant}
            className="h-[34px] max-w-[134px] transition-opacity duration-200 sm:h-9 sm:max-w-[150px]"
          />
        </Link>

        <nav
          aria-label="Principal"
          className="hidden h-full items-center gap-8 justify-self-center lg:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: "opacity-100 underline underline-offset-[6px]",
                "aria-current": "page",
              }}
              inactiveProps={{ className: "opacity-70" }}
              className="ui-label inline-flex min-h-11 items-center transition-opacity hover:opacity-100 focus-visible:outline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-5 lg:flex">
          <a
            href={contact.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram de AYACX Photography"
            className="flex h-11 w-11 shrink-0 items-center justify-center opacity-70 transition-opacity hover:opacity-100 focus-visible:outline-offset-4"
          >
            <Instagram className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
          <BtnAnchor
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer noopener"
            variant={transparent ? "light" : "solid"}
            className="px-5 py-2.5"
          >
            Consultar disponibilidad
          </BtnAnchor>
        </div>

        <button
          type="button"
          ref={menuButtonRef}
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          aria-controls="menu-movil"
          className="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center justify-self-end lg:hidden"
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      {open && (
        <div
          id="menu-movil"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex flex-col bg-ink text-paper lg:hidden"
        >
          <div className="shell flex h-[76px] shrink-0 items-center justify-between">
            <BrandLogo variant="light" className="h-[34px] max-w-[134px]" />
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                requestAnimationFrame(() => menuButtonRef.current?.focus());
              }}
              aria-label="Cerrar menú"
              className="-mr-2 flex h-11 w-11 cursor-pointer items-center justify-center"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav
            aria-label="Principal móvil"
            className="shell flex flex-1 flex-col justify-center gap-1 overflow-y-auto py-8"
          >
            {nav.map((item) => {
              const active =
                item.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "display-3 flex min-h-16 items-center justify-between border-b border-paper/10 py-4 focus-visible:outline-offset-[-2px]",
                    active && "text-sage",
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="ui-label text-paper/70">Actual</span>
                  )}
                </Link>
              );
            })}
          </nav>
          <div className="shell flex flex-col gap-4 pb-10">
            <div className="flex flex-wrap gap-6">
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer noopener"
                className="ui-label flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />{" "}
                WhatsApp
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="ui-label flex items-center gap-2"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />{" "}
                {contact.instagramHandle}
              </a>
            </div>
            <BtnAnchor
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              variant="light"
              className="w-full"
            >
              Consultar disponibilidad
            </BtnAnchor>
          </div>
        </div>
      )}
    </header>
  );
}
