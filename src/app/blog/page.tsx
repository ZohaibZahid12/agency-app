import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical guides on custom software cost, MVPs, AI SaaS products, scaling, architecture, and engagement models from the CodingCurves team.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main className="pb-20 pt-40 sm:pb-24 sm:pt-48">
        <Container>
          <SectionHeading eyebrow="From the blog" title="Notes From the Build." />

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.06}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-1.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative flex h-36 items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-br from-brand-50 to-white">
                    <span className="text-5xl font-black text-ink-200 font-display">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="w-fit rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">
                      {post.category}
                    </span>
                    <h2 className="mt-4 text-base font-bold leading-snug text-ink-950 transition-colors group-hover:text-brand-700">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-500">
                      {post.excerpt}
                    </p>
                    <div className="mt-5 flex items-center gap-4 border-t border-ink-100 pt-4 text-xs text-ink-400">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
