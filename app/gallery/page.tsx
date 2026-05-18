import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { GALLERY } from "@/lib/gallery";
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
          description="A look at recent landscape, hardscape, and property-care projects across Grand Rapids and West Michigan."
          image="https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/ca8ba884-3ad1-4793-b32e-aef60fbf4ce6-1172w.jpg"
          imageAlt="Bernal Landscape paver patio project"
          crumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
        />

        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
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
