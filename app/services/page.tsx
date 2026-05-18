import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Landscaping Services in Grand Rapids, MI",
  description:
    "Full-service landscaping in Grand Rapids and West Michigan: design, hardscape, lawn care, snow removal, drainage, and more.",
  alternates: { canonical: `${SITE.url}/services` },
  openGraph: {
    title: "Landscaping Services in Grand Rapids, MI | Bernal Landscape",
    description:
      "Full-service landscaping in Grand Rapids and West Michigan: design, hardscape, lawn care, snow removal, drainage, and more.",
    url: `${SITE.url}/services`,
    type: "website",
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Our Services"
          eyebrow="What We Do"
          description="From planting beds to driveways, retaining walls to snow removal — we handle the full property, season after season."
          image="https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/c7fcf598-eef4-4444-8308-21bc5362446f-1172w.jpg"
          imageAlt="Bernal Landscape project gallery"
          crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />

        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(({ slug, title, description, Icon }) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="group flex flex-col rounded-2xl border border-charcoal/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-forest hover:shadow-md"
                >
                  <Icon
                    className="h-8 w-8 text-forest transition-colors group-hover:text-terracotta"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h2 className="mt-5 font-serif text-xl font-semibold text-charcoal">
                    {title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/75">
                    {description}
                  </p>
                  <span className="mt-5 text-sm font-semibold text-forest transition-colors group-hover:text-terracotta">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
