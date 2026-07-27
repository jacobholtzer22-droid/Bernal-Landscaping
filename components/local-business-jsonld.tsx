import { SITE } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: SITE.name,
    image: `${SITE.url}/gallery/20250411_172500.jpg`,
    "@id": `${SITE.url}/#business`,
    url: SITE.url,
    telephone: SITE.phone.e164,
    email: SITE.email.display,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.locality,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postal,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    openingHoursSpecification: SITE.hours.structured.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: spec.days,
      opens: spec.opens,
      closes: spec.closes,
    })),
    sameAs: [
      SITE.socials.facebook,
      SITE.socials.instagram,
      SITE.socials.yelp,
      SITE.socials.google,
    ],
    areaServed: [
      "Grand Rapids, MI",
      "Wyoming, MI",
      "Kentwood, MI",
      "Walker, MI",
      "Grandville, MI",
      "Byron Center, MI",
      "Caledonia, MI",
      "Cutlerville, MI",
      "Forest Hills, MI",
      "Ada, MI",
      "Cascade, MI",
      "Hudsonville, MI",
      "Jenison, MI",
      "Comstock Park, MI",
      "Rockford, MI",
      "Allendale, MI",
      "East Grand Rapids, MI",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
