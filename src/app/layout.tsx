import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = "https://www.examencivique.info";
const siteName = "ExamenCivique.info";
const defaultTitle = "Examen Civique 2026 : Test et 40 Questions Officielles (Gratuit)";
const defaultDescription =
  "Entraînez-vous avec le simulateur gratuit pour l'examen civique 2026. 40 questions officielles de l'OFII et téléchargement du livret citoyen PDF.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "website",
    siteName,
    locale: "fr_FR",
    url: siteUrl,
    title: defaultTitle,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    site: "@qcmcivique",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Header />
          <Breadcrumbs />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
