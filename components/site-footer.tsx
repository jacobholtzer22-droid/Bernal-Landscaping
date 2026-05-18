import Link from "next/link";
import { Leaf } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const QUICK_LINKS: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Gallery", href: "/gallery" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-forest/15 bg-charcoal text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-4 md:gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Leaf
              className="h-8 w-8 text-terracotta"
              strokeWidth={1.75}
              aria-hidden
            />
            <span className="font-semibold tracking-tight">
              {SITE.shortName}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-cream/75">
            {SITE.description}
          </p>
          <div className="mt-6">
            <SocialLinks
              className="justify-start"
              linkClassName="rounded-full p-2 text-cream/80 transition-colors hover:bg-white/10 hover:text-terracotta"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream/90">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {QUICK_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition hover:text-terracotta"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href={SITE.paymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-terracotta"
              >
                Pay Now
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream/90">
            Services
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {SERVICES.slice(0, 8).map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="transition hover:text-terracotta"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="font-semibold transition hover:text-terracotta"
              >
                View all services →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream/90">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-cream/75">
            <li>
              <a
                href={SITE.phone.href}
                className="transition hover:text-terracotta"
              >
                {SITE.phone.display}
              </a>
            </li>
            <li>
              <a
                href={SITE.email.href}
                className="break-all transition hover:text-terracotta"
              >
                {SITE.email.display}
              </a>
            </li>
            <li>
              {SITE.address.street}
              <br />
              {SITE.address.locality}, {SITE.address.region} {SITE.address.postal}
            </li>
            <li className="pt-2 text-xs text-cream/55">{SITE.hours.display}</li>
            {SITE.bbb.accredited ? (
              <li className="pt-1">
                <span className="inline-flex items-center rounded-md border border-cream/20 px-2 py-1 text-[11px] font-semibold uppercase tracking-wider text-cream/80">
                  {SITE.bbb.rating} BBB Accredited
                </span>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-cream/55">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved.
      </div>
    </footer>
  );
}
