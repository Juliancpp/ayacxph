import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import {
  OG_IMAGE,
  SITE_AUTHOR,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TITLE,
  THEME_COLOR,
  structuredData,
} from "../lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-6 text-paper">
      <p className="eyebrow opacity-60">Error 404</p>
      <h1 className="display-1 mt-6 max-w-2xl text-center">
        Esta página no existe.
      </h1>
      <p className="lead mt-6 max-w-md text-center">
        Puede que el enlace haya cambiado. Vuelve al inicio o revisa el
        portafolio.
      </p>
      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/"
          className="inline-flex min-h-11 items-center justify-center bg-paper px-6 py-3 font-[family-name:var(--font-ui)] text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-ink"
        >
          Volver al inicio
        </Link>
        <Link
          to="/portafolio"
          className="inline-flex min-h-11 items-center justify-center border border-paper/40 px-6 py-3 font-[family-name:var(--font-ui)] text-[0.8125rem] font-semibold uppercase tracking-[0.14em]"
        >
          Ver portafolio
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-3">Esta página no cargó</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Algo falló de nuestro lado. Puedes intentar de nuevo o volver al
          inicio.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex min-h-11 items-center justify-center bg-ink px-6 py-3 font-[family-name:var(--font-ui)] text-[0.8125rem] font-semibold uppercase tracking-[0.14em] text-paper"
          >
            Intentar de nuevo
          </button>
          <a
            href="/"
            className="inline-flex min-h-11 items-center justify-center border border-ink/25 px-6 py-3 font-[family-name:var(--font-ui)] text-[0.8125rem] font-semibold uppercase tracking-[0.14em]"
          >
            Ir al inicio
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: THEME_COLOR },
        { name: "referrer", content: "strict-origin-when-cross-origin" },
        { title: SITE_TITLE },
        { name: "description", content: SITE_DESCRIPTION },
        { name: "author", content: SITE_AUTHOR },
        { name: "robots", content: "index, follow" },
        { property: "og:site_name", content: SITE_NAME },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "es_EC" },
        { property: "og:image", content: OG_IMAGE },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: OG_IMAGE },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Manrope:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap",
        },
        { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
        {
          rel: "icon",
          href: "/icons/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
        {
          rel: "icon",
          href: "/icons/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        { rel: "apple-touch-icon", href: "/icons/apple-touch-icon.png" },
        { rel: "manifest", href: "/manifest.webmanifest" },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
