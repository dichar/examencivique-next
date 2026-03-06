"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

const routeNames: Record<string, string> = {
  "": "Accueil",
  "questions": "Liste des Questions",
  "guide": "Guide de l'Examen",
  "comparatif": "Comparatif OFII vs Naturalisation",
  "faq": "FAQ",
  "a-propos": "À propos",
  "themes": "Thématiques",
  "valeurs": "Valeurs de la République",
  "histoire": "Dates Clés de l'Histoire",
  "modules-entrainement": "Modules d'Entraînement",
  "examen-chronometre": "Examen Chronométré",
  "blog": "Blog",
  "centres-examen": "Centres d'Examen",
  "quest-ce-que-examen-civique": "Qu'est-ce que l'examen civique ?",
  "contenu-thematiques": "Contenu et Thématiques",
  "reussir-examen": "Réussir l'Examen",
  "quand-passer-examen": "Quand Passer l'Examen",
  "preparation-inscription": "Préparation et Inscription",
  "amenagements-dispenses": "Aménagements et Dispenses",
  "guide-deroulement-examen-civique-2026": "Déroulement Examen Civique 2026",
  "examen-civique-naturalisation-2026": "Examen Civique Naturalisation 2026",
  "csp-cr-examen-civique-2026-comparatif": "Comparatif CSP vs CR 2026",
  "livret-citoyen-2026-pdf": "Livret du Citoyen 2026",
  "erreurs-frequentes-examen-civique-ofii": "Erreurs Fréquentes OFII",
  "mentions-legales": "Mentions légales",
};

export default function Breadcrumbs() {
  const pathname = usePathname() || "/";
  const pathnames = pathname.split("/").filter((x) => x);

  if (pathnames.length === 0) return null;

  const breadcrumbItems = [
    { name: "Accueil", url: "https://www.examencivique.info" },
    ...pathnames.map((_, index) => {
      const url = `https://www.examencivique.info/${pathnames.slice(0, index + 1).join("/")}`;
      const name = routeNames[pathnames[index]] || pathnames[index];
      return { name, url };
    }),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };

  const hideOnMobile = pathname.startsWith("/entrainement") || pathname.startsWith("/examen-chronometre");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav
        aria-label="Fil d'Ariane"
        className={`bg-muted/50 border-b border-border ${hideOnMobile ? "hidden sm:block" : ""}`}
      >
        <div className="container-wide py-3">
          <ol className="flex items-center gap-2 text-sm flex-wrap" itemScope itemType="https://schema.org/BreadcrumbList">
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <Link 
                href="/" 
                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
                itemProp="item"
              >
                <Home className="w-4 h-4" />
                <span itemProp="name">Accueil</span>
              </Link>
              <meta itemProp="position" content="1" />
            </li>
            {pathnames.map((segment, index) => {
              const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;
              const name = routeNames[segment] || segment;

              return (
                <li 
                  key={segment} 
                  className="flex items-center gap-2"
                  itemProp="itemListElement" 
                  itemScope 
                  itemType="https://schema.org/ListItem"
                >
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  {isLast ? (
                    <span className="font-medium text-foreground" itemProp="name">{name}</span>
                  ) : (
                    <Link 
                      href={routeTo} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                      itemProp="item"
                    >
                      <span itemProp="name">{name}</span>
                    </Link>
                  )}
                  <meta itemProp="position" content={String(index + 2)} />
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
