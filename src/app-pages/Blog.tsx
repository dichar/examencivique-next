"use client";

import Link from "next/link";
import { blogArticles } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

export default function Blog() {
  const { t } = useLanguage();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Examen Civique",
    "description": "Articles et guides pour réussir l'examen civique français",
    "url": "https://www.examencivique.info/blog",
    "blogPost": blogArticles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt,
      "datePublished": article.date,
      "url": `https://www.examencivique.info/blog/${article.slug}`
    }))
  };

  const categories = [...new Set(blogArticles.map(a => a.category))];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      

      <main className="py-12">
        {/* Hero */}
        <header className="bg-gradient-to-b from-primary to-primary/90 text-primary-foreground py-12 -mt-12 mb-12">
          <div className="container-wide text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              {blogArticles.length} articles
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t('blog.subtitle')}
            </p>
          </div>
        </header>

        <div className="container-wide">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map(category => (
              <span 
                key={category}
                className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Featured Article */}
          <div className="mb-12">
            <Link 
              href={`/blog/${blogArticles[0].slug}`}
              className="group block bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="p-8 md:p-12">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {blogArticles[0].category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {format(new Date(blogArticles[0].date), 'dd MMMM yyyy', { locale: fr })}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {blogArticles[0].readTime} {t('blog.readTime')}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {blogArticles[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  {blogArticles[0].excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-primary font-medium">
                  {t('common.readMore')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogArticles.slice(1).map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/50 transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {article.readTime} {t('blog.readTime')}
                    </span>
                  </div>
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {format(new Date(article.date), 'dd MMM yyyy', { locale: fr })}
                    </span>
                    <span className="text-primary text-sm font-medium flex items-center gap-1">
                      Lire
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
