import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { blogPostDetails, getBlogPost, type BlogBlock } from "@/lib/blog-posts";
import { siteConfig } from "@/lib/data";

export function generateStaticParams() {
  return blogPostDetails.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const url = `/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: [post.keyword],
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 text-2xl font-bold leading-snug text-ink-950 sm:text-[1.65rem]">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="mt-8 text-xl font-bold leading-snug text-ink-950">{block.text}</h3>
      );
    case "p":
      return <p className="mt-4 leading-relaxed text-ink-600">{block.text}</p>;
    case "list":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item) => {
            const [lead, ...rest] = item.split(": ");
            const hasLead = rest.length > 0 && lead.length < 60;
            return (
              <li key={item} className="flex gap-3 leading-relaxed text-ink-600">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                <span>
                  {hasLead ? (
                    <>
                      <span className="font-semibold text-ink-900">{lead}:</span>{" "}
                      {rest.join(": ")}
                    </>
                  ) : (
                    item
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      );
    case "table":
      return (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-ink-100">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-ink-50/70">
                {block.headers.map((header) => (
                  <th
                    key={header}
                    className="px-4 py-3 font-semibold text-ink-900 first:rounded-tl-2xl last:rounded-tr-2xl"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-ink-100">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={j === 0 ? "px-4 py-3 font-medium text-ink-900" : "px-4 py-3 text-ink-600"}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const related = blogPostDetails.filter((p) => p.slug !== post.slug).slice(0, 3);
  const url = `${siteConfig.url}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    url,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.date).toISOString(),
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name },
    mainEntityOfPage: url,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main className="pb-20 pt-40 sm:pb-24 sm:pt-48">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-500 transition-colors hover:text-brand-700"
            >
              <ArrowLeft className="h-4 w-4" />
              All articles
            </Link>

            <span className="mt-6 inline-flex w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
              {post.category}
            </span>

            <h1 className="mt-4 text-display-md font-bold leading-tight text-ink-950 text-balance">
              {post.title}
            </h1>

            <div className="mt-5 flex items-center gap-4 text-sm text-ink-400">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>

            <article className="mt-10 border-t border-ink-100 pt-10">
              {post.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </article>

            {post.faqs.length > 0 ? (
              <div className="mt-14 border-t border-ink-100 pt-10">
                <h2 className="text-2xl font-bold text-ink-950">Frequently Asked Questions</h2>
                <div className="mt-6 space-y-6">
                  {post.faqs.map((faq) => (
                    <div key={faq.q}>
                      <h3 className="text-base font-semibold text-ink-900">{faq.q}</h3>
                      <p className="mt-1.5 leading-relaxed text-ink-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            <div className="mt-14 flex flex-col items-start gap-4 rounded-3xl border border-ink-100 bg-ink-50/60 p-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-bold text-ink-950">Have a project in mind?</p>
                <p className="mt-1 text-sm text-ink-500">
                  Talk to CodingCurves about your requirements — get a free technical audit.
                </p>
              </div>
              <Button href="/#contact" size="md" className="shrink-0">
                Start a project
              </Button>
            </div>
          </div>

          {related.length > 0 ? (
            <div className="mx-auto mt-20 max-w-5xl border-t border-ink-100 pt-14">
              <h2 className="text-xl font-bold text-ink-950">More from the blog</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group flex flex-col rounded-2xl border border-ink-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {item.category}
                    </span>
                    <h3 className="mt-3 text-sm font-bold leading-snug text-ink-950 transition-colors group-hover:text-brand-700">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </main>
      <Footer />
    </>
  );
}
