"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, Spline } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur-lg shadow-[0_1px_0_0_rgba(15,23,42,0.06)]"
          : "bg-transparent"
      )}
    >
      <Container>
        <nav className="flex h-[72px] items-center justify-between" aria-label="Primary">
          <Link href="#home" className="flex items-center gap-2 shrink-0">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-800 text-white shadow-glow">
              <Spline className="h-4.5 w-4.5" strokeWidth={2.25} />
            </span>
            <span className="font-display text-[1.05rem] font-bold leading-none tracking-tight text-ink-950">
              Coding
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-brand-600">
                Curves
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li
                key={link.label}
                className="relative"
                onMouseEnter={() => link.dropdown && setServicesOpen(true)}
                onMouseLeave={() => link.dropdown && setServicesOpen(false)}
              >
                <a
                  href={link.href}
                  className="flex items-center gap-1 rounded-full px-4 py-2.5 text-[0.925rem] font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-950"
                >
                  {link.label}
                  {link.dropdown ? (
                    <ChevronDown
                      className={cn(
                        "h-3.5 w-3.5 transition-transform duration-200",
                        servicesOpen && "rotate-180"
                      )}
                    />
                  ) : null}
                </a>

                {link.dropdown ? (
                  <AnimatePresence>
                    {servicesOpen ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-3"
                      >
                        <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-card">
                          <div className="grid grid-cols-1 gap-1 p-3">
                            {link.dropdown.map((item) => (
                              <a
                                key={item.label}
                                href={item.href}
                                className="flex flex-col rounded-xl px-3.5 py-2.5 transition-colors hover:bg-brand-50"
                              >
                                <span className="text-sm font-semibold text-ink-900">
                                  {item.label}
                                </span>
                                <span className="text-xs text-ink-500">
                                  {item.description}
                                </span>
                              </a>
                            ))}
                          </div>
                          <a
                            href="#contact"
                            className="flex items-center justify-between border-t border-ink-100 bg-ink-50/60 px-5 py-3.5 transition-colors hover:bg-brand-50"
                          >
                            <span className="text-sm font-semibold text-ink-900">
                              Not sure where to start?
                            </span>
                            <span className="text-sm font-semibold text-brand-600">
                              Get a free audit →
                            </span>
                          </a>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                ) : null}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink-800 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink-100 bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-ink-800 hover:bg-ink-50"
                  >
                    {link.label}
                  </a>
                  {link.dropdown ? (
                    <div className="ml-3 flex flex-col gap-0.5 border-l border-ink-100 pl-3">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-lg px-3 py-2 text-sm text-ink-500 hover:bg-ink-50 hover:text-ink-900"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
              <p className="mt-4 border-t border-ink-100 px-3 pt-4 text-xs text-ink-400">
                {siteConfig.phone} · {siteConfig.email}
              </p>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
