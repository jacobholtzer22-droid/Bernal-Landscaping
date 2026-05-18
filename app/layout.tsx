import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { LocalBusinessJsonLd } from "@/components/local-business-jsonld";
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
  "Bernal Landscape Management, LLC — Top Rated Landscaper — Grand Rapids, Michigan";

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
        url: "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/d1fbab65-4657-4892-ad3b-83905e98f917-1172w.jpg",
        width: 1172,
        height: 780,
        alt: "Bernal Landscape project",
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
      </body>
    </html>
  );
}
