"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Leaf, Menu, X } from "lucide-react";
import { SocialLinks } from "@/components/social-links";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#service-areas", label: "Service Areas" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkClass = scrolled
    ? "text-charcoal/90 hover:bg-forest/5 hover:text-forest"
    : "text-white/90 hover:bg-white/10 hover:text-white";

  function closeMobile() {
    setMobileOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="bg-forest text-cream/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider sm:text-xs">
          <a
            href="tel:6164771221"
            className="shrink-0 transition-colors duration-200 hover:text-terracotta"
          >
            CALL US TODAY · 616-477-1221
          </a>
          <SocialLinks linkClassName="rounded-full p-1.5 text-cream/90 transition-colors duration-200 hover:bg-white/10 hover:text-terracotta" />
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled
            ? "border-forest/10 bg-cream/95 shadow-sm backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4">
          {/* TODO: Swap text logo for image from https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/4f75c978ce53ebfae62b4b5692bcbbd5logo-1920w.jpg */}
          <Link
            href="#home"
            className="flex items-center gap-2 transition-opacity hover:opacity-90"
            onClick={closeMobile}
          >
            <Leaf
              className={`h-8 w-8 shrink-0 transition-colors duration-300 ${
                scrolled ? "text-forest" : "text-white"
              }`}
              strokeWidth={1.75}
              aria-hidden
            />
            <span
              className={`font-semibold tracking-tight transition-colors duration-300 sm:text-lg ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              Bernal Landscape
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 ${linkClass}`}
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 rounded-xl bg-forest px-5 py-2.5 text-sm font-semibold text-cream shadow-md transition-all duration-200 hover:bg-forest-dark hover:shadow-lg"
            >
              Get a Quote
            </a>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <a
              href="#contact"
              onClick={closeMobile}
              className="rounded-xl bg-forest px-4 py-2 text-xs font-semibold text-cream shadow-md transition hover:bg-forest-dark sm:text-sm"
            >
              Get a Quote
            </a>
            <button
              type="button"
              className={`rounded-lg p-2 transition-colors ${
                scrolled
                  ? "text-charcoal hover:bg-forest/10"
                  : "text-white hover:bg-white/10"
              }`}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-[60] flex flex-col bg-forest lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex justify-end p-4">
            <button
              type="button"
              className="rounded-lg p-2 text-cream hover:bg-white/10"
              aria-label="Close menu"
              onClick={closeMobile}
            >
              <X className="h-7 w-7" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col items-center justify-center gap-2 px-6 pb-24">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                className="w-full max-w-sm rounded-xl py-4 text-center text-lg font-medium text-cream/95 transition hover:bg-white/10 hover:text-white"
                onClick={closeMobile}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
