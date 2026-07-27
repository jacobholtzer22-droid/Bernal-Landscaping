import { SITE } from "@/lib/site";

export function SiteSchemaJsonLd() {
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      name: SITE.name,
      url: SITE.url,
      publisher: { "@id": `${SITE.url}/#business` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      logo: `${SITE.url}/bernal-logo.png`,
      telephone: SITE.phone.e164,
      email: SITE.email.display,
      foundingDate: "2010",
      sameAs: [
        SITE.socials.facebook,
        SITE.socials.instagram,
        SITE.socials.yelp,
        SITE.socials.google,
      ],
    },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
