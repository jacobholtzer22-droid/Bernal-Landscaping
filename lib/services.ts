import type { LucideIcon } from "lucide-react";
import {
  Axe,
  BrickWall,
  Droplets,
  Flower2,
  Layers,
  LayoutGrid,
  Leaf,
  Palette,
  Snowflake,
  Sprout,
  SquareStack,
  TreeDeciduous,
  Waves,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  intro: string[];
  bullets: string[];
  whyChoose: string[];
  Icon: LucideIcon;
  heroImage: string;
  faq?: { question: string; answer: string }[];
};

// Hero photos are real Bernal Landscape project photos in /public/gallery/.
const HERO_LANDSCAPE = "/gallery/20250411_172500.jpg";
const HERO_HARDSCAPE = "/gallery/20250411_172601.jpg";
const HERO_PATIO = "/gallery/20250411_172838.jpg";
const HERO_LAWN = "/gallery/FB_IMG_1758730003165.jpg";
const HERO_DETAIL = "/gallery/20250411_172615.jpg";
const HERO_PROJECT = "/gallery/20250411_172928.jpg";
const HERO_SOD = "/gallery/FB_IMG_1758729997354.jpg";
const HERO_TREE = "/gallery/FB_IMG_1771690358929.jpg";
const HERO_TREE_REMOVAL = "/gallery/FB_IMG_1758730009531.jpg";
const HERO_LEAVES = "/gallery/FB_IMG_1771690390552.jpg";
const HERO_DRAIN = "/gallery/FB_IMG_1771690408247.jpg";
const HERO_FRENCH = "/gallery/FB_IMG_1771944411767.jpg";
const HERO_MULCH = "/gallery/FB_IMG_1754343316006.jpg";

export const SERVICES: Service[] = [
  {
    slug: "landscape-design-and-installation",
    title: "Landscape Design & Installation",
    shortTitle: "Landscape Design",
    tagline: "Cohesive, livable outdoor spaces designed for your property.",
    description:
      "Custom planting plans, grading, and finishes tailored to your property and lifestyle.",
    intro: [
      "A great Grand Rapids landscape begins with a plan. Our designers walk your property, listen to how you actually use the space, and translate that into a layout that feels intentional from the curb to the back fence — beds, trees, hardscape, lighting, and turf working together.",
      "Once the design is approved, our installation crews handle every step: site prep, soil amendment, plant sourcing, edging, mulching, and clean-up. Because we self-perform the work, the design you signed off on is the design you get — installed to last through Michigan's freeze-thaw cycles.",
      "Whether you're starting with a blank lot in Cascade or refreshing a tired front yard in Wyoming, we scale the project to your goals and budget without cutting corners on the materials that matter.",
    ],
    bullets: [
      "On-site design consultation and concept plans",
      "Native and ornamental plant selection for West Michigan",
      "Soil prep, grading, and bed shaping",
      "Tree, shrub, and perennial installation",
      "Edging, mulching, and finish work",
      "Seasonal maintenance plans to protect your investment",
    ],
    whyChoose: [
      "Designed and installed by the same team — no handoffs",
      "Plant selections proven to thrive in zone 5/6 Michigan",
      "Transparent estimates with no surprise upcharges",
    ],
    Icon: Palette,
    heroImage: HERO_LANDSCAPE,
  },
  {
    slug: "retaining-wall-construction",
    title: "Retaining Wall Construction",
    shortTitle: "Retaining Walls",
    tagline: "Structural walls engineered to hold for decades.",
    description:
      "Engineered retaining walls built for durability, drainage, and clean curb appeal.",
    intro: [
      "A retaining wall is a structural element first and a landscape feature second. Built incorrectly, it leans, bows, or fails after a few Michigan winters. Our crews build to the underlying engineering: properly compacted base, the right gravel envelope, geo-grid where it's needed, and weep drainage that actually works.",
      "We work in segmental block, natural stone, and poured concrete depending on the look and load. Whether you need a low garden border in East Grand Rapids or a tiered hillside system in Ada, we size the wall for the soil and water it actually has to hold back.",
      "Every wall we install is built to manufacturer specifications and finished with clean caps, edging, and grading so it disappears into the landscape — until you need it to do its job.",
    ],
    bullets: [
      "Segmental block, natural stone, and boulder walls",
      "Tiered and curved layouts for sloped lots",
      "Engineered base prep with proper compaction",
      "Drainage systems behind every wall",
      "Geo-grid reinforcement on tall installations",
      "Step-out caps, lighting, and finished grading",
    ],
    whyChoose: [
      "Built to manufacturer specs — not eyeballed",
      "Drainage designed in, not bolted on",
      "Materials sourced from top suppliers with warranties",
    ],
    Icon: BrickWall,
    heroImage: HERO_HARDSCAPE,
  },
  {
    slug: "concrete-construction",
    title: "Concrete Construction",
    shortTitle: "Concrete",
    tagline: "Driveways, walks, and flatwork poured to last.",
    description:
      "Concrete driveways, walkways, and flatwork finished to stand up to Michigan weather.",
    intro: [
      "Concrete is one of those things you only want to do once. We pour driveways, walks, slabs, and steps with the prep work that decides whether a slab cracks in three winters or holds clean for thirty: graded base, proper sub-base depth, rebar or fiber reinforcement, and control joints in the right places.",
      "Our finish work — broom, smooth, or exposed aggregate — is done by hand, with a crew that's been pouring concrete in West Michigan for years. We seal where it makes sense and stage the project so your driveway in Kentwood or Grandville is back in service as soon as the cure allows.",
      "Tear-outs, replacements, and new pours all welcome. We'll tell you up front what your existing slab actually needs.",
    ],
    bullets: [
      "Driveways, walkways, and patio slabs",
      "Steps, stoops, and landings",
      "Tear-out and removal of failing concrete",
      "Reinforcement, control joints, and proper curing",
      "Broom, smooth, or exposed aggregate finishes",
      "Sealing and concrete repair",
    ],
    whyChoose: [
      "Properly prepared base — not just a thick pour",
      "Honest assessments on repair vs. replace",
      "Clean job sites and predictable schedules",
    ],
    Icon: SquareStack,
    heroImage: HERO_DETAIL,
  },
  {
    slug: "paver-patio-installation",
    title: "Paver Patio Installation",
    shortTitle: "Paver Patios",
    tagline: "Outdoor living spaces built on a base that lasts.",
    description:
      "Custom paver patios that extend your living space outdoors with precision installation.",
    intro: [
      "A paver patio is only as good as the base under it. We dig deep, compact in lifts, and use the right blend of crushed stone and bedding sand so your patio doesn't settle, heave, or wash out. Polymeric sand seals the joints and keeps weeds and ants out.",
      "We design patios that fit how you actually live outside — a dining zone, a fire pit area, a clean path to the back door. Borders, soldier courses, and built-in features like seat walls and steps tie the space together.",
      "Whether you're in Forest Hills, Caledonia, or right here in Wyoming, we'll lay out the patio on-site so you can walk it before we cut a single paver.",
    ],
    bullets: [
      "Custom layouts and on-site design walk-throughs",
      "Excavated, compacted base for long-term stability",
      "Polymeric jointing sand for weed and ant resistance",
      "Borders, soldier courses, and pattern detailing",
      "Integrated seat walls, fire pits, and steps",
      "Premium pavers from leading manufacturers",
    ],
    whyChoose: [
      "Engineered base depth for Michigan freeze-thaw",
      "Manufacturer warranties on premium pavers",
      "On-site layout before installation begins",
    ],
    Icon: LayoutGrid,
    heroImage: HERO_PATIO,
  },
  {
    slug: "lawn-maintenance",
    title: "Lawn Maintenance",
    shortTitle: "Lawn Care",
    tagline: "A lawn that's ready every time you pull in.",
    description:
      "Seasonal mowing, edging, and turf care that keeps your lawn healthy and presentation-ready.",
    intro: [
      "Healthy turf in West Michigan takes more than mowing. We mow at the right height for the season, edge clean lines along walks and beds, blow off the hardscape, and haul clippings when they need it — week after week, on a schedule you can count on.",
      "Beyond mowing, we handle the full season of lawn care: spring clean-ups, fertilization, weed control, aeration, and overseeding. The result is a thicker, greener lawn that resists weeds and weathers Michigan summers without going dormant patchy.",
      "We work with homeowners and property managers across Grand Rapids, Wyoming, Jenison, and the surrounding area. Recurring service contracts available.",
    ],
    bullets: [
      "Weekly and bi-weekly mowing programs",
      "Edging along walks, beds, and driveways",
      "Spring and fall clean-ups",
      "Fertilization and weed control",
      "Core aeration and overseeding",
      "Property manager and HOA programs",
    ],
    whyChoose: [
      "Same crew on your property each visit",
      "Sharp blades and proper mowing heights",
      "Reliable schedule, all season",
    ],
    Icon: Sprout,
    heroImage: HERO_LAWN,
  },
  {
    slug: "snow-plowing-and-shoveling",
    title: "Snow Plowing & Shoveling",
    shortTitle: "Snow Removal",
    tagline: "Reliable winter clearing when you need it most.",
    description:
      "Driveways, walks, and commercial lots cleared before the day starts.",
    intro: [
      "Lake-effect snow doesn't wait. Our winter crews are dispatched on a trigger so your driveway, walks, and entries are clear before you have to leave the house. We service residential drives across Wyoming, Kentwood, and Grand Rapids, plus commercial lots that need to be open by 7 AM.",
      "We plow drives, shovel walks and stoops, and apply ice melt where slip risk is highest. Routes are tracked, so we know which properties are done and which are next — no more wondering if anyone is coming.",
      "Seasonal contracts and per-event service available. Sign up before the first storm to lock in priority routing.",
    ],
    bullets: [
      "Residential driveway plowing",
      "Walks, stoops, and entry shoveling",
      "Commercial lot plowing and salting",
      "Ice melt application on high-risk surfaces",
      "Trigger-based dispatch (no waiting for a call)",
      "Seasonal contracts and per-event pricing",
    ],
    whyChoose: [
      "Routes dispatched on snowfall triggers",
      "Walks and stoops shoveled — not just plowed",
      "Commercial-grade equipment, insured operators",
    ],
    Icon: Snowflake,
    heroImage: HERO_PROJECT,
  },
  {
    slug: "sod-installation",
    title: "Sod Installation",
    shortTitle: "Sod",
    tagline: "Instant lawn, properly rooted.",
    description:
      "Fresh sod laid and rolled for even establishment and an instant, lush green lawn.",
    intro: [
      "Sod gives you a finished lawn the day it's installed — but only if it's installed right. We strip the existing turf or prep bare ground, amend the soil, level it, and lay fresh-cut sod tight with staggered seams. Then we roll it for full root contact and walk you through the watering schedule that gets it established.",
      "We source sod from local Michigan growers so it's acclimated to the climate and arrives fresh. Whether you're finishing a new construction yard in Hudsonville or repairing a damaged lawn in Comstock Park, we'll get you to a usable green lawn fast.",
      "Pair sod installation with our irrigation and lawn-care programs and we'll keep it looking that way.",
    ],
    bullets: [
      "Removal of existing turf or weeds",
      "Soil testing, grading, and amendment",
      "Locally grown, fresh-cut sod",
      "Tight seams and rolled installation",
      "Watering schedule and care instructions",
      "Repair patches and full lawn replacement",
    ],
    whyChoose: [
      "Locally grown sod, climate-acclimated",
      "Soil prep that gives sod a chance to root",
      "Clear watering and care instructions after install",
    ],
    Icon: Layers,
    heroImage: HERO_SOD,
  },
  {
    slug: "tree-service",
    title: "Tree Service",
    shortTitle: "Tree Service",
    tagline: "Pruning and tree care that respects the tree.",
    description:
      "Pruning and canopy work performed with attention to tree health and property safety.",
    intro: [
      "Healthy trees raise property values and shade your home for decades. Bad pruning ruins them. Our team prunes for structure and health — deadwooding, crown thinning, raising canopies for clearance — using cuts that heal cleanly instead of inviting decay.",
      "We work safely around homes and power lines with proper rigging, and we haul everything off when we're done. If you've got an oak in East Grand Rapids that hasn't been touched in years or a row of arborvitae that needs reshaping in Allendale, we can help.",
      "Free on-site assessments. We'll tell you what the tree actually needs, not what's easiest to sell.",
    ],
    bullets: [
      "Structural pruning and deadwooding",
      "Crown thinning and canopy raising",
      "Storm damage assessment and clean-up",
      "Shrub and ornamental shaping",
      "Cabling and bracing for at-risk limbs",
      "Full debris haul-off",
    ],
    whyChoose: [
      "Cuts made for tree health, not just appearance",
      "Insured climbers and proper rigging",
      "Honest assessment — prune, treat, or remove",
    ],
    Icon: TreeDeciduous,
    heroImage: HERO_TREE,
  },
  {
    slug: "tree-removal",
    title: "Tree Removal",
    shortTitle: "Tree Removal",
    tagline: "Safe takedowns, even in tight spaces.",
    description:
      "Safe takedown and debris removal — including tight spaces and storm-damaged trees.",
    intro: [
      "Sometimes a tree is past saving — dead, diseased, leaning toward the house, or simply the wrong tree in the wrong spot. We remove it safely, with rigging when there's no clean drop zone, and clean up so thoroughly you'll wonder where it went.",
      "Stump grinding is available as part of the same job, or we can leave the stump if you'd prefer. We work alongside your insurance company on storm-damage claims and can usually get out within days for emergency situations.",
      "Serving Grand Rapids, Wyoming, Cascade, Rockford, and the surrounding West Michigan area.",
    ],
    bullets: [
      "Full tree removal, including hazard trees",
      "Storm damage and emergency response",
      "Tight-space rigging when drop zones are limited",
      "Stump grinding (optional add-on)",
      "Complete debris haul-off",
      "Coordination with insurance claims",
    ],
    whyChoose: [
      "Insured for residential and commercial takedowns",
      "Rigging experience for trees over structures",
      "Stump grinding and clean-up included on request",
    ],
    Icon: Axe,
    heroImage: HERO_TREE_REMOVAL,
  },
  {
    slug: "leaf-cleanup",
    title: "Leaf Cleanup",
    shortTitle: "Leaf Cleanup",
    tagline: "A clean yard before the snow flies.",
    description:
      "Thorough seasonal leaf removal so beds and turf stay neat and ready for spring.",
    intro: [
      "Wet leaves left on the lawn smother turf, breed disease, and leave you with a patchy yard come spring. Our fall clean-up crews blow, vacuum, and haul leaves off — beds, lawn, walkways, and the corners that wind always finds.",
      "We schedule clean-ups in waves through the fall so your property looks good all season, not just at the end. One-time clean-ups are also welcome.",
      "Available across Grand Rapids, Kentwood, Forest Hills, Cascade, and surrounding cities.",
    ],
    bullets: [
      "Full-property leaf collection and removal",
      "Bed and corner clean-out",
      "Multi-visit fall programs",
      "One-time end-of-season clean-ups",
      "Gutter debris removal (add-on)",
      "Hauling included — leaves are taken off-site",
    ],
    whyChoose: [
      "Multi-visit options keep the property clean all fall",
      "Beds and corners cleaned, not just the lawn",
      "Hauled off-site so nothing blows back",
    ],
    Icon: Leaf,
    heroImage: HERO_LEAVES,
  },
  {
    slug: "yard-drain-installation",
    title: "Yard Drain Installation",
    shortTitle: "Yard Drains",
    tagline: "Move water away from where it shouldn't be.",
    description:
      "Surface and subsurface drainage solutions that move water away from your foundation.",
    intro: [
      "Standing water in the yard means water against the foundation, dead grass, and mosquitoes you can't get rid of. We diagnose where the water is actually coming from and design drainage that moves it somewhere it can't cause damage.",
      "Yard drains, catch basins, downspout extensions, and pop-up emitters are all part of the toolkit. We trench, lay rigid pipe (not flimsy corrugated where it matters), and tie it into a discharge point that won't back up.",
      "Common in West Michigan because of our clay soils — and we install them right.",
    ],
    bullets: [
      "Catch basins and surface drains",
      "Downspout extensions and tie-ins",
      "Rigid SDR pipe (not just corrugated)",
      "Pop-up emitters at discharge points",
      "Re-grading to direct surface flow",
      "Seamless lawn restoration after install",
    ],
    whyChoose: [
      "Diagnose first, dig second",
      "Rigid pipe where it counts",
      "Lawn restored after every install",
    ],
    Icon: Droplets,
    heroImage: HERO_DRAIN,
  },
  {
    slug: "french-drains",
    title: "French Drains",
    shortTitle: "French Drains",
    tagline: "Subsurface drainage that handles groundwater right.",
    description:
      "Perforated systems and stone envelopes designed to capture and redirect groundwater.",
    intro: [
      "A French drain is a perforated pipe in a stone envelope that pulls subsurface water away from a problem area — wet basements, soggy yards, slopes that won't dry out. Done right, it's invisible and works for decades. Done wrong, it's a clogged trench full of mud.",
      "We use clean washed stone, filter fabric, and the right pipe slope so your French drain actually drains. We tie it into a daylight discharge or sump point that can handle the volume.",
      "If you're seeing water in the basement during heavy rains in Grand Rapids, we'll evaluate whether a perimeter French drain is the right fix.",
    ],
    bullets: [
      "Perimeter and yard-style French drains",
      "Filter fabric and washed stone envelopes",
      "Proper pipe slope and discharge planning",
      "Tie-ins to sump systems where needed",
      "Hand and machine excavation",
      "Clean restoration of turf and beds",
    ],
    whyChoose: [
      "Clean washed stone — no fines that clog",
      "Slope and discharge engineered, not guessed",
      "Long-term performance, not a quick patch",
    ],
    Icon: Waves,
    heroImage: HERO_FRENCH,
  },
  {
    slug: "mulching",
    title: "Mulching",
    shortTitle: "Mulching",
    tagline: "Beds that look sharp and stay healthy.",
    description:
      "Premium mulch installed for moisture retention, weed suppression, and polished beds.",
    intro: [
      "Fresh mulch transforms a property in an afternoon — but the prep matters as much as the mulch. We pull weeds, edge clean lines, and lay mulch at the right depth so it suppresses weeds without smothering plants.",
      "We offer hardwood, dyed, and premium bark mulches in a range of colors. Beds across Cascade, Grandville, Hudsonville, and Byron Center get a clean spring refresh and stay looking good through summer.",
      "Spring and fall mulching available as one-time service or part of a full lawn-care program.",
    ],
    bullets: [
      "Bed edging and weed pulling before install",
      "Hardwood, dyed, and premium mulch options",
      "Proper mulch depth (no volcano mulching)",
      "Color refresh for existing beds",
      "Spring and fall service options",
      "Tree ring and island bed installs",
    ],
    whyChoose: [
      "Beds prepped before mulch goes down",
      "Premium mulch that holds color longer",
      "No mulch volcanoes — installed at proper depth",
    ],
    Icon: Flower2,
    heroImage: HERO_MULCH,
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
) as Record<string, Service>;
