import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; href?: string };

type PageHeroProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  crumbs?: Crumb[];
};

export function PageHero({
  title,
  eyebrow,
  description,
  image,
  imageAlt,
  crumbs,
}: PageHeroProps) {
  return (
    <section
      className="relative isolate flex min-h-[55vh] items-end overflow-hidden md:min-h-[60vh]"
      aria-label={title}
    >
      <div className="absolute inset-0 -z-10">
        {image ? (
          <>
            <Image
              src={image}
              alt={imageAlt ?? ""}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/55 to-black/85"
              aria-hidden
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-forest" aria-hidden />
        )}
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-36 md:pb-20 md:pt-44">
        {crumbs && crumbs.length > 0 ? (
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-1 text-xs font-medium uppercase tracking-wider text-white/80"
          >
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`} className="flex items-center gap-1">
                {c.href ? (
                  <Link
                    href={c.href}
                    className="transition-colors hover:text-terracotta"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
                {i < crumbs.length - 1 ? (
                  <ChevronRight
                    className="h-3.5 w-3.5 text-white/60"
                    aria-hidden
                  />
                ) : null}
              </span>
            ))}
          </nav>
        ) : null}

        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-terracotta">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl font-serif text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
