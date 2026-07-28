import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { cn } from "@/lib/utils";

export function SiteLayout({
  children,
  overHero = false,
}: {
  children: ReactNode;
  overHero?: boolean;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header overHero={overHero} />
      <main id="contenido" className={cn("flex-1", !overHero && "pt-[76px] lg:pt-20")}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
