"use client";

import Link from "next/link";
import { getArticleBySlug, getRelatedArticles } from "@/data/blogArticles";
import { useLanguage } from "@/i18n/LanguageContext";
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, BookOpen } from "lucide-react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function BlogArticle({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const article = getArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug, 3);

  if (!article) {
    return null;
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "ExamenCivique.info"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ExamenCivique.info"
    }
  };

  const handleShare = async () => {
    const shareUrl = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: shareUrl,
        });
        return;
      } catch {
        // fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareUrl);
      toast({
        title: "Lien copié",
        description: "Le lien de l'article a été copié dans le presse-papiers.",
      });
    } catch {
      toast({
        title: "Partage indisponible",
        description: "Copiez l'URL manuellement depuis la barre d'adresse.",
        variant: "destructive",
      });
    }
  };

  // Simple markdown-like rendering with link support
  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let currentList: string[] = [];
    let listType: 'ul' | 'ol' | null = null;
    let keyCounter = 0;

    const getKey = () => `content-${keyCounter++}`;

    // Process inline formatting including links
    const processInlineFormatting = (text: string): string => {
      return text
        // Convert markdown links [text](url) to HTML links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline font-medium">$1</a>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
    };

    const flushList = () => {
      if (currentList.length > 0 && listType) {
        const ListTag = listType;
        elements.push(
          <ListTag key={getKey()} className={listType === 'ul' ? "list-disc list-inside space-y-2 mb-4 pl-2" : "list-decimal list-inside space-y-2 mb-4 pl-2"}>
            {currentList.map((item, i) => (
              <li key={`list-item-${i}`} className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: processInlineFormatting(item) }} />
            ))}
          </ListTag>
        );
        currentList = [];
        listType = null;
      }
    };

    lines.forEach((line) => {
      const trimmed = line.trim();
      
      if (!trimmed) {
        flushList();
        return;
      }

      // Horizontal rule
      if (trimmed === '---') {
        flushList();
        elements.push(<hr key={getKey()} className="my-8 border-border" />);
        return;
      }

      // Headers
      if (trimmed.startsWith('# ')) {
        flushList();
        elements.push(<h1 key={getKey()} className="text-3xl font-bold mt-8 mb-4">{trimmed.slice(2)}</h1>);
      } else if (trimmed.startsWith('## ')) {
        flushList();
        elements.push(<h2 key={getKey()} className="text-2xl font-bold mt-8 mb-4">{trimmed.slice(3)}</h2>);
      } else if (trimmed.startsWith('### ')) {
        flushList();
        elements.push(<h3 key={getKey()} className="text-xl font-semibold mt-6 mb-3">{trimmed.slice(4)}</h3>);
      } else if (trimmed.startsWith('#### ')) {
        flushList();
        elements.push(<h4 key={getKey()} className="text-lg font-semibold mt-4 mb-2">{trimmed.slice(5)}</h4>);
      }
      // Table (simplified - just show as formatted text)
      else if (trimmed.startsWith('|')) {
        flushList();
        // Skip table formatting rows
        if (trimmed.includes('---')) return;
        
        const cells = trimmed.split('|').filter(cell => cell.trim());
        const isHeader = elements.length > 0 && !elements[elements.length - 1].key?.toString().includes('table');
        
        elements.push(
          <div key={getKey()} className={`grid grid-cols-4 gap-2 py-2 px-3 ${isHeader ? 'bg-muted font-semibold text-sm' : 'text-sm text-muted-foreground border-b border-border'}`}>
            {cells.map((cell, i) => (
              <span key={`cell-${i}`} className="truncate">{cell.trim()}</span>
            ))}
          </div>
        );
      }
      // Lists
      else if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
        if (listType !== 'ul') {
          flushList();
          listType = 'ul';
        }
        currentList.push(trimmed.slice(2));
      } else if (/^\d+\. /.test(trimmed)) {
        if (listType !== 'ol') {
          flushList();
          listType = 'ol';
        }
        currentList.push(trimmed.replace(/^\d+\. /, ''));
      }
      // Correct/Incorrect answers
      else if (trimmed.startsWith('✅') || trimmed.startsWith('❌')) {
        flushList();
        const isCorrect = trimmed.startsWith('✅');
        elements.push(
          <div key={getKey()} className={`p-3 rounded-lg mb-2 ${isCorrect ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
            {trimmed}
          </div>
        );
      }
      // Call to action with emoji (👉)
      else if (trimmed.startsWith('👉')) {
        flushList();
        elements.push(
          <div key={getKey()} className="my-4 p-4 bg-primary/5 border border-primary/20 rounded-xl" dangerouslySetInnerHTML={{ __html: processInlineFormatting(trimmed) }} />
        );
      }
      // Bold paragraphs (questions)
      else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
        flushList();
        elements.push(<p key={getKey()} className="font-semibold mb-2">{trimmed.slice(2, -2)}</p>);
      }
      // Regular paragraphs
      else {
        flushList();
        elements.push(
          <p key={getKey()} className="text-muted-foreground mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: processInlineFormatting(trimmed) }} />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      

      <main className="py-8">
        <div className="container-narrow">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              {t('common.back')} au Blog
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {format(new Date(article.date), 'dd MMMM yyyy', { locale: fr })}
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {article.readTime} {t('blog.readTime')}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-6">
              {article.excerpt}
            </p>

            <Button variant="outline" size="sm" onClick={handleShare} className="gap-2">
              <Share2 className="w-4 h-4" />
              {t('common.share')}
            </Button>
          </header>

          {/* Article Content */}
          <article className="prose prose-lg max-w-none mb-12">
            {renderContent(article.content)}
          </article>

          {/* CTA */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mb-12">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Prêt à vous entraîner ?</h3>
            <p className="text-muted-foreground mb-6">
              Testez-vous avec un simulateur 40 questions et identifiez vos points faibles
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/entrainement">
                <Button className="gap-2">
                  Simulateur gratuit
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/examen-chronometre">
                <Button variant="outline" className="gap-2">
                  Examen chronométré
                </Button>
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <section>
            <h2 className="text-2xl font-bold mb-6">{t('blog.relatedArticles')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/50 transition-all"
                >
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                    {related.category}
                  </span>
                  <h3 className="font-semibold mt-3 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
