import Link from "next/link";
import { SITE } from "@/lib/site";

type CtaSectionProps = {
  heading?: string;
  subheading?: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function CtaSection({
  heading = "Ready to start your project?",
  subheading = "Get a free, no-pressure estimate. We'll walk your property and put together a clear plan.",
  primaryHref = "/contact",
  primaryLabel = "Get a Free Quote",
}: CtaSectionProps) {
  return (
    <section className="border-t border-forest/10 bg-forest/5 py-20 text-charcoal md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="font-serif text-3xl font-semibold text-forest md:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-charcoal/80 md:text-lg">
          {subheading}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-xl bg-forest px-8 py-3.5 text-center text-sm font-semibold text-cream shadow-md transition-all duration-200 hover:bg-forest-dark hover:shadow-lg"
          >
            {primaryLabel}
          </Link>
          <a
            href={SITE.phone.href}
            className="inline-flex items-center justify-center rounded-xl border-2 border-forest bg-transparent px-8 py-3.5 text-center text-sm font-semibold text-forest transition-all duration-200 hover:bg-forest hover:text-cream"
          >
            Call {SITE.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
