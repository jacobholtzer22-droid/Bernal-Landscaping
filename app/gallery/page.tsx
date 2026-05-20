import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { GALLERY, FEATURED } from "@/lib/gallery";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse landscape design, hardscape, paver patio, and lawn-care projects completed by Bernal Landscape Management across West Michigan.",
  alternates: { canonical: `${SITE.url}/gallery` },
  openGraph: {
    title: "Project Gallery | Bernal Landscape",
    description:
      "Browse landscape design, hardscape, paver patio, and lawn-care projects completed by Bernal Landscape Management across West Michigan.",
    url: `${SITE.url}/gallery`,
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Project Gallery"
          eyebrow="Our Work"
          description={`Browse ${GALLERY.length}+ real photos of recent landscape, hardscape, and property-care projects from across Grand Rapids and West Michigan.`}
          image={FEATURED.gallery}
          imageAlt="Paver-edged foundation bed of white rock and small shrubs along the front of a West Michigan home"
          crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        />

        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
                {GALLERY.length} Projects &amp; Counting
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-forest md:text-4xl">
                Real work, real properties
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80 md:text-lg">
                Every photo below is from a Bernal Landscape job — no stock
                images. Click any photo to view full-screen.
              </p>
            </div>
            <GalleryGrid images={GALLERY} />
          </div>
        </section>

        <CtaSection
          heading="See something you like?"
          subheading="Let's talk about creating something just as nice for your property."
        />
      </main>
      <SiteFooter />
    </>
  );
}
