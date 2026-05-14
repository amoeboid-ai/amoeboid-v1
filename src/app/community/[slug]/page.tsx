import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARTICLES, getArticleBySlug } from "@/lib/community";
import { ArticleShell } from "@/components/community/ArticleShell";
import { DriftResetInflationBody } from "@/components/community/DriftResetInflationBody";
import { ForthcomingBody } from "@/components/community/ForthcomingBody";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Amoeboid`,
    description: article.subtitle,
  };
}

export default async function CommunityArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <ArticleShell article={article}>
      {article.slug === "drift-reset-inflation" ? (
        <DriftResetInflationBody />
      ) : (
        <ForthcomingBody />
      )}
    </ArticleShell>
  );
}
