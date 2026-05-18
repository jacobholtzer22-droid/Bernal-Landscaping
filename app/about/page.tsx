import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, BadgeCheck, HeartHandshake, ShieldCheck, Users } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Bernal Landscape Management",
  description:
    "Family-owned, licensed and insured, with 15+ years serving Grand Rapids and West Michigan. BBB accredited.",
  alternates: { canonical: `${SITE.url}/about` },
  openGraph: {
    title: "About Bernal Landscape Management",
    description:
      "Family-owned, licensed and insured, with 15+ years serving Grand Rapids and West Michigan. BBB accredited.",
    url: `${SITE.url}/about`,
    type: "website",
  },
};

const VALUES = [
  {
    Icon: HeartHandshake,
    title: "Family-Owned Care",
    body: "Every property is treated like our own. No call centers, no faceless crews — you'll know the team that's working on your yard.",
  },
  {
    Icon: ShieldCheck,
    title: "Licensed & Insured",
    body: "Fully licensed and insured for residential and commercial work in Michigan, with safety on every site as a non-negotiable.",
  },
  {
    Icon: Award,
    title: "Quality That Lasts",
    body: "From engineered retaining wall bases to properly cured concrete, we build for Michigan's freeze-thaw cycles, not just opening day.",
  },
  {
    Icon: Users,
    title: "Long-Term Relationships",
    body: "Most of our work comes from referrals and repeat customers. We earn that trust one job at a time, year after year.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          title="About Bernal Landscape"
          eyebrow="Our Story"
          description="Family-owned and operated. 15+ years building landscapes that hold up across West Michigan."
          image="https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/c7fcf598-eef4-4444-8308-21bc5362446f-1172w.jpg"
          imageAlt="Bernal Landscape Management team and projects"
          crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        />

        {/* Story */}
        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/d1fbab65-4657-4892-ad3b-83905e98f917-1172w.jpg"
                alt="Bernal Landscape Management completed project"
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
              <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/85 md:text-lg">
                <p>
                  Bernal Landscape Management was founded by Salvador Bernal with a
                  simple idea: do the work the way it ought to be done. Show up when
                  you say you will. Build to spec, not to whatever&apos;s easiest.
                  Treat every property like it&apos;s your own front yard.
                </p>
                <p>
                  More than 15 years later, we&apos;re still doing it that way —
                  serving homeowners and businesses across Grand Rapids, Wyoming,
                  and the broader West Michigan area. We&apos;ve grown, but we
                  haven&apos;t outgrown the values that started the company.
                </p>
                <p>
                  We&apos;re fully licensed and insured, BBB accredited, and proud to
                  be a family business that earns most of our work through referrals
                  and repeat customers. If you&apos;ve got a project in mind,
                  we&apos;d love to walk it with you.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-forest px-6 py-3 text-sm font-semibold text-cream shadow-md transition hover:bg-forest-dark hover:shadow-lg"
                >
                  Schedule a Consultation
                </Link>
                <a
                  href={SITE.phone.href}
                  className="inline-flex items-center justify-center rounded-xl border-2 border-forest bg-transparent px-6 py-3 text-sm font-semibold text-forest transition hover:bg-forest hover:text-cream"
                >
                  {SITE.phone.display}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="border-t border-forest/10 bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
                What We Stand For
              </h2>
              <p className="mt-4 text-base leading-relaxed text-charcoal/80 md:text-lg">
                The values that drive every project we take on.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VALUES.map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="flex flex-col rounded-2xl border border-charcoal/10 bg-cream p-7 shadow-sm"
                >
                  <Icon
                    className="h-8 w-8 text-forest"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <h3 className="mt-5 font-serif text-lg font-semibold text-charcoal">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/75">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust badges */}
        <section className="border-t border-forest/10 bg-cream py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-serif text-2xl font-semibold text-forest md:text-3xl">
                Credentials You Can Verify
              </h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm">
                <BadgeCheck
                  className="h-8 w-8 shrink-0 text-forest"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/55">
                    BBB
                  </p>
                  <p className="text-sm font-semibold text-charcoal">
                    A+ Accredited Business
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm">
                <ShieldCheck
                  className="h-8 w-8 shrink-0 text-forest"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/55">
                    Coverage
                  </p>
                  <p className="text-sm font-semibold text-charcoal">
                    Licensed &amp; Insured
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-charcoal/10 bg-white p-5 shadow-sm">
                <Award
                  className="h-8 w-8 shrink-0 text-forest"
                  strokeWidth={1.5}
                  aria-hidden
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/55">
                    Experience
                  </p>
                  <p className="text-sm font-semibold text-charcoal">
                    15+ Years in Business
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          heading="Let's plan your next project"
          subheading="Walk your property with our team and get a clear, honest plan — no pressure."
        />
      </main>
      <SiteFooter />
    </>
  );
}
