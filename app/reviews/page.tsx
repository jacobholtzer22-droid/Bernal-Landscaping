import type { Metadata } from "next";
import { Star } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { TESTIMONIALS } from "@/lib/gallery";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reviews & Testimonials",
  description:
    "Read reviews from Bernal Landscape Management customers across Grand Rapids and West Michigan.",
  alternates: { canonical: `${SITE.url}/reviews` },
  openGraph: {
    title: "Reviews & Testimonials | Bernal Landscape",
    description:
      "Read reviews from Bernal Landscape Management customers across Grand Rapids and West Michigan.",
    url: `${SITE.url}/reviews`,
    type: "website",
  },
};

export default function ReviewsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Reviews & Testimonials"
          eyebrow="What Clients Say"
          description="Real words from homeowners and businesses across West Michigan. Five-star service, every project."
          image="https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/088393d1-007a-4391-8764-71054e160cbd-1172w.jpg"
          imageAlt="Manicured lawn from a Bernal Landscape project"
          crumbs={[{ label: "Home", href: "/" }, { label: "Reviews" }]}
        />

        {/* Testimonials grid */}
        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map(({ name, quote }) => (
                <figure
                  key={name}
                  className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-white p-8 shadow-sm"
                >
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-base leading-relaxed text-charcoal/85">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-bold text-charcoal">
                    {name}
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Leave a review CTA */}
            <div className="mt-16 rounded-2xl border border-forest/15 bg-white p-10 text-center shadow-sm md:p-14">
              <h2 className="font-serif text-2xl font-semibold text-forest md:text-3xl">
                Worked with us recently?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-charcoal/80">
                We&apos;d love to hear about it. Leave us a quick review on Google or
                Yelp — it helps neighbors find us and keeps us improving.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href={SITE.socials.google}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-forest px-7 py-3.5 text-sm font-semibold text-cream shadow-md transition hover:bg-forest-dark hover:shadow-lg"
                >
                  Review us on Google
                </a>
                <a
                  href={SITE.socials.yelp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-forest bg-transparent px-7 py-3.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-cream"
                >
                  Review us on Yelp
                </a>
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          heading="Ready to be our next happy customer?"
          subheading="Tell us about your project and we'll get back to you within one business day."
        />
      </main>
      <SiteFooter />
    </>
  );
}
