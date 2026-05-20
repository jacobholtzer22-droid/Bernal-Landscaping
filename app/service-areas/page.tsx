import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import { FEATURED, pickGallery } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Service Areas in West Michigan",
  description:
    "Bernal Landscape Management proudly serves Grand Rapids, Wyoming, Kentwood, Walker, Grandville, Caledonia, Forest Hills, Ada, Cascade, and surrounding West Michigan communities.",
  alternates: { canonical: `${SITE.url}/service-areas` },
  openGraph: {
    title: "Service Areas in West Michigan | Bernal Landscape",
    description:
      "Serving Grand Rapids, Wyoming, Kentwood, and surrounding West Michigan communities.",
    url: `${SITE.url}/service-areas`,
    type: "website",
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Service Areas"
          eyebrow="Where We Work"
          description="Proudly serving Grand Rapids, Wyoming, and the surrounding West Michigan communities."
          image={FEATURED.serviceAreas}
          imageAlt="Tan block retaining wall with a gravel drainage channel along the side of a brick home"
          crumbs={[
            { label: "Home", href: "/" },
            { label: "Service Areas" },
          ]}
        />

        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                Cities &amp; Communities We Serve
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80 md:text-lg">
                Headquartered in Wyoming, MI, with crews dispatched daily across the
                Grand Rapids metro and surrounding West Michigan communities.
              </p>
            </div>

            <ul className="mx-auto mt-14 grid max-w-5xl gap-3 sm:grid-cols-2 md:grid-cols-3">
              {SERVICE_AREAS.map((city) => (
                <li
                  key={city}
                  className="flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white px-5 py-4 shadow-sm transition hover:-translate-y-0.5 hover:border-forest hover:shadow-md"
                >
                  <MapPin
                    className="h-5 w-5 shrink-0 text-terracotta"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="font-medium text-charcoal">{city}, MI</span>
                </li>
              ))}
            </ul>

            {/* Photo collage — work across the region */}
            <div className="mt-16">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
                  Work Across The Region
                </p>
                <h3 className="mt-3 font-serif text-2xl font-semibold text-forest md:text-3xl">
                  Projects from neighborhoods like yours
                </h3>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
                {pickGallery("service-areas-strip", 8).map((img, index) => (
                  <Link
                    key={img.src + index}
                    href="/gallery"
                    className="group relative block aspect-square overflow-hidden rounded-xl bg-charcoal/5 shadow-sm"
                    aria-label={`View gallery: ${img.alt}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-forest/15 bg-white p-8 text-center shadow-sm md:p-12">
              <h3 className="font-serif text-2xl font-semibold text-forest md:text-3xl">
                Don&apos;t see your area?
              </h3>
              <p className="mx-auto mt-3 max-w-xl text-charcoal/80">
                We regularly take projects in nearby communities. Give us a call —
                if it&apos;s in West Michigan, there&apos;s a good chance we can help.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                <a
                  href={SITE.phone.href}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-forest px-7 py-3.5 text-sm font-semibold text-cream shadow-md transition hover:bg-forest-dark hover:shadow-lg"
                >
                  <Phone className="h-4 w-4" strokeWidth={2} aria-hidden />
                  Call {SITE.phone.display}
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-forest bg-transparent px-7 py-3.5 text-sm font-semibold text-forest transition hover:bg-forest hover:text-cream"
                >
                  Send a Message
                </a>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
