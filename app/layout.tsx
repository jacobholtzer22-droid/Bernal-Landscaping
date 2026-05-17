import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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

const siteUrl = "https://bernallandscape.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Bernal Landscape Management, LLC — Top Rated Landscaper — Grand Rapids, Michigan",
  description:
    "Family-owned landscape design, hardscaping, and property care serving Grand Rapids for over 15 years.",
  openGraph: {
    title:
      "Bernal Landscape Management, LLC — Top Rated Landscaper — Grand Rapids, Michigan",
    description:
      "Family-owned landscape design, hardscaping, and property care serving Grand Rapids for over 15 years.",
    url: siteUrl,
    siteName: "Bernal Landscape Management, LLC",
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
    title:
      "Bernal Landscape Management, LLC — Top Rated Landscaper — Grand Rapids, Michigan",
    description:
      "Family-owned landscape design, hardscaping, and property care serving Grand Rapids for over 15 years.",
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
      </body>
    </html>
  );
}
