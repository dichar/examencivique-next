# Flux d'accès aux quiz

Ce schéma résume la logique d'accès : 2 quiz gratuits au total, puis Pack Réussite (3 mois).

```mermaid
flowchart TD
  A[Visiteur non connecté] --> B[Commencer un quiz]
  B --> C[Quiz en cours]
  C --> D[Fin du quiz]
  D --> E[Afficher "Voir mes résultats"]
  E --> F[Login/Inscription
(next=page du quiz)]
  F --> G[Utilisateur connecté]

  G --> H{Pack actif ?}
  H -->|Oui| I[Accès illimité à tous les quiz]
  H -->|Non| J{free_quiz_used < 2 ?}

  J -->|Oui| K[Autoriser le quiz]
  K --> L[Fin du quiz
incrémenter free_quiz_used]

  J -->|Non| M[Paywall Pack Réussite]
```

Notes:
- Un utilisateur non connecté peut lancer 1 quiz. À la fin, il voit "Voir mes résultats" et doit se connecter.
- Le compteur local (anonyme) est synchronisé dans `profiles.free_quiz_used` lors de la connexion pour éviter d'obtenir plus de 2 quiz gratuits.
- Si `paid_until` est dans le futur, l'accès est illimité.
