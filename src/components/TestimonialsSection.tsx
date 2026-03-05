"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Samira M.",
    text: "Les questions sont très proches de l'examen. J'ai pu m'entraîner plusieurs fois et arriver plus sereine.",
  },
  {
    name: "Youssef B.",
    text: "Le format 40 questions et 45 minutes aide vraiment à se mettre en condition réelle. Très utile.",
  },
  {
    name: "Claire D.",
    text: "Interface simple, explications claires et résultats visibles. J'ai progressé rapidement.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="seo-section bg-card border-y border-border" aria-labelledby="testimonials-heading">
      <div className="container-wide">
        <header className="text-center mb-10">
          <h2 id="testimonials-heading" className="text-2xl sm:text-3xl font-bold mb-3">
            Ils ont réussi grâce à l'entraînement
          </h2>
          <div className="flex items-center justify-center gap-2 text-amber-500">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="w-5 h-5 fill-amber-500" />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4.9/5</span>
          </div>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="question-card p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">"{item.text}"</p>
              <p className="mt-4 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
