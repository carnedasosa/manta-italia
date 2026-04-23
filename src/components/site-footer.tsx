import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contacts";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-bold tracking-tighter uppercase">Manta</span>
            <span className="text-2xl font-light tracking-tighter uppercase text-muted-foreground">
              Italia
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            Installazione professionale di infissi, porte blindate, tapparelle e zanzariere.
            Sede a Bari, operiamo in tutta Italia per privati e aziende.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Naviga</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/servizi" className="hover:text-foreground">Servizi</Link></li>
            <li><Link to="/chi-siamo" className="hover:text-foreground">Chi siamo</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/contatti" className="hover:text-foreground">Contatti</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Contatti</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="size-4 mt-0.5 shrink-0" />
              <a href={`tel:${CONTACT.phoneTel}`} className="hover:text-foreground">{CONTACT.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="size-4 mt-0.5 shrink-0" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-foreground">{CONTACT.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5 shrink-0" />
              <span>{CONTACT.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 md:flex-row">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Manta Italia — P.IVA 00000000000
          </p>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            Bari · Italia
          </p>
        </div>
      </div>
    </footer>
  );
}