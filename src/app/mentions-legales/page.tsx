import { SUPPORT_EMAIL } from "@/lib/constants";

export const metadata = {
  title: "Mentions légales",
  description: "Mentions légales d'ExamenCivique.info.",
  alternates: {
    canonical: "https://www.examencivique.info/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <section className="container-narrow py-12">
      <div className="question-card p-8 space-y-4">
        <h1 className="text-2xl font-bold">Mentions légales</h1>
        <p className="text-muted-foreground">
          Site d'entraînement indépendant pour la préparation à l'examen civique.
        </p>

        <div className="space-y-3 text-sm text-muted-foreground">
          <p>
            Éditeur : RWEB
          </p>
          <p>Nom légal : RWEB</p>
          <p>Adresse de l’éditeur : France</p>
          <p>Directeur de publication : RWEB</p>
          <p>
            Contact :{" "}
            <a className="underline underline-offset-2" href={`mailto:${SUPPORT_EMAIL}`}>
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p>Hébergeur : Vercel</p>
          <p>
            Les contenus pédagogiques sont fournis à titre informatif. Les sources officielles restent celles des
            organismes publics compétents.
          </p>
        </div>
      </div>
    </section>
  );
}
