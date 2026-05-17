import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Axe,
  BadgeCheck,
  BrickWall,
  Droplets,
  Flower2,
  Layers,
  LayoutGrid,
  Leaf,
  Palette,
  ShieldCheck,
  Snowflake,
  Sprout,
  SquareStack,
  Star,
  TreeDeciduous,
  Waves,
} from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { QuoteForm } from "@/components/quote-form";
import { SocialLinks } from "@/components/social-links";

const HERO_IMAGE =
  "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/d1fbab65-4657-4892-ad3b-83905e98f917-1172w.jpg";

const ABOUT_IMAGE =
  "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/c7fcf598-eef4-4444-8308-21bc5362446f-1172w.jpg";

const GALLERY_IMAGES = [
  "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/d1fbab65-4657-4892-ad3b-83905e98f917-1172w.jpg",
  "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/c7fcf598-eef4-4444-8308-21bc5362446f-1172w.jpg",
  "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/ca8ba884-3ad1-4793-b32e-aef60fbf4ce6-1172w.jpg",
  "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/088393d1-007a-4391-8764-71054e160cbd-1172w.jpg",
  "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/b9fabc0f-9f68-42bb-983a-53a8a00ed921-1172w.jpg",
  "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/aba410dc-df4c-4998-8d24-e7244e1f43e9-1172w.jpg",
  "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/08812026-40ab-4c0f-a84d-e04061a1c50b-1172w.jpg",
  "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/5-1172w.jpg",
  "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/1-1172w.jpg",
] as const;

const SERVICES: {
  slug: string;
  title: string;
  description: string;
  Icon: LucideIcon;
}[] = [
  {
    slug: "landscape-design-installation",
    title: "Landscape Design & Installation",
    description:
      "Cohesive planting plans, grading, and finishes tailored to your property and lifestyle.",
    Icon: Palette,
  },
  {
    slug: "retaining-wall-construction",
    title: "Retaining Wall Construction",
    description:
      "Structural walls engineered for durability, drainage, and clean, lasting curb appeal.",
    Icon: BrickWall,
  },
  {
    slug: "concrete-construction",
    title: "Concrete Construction",
    description:
      "Driveways, walkways, and flatwork poured and finished to stand up to Michigan weather.",
    Icon: SquareStack,
  },
  {
    slug: "paver-patio-installation",
    title: "Paver Patio Installation",
    description:
      "Custom paver layouts that extend your living space outdoors with precision installation.",
    Icon: LayoutGrid,
  },
  {
    slug: "lawn-maintenance",
    title: "Lawn Maintenance",
    description:
      "Seasonal mowing, edging, and turf care that keeps your lawn healthy and presentation-ready.",
    Icon: Sprout,
  },
  {
    slug: "snow-plowing-shoveling",
    title: "Snow Plowing & Shoveling",
    description:
      "Reliable winter clearing for driveways, walks, and commercial lots when storms hit.",
    Icon: Snowflake,
  },
  {
    slug: "sod-installation",
    title: "Sod Installation",
    description:
      "Fresh sod laid and rolled for even establishment and an instant, lush green lawn.",
    Icon: Layers,
  },
  {
    slug: "tree-service",
    title: "Tree Service",
    description:
      "Pruning and canopy work performed with attention to tree health and property safety.",
    Icon: TreeDeciduous,
  },
  {
    slug: "tree-removal",
    title: "Tree Removal",
    description:
      "Safe takedown and debris removal, including tight spaces and storm-damaged trees.",
    Icon: Axe,
  },
  {
    slug: "leaf-cleanup",
    title: "Leaf Cleanup",
    description:
      "Thorough seasonal leaf removal so beds and turf stay neat and ready for spring.",
    Icon: Leaf,
  },
  {
    slug: "yard-drain-installation",
    title: "Yard Drain Installation",
    description:
      "Surface and subsurface drainage solutions that move water away from your foundation.",
    Icon: Droplets,
  },
  {
    slug: "french-drains",
    title: "French Drains",
    description:
      "Perforated systems and stone envelopes designed to capture and redirect groundwater.",
    Icon: Waves,
  },
  {
    slug: "mulching",
    title: "Mulching",
    description:
      "Premium mulch installed for moisture retention, weed suppression, and polished beds.",
    Icon: Flower2,
  },
];

const TESTIMONIALS = [
  {
    name: "Dawn L.",
    quote:
      "Stayed on time and in budget, did quality work, and used quality materials. Very professional. Will use them again when we need more landscape retaining walls.",
  },
  {
    name: "Jamal A.",
    quote:
      "Bernal Landscaping did a great job on my lawn last summer. They also kept my sidewalks and driveways clear whenever it snowed. I'll never use another landscaping company again — they exceeded all my expectations.",
  },
  {
    name: "Dante M.",
    quote:
      "Very professional, great communication, and always willing to do the work as expected. Will be doing business in the upcoming season. Thank you for the good work.",
  },
  {
    name: "Ethan W.",
    quote:
      "We used this service for landscaping in our yard. We had new gardens cut out and river rock and mulch spread. They did an awesome job. I highly recommend this company.",
  },
] as const;

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
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-forest px-8 py-3.5 text-center text-sm font-semibold text-cream shadow-lg transition-all duration-200 hover:bg-forest-dark hover:shadow-xl"
              >
                Get a Free Quote
              </a>
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-xl border-2 border-white/80 bg-transparent px-8 py-3.5 text-center text-sm font-semibold text-white shadow-sm backdrop-blur-[2px] transition-all duration-200 hover:border-white hover:bg-white/10"
              >
                View Our Work
              </a>
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
                15 Years of Experience
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
              {SERVICES.map(({ slug, title, description, Icon }) => (
                <Link
                  key={slug}
                  href={`/services/${slug}`}
                  className="group flex flex-col rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-forest hover:shadow-md"
                >
                  <Icon
                    className="h-7 w-7 text-forest transition-colors group-hover:text-terracotta"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-4 font-semibold text-charcoal">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/70">
                    {description}
                  </p>
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
              {/* Placeholder BBB badge — replace with official asset when available */}
              <div
                className="mt-8 inline-flex min-h-[52px] min-w-[140px] items-center justify-center rounded-lg border-2 border-dashed border-charcoal/25 bg-cream px-5 text-xs font-bold uppercase tracking-widest text-charcoal/60"
              >
                A+ BBB Accredited
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="scroll-mt-28 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center font-serif text-3xl font-semibold text-forest md:text-4xl">
              Our Work
            </h2>
            <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
              {GALLERY_IMAGES.map((src, index) => (
                <div
                  key={src + index}
                  className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-charcoal/5 shadow-sm"
                >
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={1172}
                    height={880}
                    className="w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
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
          </div>
        </section>

        {/* Service areas */}
        <section
          id="service-areas"
          className="scroll-mt-28 border-t border-forest/10 bg-forest py-16 text-cream"
        >
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="font-serif text-2xl font-semibold md:text-3xl">
              Service Areas
            </h2>
            <p className="mt-4 text-cream/85">
              Proudly serving Grand Rapids, Wyoming, and surrounding West Michigan
              communities.
            </p>
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
                  Bernal Landscape Management, LLC
                </p>
                <ul className="mt-8 space-y-5 text-charcoal/90">
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                      Phone
                    </span>
                    <a
                      href="tel:6164771221"
                      className="mt-1 inline-block text-lg font-medium text-forest transition hover:text-terracotta"
                    >
                      616-477-1221
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                      Email
                    </span>
                    <a
                      href="mailto:salvador@bernallandscape.com"
                      className="mt-1 inline-block font-medium text-forest transition hover:text-terracotta"
                    >
                      salvador@bernallandscape.com
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                      Address
                    </span>
                    <span className="mt-1 block leading-relaxed">
                      18 36th St SW Suite C, Wyoming, MI 49548
                    </span>
                  </li>
                  <li>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                      Hours
                    </span>
                    <span className="mt-1 block leading-relaxed">
                      Mon–Sat 6:00 AM – 6:00 PM, Sunday Closed
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

      <footer className="border-t border-forest/15 bg-charcoal text-cream">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-3 md:gap-10">
          <div>
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-terracotta" strokeWidth={1.75} aria-hidden />
              <span className="font-semibold tracking-tight">Bernal Landscape</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-cream/75">
              Family-owned landscape design, hardscaping, and property care serving
              Grand Rapids for over 15 years.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream/90">
              Quick links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              <li>
                <a href="#services" className="transition hover:text-terracotta">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-terracotta">
                  About
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition hover:text-terracotta">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-terracotta">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-cream/90">
              Contact
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-cream/75">
              <a href="tel:6164771221" className="hover:text-terracotta">
                616-477-1221
              </a>
              <br />
              <a
                href="mailto:salvador@bernallandscape.com"
                className="hover:text-terracotta"
              >
                salvador@bernallandscape.com
              </a>
              <br />
              <span className="mt-2 inline-block">
                18 36th St SW Suite C
                <br />
                Wyoming, MI 49548
              </span>
            </p>
            <div className="mt-6">
              <SocialLinks
                className="justify-start"
                linkClassName="rounded-full p-2 text-cream/80 transition-colors hover:bg-white/10 hover:text-terracotta"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-cream/55">
          © 2026 Bernal Landscape Management, LLC. All rights reserved.
        </div>
      </footer>
    </>
  );
}
