export const metadata = {
  title: "Politique de confidentialité",
  description:
    "Découvrez comment ExamenCivique.info collecte, utilise et protège vos données, vos droits RGPD et nos sous-traitants (Stripe, Supabase).",
  alternates: {
    canonical: "https://www.examencivique.info/confidentialite",
  },
};

export default function ConfidentialitePage() {
  return (
    <section className="container-narrow py-12">
      <div className="question-card p-8 space-y-4">
        <h1 className="text-2xl font-bold">Politique de confidentialité</h1>
        <p className="text-muted-foreground">
          Cette page décrit comment ExamenCivique.info collecte, utilise et protège vos données.
        </p>

        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            Responsable de traitement : RWEB. Contact RGPD : examenciviqueinfo@gmail.com.
          </p>
          <p>
            Nous collectons les informations nécessaires au fonctionnement du service, notamment votre email et vos
            résultats de quiz lorsque vous êtes connecté.
          </p>
          <p>
            Les données sont utilisées pour permettre l’accès à votre compte, sauvegarder vos résultats, gérer les
            paiements et améliorer l’expérience utilisateur.
          </p>
          <p>
            Base légale : exécution du contrat (création et gestion du compte) et intérêt légitime (amélioration du
            service).
          </p>
          <p>
            Durée de conservation : tant que votre compte est actif, puis suppression sur demande.
          </p>
          <p>
            Sous-traitants : Stripe (paiements) et Supabase (authentification et base de données).
          </p>
          <p>
            Vos droits RGPD : accès, rectification, effacement, limitation et opposition. Exercez-les via l’adresse de
            support.
          </p>
          <p>
            Vous pouvez demander la suppression de vos données en nous contactant via l’adresse de support indiquée sur
            le site.
          </p>
        </div>
      </div>
    </section>
  );
}
