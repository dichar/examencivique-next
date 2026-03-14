import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";

const siteUrl = "https://www.examencivique.info";
const siteName = "ExamenCivique.info";
const defaultTitle = "Examen civique 2026 : 2 quiz gratuits + Pack 3 mois (QCM OFII)";
const defaultDescription =
  "Préparez l'examen civique 2026 : 2 quiz gratuits pour tester, puis Pack Réussite (3 mois). 40 questions officielles, 45 minutes, score minimum 32/40.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  other: {
    "yandex-verification": "00355f4c88f8eac0",
  },
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: siteUrl,
  },
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
    images: [
      {
        url: "/logo.png",
        width: 180,
        height: 54,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@qcmcivique",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/logo.png"],
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
          <main className="flex-1 pb-24 lg:pb-0">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
