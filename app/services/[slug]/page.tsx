import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ServicePageTemplate } from "@/components/service-page-template";
import { SERVICES, SERVICE_BY_SLUG } from "@/lib/services";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Params;
}): Metadata {
  const service = SERVICE_BY_SLUG[params.slug];
  if (!service) return {};
  const title = `${service.title} in Grand Rapids, MI`;
  const description = service.description;
  const url = `${SITE.url}/services/${service.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Bernal Landscape`,
      description,
      url,
      type: "article",
      images: [
        {
          url: service.heroImage,
          width: 1172,
          height: 780,
          alt: `${service.title} project by Bernal Landscape`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Bernal Landscape`,
      description,
    },
  };
}

export default function ServiceDetailPage({ params }: { params: Params }) {
  const service = SERVICE_BY_SLUG[params.slug];
  if (!service) notFound();

  return (
    <>
      <SiteHeader />
      <main>
        <ServicePageTemplate service={service} />
      </main>
      <SiteFooter />
    </>
  );
}
