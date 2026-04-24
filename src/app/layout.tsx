import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manta-italia.it"), // Sostituisci con il tuo dominio reale
  title: "Manta Italia — Installazione Infissi e Porte Blindate a Bari",
  description: "Manta Italia: installazione di infissi, porte blindate, tapparelle e zanzariere a Bari e ovunque in Italia. Esperienza, qualità e prezzo giusto.",
  authors: [{ name: "Manta Italia" }],
  openGraph: {
    title: "Manta Italia — Installazione Infissi e Porte Blindate",
    description: "Installazione professionale di infissi, porte blindate, tapparelle e zanzariere. Bari e tutta Italia.",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased`}
      >
        <div className="flex min-h-screen flex-col bg-background text-foreground font-sans">
          <SiteHeader />
          <main className="flex-1">
            {children}
          </main>
          <SiteFooter />
          <WhatsAppFab />
        </div>
      </body>
    </html>
  );
}
