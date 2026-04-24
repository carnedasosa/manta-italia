import Link from "next/link";
import Image from "next/image";
import p1 from "@/assets/portfolio-1.jpg";
import p2 from "@/assets/portfolio-2.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";

export const metadata = {
  title: "Portfolio lavori — Manta Italia",
  description: "Una selezione delle installazioni di Manta Italia: infissi, porte blindate, tapparelle e zanzariere realizzate a Bari e in tutta Italia.",
  openGraph: {
    title: "Portfolio — Manta Italia",
    description: "Una selezione dei nostri lavori di installazione.",
    images: [{ url: p1.src }],
  },
};

const WORKS = [
  { img: p1, title: "Villa privata", tag: "Infissi alluminio", loc: "Mola di Bari" },
  { img: p2, title: "Ingresso blindato", tag: "Porta blindata classe 4", loc: "Bari Centro" },
  { img: p3, title: "Appartamento sul mare", tag: "Vetrate scorrevoli", loc: "Polignano a Mare" },
  { img: p4, title: "Edificio direzionale", tag: "Facciata continua", loc: "Bari" },
  { img: p5, title: "Trullo ristrutturato", tag: "Infissi su misura", loc: "Alberobello" },
  { img: p6, title: "Camera da letto", tag: "Tapparelle motorizzate", loc: "Monopoli" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            Portfolio
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">
            Lavori che <em className="font-normal">parlano</em> per noi.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Una selezione delle installazioni realizzate per privati e aziende. Ogni cantiere è
            la nostra firma.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {WORKS.map((w) => (
              <figure key={w.title} className="group overflow-hidden rounded-3xl bg-secondary">
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={w.img}
                    alt={w.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <figcaption className="flex items-end justify-between bg-background p-5">
                  <div>
                    <h3 className="font-semibold">{w.title}</h3>
                    <p className="text-xs text-muted-foreground">{w.loc}</p>
                  </div>
                  <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                    {w.tag}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl tracking-tight">
            Il prossimo lavoro potrebbe essere il tuo.
          </h2>
          <Link
            href="/contatti"
            className="rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            Richiedi un preventivo gratuito
          </Link>
        </div>
      </section>
    </>
  );
}
