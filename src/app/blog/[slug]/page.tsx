import { notFound } from "next/navigation";
import type { Metadata } from "next";
import BlogArticle from "@/app-pages/BlogArticle";
import { blogArticles, getArticleBySlug } from "@/data/blogArticles";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const canonical = `https://www.examencivique.info/blog/${article.slug}`;

  return {
    title: `${article.title} | ExamenCivique.info`,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.metaDescription,
      url: canonical,
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) return notFound();

  return <BlogArticle slug={params.slug} />;
}
