import type { Metadata } from "next";
import {
  CalendarCheck,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import { SITE } from "@/lib/site";
import { FEATURED, pickGallery } from "@/lib/gallery";

const DESCRIPTION =
  "Request a free landscape, hardscape, lawn-care, or snow-removal estimate from Bernal Landscape Management. Serving Grand Rapids, Wyoming, Kentwood, and West Michigan.";

export const metadata: Metadata = {
  title: "Contact Us — Free Estimates in Grand Rapids, MI",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/contact` },
  openGraph: {
    title: "Contact Bernal Landscape — Free Estimates",
    description: DESCRIPTION,
    url: `${SITE.url}/contact`,
    type: "website",
  },
};

const mapEmbed =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(`${SITE.address.full}`) +
  "&output=embed";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="Contact Us"
          eyebrow="Get a Quote"
          description="Tell us about your project and we'll get right back to you. Free, no-obligation estimates across Grand Rapids and West Michigan."
          image={FEATURED.contact}
          imageAlt="Circular paver-edged front-yard island bed with white rock and a slender ornamental tree"
          crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        />

        {/* Two-options hero: send a message OR book directly */}
        <section className="bg-cream py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
                Two ways to start
              </p>
              <h2 className="mt-2 font-serif text-2xl font-semibold text-forest md:text-3xl">
                Send a request, or book a visit directly
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75 md:text-base">
                Not sure when you&apos;re free? Send a message and Salvador will
                reach back out. Already know a time that works? Pick an open
                slot on his calendar — it&apos;s confirmed instantly.
              </p>
            </div>
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-10">
              {/* Form column — request a callback */}
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <MessageSquare
                      className="h-4 w-4 text-terracotta"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
                      Option 1 · Send a Message
                    </p>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-forest md:text-3xl">
                    Request a Callback
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/75 md:text-base">
                    Tell Salvador about your project. He&apos;ll text or call
                    you back to set up a time to come look at the property.
                    Best if you&apos;re not sure when you&apos;re free yet.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-forest/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-forest">
                    <Clock className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
                    Typical reply within 24 hours
                  </div>
                </div>
                <ContactForm anchorId="quote-form" hideHeader />
              </div>

              {/* Iframe column — book directly */}
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-2">
                    <CalendarCheck
                      className="h-4 w-4 text-terracotta"
                      strokeWidth={2}
                      aria-hidden
                    />
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">
                      Option 2 · Book Instantly
                    </p>
                  </div>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-forest md:text-3xl">
                    Book a Quote Visit on Salvador&apos;s Calendar
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/75 md:text-base">
                    Pick an open slot below. The visit goes straight onto
                    Salvador&apos;s calendar and you get a confirmation right
                    away — no back-and-forth.
                  </p>
                  <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-terracotta/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-terracotta">
                    <CheckCircle2
                      className="h-3.5 w-3.5"
                      strokeWidth={2}
                      aria-hidden
                    />
                    Instant confirmation
                  </div>
                </div>
                <div
                  id="book-quote"
                  className="scroll-mt-28 overflow-hidden rounded-3xl border border-forest/15 bg-white shadow-xl"
                >
                  <iframe
                    src="https://www.alignandacquire.com/book/bernal-landscape/embed"
                    className="block w-full min-h-[700px] border-0"
                    title="Schedule a free quote visit with Bernal Landscape"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business info + map */}
        <section className="border-t border-forest/10 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Info */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-forest/80">
                  {SITE.name}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold text-forest md:text-4xl">
                  Family Owned &amp; Operated
                </h2>
                <p className="mt-4 text-base leading-relaxed text-charcoal/80 md:text-lg">
                  Call, email, or send us a message — whatever&apos;s easiest.
                  If you have photos of the project area, attach them and
                  we&apos;ll get right back to you.
                </p>

                <ul className="mt-10 space-y-6 text-charcoal/90">
                  <li className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                      <Phone className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                        Phone
                      </span>
                      <a
                        href={SITE.phone.href}
                        className="mt-1 inline-block text-lg font-medium text-forest transition hover:text-terracotta"
                      >
                        {SITE.phone.display}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                      <Mail className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                        Email
                      </span>
                      <a
                        href={SITE.email.href}
                        className="mt-1 inline-block break-all font-medium text-forest transition hover:text-terracotta"
                      >
                        {SITE.email.display}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                      <MapPin className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                        Address
                      </span>
                      <a
                        href={SITE.socials.google}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-block leading-relaxed text-forest transition hover:text-terracotta"
                      >
                        {SITE.address.full}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                      <Clock className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                    </span>
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                        Hours
                      </span>
                      <span className="mt-1 block leading-relaxed">
                        {SITE.hours.display}
                      </span>
                    </div>
                  </li>
                </ul>

                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/55">
                    Follow us
                  </p>
                  <div className="mt-3">
                    <SocialLinks />
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm lg:sticky lg:top-28">
                <iframe
                  title={`Map of ${SITE.name}`}
                  src={mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-80 w-full border-0 md:h-96 lg:h-[480px]"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Photo strip — recent work */}
        <section className="border-t border-forest/10 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
                Recent Work
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-forest md:text-4xl">
                See what we&apos;ve been up to
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80 md:text-lg">
                A look at recent projects we&apos;ve completed for homeowners
                across West Michigan.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
              {pickGallery("contact-strip", 8).map((img, index) => (
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
            <div className="mt-10 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-xl border-2 border-forest bg-transparent px-8 py-3 text-sm font-semibold text-forest transition hover:bg-forest hover:text-cream"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
