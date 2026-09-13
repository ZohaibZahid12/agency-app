"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDownRight, ArrowUpRight, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const avatarColors = ["bg-brand-500", "bg-accent-500", "bg-growth-500", "bg-ink-700"];

const board = [
  { label: "Deploys shipped", value: "128", change: "+22%", up: true },
  { label: "Avg. build time", value: "4m 12s", change: "-18%", up: false },
  { label: "Platform uptime", value: "99.98%", change: "+0.4%", up: true },
  { label: "Active users", value: "482K", change: "+31%", up: true },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pb-20 pt-36 sm:pb-28 sm:pt-44"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-hero-radial" />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-ink-100 bg-white px-4 py-1.5 text-sm font-medium text-ink-600">
              <span className="flex items-center gap-0.5 text-accent-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </span>
              Rated 4.9/5 by 60+ product teams
            </div>

            <h1 className="mt-7 text-display-lg font-bold leading-[1.08] text-ink-950 text-balance">
              We help ambitious teams{" "}
              <em className="italic text-brand-600">build products that scale</em>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-500">
              From idea to infrastructure — we design, build, and scale web,
              mobile, and AI-powered products for startups and growing
              engineering teams.
            </p>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button href="#contact" size="lg" icon={<ArrowRight className="h-4.5 w-4.5" />}>
                Start a project
              </Button>
              <Button href="#case-studies" variant="outline" size="lg" icon={<ArrowUpRight className="h-4 w-4" />}>
                See our work
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-500">
              <div className="flex items-center -space-x-2.5">
                {avatarColors.map((color, i) => (
                  <span
                    key={i}
                    className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-semibold text-white ${color}`}
                  >
                    {["MC", "JO", "PN", "DB"][i]}
                  </span>
                ))}
              </div>
              <span className="font-medium text-ink-700">
                60+ products shipped with our team
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="overflow-hidden rounded-2xl border border-ink-900 bg-ink-950">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                <p className="text-sm font-semibold text-white">This week&rsquo;s delivery board</p>
                <span className="flex items-center gap-1.5 text-xs font-medium text-growth-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-growth-400" />
                  Live
                </span>
              </div>
              <div>
                {board.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4 last:border-b-0"
                  >
                    <span className="text-sm text-white/60">{row.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-xl font-semibold tabular-nums text-white">
                        {row.value}
                      </span>
                      <span className="flex items-center gap-0.5 text-xs font-semibold text-growth-400">
                        {row.up ? (
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        ) : (
                          <ArrowDownRight className="h-3.5 w-3.5" />
                        )}
                        {row.change}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -right-4 -top-5 hidden animate-float rounded-xl border border-ink-100 bg-white px-4 py-3 shadow-card sm:block">
              <p className="text-xs font-medium text-ink-400">Build passed</p>
              <p className="text-sm font-semibold text-ink-900">main · 2m ago</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
