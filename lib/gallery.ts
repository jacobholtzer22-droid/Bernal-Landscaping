export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/**
 * Gallery dataset.
 *
 * TODO: To swap in real photos:
 *   1. Drop image files into `public/gallery/` (e.g. `public/gallery/photo-1.jpg`).
 *   2. Replace the `src` values below with `/gallery/photo-1.jpg`, `/gallery/photo-2.jpg`, etc.
 *   3. Update the `alt` text on each image to describe the actual project.
 *   4. (Optional) Update `width` / `height` to match the source image's true dimensions
 *      so Next/Image lays out without shift.
 *
 * The CDN URLs below are the same images already used on the homepage and
 * are safe to leave in place until real photos are provided.
 */
export const GALLERY: GalleryImage[] = [
  {
    src: "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/d1fbab65-4657-4892-ad3b-83905e98f917-1172w.jpg",
    alt: "Completed landscape installation in Grand Rapids",
    width: 1172,
    height: 780,
  },
  {
    src: "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/c7fcf598-eef4-4444-8308-21bc5362446f-1172w.jpg",
    alt: "Hardscape and retaining wall project",
    width: 1172,
    height: 780,
  },
  {
    src: "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/ca8ba884-3ad1-4793-b32e-aef60fbf4ce6-1172w.jpg",
    alt: "Paver patio installation",
    width: 1172,
    height: 780,
  },
  {
    src: "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/088393d1-007a-4391-8764-71054e160cbd-1172w.jpg",
    alt: "Manicured lawn and bed work",
    width: 1172,
    height: 780,
  },
  {
    src: "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/b9fabc0f-9f68-42bb-983a-53a8a00ed921-1172w.jpg",
    alt: "Front-yard landscape design",
    width: 1172,
    height: 780,
  },
  {
    src: "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/aba410dc-df4c-4998-8d24-e7244e1f43e9-1172w.jpg",
    alt: "Detail shot of finished hardscape",
    width: 1172,
    height: 780,
  },
  {
    src: "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/08812026-40ab-4c0f-a84d-e04061a1c50b-1172w.jpg",
    alt: "Completed residential landscape project",
    width: 1172,
    height: 780,
  },
  {
    src: "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/5-1172w.jpg",
    alt: "Sod and lawn install",
    width: 1172,
    height: 780,
  },
  {
    src: "https://lirp.cdn-website.com/43e7349b/dms3rep/multi/opt/1-1172w.jpg",
    alt: "Mulched beds and finished landscape",
    width: 1172,
    height: 780,
  },
];

export const TESTIMONIALS = [
  {
    name: "Dawn L.",
    quote:
      "Stayed on time and in budget, did quality work, and used quality materials. Very professional. Will use them again when we need more landscape retaining walls.",
  },
  {
    name: "Jamal A.",
    quote:
      "Bernal Landscaping did a great job on my lawn last summer. They also kept my sidewalks and driveways clear whenever it snowed. I'll never use another landscaping company again — they exceeded all my expectations.",
  },
  {
    name: "Dante M.",
    quote:
      "Very professional, great communication, and always willing to do the work as expected. Will be doing business in the upcoming season. Thank you for the good work.",
  },
  {
    name: "Ethan W.",
    quote:
      "We used this service for landscaping in our yard. We had new gardens cut out and river rock and mulch spread. They did an awesome job. I highly recommend this company.",
  },
] as const;
