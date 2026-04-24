'use client';

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { CONTACT } from "@/lib/contacts";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/servizi", label: "Servizi" },
  { href: "/chi-siamo", label: "Chi siamo" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contatti", label: "Contatti" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-baseline gap-1.5" onClick={() => setOpen(false)}>
          <span className="text-xl font-bold tracking-tighter uppercase">Manta</span>
          <span className="text-xl font-light tracking-tighter uppercase text-muted-foreground">
            Italia
          </span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-medium uppercase tracking-wide md:flex">
          {NAV.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-foreground/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="hidden items-center gap-2 text-sm font-semibold sm:inline-flex hover:text-accent transition-colors"
          >
            <Phone className="size-4" /> {CONTACT.phone}
          </a>
          <Link
            href="/contatti"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95 md:inline-block"
          >
            Preventivo
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 -mr-2"
            aria-label="Apri menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="flex flex-col px-6 py-4">
            {NAV.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-base font-medium uppercase tracking-wide transition-colors ${
                    isActive ? "text-foreground" : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contatti"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Richiedi un preventivo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}