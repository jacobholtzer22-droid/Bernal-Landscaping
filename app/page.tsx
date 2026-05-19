import Image from "next/image";
import Link from "next/link";
import {
  Award,
  BadgeCheck,
  Leaf,
  ShieldCheck,
  Star,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { QuoteForm } from "@/components/quote-form";
import { SocialLinks } from "@/components/social-links";
import { SERVICES } from "@/lib/services";
import { FEATURED, HOME_HIGHLIGHTS, TESTIMONIALS, pickGallery } from "@/lib/gallery";
import { SITE } from "@/lib/site";

const HERO_IMAGE = FEATURED.hero;
const ABOUT_IMAGE = FEATURED.about;
const RECENT_WORK = pickGallery("home-recent-work", 12);

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative min-h-[70vh] md:min-h-[85vh]"
          aria-label="Introduction"
        >
          <div className="absolute inset-0">
            <Image
              src={HERO_IMAGE}
              alt="Landscaping project completed by Bernal Landscape Management"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/40 to-black/80"
              aria-hidden
            />
          </div>

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col justify-center px-4 pb-20 pt-36 md:min-h-[85vh] md:pb-28 md:pt-44">
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Proudly Designed for You
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              Family-owned landscape design, hardscaping, and property care serving
              Grand Rapids for over 15 years.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-forest px-8 py-3.5 text-center text-sm font-semibold text-cream shadow-lg transition-all duration-200 hover:bg-forest-dark hover:shadow-xl"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-8 py-3.5 text-center text-sm font-semibold text-white shadow-sm backdrop-blur-[2px] transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>

        {/* Trust strip */}
        <section className="border-y border-forest/10 bg-white py-14">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-3 md:gap-8">
            <div className="text-center">
              <Award
                className="mx-auto h-10 w-10 text-forest"
                strokeWidth={1.5}
                aria-hidden
              />
              <h2 className="mt-4 font-serif text-xl font-semibold text-charcoal">
                15+ Years of Experience
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75 md:text-base">
                Trust our experience to get the job done right.
              </p>
            </div>
            <div className="text-center">
              <ShieldCheck
                className="mx-auto h-10 w-10 text-forest"
                strokeWidth={1.5}
                aria-hidden
              />
              <h2 className="mt-4 font-serif text-xl font-semibold text-charcoal">
                Industry-Leading Materials
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75 md:text-base">
                We source from top manufacturers, most carry warranties.
              </p>
            </div>
            <div className="text-center">
              <BadgeCheck
                className="mx-auto h-10 w-10 text-forest"
                strokeWidth={1.5}
                aria-hidden
              />
              <h2 className="mt-4 font-serif text-xl font-semibold text-charcoal">
                Licensed &amp; Insured
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-charcoal/75 md:text-base">
                100% licensed and insured for your safety and ours.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-28 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
                As landscaping specialists, we&apos;re dedicated to reliable,
                professional service that meets every need.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map(({ slug, title, description, heroImage, Icon }) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-forest hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal/5">
                    <Image
                      src={heroImage}
                      alt={`${title} project by Bernal Landscape Management`}
                      fill
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      aria-hidden
                    />
                    <div className="absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-sm">
                      <Icon
                        className="h-5 w-5 text-forest transition-colors group-hover:text-terracotta"
                        strokeWidth={1.75}
                        aria-hidden
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-semibold text-charcoal">{title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">
                      {description}
                    </p>
                    <span className="mt-4 text-sm font-semibold text-forest transition-colors group-hover:text-terracotta">
                      Learn more →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-28 border-t border-forest/10 bg-white py-20 md:py-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={ABOUT_IMAGE}
                alt="Bernal Landscape team and workmanship"
                width={1172}
                height={880}
                className="h-full w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                Family Owned &amp; Operated
              </h2>
              <p className="mt-6 leading-relaxed text-charcoal/85">
                For more than 15 years, Bernal Landscape Management has served
                homeowners and businesses across West Michigan with thoughtful design,
                dependable crews, and workmanship built to last. We treat every
                property like our own and hold ourselves to a high standard of quality
                on every job. Our commitment is reflected in our A+ BBB rating and the
                long-term relationships we&apos;ve earned throughout the Grand Rapids
                area.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl bg-forest px-6 py-3 text-sm font-semibold text-cream shadow-md transition hover:bg-forest-dark hover:shadow-lg"
                >
                  Learn More About Us
                </Link>
                {/* Placeholder BBB badge — replace with official asset when available */}
                <div className="inline-flex min-h-[52px] min-w-[140px] items-center justify-center rounded-lg border-2 border-dashed border-charcoal/25 bg-cream px-5 text-xs font-bold uppercase tracking-widest text-charcoal/60">
                  A+ BBB Accredited
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Work - Highlights */}
        <section id="gallery" className="scroll-mt-28 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
                Our Work
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-forest md:text-4xl">
                Featured Projects
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80 md:text-lg">
                Real photos of recent landscape, hardscape, and property-care
                projects we&apos;ve completed across West Michigan.
              </p>
            </div>

            <div className="mt-14 grid gap-4 md:grid-cols-3 md:gap-5">
              {HOME_HIGHLIGHTS.slice(0, 9).map((img, index) => (
                <Link
                  key={img.src + index}
                  href="/gallery"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-charcoal/5 shadow-sm transition-shadow hover:shadow-lg"
                  aria-label={`View gallery: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-xl border-2 border-forest bg-transparent px-8 py-3 text-sm font-semibold text-forest transition hover:bg-forest hover:text-cream"
              >
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* Marquee strip of recent work */}
        <section
          aria-label="Recent Bernal Landscape project photos"
          className="border-y border-forest/10 bg-cream py-12 md:py-16"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
              {RECENT_WORK.map((img, index) => (
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
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          id="reviews"
          className="scroll-mt-28 border-t border-forest/10 bg-white py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center font-serif text-3xl font-semibold text-forest md:text-4xl">
              What Our Clients Say
            </h2>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {TESTIMONIALS.map(({ name, quote }) => (
                <figure
                  key={name}
                  className="flex h-full flex-col rounded-2xl border border-charcoal/10 bg-cream p-8 shadow-sm"
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
            <div className="mt-12 text-center">
              <Link
                href="/reviews"
                className="inline-flex items-center justify-center rounded-xl border-2 border-forest bg-transparent px-8 py-3 text-sm font-semibold text-forest transition hover:bg-forest hover:text-cream"
              >
                Read More Reviews
              </Link>
            </div>
          </div>
        </section>

        {/* Service areas */}
        <section
          id="service-areas"
          className="relative scroll-mt-28 overflow-hidden border-t border-forest/10 py-20 text-cream md:py-24"
        >
          <div className="absolute inset-0 -z-10">
            <Image
              src={FEATURED.serviceAreas}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div
              className="absolute inset-0 bg-forest/85"
              aria-hidden
            />
          </div>
          <div className="mx-auto max-w-3xl px-4 text-center">
            <Leaf
              className="mx-auto h-10 w-10 text-terracotta"
              strokeWidth={1.5}
              aria-hidden
            />
            <h2 className="mt-4 font-serif text-2xl font-semibold md:text-3xl">
              Service Areas
            </h2>
            <p className="mt-4 text-cream/85">
              Proudly serving Grand Rapids, Wyoming, and surrounding West Michigan
              communities.
            </p>
            <div className="mt-8">
              <Link
                href="/service-areas"
                className="inline-flex items-center justify-center rounded-xl bg-cream px-8 py-3 text-sm font-semibold text-forest shadow-md transition hover:bg-white hover:shadow-lg"
              >
                See All Service Areas
              </Link>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-28 py-20 md:py-28"
          aria-label="Contact and quote request"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-forest/80">
                  {SITE.name}
                </p>
                <ul className="mt-8 space-y-5 text-charcoal/90">
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                      Phone
                    </span>
                    <a
                      href={SITE.phone.href}
                      className="mt-1 inline-block text-lg font-medium text-forest transition hover:text-terracotta"
                    >
                      {SITE.phone.display}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                      Email
                    </span>
                    <a
                      href={SITE.email.href}
                      className="mt-1 inline-block font-medium text-forest transition hover:text-terracotta"
                    >
                      {SITE.email.display}
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                      Address
                    </span>
                    <span className="mt-1 block leading-relaxed">
                      {SITE.address.full}
                    </span>
                  </li>
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                      Hours
                    </span>
                    <span className="mt-1 block leading-relaxed">
                      {SITE.hours.display}
                    </span>
                  </li>
                </ul>
                <div className="mt-10">
                  <SocialLinks />
                </div>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
