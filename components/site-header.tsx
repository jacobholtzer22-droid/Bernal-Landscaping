"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, ExternalLink, Menu, X } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const NAV_LINKS: { href: string; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/gallery", label: "Gallery" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  function openServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setServicesOpen(true);
  }
  function scheduleCloseServices() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120);
  }

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  }

  const linkBase = "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200";
  const linkColor = "text-charcoal/90 hover:bg-forest/5 hover:text-forest";
  const activeColor = "bg-forest/10 text-forest";

  function closeMobile() {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }

  const servicesActive = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-forest text-cream/95">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider sm:px-4 sm:text-xs">
          <a
            href={SITE.phone.href}
            className="shrink-0 transition-colors duration-200 hover:text-terracotta"
          >
            <span className="hidden sm:inline">CALL US TODAY · </span>
            {SITE.phone.display}
          </a>
          <div className="hidden sm:block">
            <SocialLinks linkClassName="rounded-full p-1.5 text-cream/90 transition-colors duration-200 hover:bg-white/10 hover:text-terracotta" />
          </div>
        </div>
      </div>

      <div className="border-b border-forest/10 bg-cream shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-3 py-3 sm:px-4 lg:gap-6">
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-90"
            onClick={closeMobile}
          >
            <Image
              src="/bernal-logo.png"
              alt="Bernal Landscape Management"
              width={763}
              height={198}
              priority
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {/* Home */}
            <Link
              href="/"
              className={`${linkBase} ${
                isActive("/") ? activeColor : linkColor
              }`}
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={openServices}
              onMouseLeave={scheduleCloseServices}
            >
              <button
                type="button"
                onClick={() => setServicesOpen((o) => !o)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
                className={`${linkBase} flex items-center gap-1 ${
                  servicesActive ? activeColor : linkColor
                }`}
              >
                Services
                <ChevronDown className="h-4 w-4" aria-hidden />
              </button>
              {servicesOpen ? (
                <div
                  className="absolute left-1/2 top-full z-50 mt-1 w-[640px] -translate-x-1/2 rounded-2xl border border-charcoal/10 bg-white p-3 shadow-xl"
                  role="menu"
                >
                  <div className="grid grid-cols-2 gap-1">
                    {SERVICES.map((s) => {
                      const Icon = s.Icon;
                      return (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          role="menuitem"
                          className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm transition hover:bg-forest/5"
                          onClick={() => setServicesOpen(false)}
                        >
                          <Icon
                            className="mt-0.5 h-5 w-5 shrink-0 text-forest"
                            strokeWidth={1.5}
                            aria-hidden
                          />
                          <span className="font-medium text-charcoal">
                            {s.title}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </div>

            {NAV_LINKS.filter((l) => l.href !== "/" && l.href !== "/contact").map(
              ({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`${linkBase} ${
                    isActive(href) ? activeColor : linkColor
                  }`}
                >
                  {label}
                </Link>
              ),
            )}

            <a
              href={SITE.paymentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkBase} flex items-center gap-1 ${linkColor}`}
            >
              Pay Now
              <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
            </a>

            <Link
              href="/contact"
              className={`${linkBase} ${
                isActive("/contact") ? activeColor : linkColor
              }`}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="ml-2 rounded-xl bg-forest px-5 py-2.5 text-sm font-semibold text-cream shadow-md transition-all duration-200 hover:bg-forest-dark hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/contact"
              onClick={closeMobile}
              className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-forest px-4 py-2.5 text-sm font-semibold text-cream shadow-md transition hover:bg-forest-dark"
            >
              Get a Quote
            </Link>
            <button
              type="button"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2.5 text-charcoal transition-colors hover:bg-forest/10"
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

      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`absolute inset-0 bg-charcoal/60 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMobile}
        />

        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-forest shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
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
          <nav className="flex flex-1 flex-col items-center gap-1 overflow-y-auto px-6 pb-12">
            <div className="w-full max-w-sm">
              <Link
                href="/"
                className="block rounded-xl py-4 text-center text-lg font-medium text-cream/95 transition hover:bg-white/10 hover:text-white"
                onClick={closeMobile}
              >
                Home
              </Link>

              <button
                type="button"
                onClick={() => setMobileServicesOpen((o) => !o)}
                className="flex w-full items-center justify-center gap-2 rounded-xl py-4 text-center text-lg font-medium text-cream/95 transition hover:bg-white/10 hover:text-white"
                aria-expanded={mobileServicesOpen}
              >
                Services
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>
              {mobileServicesOpen ? (
                <div className="mb-2 space-y-0.5 rounded-xl bg-white/5 p-2">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center justify-between rounded-lg px-4 py-3 text-base text-cream/90 transition hover:bg-white/10 hover:text-white"
                      onClick={closeMobile}
                    >
                      <span>{s.title}</span>
                      <ChevronRight
                        className="h-4 w-4 text-cream/60"
                        aria-hidden
                      />
                    </Link>
                  ))}
                </div>
              ) : null}

              {NAV_LINKS.filter((l) => l.href !== "/").map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="block rounded-xl py-4 text-center text-lg font-medium text-cream/95 transition hover:bg-white/10 hover:text-white"
                  onClick={closeMobile}
                >
                  {label}
                </Link>
              ))}

              <a
                href={SITE.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl py-4 text-center text-lg font-medium text-cream/95 transition hover:bg-white/10 hover:text-white"
                onClick={closeMobile}
              >
                Pay Now
                <ExternalLink className="h-4 w-4 opacity-70" aria-hidden />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
