export const metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité d'ExamenCivique.info.",
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
            Nous collectons les informations nécessaires au fonctionnement du service, notamment votre email et vos
            résultats de quiz lorsque vous êtes connecté.
          </p>
          <p>
            Les données sont utilisées pour permettre l’accès à votre compte, sauvegarder vos résultats et améliorer
            l’expérience utilisateur.
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
