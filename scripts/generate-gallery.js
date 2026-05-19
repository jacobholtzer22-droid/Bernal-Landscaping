#!/usr/bin/env node
/* eslint-disable */
// One-off generator for lib/gallery.ts based on photos in public/gallery/.
// Reads /tmp/gallery_dims_clean.txt (filename, width, height).

const fs = require("fs");
const path = require("path");

const dimsTxt = fs.readFileSync("/tmp/gallery_dims_clean.txt", "utf8");
const items = dimsTxt
  .trim()
  .split("\n")
  .map((line) => {
    const parts = line.split(/\s+/);
    const width = parseInt(parts[parts.length - 2], 10);
    const height = parseInt(parts[parts.length - 1], 10);
    const file = parts.slice(0, parts.length - 2).join(" ");
    return { file, width, height };
  })
  .filter((p) => p.width && p.height);

// Sort: largest first (by area), then by filename for stability.
items.sort((a, b) => b.width * b.height - a.width * a.height || a.file.localeCompare(b.file));

// Generic, professional alt text rotated by index.
const ALT_TEMPLATES = [
  "Finished Bernal Landscape project in West Michigan",
  "Custom landscape installation by Bernal Landscape Management",
  "Hardscape and stone work completed by Bernal Landscape",
  "Paver patio installation in Grand Rapids, MI",
  "Retaining wall built by Bernal Landscape Management",
  "Manicured lawn maintained by Bernal Landscape",
  "Landscape design and bed work in West Michigan",
  "Mulch refresh and finished landscape by Bernal Landscape",
  "Sod installation completed by Bernal Landscape",
  "Driveway and concrete flatwork by Bernal Landscape",
  "Tree and shrub care by Bernal Landscape Management",
  "Outdoor living space installed by Bernal Landscape",
  "Drainage and yard grading by Bernal Landscape",
  "Front-yard landscape refresh by Bernal Landscape",
  "Backyard transformation by Bernal Landscape Management",
];

const gallery = items.map((p, i) => ({
  src: `/gallery/${p.file}`,
  alt: ALT_TEMPLATES[i % ALT_TEMPLATES.length],
  width: p.width,
  height: p.height,
}));

// Identify top "hero-worthy" landscape photos: large + landscape orientation.
const heroLandscape = items.filter((p) => p.width >= p.height && p.width >= 1200).slice(0, 12);
const heroSquare = items.filter((p) => p.width === p.height && p.width >= 1200);
const heroPortrait = items.filter((p) => p.height > p.width && p.height >= 1200);

const ts = [
  `// AUTO-GENERATED partly from public/gallery/. See scripts/generate-gallery.js`,
  `// to regenerate after adding new photos.`,
  ``,
  `export type GalleryImage = {`,
  `  src: string;`,
  `  alt: string;`,
  `  width: number;`,
  `  height: number;`,
  `};`,
  ``,
  `export const GALLERY: GalleryImage[] = [`,
  ...gallery.map(
    (g) =>
      `  { src: ${JSON.stringify(g.src)}, alt: ${JSON.stringify(g.alt)}, width: ${g.width}, height: ${g.height} },`,
  ),
  `];`,
  ``,
  `// Featured photos curated for hero/section use elsewhere on the site.`,
  `export const FEATURED = {`,
  `  hero: ${JSON.stringify("/gallery/" + heroLandscape[0].file)},`,
  `  about: ${JSON.stringify("/gallery/" + heroLandscape[1].file)},`,
  `  servicesIndex: ${JSON.stringify("/gallery/" + heroLandscape[2].file)},`,
  `  gallery: ${JSON.stringify("/gallery/" + heroLandscape[3].file)},`,
  `  contact: ${JSON.stringify("/gallery/" + heroLandscape[4].file)},`,
  `  reviews: ${JSON.stringify("/gallery/" + (heroSquare[0]?.file || heroLandscape[5].file))},`,
  `  serviceAreas: ${JSON.stringify("/gallery/" + (heroSquare[1]?.file || heroLandscape[6].file))},`,
  `} as const;`,
  ``,
  `// A small set of "best" highlight photos for use on the home page.`,
  `export const HOME_HIGHLIGHTS: GalleryImage[] = [`,
  ...heroLandscape
    .slice(0, 9)
    .map(
      (p, i) =>
        `  { src: ${JSON.stringify("/gallery/" + p.file)}, alt: ${JSON.stringify(ALT_TEMPLATES[i % ALT_TEMPLATES.length])}, width: ${p.width}, height: ${p.height} },`,
    ),
  `];`,
  ``,
  `// Bigger "featured" set for showcase grids (about, services index, etc.).`,
  `export const FEATURED_GRID: GalleryImage[] = GALLERY.slice(0, 24);`,
  ``,
  `/**`,
  ` * Deterministically pick N photos from the gallery for a given key (e.g. a`,
  ` * service slug). The same key always returns the same slice, so the per-`,
  ` * service "Recent Work" section stays consistent between renders.`,
  ` */`,
  `export function pickGallery(seed: string, count = 8): GalleryImage[] {`,
  `  let hash = 0;`,
  `  for (let i = 0; i < seed.length; i++) hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;`,
  `  const start = hash % Math.max(1, GALLERY.length - count);`,
  `  return GALLERY.slice(start, start + count);`,
  `}`,
  ``,
  `export const TESTIMONIALS = [`,
  `  {`,
  `    name: "Dawn L.",`,
  `    quote:`,
  `      "Stayed on time and in budget, did quality work, and used quality materials. Very professional. Will use them again when we need more landscape retaining walls.",`,
  `  },`,
  `  {`,
  `    name: "Jamal A.",`,
  `    quote:`,
  `      "Bernal Landscaping did a great job on my lawn last summer. They also kept my sidewalks and driveways clear whenever it snowed. I'll never use another landscaping company again — they exceeded all my expectations.",`,
  `  },`,
  `  {`,
  `    name: "Dante M.",`,
  `    quote:`,
  `      "Very professional, great communication, and always willing to do the work as expected. Will be doing business in the upcoming season. Thank you for the good work.",`,
  `  },`,
  `  {`,
  `    name: "Ethan W.",`,
  `    quote:`,
  `      "We used this service for landscaping in our yard. We had new gardens cut out and river rock and mulch spread. They did an awesome job. I highly recommend this company.",`,
  `  },`,
  `] as const;`,
  ``,
].join("\n");

fs.mkdirSync("lib", { recursive: true });
fs.writeFileSync("lib/gallery.ts", ts);
console.log(`Wrote lib/gallery.ts with ${gallery.length} photos.`);
console.log(`Hero landscape candidates: ${heroLandscape.length}`);
console.log(`Hero square candidates: ${heroSquare.length}`);
console.log(`Hero portrait candidates: ${heroPortrait.length}`);
