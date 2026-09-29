"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        "fixed inset-x-0 z-50 transition-[top] duration-500 ease-out",
        scrolled ? "top-4 sm:top-5" : "top-0"
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-x-0 top-0 h-20 border-b border-ink-100/70 bg-white/80 backdrop-blur-xl transition-all duration-500 ease-out",
          scrolled && "pointer-events-none -translate-y-full opacity-0"
        )}
      />
      <Container className="relative">
        <div
          className={cn(
            "relative flex items-center justify-between transition-[height] duration-500 ease-out",
            scrolled ? "h-14" : "h-20"
          )}
        >
          <Link
            href="/#home"
            className={cn(
              "flex shrink-0 items-center rounded-full px-2.5 py-1.5 transition-all duration-500 ease-out",
              scrolled
                ? "bg-white/80 shadow-lg ring-1 ring-ink-950/5 backdrop-blur-xl"
                : "bg-transparent shadow-none ring-0"
            )}
          >
            <Image
              src="/logo.png"
              alt="CodingCurves"
              width={672}
              height={198}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="pointer-events-none absolute inset-x-0 top-1/2 hidden -translate-y-1/2 justify-center lg:flex"
          >
            <ul
              className={cn(
                "pointer-events-auto flex items-center gap-1 rounded-full border px-2 py-1.5 ring-1 transition-all duration-500 ease-out",
                scrolled
                  ? "scale-100 border-ink-100/70 bg-white/75 shadow-lg ring-ink-950/5 backdrop-blur-xl"
                  : "scale-[1.02] border-transparent bg-transparent shadow-none ring-transparent"
              )}
            >
              {navLinks.map((link) => (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setServicesOpen(true)}
                  onMouseLeave={() => link.dropdown && setServicesOpen(false)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-ink-50 hover:text-ink-950"
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
                          <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-xl">
                            <div className="grid grid-cols-1 gap-1 p-3">
                              {link.dropdown.map((item) => (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  className="flex flex-col rounded-2xl px-3.5 py-2.5 transition-colors hover:bg-brand-50"
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
                              href="/#contact"
                              className="flex items-center justify-between border-t border-ink-100 bg-ink-50/60 px-5 py-3.5 transition-colors hover:bg-brand-50"
                            >
                              <span className="text-sm font-semibold text-ink-900">
                                Not sure where to start?
                              </span>
                              <span className="bg-gradient-to-r from-brand-600 to-[#773CDD] bg-clip-text text-sm font-semibold text-transparent">
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
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/#contact" size="sm" className="hidden lg:inline-flex">
              Start a Project
            </Button>

            <button
              type="button"
              className={cn(
                "flex h-11 w-11 items-center justify-center rounded-full border text-ink-800 transition-all duration-500 lg:hidden",
                scrolled
                  ? "border-ink-100/70 bg-white/75 shadow-lg backdrop-blur-xl"
                  : "border-transparent bg-transparent shadow-none"
              )}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mt-3 overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-xl lg:hidden"
            >
              <nav aria-label="Mobile" className="flex flex-col gap-1 p-4">
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
                <Button
                  href="/#contact"
                  className="mt-3"
                  onClick={() => setMobileOpen(false)}
                >
                  Start a Project
                </Button>
                <p className="mt-3 border-t border-ink-100 px-3 pt-4 text-xs text-ink-400">
                  {siteConfig.phone} · {siteConfig.email}
                </p>
              </nav>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </Container>
    </header>
  );
}
