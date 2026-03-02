import Link from "next/link";
import { Calendar, ArrowRight, Newspaper, BookOpen, Scale, History } from "lucide-react";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
  icon: React.ReactNode;
}

const blogPosts: BlogPost[] = [
  {
    title: "Nouvelles exigences linguistiques 2026 : ce qui change",
    excerpt: "Le niveau A2 devient obligatoire pour la carte de séjour pluriannuelle. Découvrez les nouvelles règles et comment vous préparer.",
    date: "2024-12-20",
    slug: "/comparatif",
    category: "Actualité",
    icon: <Scale className="w-5 h-5" />,
  },
  {
    title: "Guide complet : réussir l'examen civique du premier coup",
    excerpt: "Nos conseils pratiques et stratégies pour obtenir les 32/40 requis. Méthodes de révision et erreurs à éviter.",
    date: "2024-12-15",
    slug: "/guide",
    category: "Guide",
    icon: <BookOpen className="w-5 h-5" />,
  },
  {
    title: "Les dates clés de l'Histoire de France à connaître",
    excerpt: "1789, 1905, 1958... Les événements historiques les plus fréquemment demandés à l'examen civique.",
    date: "2024-12-10",
    slug: "/themes/histoire",
    category: "Révision",
    icon: <History className="w-5 h-5" />,
  },
];

export default function BlogSection() {
  return (
    <section className="seo-section bg-muted/30" aria-labelledby="blog-heading">
      <div className="container-wide">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-700 rounded-full text-sm font-medium mb-6">
            <Newspaper className="w-4 h-4" />
            Actualités & Guides
          </div>
          
          <h2 id="blog-heading" className="text-2xl sm:text-3xl font-bold mb-4">
            Restez informé sur l'examen civique
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guides pratiques, actualités réglementaires et conseils de préparation
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article 
              key={index}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  {post.icon}
                  <span className="font-medium text-primary">{post.category}</span>
                  <span>•</span>
                  <time dateTime={post.date} className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString('fr-FR', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </time>
                </div>
                
                <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link href={post.slug}>{post.title}</Link>
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={post.slug}
                  className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                >
                  Lire l'article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link 
            href="/faq"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Voir tous nos guides
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
