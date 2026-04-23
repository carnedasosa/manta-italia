import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { z } from "zod";
import { CONTACT } from "@/lib/contacts";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Richiedi un preventivo | Manta Italia" },
      {
        name: "description",
        content:
          "Contatta Manta Italia per un preventivo gratuito su infissi, porte blindate, tapparelle e zanzariere. Telefono, WhatsApp, email e mappa.",
      },
      { property: "og:title", content: "Contatti — Manta Italia" },
      { property: "og:description", content: "Richiedi un preventivo gratuito. Telefono, WhatsApp, email." },
    ],
  }),
  component: ContattiPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Inserisci il tuo nome").max(100),
  phone: z.string().trim().min(6, "Inserisci un numero valido").max(30),
  email: z.string().trim().email("Email non valida").max(255),
  service: z.string().max(100).optional(),
  message: z.string().trim().min(10, "Scrivi almeno 10 caratteri").max(1000),
});

type FormState = "idle" | "ok" | "error";

function ContattiPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<FormState>("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form);
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        if (issue.path[0]) errs[String(issue.path[0])] = issue.message;
      }
      setErrors(errs);
      setState("error");
      return;
    }
    setErrors({});
    setState("ok");
    e.currentTarget.reset();
  };

  return (
    <>
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <span className="inline-block rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
            Contatti
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl md:text-7xl leading-[1.05] tracking-tight">
            Parliamone. <em className="font-normal">Senza impegno.</em>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Compila il modulo o scegli il canale che preferisci. Rispondiamo entro 24 ore.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-5">
            <a
              href={`tel:${CONTACT.phoneTel}`}
              className="flex items-center gap-4 rounded-2xl border border-border/60 bg-background p-6 transition-colors hover:bg-secondary"
            >
              <span className="grid size-12 place-items-center rounded-full bg-secondary"><Phone className="size-5" /></span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Chiama ora</p>
                <p className="font-semibold">{CONTACT.phone}</p>
              </div>
            </a>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-border/60 bg-background p-6 transition-colors hover:bg-secondary"
            >
              <span className="grid size-12 place-items-center rounded-full bg-[#25D366]/15 text-[#25D366]"><MessageCircle className="size-5" /></span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">WhatsApp</p>
                <p className="font-semibold">{CONTACT.whatsapp}</p>
              </div>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-4 rounded-2xl border border-border/60 bg-background p-6 transition-colors hover:bg-secondary"
            >
              <span className="grid size-12 place-items-center rounded-full bg-secondary"><Mail className="size-5" /></span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</p>
                <p className="font-semibold">{CONTACT.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-border/60 bg-background p-6">
              <span className="grid size-12 place-items-center rounded-full bg-secondary"><MapPin className="size-5" /></span>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Sede</p>
                <p className="font-semibold text-sm">{CONTACT.address}</p>
                <p className="text-xs text-muted-foreground">{CONTACT.hours}</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-3xl bg-primary p-8 text-primary-foreground md:p-12 lg:col-span-7"
            noValidate
          >
            <h2 className="font-display text-3xl tracking-tight">Richiedi un preventivo</h2>
            <p className="mt-2 text-sm text-primary-foreground/70">
              Sopralluogo gratuito a Bari e provincia.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field name="name" label="Nome e cognome" error={errors.name} />
              <Field name="phone" label="Telefono" type="tel" error={errors.phone} />
              <div className="md:col-span-2">
                <Field name="email" label="Email" type="email" error={errors.email} />
              </div>
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
                  Servizio di interesse
                </label>
                <select
                  name="service"
                  className="w-full rounded-xl border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  defaultValue=""
                >
                  <option value="" className="text-foreground">Seleziona…</option>
                  <option className="text-foreground">Infissi</option>
                  <option className="text-foreground">Porta blindata</option>
                  <option className="text-foreground">Tapparelle</option>
                  <option className="text-foreground">Zanzariere</option>
                  <option className="text-foreground">Manutenzione</option>
                  <option className="text-foreground">Altro</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <Field name="message" label="Messaggio" textarea error={errors.message} />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02] active:scale-95"
            >
              <Send className="size-4" /> Invia richiesta
            </button>

            {state === "ok" && (
              <p className="mt-6 rounded-xl bg-accent/15 p-4 text-sm text-accent-foreground border border-accent/30">
                Grazie! Ti ricontatteremo entro 24 ore.
              </p>
            )}
            {state === "error" && Object.keys(errors).length > 0 && (
              <p className="mt-6 rounded-xl bg-destructive/15 p-4 text-sm">
                Controlla i campi evidenziati.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl border border-border/60">
            <iframe
              title="Mappa Manta Italia"
              src={CONTACT.mapsEmbed}
              loading="lazy"
              className="h-[420px] w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  name,
  label,
  type = "text",
  textarea,
  error,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
  error?: string;
}) {
  const cls =
    "w-full rounded-xl border bg-primary-foreground/5 px-4 py-3 text-sm placeholder:text-primary-foreground/40 focus:outline-none focus:border-accent " +
    (error ? "border-destructive" : "border-primary-foreground/20");
  return (
    <div>
      <label className="mb-2 block text-xs font-bold uppercase tracking-widest text-primary-foreground/60">
        {label}
      </label>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} />
      ) : (
        <input name={name} type={type} className={cls} />
      )}
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}