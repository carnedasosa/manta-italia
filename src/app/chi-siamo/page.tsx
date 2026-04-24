import Link from "next/link";
import Image from "next/image";
import { Award, HeartHandshake, ShieldCheck, Wrench } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";

export const metadata = {
  title: "Chi siamo — Manta Italia, installatori dal 1995",
  description: "Manta Italia: ditta individuale specializzata nell'installazione di infissi e porte blindate. Esperienza pluriennale, Bari e tutta Italia.",
  openGraph: {
    title: "Chi siamo — Manta Italia",
    description: "Esperienza pluriennale nell'installazione di infissi, porte blindate e accessori.",
  },
};

const VALUES = [
  { icon: Award, title: "Esperienza", body: "Oltre 25 anni nei cantieri pugliesi e in tutta Italia." },
  { icon: ShieldCheck, title: "Qualità", body: "Posa certificata, materiali selezionati, finiture impeccabili." },
  { icon: HeartHandshake, title: "Prezzo giusto", body: "Preventivi chiari, senza sorprese né costi nascosti." },
  { icon: Wrench, title: "Affidabilità", body: "Rispettiamo i tempi concordati e siamo presenti dopo l'installazione." },
];

export default function ChiSiamoPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="inline-block rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
              Chi siamo
            </span>
            <h1 className="mt-6 font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">
              Una ditta a <em className="font-normal">misura d'uomo</em>, una posa di livello industriale.
            </h1>
            <div className="mt-8 space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>
                Manta Italia nasce a Bari dall'esperienza pluriennale del suo titolare nel
                mondo dei serramenti. Una scelta precisa: dedicarsi <strong className="text-foreground">solo</strong> all'installazione,
                la fase più delicata di tutto il processo.
              </p>
              <p>
                Lavoriamo con privati, condomini e aziende, dalla singola finestra al cantiere
                completo. La nostra forza sta nella cura del dettaglio, nel rispetto degli orari
                e nella trasparenza totale sui costi.
              </p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-secondary shadow-2xl">
              <Image 
                src={portfolio1} 
                alt="Lavoro Manta Italia" 
                className="h-full w-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="max-w-2xl font-display text-4xl md:text-5xl tracking-tight">
            I valori che guidano ogni installazione.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border/60 bg-background p-8">
                <v.icon className="size-7 text-accent" />
                <h3 className="mt-5 text-lg font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl tracking-tight">
            Pronto a lavorare con noi?
          </h2>
          <p className="mt-4 text-muted-foreground">Sopralluogo e preventivo sono gratuiti.</p>
          <Link
            href="/contatti"
            className="mt-8 inline-block rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105 active:scale-95"
          >
            Richiedi preventivo
          </Link>
        </div>
      </section>
    </>
  );
}
