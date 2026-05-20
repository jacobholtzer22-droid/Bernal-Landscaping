import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";
import { FEATURED } from "@/lib/gallery";

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
          image={FEATURED.servicesIndex}
          imageAlt="Curved paver-edged landscape bed with white rock and a decorative boulder along the side of a home"
          crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />

        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(({ slug, title, description, Icon, heroImage, heroImageAlt }) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-forest hover:shadow-lg"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-charcoal/5">
                    <Image
                      src={heroImage}
                      alt={heroImageAlt}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"
                      aria-hidden
                    />
                    <span className="absolute left-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-forest shadow-md">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h2 className="font-serif text-xl font-semibold text-charcoal">
                      {title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/75">
                      {description}
                    </p>
                    <span className="mt-5 text-sm font-semibold text-forest transition-colors group-hover:text-terracotta">
                      Learn more →
                    </span>
                  </div>
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
