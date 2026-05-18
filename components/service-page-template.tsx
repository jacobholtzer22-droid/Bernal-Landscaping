import Link from "next/link";
import { Check, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { SERVICES, type Service } from "@/lib/services";

type ServicePageTemplateProps = {
  service: Service;
};

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <>
      <PageHero
        title={service.title}
        eyebrow="Our Services"
        description={service.tagline}
        image={service.heroImage}
        imageAlt={`${service.title} project by Bernal Landscape Management`}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.shortTitle },
        ]}
      />

      {/* Overview */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
              {service.tagline}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/85 md:text-lg">
              {service.intro.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <aside className="lg:pl-6">
            <div className="rounded-2xl border border-forest/10 bg-white p-7 shadow-sm">
              <h3 className="font-serif text-xl font-semibold text-forest">
                Why Choose Bernal
              </h3>
              <ul className="mt-5 space-y-4">
                {service.whyChoose.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <ShieldCheck
                      className="mt-0.5 h-5 w-5 shrink-0 text-terracotta"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <span className="text-sm leading-relaxed text-charcoal/85">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-forest px-6 py-3 text-sm font-semibold text-cream shadow-md transition hover:bg-forest-dark hover:shadow-lg"
              >
                Request a Quote
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-t border-forest/10 bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
              What&apos;s Included
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/80 md:text-lg">
              Every {service.shortTitle.toLowerCase()} project from Bernal Landscape
              Management includes the following as standard.
            </p>
          </div>

          <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
            {service.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 rounded-2xl border border-charcoal/10 bg-cream p-5 shadow-sm"
              >
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest text-cream">
                  <Check className="h-4 w-4" strokeWidth={2.5} aria-hidden />
                </span>
                <span className="text-sm leading-relaxed text-charcoal/85 md:text-base">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {service.faq && service.faq.length > 0 ? (
        <section className="border-t border-forest/10 bg-cream py-20">
          <div className="mx-auto max-w-3xl px-4">
            <h2 className="text-center font-serif text-3xl font-semibold text-forest md:text-4xl">
              Frequently Asked
            </h2>
            <div className="mt-10 space-y-4">
              {service.faq.map((q) => (
                <details
                  key={q.question}
                  className="group rounded-2xl border border-charcoal/10 bg-white p-6 shadow-sm"
                >
                  <summary className="cursor-pointer list-none font-semibold text-charcoal">
                    {q.question}
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-charcoal/80">
                    {q.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CtaSection
        heading={`Ready for ${service.shortTitle.toLowerCase()} done right?`}
        subheading="Tell us about your project and we'll get back to you within one business day."
      />

      {/* Related services */}
      <section className="border-t border-forest/10 bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-2xl font-semibold text-forest md:text-3xl">
              Related Services
            </h2>
            <Link
              href="/services"
              className="text-sm font-semibold text-forest transition hover:text-terracotta"
            >
              View all services →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map(({ slug, title, description, Icon }) => (
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
    </>
  );
}
