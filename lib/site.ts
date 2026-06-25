export const SITE = {
  name: "Bernal Landscape Management, LLC",
  shortName: "Bernal Landscape",
  tagline:
    "Family Owned & Operated · Over a Decade of Experience · Fully Insured",
  description:
    "Family-owned landscape design, hardscaping, and property care serving Grand Rapids and West Michigan for over a decade.",
  url: "https://bernallandscape.com",
  phone: {
    display: "616-477-1221",
    href: "tel:6164771221",
  },
  email: {
    display: "salvador@bernallandscape.com",
    href: "mailto:salvador@bernallandscape.com",
  },
  address: {
    street: "18 36th St SW Suite C",
    locality: "Wyoming",
    region: "MI",
    postal: "49548",
    country: "US",
    full: "18 36th St SW Suite C, Wyoming, MI 49548",
  },
  geo: {
    latitude: 42.8733,
    longitude: -85.6921,
  },
  hours: {
    display: "Mon–Sat 6:00 AM – 6:00 PM · Sunday Closed",
    structured: [
      {
        days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "06:00",
        closes: "18:00",
      },
    ],
  },
  socials: {
    facebook: "https://facebook.com/bernallandscape/",
    instagram: "https://instagram.com/bernallandscape/",
    yelp: "https://yelp.com/biz/bernal-landscape-management-wyoming",
    google: "https://www.google.com/maps/place/Bernal+Landscape+Management,+LLC",
  },
  paymentUrl:
    "https://checkout.square.site/merchant/HXTQ8JP56DGP6/checkout/77PXFDMBM65DFI6QLILU6EAL?src=sms",
  bbb: { accredited: true, rating: "A+" },
  founded: 2010,
} as const;

export const SERVICE_AREAS = [
  "Grand Rapids",
  "Wyoming",
  "Kentwood",
  "Walker",
  "Grandville",
  "Byron Center",
  "Caledonia",
  "Cutlerville",
  "Forest Hills",
  "Ada",
  "Cascade",
  "Hudsonville",
  "Jenison",
  "Comstock Park",
  "Rockford",
  "Allendale",
  "East Grand Rapids",
] as const;

export const PRIMARY_NAV: ReadonlyArray<
  | { label: string; href: string; type: "route" }
  | { label: string; href: string; type: "external" }
  | { label: string; type: "dropdown"; href: string }
> = [
  { label: "Home", href: "/", type: "route" },
  { label: "Services", href: "/services", type: "dropdown" },
  { label: "About", href: "/about", type: "route" },
  { label: "Reviews", href: "/reviews", type: "route" },
  { label: "Gallery", href: "/gallery", type: "route" },
  { label: "Service Areas", href: "/service-areas", type: "route" },
  { label: "Pay Now", href: SITE.paymentUrl, type: "external" },
  { label: "Contact", href: "/contact", type: "route" },
];
