import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, HeartHandshake, Phone, ShieldCheck, Star, Wrench } from "lucide-react";
import hero from "@/assets/hero-windows.jpg";
import infissi from "@/assets/service-infissi.jpg";
import porte from "@/assets/service-porte.jpg";
import tapparelle from "@/assets/service-tapparelle.jpg";
import zanzariere from "@/assets/service-zanzariere.jpg";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import { CONTACT } from "@/lib/contacts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Manta Italia — Installazione Infissi e Porte Blindate a Bari" },
      {
        name: "description",
        content:
          "Installazione professionale di infissi, porte blindate, tapparelle e zanzariere a Bari e in tutta Italia. Esperienza, qualità e prezzo giusto.",
      },
      { property: "og:title", content: "Manta Italia — Installazione Infissi e Porte Blindate" },
      { property: "og:description", content: "Installiamo infissi, porte blindate, tapparelle e zanzariere. Bari e tutta Italia." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

const SERVICES = [
  { title: "Infissi", img: infissi, body: "PVC, alluminio e legno. Massimo isolamento termico e acustico." },
  { title: "Porte blindate", img: porte, body: "Sicurezza certificata e finiture su misura per ogni ingresso." },
  { title: "Tapparelle", img: tapparelle, body: "Manuali o motorizzate. Sostituzione, riparazione, nuova posa." },
  { title: "Zanzariere", img: zanzariere, body: "A rullo, plissé o scorrevoli. Discrete, robuste, su misura." },
];

const REVIEWS = [
  { name: "Giuseppe M.", text: "Lavoro impeccabile, puliti e veloci. Hanno installato 8 infissi in 2 giorni." },
  { name: "Studio Legale R.", text: "Professionali e affidabili. Preventivo rispettato al centesimo." },
  { name: "Anna L.", text: "La porta blindata è una sicurezza. Consiglio Manta Italia ad occhi chiusi." },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              Installatori a Bari · in tutta Italia
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl xl:text-[5.5rem] leading-[1.02] tracking-tight">
              L'architettura della <em className="font-normal">luce</em> mediterranea.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Installazione di infissi, porte blindate, tapparelle e zanzariere.
              Esperienza pluriennale, qualità reale, prezzo giusto.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contatti"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] active:scale-95"
              >
                Richiedi un preventivo
              </Link>
              <a
                href={`tel:${CONTACT.phoneTel}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-8 py-4 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                <Phone className="size-4" /> Chiama ora
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-muted-foreground uppercase tracking-widest">
              <span className="flex items-center gap-2"><Star className="size-3.5 fill-accent text-accent" /> Sopralluogo gratuito</span>
              <span className="flex items-center gap-2"><Star className="size-3.5 fill-accent text-accent" /> Garanzia inclusa</span>
              <span className="flex items-center gap-2"><Star className="size-3.5 fill-accent text-accent" /> Risposta in 24h</span>
            </div>
          </div>

          <div className="relative lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-secondary shadow-2xl">
              <img
                src={hero}
                alt="Infissi installati in dimora mediterranea"
                width={1280}
                height={1536}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-[240px] rounded-2xl border border-border/60 bg-background p-6 shadow-xl md:block">
              <p className="text-sm font-medium leading-snug">
                "Trasformiamo la tua casa in un'oasi di comfort termico e bellezza."
              </p>
              <div className="mt-3 h-px w-10 bg-accent" />
              <p className="mt-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Manta Italia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-4xl md:text-5xl tracking-tight">
                Servizi su misura per il tuo abitare
              </h2>
              <p className="mt-4 text-muted-foreground">
                Ogni installazione è preceduta da un sopralluogo tecnico per garantirti il
                risultato che immagini.
              </p>
            </div>
            <Link
              to="/servizi"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all"
            >
              Tutti i servizi <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link
                to="/servizi"
                key={s.title}
                className="group rounded-3xl border border-border/40 bg-background p-3 transition-transform hover:-translate-y-1"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-3 pb-4 pt-5">
                  <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="max-w-2xl font-display text-4xl md:text-5xl tracking-tight">
            Perché sceglierci? Quattro <em className="font-normal">buoni motivi</em>.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { i: Award, t: "25+ anni", d: "di esperienza in cantieri pubblici e privati." },
              { i: ShieldCheck, t: "Posa certificata", d: "secondo le normative UNI di settore." },
              { i: HeartHandshake, t: "Prezzo giusto", d: "preventivi chiari, niente sorprese." },
              { i: Wrench, t: "Assistenza", d: "ti seguiamo anche dopo l'installazione." },
            ].map((v) => (
              <div key={v.t} className="rounded-2xl border border-border/60 p-8">
                <v.i className="size-7 text-accent" />
                <h3 className="mt-5 text-xl font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl font-display text-4xl md:text-5xl tracking-tight">
              I nostri lavori, la nostra firma.
            </h2>
            <Link
              to="/portfolio"
              className="inline-flex w-fit items-center gap-2 text-sm font-bold uppercase tracking-widest hover:gap-4 transition-all"
            >
              Vedi tutto <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-4 md:grid-rows-2 md:[grid-template-areas:'a_a_b_c''a_a_d_d']">
            {[
              { img: p1, area: "a", h: "Villa privata · Mola di Bari" },
              { img: p2, area: "b", h: "Ingresso blindato · Bari" },
              { img: p3, area: "c", h: "Vetrate · Polignano" },
              { img: p5, area: "d", h: "Trullo · Alberobello" },
            ].map((w) => (
              <figure
                key={w.h}
                style={{ gridArea: w.area }}
                className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-secondary md:aspect-auto"
              >
                <img
                  src={w.img}
                  alt={w.h}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-xs font-bold uppercase tracking-widest text-white">
                  {w.h}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="max-w-2xl font-display text-4xl md:text-5xl tracking-tight">
            Cosa dicono i nostri clienti.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <blockquote key={r.name} className="rounded-3xl border border-border/60 bg-background p-8">
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-accent" />
                  ))}
                </div>
                <p className="mt-5 text-foreground/80 leading-relaxed">"{r.text}"</p>
                <footer className="mt-6 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  — {r.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary p-12 text-center text-primary-foreground md:p-20">
          <h2 className="mx-auto max-w-2xl font-display text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Pronto a cambiare prospettiva?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-primary-foreground/70">
            Sopralluogo e preventivo gratuiti a Bari e provincia. Per il resto d'Italia,
            scrivici: troviamo la soluzione migliore.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              to="/contatti"
              className="rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              Richiedi preventivo gratis
            </Link>
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
            >
              <Phone className="size-4" /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
