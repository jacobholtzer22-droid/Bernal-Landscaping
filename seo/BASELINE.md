# Baseline SEO Audit — Bernal Landscape Management

Audited 2026-07-27. Scores are 0–100 against the Phase 2 checklist.

## Stack Summary

- **Framework:** Next.js 14.2.35 (App Router)
- **Rendering:** Fully static (SSG) — all 20 pages pre-rendered to HTML at build time. Content is in the initial HTML without JavaScript. This is the best possible scenario for AI crawler visibility.
- **Build command:** `npm run build` (runs `next build`)
- **Build status:** Clean (0 errors, 0 warnings)

## Global Infrastructure (before this pass)

| Item | Status | Notes |
|------|--------|-------|
| `lang` attribute | ✅ `lang="en"` on `<html>` | |
| `metadataBase` | ✅ Set to `https://bernallandscape.com` | |
| Title template | ✅ `%s \| Bernal Landscape Management` | |
| Default OG tags | ✅ Title, description, image, locale | |
| Twitter card | ✅ `summary_large_image` | |
| JSON-LD (global) | ✅ `LandscapeService` with address, hours, geo, sameAs, areaServed | |
| `robots.txt` | ⚠️ Basic — allows `/`, disallows `/api/`. No explicit AI crawler rules. | Missing GPTBot, ClaudeBot, PerplexityBot, etc. |
| `sitemap.xml` | ✅ All 20 pages included, correct absolute URLs | `lastModified` is build-time (acceptable) |
| Canonical URLs | ⚠️ Missing on several pages | Only homepage, service pages, about, contact, reviews, service-areas, gallery have them |
| `<main>` landmark | ✅ Homepage has `<main>` | Inner pages use SiteHeader/SiteFooter but content structure varies |
| `<nav>` landmark | ✅ Present in SiteHeader | |
| `<footer>` landmark | ✅ Present in SiteFooter | |
| `llms.txt` | ❌ Not present | |
| WebSite schema | ❌ Not present | |
| Organization schema | ❌ Not present (LandscapeService only) | |
| BreadcrumbList schema | ❌ Not present (visual breadcrumbs exist but no schema) | |

## Per-Page Audit

### 1. Homepage (`/`)

| Check | Status | Details |
|-------|--------|---------|
| Title tag | ✅ | "Bernal Landscape Management \| Landscaper in Grand Rapids, MI" (63 chars) |
| Meta description | ✅ | "Family-owned landscape design, hardscaping, and property care serving Grand Rapids and West Michigan for over a decade." (119 chars) |
| Canonical | ✅ | `https://bernallandscape.com/` |
| OG/Twitter | ✅ | Present with image |
| H1 | ⚠️ | "Proudly Designed for You" — no service keywords or city |
| H1 count | ✅ | Exactly 1 |
| Heading hierarchy | ✅ | H1 → H2 → H3, clean |
| Image alt coverage | ✅ | All images have descriptive alt text |
| NAP in crawlable text | ✅ | Phone, address, hours in contact section |
| JSON-LD (page) | ❌ | No page-specific schema (Service, BreadcrumbList) |
| Word count | ~800 | Adequate |
| FAQ block | ❌ | None |
| **Score** | **62** | H1 needs service keywords; missing page-specific schema; no FAQ |

### 2. About (`/about`)

| Check | Status | Details |
|-------|--------|---------|
| Title tag | ✅ | "About Bernal Landscape Management \| Bernal Landscape Management" (64 chars) |
| Meta description | ✅ | "Family-owned and fully insured, with over a decade serving Grand Rapids and West Michigan. BBB accredited." (106 chars) |
| Canonical | ✅ | `https://bernallandscape.com/about` |
| OG/Twitter | ✅ | Inherits layout OG |
| H1 | ⚠️ | "About Bernal Landscape" — could include city |
| H1 count | ✅ | 1 |
| Heading hierarchy | ✅ | Clean |
| Image alt | ✅ | All have descriptive alt |
| NAP | ✅ | In footer |
| JSON-LD (page) | ❌ | No BreadcrumbList or AboutPage schema |
| Word count | ~400 | Adequate |
| **Score** | **60** | Title has brand name twice; no page-specific schema |

### 3. Services Index (`/services`)

| Check | Status | Details |
|-------|--------|---------|
| Title tag | ✅ | "Landscaping Services in Grand Rapids, MI \| Bernal Landscape Management" (71 chars — slightly long) |
| Meta description | ✅ | Present, ~130 chars |
| Canonical | ✅ | Present |
| H1 | ✅ | "Our Services" — generic but acceptable |
| Heading hierarchy | ✅ | H1 → H3 (each service card) |
| Image alt | ✅ | Service hero images have descriptive alt text |
| NAP | ✅ | In footer |
| JSON-LD | ❌ | No BreadcrumbList |
| Word count | ~600 | Adequate |
| **Score** | **65** | Solid structure, missing schema |

### 4. Reviews (`/reviews`)

| Check | Status | Details |
|-------|--------|---------|
| Title tag | ✅ | "Reviews & Testimonials \| Bernal Landscape Management" (53 chars) |
| Meta description | ✅ | "Read reviews from Bernal Landscape Management customers across Grand Rapids and West Michigan." (95 chars — could be longer) |
| Canonical | ✅ | Present |
| H1 | ✅ | "Reviews & Testimonials" |
| Image alt | ✅ | All gallery photos have alt text |
| NAP | ✅ | In footer |
| JSON-LD | ❌ | No review-related schema (note: no AggregateRating — correct per hard rules) |
| Word count | ~500 | Light |
| **Score** | **58** | Short description; no BreadcrumbList |

### 5. Gallery (`/gallery`)

| Check | Status | Details |
|-------|--------|---------|
| Title tag | ✅ | "Project Gallery \| Bernal Landscape Management" (47 chars) |
| Meta description | ✅ | "Browse landscape, hardscape, and property-care projects completed by Bernal Landscape Management in Grand Rapids and West Michigan." (130 chars) |
| Canonical | ✅ | Present |
| H1 | ✅ | "Project Gallery" |
| Image alt | ⚠️ | 166 gallery images have alt text but they cycle through ~15 generic templates. Not per-image descriptive. |
| NAP | ✅ | In footer |
| JSON-LD | ❌ | No BreadcrumbList or ImageGallery schema |
| Word count | ~100 (text-light by nature) | OK for a gallery |
| **Score** | **55** | Generic rotating alt texts; no page schema |

### 6. Service Areas (`/service-areas`)

| Check | Status | Details |
|-------|--------|---------|
| Title tag | ✅ | "Service Areas in West Michigan \| Bernal Landscape Management" (61 chars) |
| Meta description | ✅ | Lists cities, 158 chars — good |
| Canonical | ✅ | Present |
| H1 | ✅ | "Service Areas" |
| NAP | ✅ | In footer |
| JSON-LD | ❌ | No BreadcrumbList |
| Word count | ~300 | Light — mostly city list |
| **Score** | **60** | Good title/description; missing schema; could have more text content about each area |

### 7. Contact (`/contact`)

| Check | Status | Details |
|-------|--------|---------|
| Title tag | ✅ | "Contact Bernal Landscape Management \| Bernal Landscape Management" (66 chars — brand repeated) |
| Meta description | ✅ | "Get in touch for a free landscape, hardscape, lawn-care, or snow-removal estimate. Serving Grand Rapids and West Michigan." (122 chars) |
| Canonical | ✅ | Present |
| H1 | ✅ | "Contact Us" |
| NAP | ✅ | Full NAP in contact info section + footer |
| JSON-LD | ❌ | No BreadcrumbList |
| Word count | ~200 | OK for a contact page |
| **Score** | **58** | Brand repeated in title; no page schema |

### 8–20. Individual Service Pages (`/services/[slug]`)

All 13 service pages share the same template (ServicePageTemplate). Audit applies to all:

| Check | Status | Details |
|-------|--------|---------|
| Title tag | ✅ | "[Service Title] in Grand Rapids, MI \| Bernal Landscape Management" — good pattern |
| Meta description | ✅ | Per-service description from services data, ~100–160 chars |
| Canonical | ✅ | Per-page canonical |
| OG | ✅ | Per-service hero image |
| H1 | ✅ | Service title (e.g., "Landscape Design & Installation") |
| Heading hierarchy | ✅ | H1 → H2 (Overview, What's Included, etc.) → H3 |
| Image alt | ✅ | Hero images have hand-written descriptive alt text |
| NAP | ✅ | In footer |
| JSON-LD (page) | ❌ | No Service schema, no BreadcrumbList |
| FAQ block | ❌ | `faq` field exists in service type but no service has FAQ data |
| Word count | ~500–700 | Adequate |
| **Score** | **68** | Good title/description/content pattern; missing Service + BreadcrumbList schema; no FAQ |

## Score Summary

| Page | Before Score |
|------|-------------|
| `/` (Homepage) | 62 |
| `/about` | 60 |
| `/services` | 65 |
| `/reviews` | 58 |
| `/gallery` | 55 |
| `/service-areas` | 60 |
| `/contact` | 58 |
| `/services/landscape-design-and-installation` | 68 |
| `/services/retaining-wall-construction` | 68 |
| `/services/concrete-construction` | 68 |
| `/services/paver-patio-installation` | 68 |
| `/services/lawn-maintenance` | 68 |
| `/services/snow-plowing-and-shoveling` | 68 |
| `/services/sod-installation` | 68 |
| `/services/tree-service` | 68 |
| `/services/tree-removal` | 68 |
| `/services/leaf-cleanup` | 68 |
| `/services/yard-drain-installation` | 68 |
| `/services/french-drains` | 68 |
| `/services/mulching` | 68 |
| **Average** | **64.6** |

## Key Findings

### What's Already Good
1. **Fully static HTML** — all content is in the initial HTML. AI crawlers can read everything.
2. **LandscapeService JSON-LD** already present with address, hours, geo, sameAs, areaServed.
3. **Canonical URLs** on most pages.
4. **Good title pattern** on service pages: "[Service] in Grand Rapids, MI | Bernal Landscape Management"
5. **Descriptive hero image alt text** on service pages (hand-written, specific).
6. **Strong content** — 3 intro paragraphs + 6 bullets + 3 "why choose" per service page.
7. **NAP consistent** across all pages via footer.
8. **sitemap.xml** includes all 20 pages.

### What Needs Work
1. **robots.txt** — no explicit AI crawler allowances (GPTBot, ClaudeBot, PerplexityBot, etc.)
2. **No `llms.txt`** — the AI search map file.
3. **No BreadcrumbList schema** on any page (visual breadcrumbs exist in PageHero).
4. **No Service schema** on service pages.
5. **No WebSite or Organization schema.**
6. **No FAQ content or schema** — the data structure supports it but no service has FAQs.
7. **Homepage H1** is "Proudly Designed for You" — poetic but contains zero service keywords or city name.
8. **Gallery alt texts are generic rotating templates** — 166 images cycling through ~15 phrases.
9. **Title repetition** — About and Contact pages repeat "Bernal Landscape Management" twice.
10. **Some meta descriptions are short** (Reviews: 95 chars).

### Rendering Check
All pages are statically pre-rendered (SSG). Confirmed in built HTML:
- Title, meta description, H1, main copy, business info, and JSON-LD are all present in the initial HTML without JavaScript execution.
- No rendering issues for AI crawlers.

### robots.txt Check
Current robots.txt allows all user agents on `/` and disallows `/api/`. No explicit blocks on AI crawlers. However, no explicit allows either — adding explicit allows for AI-specific user agents is Phase 1 work.
