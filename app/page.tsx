import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Handshake,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { QuoteForm } from "@/components/quote-form";
import { SocialLinks } from "@/components/social-links";
import { SERVICES } from "@/lib/services";
import {
  FEATURED,
  HOME_HIGHLIGHTS,
  TESTIMONIALS,
  pickGallery,
} from "@/lib/gallery";
import { SITE } from "@/lib/site";

const HERO_IMAGE = FEATURED.hero;
const ABOUT_IMAGE = FEATURED.about;
const RECENT_WORK = pickGallery("home-recent-work", 12);
const FOOTER_GRID = pickGallery("home-footer-grid", 12);

const FEATURED_CATEGORIES: Array<{
  label: string;
  title: string;
  href: string;
  image: string;
  alt: string;
}> = [
  {
    label: "Hardscaping",
    title: "Paver Patios & Fire Pits",
    href: "/services/paver-patio-installation",
    image: HOME_HIGHLIGHTS[3].src,
    alt: "Paver patio installation by Bernal Landscape Management",
  },
  {
    label: "Landscaping",
    title: "Landscape Design",
    href: "/services/landscape-design-and-installation",
    image: HOME_HIGHLIGHTS[6].src,
    alt: "Landscape design and bed work by Bernal Landscape",
  },
  {
    label: "Hardscaping",
    title: "Retaining Walls",
    href: "/services/retaining-wall-construction",
    image: HOME_HIGHLIGHTS[4].src,
    alt: "Retaining wall built by Bernal Landscape Management",
  },
  {
    label: "Lawn Maintenance",
    title: "Lawn Care & Mowing",
    href: "/services/lawn-maintenance",
    image: HOME_HIGHLIGHTS[5].src,
    alt: "Manicured lawn maintained by Bernal Landscape",
  },
];

const WHY_CHOOSE_US: Array<{
  Icon: typeof Sparkles;
  title: string;
  body: string;
}> = [
  {
    Icon: Award,
    title: "15+ Years of Experience",
    body: "Trust our experience to get the job done. We have over 15 years in the industry serving West Michigan homeowners.",
  },
  {
    Icon: Sparkles,
    title: "Industry-Leading Materials",
    body: "We source from industry-leading manufacturers — most of our products carry a warranty.",
  },
  {
    Icon: ShieldCheck,
    title: "Licensed & Insured",
    body: "We truly value the state of all our clients' homes. That's why we're 100% licensed and insured for your safety and ours.",
  },
  {
    Icon: Handshake,
    title: "Family Owned & Operated",
    body: "A local, family-run business that treats every property like our own — same team you'll see on every visit.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section
          id="home"
          className="relative min-h-[88vh] overflow-hidden"
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
              className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/85"
              aria-hidden
            />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-center px-4 pb-36 pt-40 md:pb-48 md:pt-44">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta sm:text-sm">
              Family Owned &amp; Operated · West Michigan
            </p>
            <h1 className="mt-5 max-w-4xl font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Proudly
              <br />
              <span className="text-terracotta">Designed for You</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              Family-owned landscape design, hardscaping, and property care
              serving Grand Rapids and West Michigan for over 15 years.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/contact#quote-form"
                className="inline-flex items-center justify-center rounded-xl bg-forest px-8 py-4 text-center text-sm font-semibold text-cream shadow-lg transition-all duration-200 hover:bg-forest-dark hover:shadow-xl"
              >
                Get a Quote
              </Link>
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-8 py-4 text-center text-sm font-semibold text-white shadow-sm backdrop-blur-[2px] transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                View Gallery
              </Link>
            </div>
          </div>

          {/* Stats overlay */}
          <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-8 md:pb-12">
            <div className="mx-auto max-w-5xl rounded-2xl border border-white/15 bg-white/10 px-6 py-6 shadow-2xl backdrop-blur-md md:px-10 md:py-8">
              <dl className="grid grid-cols-3 gap-6 text-center text-white">
                <div>
                  <dt className="sr-only">Years of experience</dt>
                  <dd className="font-serif text-3xl font-semibold tracking-tight text-terracotta md:text-5xl">
                    15+
                  </dd>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/85 sm:text-sm">
                    Years Experience
                  </p>
                </div>
                <div className="border-x border-white/20">
                  <dt className="sr-only">BBB rating</dt>
                  <dd className="font-serif text-3xl font-semibold tracking-tight text-terracotta md:text-5xl">
                    A+
                  </dd>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/85 sm:text-sm">
                    BBB Accredited
                  </p>
                </div>
                <div>
                  <dt className="sr-only">Licensed and insured</dt>
                  <dd className="font-serif text-3xl font-semibold tracking-tight text-terracotta md:text-5xl">
                    100%
                  </dd>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/85 sm:text-sm">
                    Licensed &amp; Insured
                  </p>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-28 bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-terracotta">
                Expert &amp; Professional
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-forest md:text-5xl">
                Our Services
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80 md:text-lg">
                As landscape specialists, we&apos;re dedicated to providing
                reliable, professional service that meets all of your needs.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.slice(0, 8).map(
                ({ slug, title, description, heroImage, Icon }) => (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-charcoal/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-forest hover:shadow-xl"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-charcoal/5">
                      <Image
                        src={heroImage}
                        alt={`${title} project by Bernal Landscape Management`}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent"
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
                ),
              )}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border-2 border-forest bg-transparent px-8 py-3 text-sm font-semibold text-forest transition hover:bg-forest hover:text-cream"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Portfolio with category overlays */}
        <section
          id="gallery"
          className="scroll-mt-28 border-t border-forest/10 bg-white py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-terracotta">
                Our Work
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-forest md:text-5xl">
                Recent Projects
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80 md:text-lg">
                A look at real landscape, hardscape, and property-care projects
                we&apos;ve completed for homeowners across West Michigan.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURED_CATEGORIES.map((cat) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-charcoal/5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"
                    aria-hidden
                  />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                      {cat.label}
                    </span>
                    <h3 className="mt-2 font-serif text-xl font-semibold leading-tight text-white md:text-2xl">
                      {cat.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>

            {/* Secondary highlight strip */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3 md:grid-cols-6">
              {HOME_HIGHLIGHTS.slice(0, 6).map((img, index) => (
                <Link
                  key={img.src + index}
                  href="/gallery"
                  className="group relative block aspect-square overflow-hidden rounded-xl bg-charcoal/5 shadow-sm transition-shadow hover:shadow-lg"
                  aria-label={`View gallery: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/gallery"
                className="inline-flex items-center justify-center rounded-xl bg-forest px-8 py-3.5 text-sm font-semibold text-cream shadow-md transition hover:bg-forest-dark hover:shadow-lg"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="scroll-mt-28 bg-cream py-20 md:py-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={ABOUT_IMAGE}
                  alt="Bernal Landscape team and workmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Decorative secondary image */}
              <div className="absolute -bottom-6 -right-6 hidden h-44 w-44 overflow-hidden rounded-2xl border-4 border-cream shadow-xl md:block lg:h-56 lg:w-56">
                <Image
                  src={HOME_HIGHLIGHTS[2].src}
                  alt="Bernal Landscape recent project"
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-terracotta">
                {SITE.name}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-forest md:text-5xl">
                Family Owned &amp; Operated
              </h2>
              <p className="mt-6 leading-relaxed text-charcoal/85 md:text-lg">
                For more than 15 years, Bernal Landscape Management has served
                homeowners and businesses across Grand Rapids and West Michigan
                with thoughtful design, dependable crews, and workmanship built
                to last. We&apos;re proud to be a family-owned, BBB-accredited
                business that treats every property like our own.
              </p>

              {/* Mini stats */}
              <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-forest/15 py-6">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-charcoal/55">
                    Established
                  </dt>
                  <dd className="mt-2 font-serif text-2xl font-semibold text-forest md:text-3xl">
                    2010
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-charcoal/55">
                    BBB Rating
                  </dt>
                  <dd className="mt-2 font-serif text-2xl font-semibold text-forest md:text-3xl">
                    A+
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-charcoal/55">
                    Service Area
                  </dt>
                  <dd className="mt-2 font-serif text-2xl font-semibold text-forest md:text-3xl">
                    West MI
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl bg-forest px-7 py-3 text-sm font-semibold text-cream shadow-md transition hover:bg-forest-dark hover:shadow-lg"
                >
                  Learn More About Us
                </Link>
                <Link
                  href="/reviews"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-forest bg-transparent px-7 py-3 text-sm font-semibold text-forest transition hover:bg-forest hover:text-cream"
                >
                  Read Our Reviews
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="border-t border-forest/10 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-terracotta">
                Expert &amp; Professional
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-forest md:text-5xl">
                Why Choose Bernal
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80 md:text-lg">
                Reliable, professional landscaping service backed by experience
                and the materials to do the job right.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {WHY_CHOOSE_US.map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="group flex flex-col items-start rounded-2xl border border-charcoal/10 bg-cream p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-forest hover:shadow-md"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest text-cream shadow-md transition-colors group-hover:bg-terracotta">
                    <Icon className="h-7 w-7" strokeWidth={1.6} aria-hidden />
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-forest">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/75 md:text-base">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marquee strip of recent work */}
        <section
          aria-label="Recent Bernal Landscape project photos"
          className="border-y border-forest/10 bg-cream py-14"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-terracotta">
                More From the Gallery
              </p>
              <h2 className="mt-3 font-serif text-2xl font-semibold text-forest md:text-3xl">
                Recent jobs from across West Michigan
              </h2>
            </div>
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
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
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
          className="scroll-mt-28 bg-white py-20 md:py-28"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-terracotta">
                Client Reviews
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-forest md:text-5xl">
                What Our Clients Say
              </h2>
            </div>
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
                        className="h-5 w-5 fill-amber-400 text-amber-400"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <blockquote className="mt-5 flex-1 text-base leading-relaxed text-charcoal/85 md:text-lg">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-bold uppercase tracking-wider text-charcoal">
                    — {name}
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

        {/* Ready to Transform CTA banner */}
        <section
          aria-label="Get a free quote"
          className="relative isolate overflow-hidden py-24 text-cream md:py-32"
        >
          <div className="absolute inset-0 -z-10">
            <Image
              src={FEATURED.serviceAreas}
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-forest/85" aria-hidden />
          </div>
          <div className="mx-auto max-w-3xl px-4 text-center">
            <Leaf
              className="mx-auto h-10 w-10 text-terracotta"
              strokeWidth={1.5}
              aria-hidden
            />
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-tight md:text-5xl">
              Ready to start your next project?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-cream/85 md:text-lg">
              Tell us about your property and we&apos;ll put together a clear,
              honest quote — no pressure.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact#quote-form"
                className="inline-flex items-center justify-center rounded-xl bg-cream px-8 py-3.5 text-sm font-semibold text-forest shadow-lg transition hover:bg-white hover:shadow-xl"
              >
                Get a Quote
              </Link>
              <a
                href={SITE.phone.href}
                className="inline-flex items-center justify-center rounded-xl border-2 border-cream/80 px-8 py-3.5 text-sm font-semibold text-cream transition hover:border-cream hover:bg-white/10"
              >
                Call {SITE.phone.display}
              </a>
            </div>
          </div>
        </section>

        {/* Contact / Quote */}
        <section
          id="contact"
          className="scroll-mt-28 bg-cream py-20 md:py-28"
          aria-label="Contact and quote request"
        >
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-terracotta">
                Contact Us
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold text-forest md:text-5xl">
                Get a Quote
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80 md:text-lg">
                Tell us about your project and we&apos;ll get right back to
                you. Consultations are always free.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
              <div className="lg:col-span-2">
                <div className="rounded-2xl border border-forest/10 bg-white p-8 shadow-sm">
                  <h3 className="font-serif text-xl font-semibold text-forest">
                    {SITE.name}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/70">
                    Family-owned landscape design, hardscaping, and property
                    care in West Michigan.
                  </p>

                  <ul className="mt-8 space-y-6 text-charcoal/90">
                    <li>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/55">
                        Phone
                      </span>
                      <a
                        href={SITE.phone.href}
                        className="mt-1 inline-block text-lg font-semibold text-forest transition hover:text-terracotta"
                      >
                        {SITE.phone.display}
                      </a>
                    </li>
                    <li>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/55">
                        Email
                      </span>
                      <a
                        href={SITE.email.href}
                        className="mt-1 inline-block break-all font-medium text-forest transition hover:text-terracotta"
                      >
                        {SITE.email.display}
                      </a>
                    </li>
                    <li>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/55">
                        Address
                      </span>
                      <span className="mt-1 block leading-relaxed">
                        {SITE.address.full}
                      </span>
                    </li>
                    <li>
                      <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/55">
                        Hours
                      </span>
                      <span className="mt-1 block leading-relaxed">
                        {SITE.hours.display}
                      </span>
                    </li>
                  </ul>

                  <div className="mt-8 border-t border-forest/10 pt-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-charcoal/55">
                      Follow us
                    </p>
                    <SocialLinks />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-3">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        {/* Footer photo grid */}
        <section
          aria-label="More project photos"
          className="border-t border-forest/10 bg-white py-4"
        >
          <div className="grid grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
            {FOOTER_GRID.map((img, index) => (
              <Link
                key={img.src + index}
                href="/gallery"
                className="group relative block aspect-square overflow-hidden bg-charcoal/5"
                aria-label={`View gallery: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 33vw, (max-width: 1024px) 16vw, 8vw"
                />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
