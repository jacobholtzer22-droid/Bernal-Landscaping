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
  heroImageAlt: string;
  faq?: { question: string; answer: string }[];
};

// Hero photos are real Bernal Landscape project photos in /public/gallery/.
const HERO_LANDSCAPE = "/gallery/FB_IMG_1743117671590.jpg";
const HERO_HARDSCAPE = "/gallery/FB_IMG_1743853526770.jpg";
const HERO_PATIO = "/gallery/FB_IMG_1743117357646.jpg";
const HERO_LAWN = "/gallery/FB_IMG_1743118168178.jpg"; // Bernal crew mowing a striped lawn on a zero-turn mower
const HERO_DETAIL = "/gallery/FB_IMG_1743117455681.jpg"; // Poured concrete driveway / flatwork
const HERO_SOD = "/gallery/FB_IMG_1758729997354.jpg";
const HERO_TREE = "/gallery/FB_IMG_1576048912848.jpg"; // Worker in a boom lift pruning a tree canopy
const HERO_TREE_REMOVAL = "/gallery/FB_IMG_1743117175401.jpg"; // Aerial of a tree-removal job: cut log pile, skid-steer, crew trucks
const HERO_LEAVES = "/gallery/FB_IMG_1743117351300.jpg"; // TODO: replace with a dedicated leaf cleanup action photo from client
const HERO_DRAIN = "/gallery/FB_IMG_1749655041513.jpg";
const HERO_FRENCH = "/gallery/FB_IMG_1743117562825.jpg";
const HERO_MULCH = "/gallery/FB_IMG_1743117674708.jpg";
const HERO_SNOW = "/gallery/FB_IMG_1646188521681.jpg";

export const SERVICES: Service[] = [
  {
    slug: "landscape-design-and-installation",
    title: "Landscape Design & Installation",
    shortTitle: "Landscape Design",
    tagline: "Cohesive, livable outdoor spaces designed for your property.",
    description:
      "Custom landscape design and installation for Grand Rapids homes — planting plans, grading, and finishes tailored to your property and lifestyle.",
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
    heroImageAlt:
      "Paver staircase climbing a mulched landscape bed with boulders and bright black-eyed Susan flowers",
    faq: [
      { question: "What does a landscape design consultation with Bernal Landscape involve?", answer: "We start with an on-site consultation where our designers walk your property and listen to how you actually use the space. We then translate that into a layout covering beds, trees, hardscape, edging, mulching, and turf — designed to work together from the curb to the back fence." },
      { question: "Does the same team that designs the project also install it?", answer: "Yes. Because we self-perform the work, the design you approve is the design you get. There are no handoffs between separate design and install teams — the same crew handles every step from site prep to final clean-up." },
      { question: "What affects the cost of a landscape design project?", answer: "The main factors are project size, the amount of grading or site prep needed, plant selection, and whether hardscape elements are included. We provide transparent estimates with no surprise upcharges. Free on-site consultations are available for all projects." },
      { question: "What plants does Bernal Landscape use for West Michigan properties?", answer: "We select native and ornamental plants proven to thrive in USDA zones 5 and 6 — Michigan's climate zone. Plant sourcing is part of every design, and we include seasonal maintenance plans to protect your investment long-term." },
    ],
  },
  {
    slug: "retaining-wall-construction",
    title: "Retaining Wall Construction",
    shortTitle: "Retaining Walls",
    tagline: "Structural walls engineered to hold for decades.",
    description:
      "Engineered retaining walls for West Michigan yards — built for durability, drainage, and clean curb appeal.",
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
    heroImageAlt:
      "Tan block retaining wall with center stairs and a planting bed in a sodded West Michigan backyard",
    faq: [
      { question: "What types of retaining walls does Bernal Landscape build?", answer: "We build segmental block, natural stone, and boulder retaining walls. We also construct poured concrete walls depending on the load requirements and desired appearance. Tiered and curved layouts are available for sloped lots." },
      { question: "Does Bernal Landscape use geo-grid reinforcement?", answer: "Yes. On taller wall installations, we use geo-grid reinforcement as required by manufacturer specifications. Every wall includes proper compaction, a gravel envelope, and weep drainage." },
      { question: "Do your retaining walls include drainage?", answer: "Yes. Drainage is designed into every retaining wall we build — not added as an afterthought. Proper drainage behind the wall prevents hydrostatic pressure buildup that causes walls to lean or fail over Michigan winters." },
      { question: "What areas do you build retaining walls in?", answer: "We build retaining walls across West Michigan including Grand Rapids, East Grand Rapids, Ada, and all 17 cities in our service area. Free on-site estimates are available." },
    ],
  },
  {
    slug: "concrete-construction",
    title: "Concrete Construction",
    shortTitle: "Concrete",
    tagline: "Driveways, walks, and flatwork poured to last.",
    description:
      "Concrete driveways, walkways, and flatwork poured across Grand Rapids and finished to stand up to Michigan winters.",
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
    heroImageAlt:
      "Freshly poured smooth-finished concrete driveway running alongside a red-sided West Michigan home",
    faq: [
      { question: "What types of concrete work does Bernal Landscape do?", answer: "We pour driveways, walkways, patio slabs, steps, stoops, and landings. We also handle tear-out and removal of failing concrete, as well as concrete repair and sealing." },
      { question: "What concrete finishes are available?", answer: "We offer broom finish, smooth finish, and exposed aggregate. All finish work is done by hand by our experienced crew." },
      { question: "Does Bernal Landscape use reinforcement in concrete pours?", answer: "Yes. We use rebar or fiber reinforcement along with properly placed control joints. Every pour starts with a graded base and proper sub-base depth — the prep work that determines whether a slab lasts three winters or thirty." },
      { question: "Can you replace an old concrete driveway?", answer: "Yes. We handle tear-outs, replacements, and new pours. We will give you an honest assessment of whether your existing slab needs repair or full replacement." },
    ],
  },
  {
    slug: "paver-patio-installation",
    title: "Paver Patio Installation",
    shortTitle: "Paver Patios",
    tagline: "Outdoor living spaces built on a base that lasts.",
    description:
      "Custom paver patios for West Michigan backyards — outdoor living space installed with precision on a base built to last.",
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
    heroImageAlt:
      "Curving walkway of red and black paver squares set in pea gravel through a landscape bed",
    faq: [
      { question: "How do you prepare the base for a paver patio?", answer: "We excavate to the proper depth, compact the sub-base in lifts using the right blend of crushed stone, and lay bedding sand. Polymeric sand seals the joints to prevent weeds and ant intrusion. This base preparation is critical for long-term stability in Michigan's freeze-thaw climate." },
      { question: "Can you add a fire pit or seat wall to my paver patio?", answer: "Yes. We design and install integrated features including seat walls, fire pits, and steps as part of your paver patio project. Borders and soldier courses tie the space together." },
      { question: "Do you lay out the patio design before installation?", answer: "Yes. We lay out the patio on-site so you can walk the design before we cut a single paver. This ensures the layout fits how you actually use your outdoor space." },
      { question: "What areas do you install paver patios in?", answer: "We install paver patios across West Michigan including Forest Hills, Caledonia, Wyoming, Grand Rapids, and all 17 cities in our service area." },
    ],
  },
  {
    slug: "lawn-maintenance",
    title: "Lawn Maintenance",
    shortTitle: "Lawn Care",
    tagline: "A lawn that's ready every time you pull in.",
    description:
      "Seasonal mowing, edging, and turf care that keeps Grand Rapids lawns healthy and presentation-ready all season.",
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
    heroImageAlt:
      "Bernal Landscape crew member mowing a striped green lawn on a zero-turn mower",
    faq: [
      { question: "What does your lawn maintenance service include?", answer: "Our lawn care program includes weekly or bi-weekly mowing, edging along walks, beds, and driveways, spring and fall clean-ups, fertilization and weed control, core aeration, and overseeding." },
      { question: "Do you offer commercial lawn care?", answer: "Yes. We work with both homeowners and property managers. We offer property manager and HOA programs across Grand Rapids, Wyoming, Jenison, and the surrounding area." },
      { question: "Will the same crew maintain my property each visit?", answer: "Yes. You will see the same crew on your property each visit, maintaining consistent quality and familiarity with your property's specific needs." },
      { question: "Do you offer both weekly and bi-weekly mowing?", answer: "Yes. We offer both weekly and bi-weekly mowing programs along with seasonal services including spring clean-ups, fertilization, and fall clean-ups. Recurring service contracts are available." },
    ],
  },
  {
    slug: "snow-plowing-and-shoveling",
    title: "Snow Plowing & Shoveling",
    shortTitle: "Snow Removal",
    tagline: "Reliable winter clearing when you need it most.",
    description:
      "Driveways, walks, and commercial lots across the Grand Rapids area cleared before the day starts.",
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
    heroImage: HERO_SNOW,
    heroImageAlt:
      "Three Bernal plow trucks lined up at night on snowy pavement with plows lowered",
    faq: [
      { question: "When does Bernal Landscape dispatch snow plowing crews?", answer: "Our crews are dispatched on a trigger — meaning we are dispatched automatically based on snowfall, not waiting for you to call. We clear driveways, walks, and entries before you have to leave the house." },
      { question: "Do you offer both seasonal contracts and per-event snow removal?", answer: "Yes. We offer both seasonal contracts and per-event pricing. We recommend signing up before the first storm to lock in priority routing." },
      { question: "Does your snow removal include sidewalk shoveling?", answer: "Yes. We plow driveways and also shovel walks, stoops, and entries. Ice melt is applied to high-risk surfaces. Routes are tracked so we know which properties are done and which are next." },
    ],
  },
  {
    slug: "sod-installation",
    title: "Sod Installation",
    shortTitle: "Sod",
    tagline: "Instant lawn, properly rooted.",
    description:
      "Fresh, locally grown sod laid and rolled for an instant, lush green lawn anywhere in West Michigan.",
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
    heroImageAlt:
      "Backyard with freshly installed sod and a new horizontal-board wood privacy fence",
    faq: [
      { question: "Where does Bernal Landscape source its sod?", answer: "We source sod from local Michigan growers so it arrives fresh and is already acclimated to the West Michigan climate." },
      { question: "What preparation is done before sod is installed?", answer: "We strip existing turf or prep bare ground, amend the soil, grade and level the surface, then lay fresh-cut sod with tight staggered seams. Every install is rolled for full root contact, and we walk you through the watering schedule that gets it established." },
      { question: "Can you install sod on a new construction lot?", answer: "Yes. Whether you are finishing a new construction yard or repairing a damaged lawn, we handle full lawn replacement and repair patches across West Michigan." },
    ],
  },
  {
    slug: "tree-service",
    title: "Tree Service",
    shortTitle: "Tree Service",
    tagline: "Pruning and tree care that respects the tree.",
    description:
      "Pruning and canopy care for Grand Rapids properties, performed with attention to tree health and safety.",
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
    heroImageAlt:
      "Bernal Landscape worker in an articulated boom lift pruning the canopy of a tall tree",
    faq: [
      { question: "What types of tree pruning does Bernal Landscape offer?", answer: "We offer structural pruning, deadwooding, crown thinning, and canopy raising for clearance. We also handle shrub and ornamental shaping, and cabling and bracing for at-risk limbs." },
      { question: "Is your tree service team insured?", answer: "Yes. Our climbers are insured and use proper rigging to work safely around homes and power lines. All debris is hauled off when the job is done." },
      { question: "Do you offer free tree assessments?", answer: "Yes. We provide free on-site assessments and will tell you honestly what the tree actually needs — whether that is pruning, treatment, or removal." },
    ],
  },
  {
    slug: "tree-removal",
    title: "Tree Removal",
    shortTitle: "Tree Removal",
    tagline: "Safe takedowns, even in tight spaces.",
    description:
      "Safe tree takedown and debris removal across West Michigan — including tight spaces and storm-damaged trees.",
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
    heroImageAlt:
      "Aerial view of a Bernal Landscape tree-removal job site with a pile of cut log sections, a skid-steer, and crew trucks",
    faq: [
      { question: "Can Bernal Landscape remove trees in tight spaces?", answer: "Yes. We have rigging experience for trees over structures and in spaces without a clean drop zone. We safely remove dead, diseased, or hazardous trees of all sizes." },
      { question: "Does tree removal include stump grinding?", answer: "Stump grinding is available as an optional add-on and can be done as part of the same job. We can also leave the stump if you prefer." },
      { question: "Do you handle storm damage tree removal?", answer: "Yes. We respond to storm damage and emergency situations, usually within days. We also coordinate with insurance companies on storm-damage claims." },
    ],
  },
  {
    slug: "leaf-cleanup",
    title: "Leaf Cleanup",
    shortTitle: "Leaf Cleanup",
    tagline: "A clean yard before the snow flies.",
    description:
      "Thorough fall leaf removal for Grand Rapids yards so beds and turf stay neat and ready for spring.",
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
    heroImageAlt:
      "Red and black checkerboard paver walkway flanked by pea gravel beds scattered with autumn leaves",
    faq: [
      { question: "When should I schedule fall leaf cleanup?", answer: "We schedule clean-ups in waves throughout the fall so your property looks good all season, not just at the end. We recommend booking early to secure your spot." },
      { question: "Do you clean out landscape beds during leaf cleanup?", answer: "Yes. We blow, vacuum, and haul leaves from beds, lawn, walkways, and all the corners that wind always finds. Bed and corner clean-out is part of every service." },
      { question: "Are one-time leaf cleanups available?", answer: "Yes. We offer both multi-visit fall programs and one-time end-of-season clean-ups. We also offer gutter debris removal as an add-on. All leaves are hauled off-site." },
    ],
  },
  {
    slug: "yard-drain-installation",
    title: "Yard Drain Installation",
    shortTitle: "Yard Drains",
    tagline: "Move water away from where it shouldn't be.",
    description:
      "Surface and subsurface drainage for West Michigan's clay soils — yard drains that move water away from your foundation.",
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
    heroImageAlt:
      "Long deep trench cut across a residential yard with a skid steer at the far end during a drainage install",
    faq: [
      { question: "Why does my West Michigan yard have standing water?", answer: "Standing water is common in West Michigan because of our heavy clay soils. Water pools against foundations, kills grass, and breeds mosquitoes. We diagnose where the water is coming from and design drainage that moves it to a proper discharge point." },
      { question: "What type of pipe does Bernal Landscape use for yard drains?", answer: "We use rigid SDR pipe — not flimsy corrugated pipe — where it counts. Our installations include catch basins, downspout extensions, and pop-up emitters at discharge points." },
      { question: "Will my lawn be restored after a drain installation?", answer: "Yes. Every drain installation includes seamless lawn restoration. We re-grade the surface and restore turf so the drain system is invisible once the job is complete." },
    ],
  },
  {
    slug: "french-drains",
    title: "French Drains",
    shortTitle: "French Drains",
    tagline: "Subsurface drainage that handles groundwater right.",
    description:
      "French drains designed for West Michigan groundwater — stone envelopes and perforated pipe that capture and redirect it.",
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
    heroImageAlt:
      "Subsurface drainage strip of pea gravel framed by river rock alongside a freshly sodded lawn",
    faq: [
      { question: "What is a French drain?", answer: "A French drain is a perforated pipe installed in a clean washed stone envelope beneath the surface. It captures subsurface water and redirects it away from problem areas like wet basements, soggy yards, or slopes that will not dry out." },
      { question: "How does Bernal Landscape install French drains?", answer: "We use clean washed stone, filter fabric, and properly sloped perforated pipe. Each drain is tied into a daylight discharge or sump point engineered to handle the volume. We offer both perimeter and yard-style French drains." },
      { question: "Can a French drain fix water in my basement?", answer: "A perimeter French drain can help redirect subsurface water away from your foundation, which is a common cause of basement water during heavy rains in Grand Rapids. We will evaluate your property and tell you whether a French drain is the right fix." },
    ],
  },
  {
    slug: "mulching",
    title: "Mulching",
    shortTitle: "Mulching",
    tagline: "Beds that look sharp and stay healthy.",
    description:
      "Premium mulch installed across Grand Rapids — moisture retention, weed suppression, and polished landscape beds.",
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
    heroImageAlt:
      "Tan paver stairs descending to flagstone through a freshly mulched bed with boulders and a Bernal yard sign",
    faq: [
      { question: "What types of mulch does Bernal Landscape offer?", answer: "We offer hardwood, dyed, and premium bark mulches in a range of colors. All mulch is installed at the proper depth for weed suppression without smothering plants — no volcano mulching." },
      { question: "Do you prep the beds before mulching?", answer: "Yes. Every mulching job starts with bed edging and weed pulling before any mulch goes down. This prep work is what makes the finished result look sharp and last longer." },
      { question: "Is mulching available as a spring and fall service?", answer: "Yes. We offer both spring and fall mulching as a one-time service or as part of a full lawn-care program. Color refresh for existing beds is also available." },
    ],
  },
];

export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s]),
) as Record<string, Service>;
