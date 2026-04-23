import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import infissi from "@/assets/service-infissi.jpg";
import porte from "@/assets/service-porte.jpg";
import tapparelle from "@/assets/service-tapparelle.jpg";
import zanzariere from "@/assets/service-zanzariere.jpg";
import manutenzione from "@/assets/service-manutenzione.jpg";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi — Infissi, Porte Blindate, Tapparelle | Manta Italia" },
      {
        name: "description",
        content:
          "I servizi di Manta Italia: installazione infissi, porte blindate, tapparelle, zanzariere e manutenzione. Lavoriamo a Bari e in tutta Italia.",
      },
      { property: "og:title", content: "Servizi — Manta Italia" },
      { property: "og:description", content: "Installazione infissi, porte blindate, tapparelle, zanzariere e manutenzione." },
    ],
  }),
  component: ServiziPage,
});

const SERVICES = [
  {
    title: "Installazione infissi",
    img: infissi,
    body: "Posa professionale di serramenti in PVC, alluminio e legno. Massimo isolamento termico e acustico, con finiture di pregio per ogni stile abitativo.",
    bullets: ["Rilievo e sopralluogo gratuito", "Posa in opera certificata", "Smaltimento del vecchio incluso"],
  },
  {
    title: "Porte blindate",
    img: porte,
    body: "Installazione di porte blindate ad alta sicurezza con classe antieffrazione fino a 4. Ampia scelta di rivestimenti e serrature.",
    bullets: ["Classe antieffrazione 3 o 4", "Serrature europee a cilindro", "Pannelli su misura"],
  },
  {
    title: "Tapparelle",
    img: tapparelle,
    body: "Tapparelle in alluminio, PVC o acciaio, manuali o motorizzate. Sostituzione, riparazione e nuove installazioni.",
    bullets: ["Motorizzazione e domotica", "Sostituzione cinghie e cassonetti", "Modelli antieffrazione"],
  },
  {
    title: "Zanzariere",
    img: zanzariere,
    body: "Zanzariere a rullo, plissettate o scorrevoli, su misura per ogni finestra e porta. Materiali resistenti e design discreto.",
    bullets: ["Misure su rilievo", "Installazione in giornata", "Garanzia 5 anni"],
  },
  {
    title: "Manutenzione e riparazioni",
    img: manutenzione,
    body: "Interventi rapidi su infissi e porte di qualsiasi marca: sostituzione guarnizioni, regolazioni, riparazione meccanismi.",
    bullets: ["Pronto intervento su Bari", "Tutte le marche", "Preventivo chiaro e definitivo"],
  },
] as const;

function ServiziPage() {
  return (
    <>
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <span className="inline-block rounded-full bg-background px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            I nostri servizi
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">
            Solo <em className="font-normal">installazione</em>. Fatta come si deve.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Non vendiamo prodotti: installiamo, sostituiamo e ripariamo. Questa è la nostra
            specializzazione, e per questo la facciamo meglio di chiunque altro.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 space-y-20">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-[5/4] overflow-hidden rounded-3xl bg-secondary">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-accent">
                  0{i + 1}
                </span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">{s.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{s.body}</p>
                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <span className="mt-2 size-1.5 rounded-full bg-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contatti"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Richiedi preventivo <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}