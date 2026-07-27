import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LocalBusinessJsonLd } from "@/components/local-business-jsonld";
import { SiteSchemaJsonLd } from "@/components/site-schema-jsonld";
import { SITE } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700"],
});

const defaultTitle =
  "Bernal Landscape Management | Landscaper in Grand Rapids, MI";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: defaultTitle,
    template: "%s | Bernal Landscape Management",
  },
  description: SITE.description,
  openGraph: {
    title: defaultTitle,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE.url}/gallery/20250411_172500.jpg`,
        width: 4000,
        height: 3000,
        alt: "Bernal Landscape Management completed project in Grand Rapids, MI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
        <LocalBusinessJsonLd />
        <SiteSchemaJsonLd />
      </body>
    </html>
  );
}
