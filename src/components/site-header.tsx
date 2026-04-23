import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { CONTACT } from "@/lib/contacts";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/servizi", label: "Servizi" },
  { to: "/chi-siamo", label: "Chi siamo" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-baseline gap-1.5" onClick={() => setOpen(false)}>
          <span className="text-xl font-bold tracking-tighter uppercase">Manta</span>
          <span className="text-xl font-light tracking-tighter uppercase text-muted-foreground">
            Italia
          </span>
        </Link>

        <nav className="hidden items-center gap-9 text-sm font-medium uppercase tracking-wide md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-foreground/70 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phoneTel}`}
            className="hidden items-center gap-2 text-sm font-semibold sm:inline-flex hover:text-accent transition-colors"
          >
            <Phone className="size-4" /> {CONTACT.phone}
          </a>
          <Link
            to="/contatti"
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
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="py-3 text-base font-medium uppercase tracking-wide text-foreground/70"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contatti"
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