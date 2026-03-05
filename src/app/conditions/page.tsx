export const metadata = {
  title: "Conditions d'utilisation",
  description: "Conditions d'utilisation d'ExamenCivique.info.",
  alternates: {
    canonical: "https://www.examencivique.info/conditions",
  },
};

export default function ConditionsPage() {
  return (
    <section className="container-narrow py-12">
      <div className="question-card p-8 space-y-4">
        <h1 className="text-2xl font-bold">Conditions d'utilisation</h1>
        <p className="text-muted-foreground">
          En utilisant ExamenCivique.info, vous acceptez les conditions suivantes.
        </p>

        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            Le service est fourni à titre d’entraînement. Les contenus sont proposés pour aider à la préparation et ne
            constituent pas une garantie de réussite.
          </p>
          <p>
            Vous vous engagez à ne pas détourner le service, à ne pas tenter d’accès non autorisé et à respecter les
            règles applicables.
          </p>
          <p>
            Nous pouvons mettre à jour ces conditions à tout moment. La poursuite de l’utilisation vaut acceptation des
            modifications.
          </p>
        </div>
      </div>
    </section>
  );
}
