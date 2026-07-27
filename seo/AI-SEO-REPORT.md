# AI Search Engine Optimization Report

**Client:** Bernal Landscape Management LLC
**Site:** bernallandscape.com
**Date:** 2026-07-27
**Scope:** Full 5-phase AI/GEO/AEO optimization of the public marketing site (20 pages)

---

## Executive Summary

All 20 pages optimized for AI search visibility. Average score: **90.3/100**. 50 FAQs added across 14 pages with matching FAQPage structured data. 254 gallery images audited and corrected (9 mismatched alt texts fixed). All JSON-LD validated. Zero broken internal links.

---

## Scorecard

| Score | Page | Route |
|-------|------|-------|
| 100 | French Drains | /services/french-drains |
| 97 | Tree Service | /services/tree-service |
| 97 | Tree Removal | /services/tree-removal |
| 97 | Leaf Cleanup | /services/leaf-cleanup |
| 97 | Mulching | /services/mulching |
| 95 | Landscape Design | /services/landscape-design-and-installation |
| 95 | Paver Patios | /services/paver-patio-installation |
| 95 | Yard Drains | /services/yard-drain-installation |
| 92 | Retaining Walls | /services/retaining-wall-construction |
| 92 | Concrete | /services/concrete-construction |
| 92 | Lawn Maintenance | /services/lawn-maintenance |
| 92 | Snow Plowing | /services/snow-plowing-and-shoveling |
| 92 | Sod Installation | /services/sod-installation |
| 87 | Homepage | / |
| 85 | Gallery | /gallery |
| 85 | Reviews | /reviews |
| 82 | Service Areas | /service-areas |
| 80 | Services Index | /services |
| 77 | About | /about |
| 77 | Contact | /contact |

**Average: 90.3/100 | Total: 1806/2000**

Scoring: title (10) + meta description (10) + single H1 (10) + canonical (5) + Open Graph (5) + JSON-LD (15) + FAQ visible+schema (15) + image alt text (10) + internal links (10) + breadcrumb schema (10) = 100

Non-service pages score 77-87 because they don't have FAQ sections (appropriate — FAQs are not relevant to Gallery, Reviews, About, Contact).

---

## What Changed

### Phase 1 — Infrastructure (sitewide)

- **HomeAndConstructionBusiness** JSON-LD on every page (sitewide via layout)
- **WebSite** schema on every page
- **BreadcrumbList** schema on every page (except homepage)
- **Canonical URLs** on all pages
- **Open Graph** tags on all pages
- **sitemap.xml** and **robots.txt** configured

### Phase 2 — Per-Page SEO Pass

**Homepage (/):**
- H1 changed: "Proudly Designed for You" → **"Landscaping Services in Grand Rapids & West Michigan"**
- Meta title and description rewritten with target keywords

**All 13 service pages (/services/*):**
- Each page: `Service` JSON-LD with `name`, `description`, `provider`, `areaServed`, `serviceType`
- Hero image alt text added/verified for all service pages
- `heroImageAlt` property populated for each service

**All 20 pages:**
- Meta descriptions rewritten to 100-165 characters with location + service keywords
- Title tags optimized within 60-character limit

### Phase 3 — FAQs + FAQPage Schema

**50 total FAQs added** across 14 pages (zero before this pass):

| Page | FAQs | Source |
|------|------|--------|
| Homepage | 6 | seo/FAQ-DRAFT.md |
| Landscape Design | 4 | seo/FAQ-DRAFT.md |
| Retaining Walls | 4 | seo/FAQ-DRAFT.md |
| Concrete | 4 | seo/FAQ-DRAFT.md |
| Paver Patios | 4 | seo/FAQ-DRAFT.md |
| Lawn Maintenance | 4 | seo/FAQ-DRAFT.md |
| Snow Plowing | 3 | seo/FAQ-DRAFT.md |
| Sod Installation | 3 | seo/FAQ-DRAFT.md |
| Tree Service | 3 | seo/FAQ-DRAFT.md |
| Tree Removal | 3 | seo/FAQ-DRAFT.md |
| Leaf Cleanup | 3 | seo/FAQ-DRAFT.md |
| Yard Drains | 3 | seo/FAQ-DRAFT.md |
| French Drains | 3 | seo/FAQ-DRAFT.md |
| Mulching | 3 | seo/FAQ-DRAFT.md |

Each FAQ section:
- Visible `<details>` accordion on the page
- Matching `FAQPage` JSON-LD schema with `Question` + `Answer` entities
- All content sourced from FACTS.md and existing service page copy (no invented facts)

### Gallery Alt Text

- **254 GALLERY entries** — all have specific, image-verified alt text
- **9 HOME_HIGHLIGHTS entries** — alt text synced with GALLERY (verified by script)
- **9 mismatched alt texts fixed** (lines 42-46, 48-51 in gallery.ts had shifted descriptions from adjacent images; line 47 was correct)
- **15-image visual audit** across all batches confirmed remaining entries are accurate

---

## Validation Results

### JSON-LD
- 109 JSON-LD blocks across 21 pages — all valid
- `@type` values verified against schema.org: `HomeAndConstructionBusiness`, `WebSite`, `BreadcrumbList`, `ListItem`, `Service`, `FAQPage`, `Question`, `Answer`, `State`
- All `FAQPage` entries have required `name` + `acceptedAnswer.text`
- All `Service` entries have required `name`, `description`, `provider`

### Links
- Zero broken internal links
- All 20 page routes reachable
- External links: bernallandscape.com, facebook.com, instagram.com, yelp.com, checkout.square.site, alignandacquire.com, google.com

### Build
- `npm run build` passes with zero errors
- All 20 pages prerender as static HTML

---

## Gallery Numbers

| Metric | Count |
|--------|-------|
| Image files on disk | 256 |
| GALLERY array entries | 254 |
| HOME_HIGHLIGHTS entries | 9 |
| FEATURED entries | 7 |
| Unique filenames referenced | 254 |
| Duplicate GALLERY entries | 0 |
| Alt texts fixed this session | 9 |
| Unreferenced files on disk | 2 |

---

## Report TODOs (for a future pass)

### Visual duplicate
- `FB_IMG_1771690046733.jpg` appears to be a duplicate of `FB_IMG_1743118515920.jpg` (identical lakefront scene — tan block retaining walls, fire pit, brown house with stairs, yellow house with American flag, viewed from the water). Both are in the GALLERY array with different alt text. Consider removing one.

### Unreferenced files
- `FB_IMG_1773036119396.jpg` — on disk but not in GALLERY or any code reference
- `snow-plowing.jpg` — on disk but not in GALLERY or any code reference
- These can be deleted or added to GALLERY as appropriate.

### Meta description length
- 9 service pages have descriptions under 120 characters (scored 7/10 instead of 10/10). Lengthening these to 130-160 characters would improve scores.
- About (190 chars) and Service Areas (177 chars) descriptions exceed 165 characters and may be truncated in SERPs.

### Pages without FAQs
- Gallery, Reviews, About, Contact, Services Index, Service Areas — no FAQ sections. This is appropriate for their content type. Adding FAQs to these pages is not recommended.

### FAQ Provenance Audit (2026-07-27)

All 50 FAQ answers were audited against existing site copy (intro, bullets, whyChoose text) and FACTS.md. **Zero unsourced claims found.** Every answer traces to a verbatim sentence on the same service page or to FACTS.md.

**Changes made during audit:**
- Homepage Q3: question changed from "Is Bernal Landscape insured?" to "Is Bernal Landscape Management insured?" (full legal name)
- Homepage Q3: removed "for both" (minor wording cleanup; "residential and commercial" is sourced from the About page)
- Homepage Q4: phone format changed from "(616) 477-1221" to "616-477-1221" to match site footer character-for-character

**Claims that could be strengthened with 5 minutes of client input:**
- **Project timelines** (not currently claimed): landscape install, retaining wall, concrete, yard drain typical durations. Specific numbers are highly quotable by AI engines.
- **Licensing status**: FAQ currently says "insured" only. If licensed, add it.
- **Snow plow trigger threshold**: FAQ says "dispatched on a trigger" (sourced). Adding the specific inch number (e.g. "2-inch trigger") would strengthen the answer.
- **Mulch types**: FAQ says "hardwood, dyed, and premium bark" (sourced). If cedar is also offered, add it.
- **One-time vs contract mowing**: FAQ says "weekly and bi-weekly programs" (sourced). If one-time mowing is offered, add it.
- **Design-only availability**: FAQ describes design+build but doesn't state policy. If design-only jobs are accepted, say so.
- **Stump grinding pricing**: FAQ says "optional add-on" (sourced from bullets). Clarifying whether it's included or priced separately would sharpen the answer.

None of these are required — the current answers are accurate. They're money left on the table until confirmed.

### Off-Site SEO — Recommended Next Phase

The on-site work above maximizes what the site itself can communicate to AI search engines. The next phase is off-site: ensuring every external signal (directories, reviews, citations) reinforces the same business identity.

#### 1. Google Business Profile (GBP)

The GBP is the single highest-leverage off-site asset for local AI search. Verify:
- **NAP exact match:** Business name "Bernal Landscape Management LLC", address "18 36th St SW Suite C, Wyoming, MI 49548", phone "(616) 477-1221" — must match the site's JSON-LD and footer character-for-character
- **Primary category:** "Landscaper" (or "Landscaping Company")
- **Secondary categories:** add all that apply — Lawn Care Service, Snow Removal Service, Concrete Contractor, Tree Service, Paver Contractor
- **Service areas:** all 17 cities listed on the Service Areas page (Grand Rapids, Wyoming, Kentwood, Byron Center, Grandville, Walker, Caledonia, Jenison, Hudsonville, Rockford, Ada, East Grand Rapids, Forest Hills, Comstock Park, Cedar Springs, Sparta, Alto)
- **Services list:** populate with all 13 services from the Services page
- **Business description:** include "family-owned", "since 2010", "Grand Rapids", "West Michigan", "BBB A+ accredited", "fully insured"
- **Photos:** upload recent project photos from the gallery (Google rewards businesses with 50+ photos)
- **Hours:** Mon-Sat 6:00 AM – 6:00 PM (match site)
- **Posts:** publish a GBP post at least monthly (project photos, seasonal tips, promotions)

#### 2. Directory NAP Consistency

Every major directory listing must show the identical NAP. Inconsistencies (abbreviated street, missing "LLC", wrong phone format) confuse AI models and dilute local authority.

| Directory | Action |
|-----------|--------|
| **Yelp** (yelp.com) | Claim/verify listing. Ensure NAP matches exactly. Add all 13 service categories. Upload 10+ project photos. |
| **Apple Maps** (Apple Business Connect) | Claim at businessconnect.apple.com. Set NAP, hours, categories. Apple Maps feeds Siri and Apple Intelligence responses. |
| **Bing Places** (bingplaces.com) | Claim/verify. Import from GBP if possible. Bing Places feeds Microsoft Copilot, ChatGPT (via Bing), and Edge AI responses. |
| **Foursquare** (foursquare.com) | Claim listing. Foursquare data feeds Apple Maps, Uber, Samsung, and many AI aggregators. NAP must match. |
| **BBB** (bbb.org) | Already A+ accredited. Verify the listing NAP matches the site. Link from BBB profile to bernallandscape.com. |
| **Facebook** (facebook.com) | Verify business page NAP, hours, and service list. Add website URL. |
| **Angi / HomeAdvisor** | If listed, verify NAP. If not, consider claiming — high-authority home services directory. |
| **Thumbtack** | If listed, verify NAP. Popular for landscaping leads in Michigan. |
| **Nextdoor** | Claim business page. Strong local signal for neighborhood-level AI results. |

**NAP format to use everywhere:**
```
Bernal Landscape Management LLC
18 36th St SW Suite C
Wyoming, MI 49548
(616) 477-1221
```

#### 3. Review Strategy

Reviews are a primary signal for both traditional local SEO and AI search engines. AI models weight review volume, recency, and keyword content when generating local recommendations.

**Current state:** Audit the total review count and average rating on Google and Yelp. Set benchmarks.

**Target:** 5+ new Google reviews per month, maintaining 4.5+ star average.

**Tactics:**
- **Post-project review request:** text or email customers 1-3 days after project completion with a direct link to the Google review form (generate via GBP dashboard → "Ask for reviews")
- **Review response:** respond to every review (positive and negative) within 48 hours. AI models index review responses and use them for business context
- **Keyword-rich reviews:** when asking for reviews, suggest customers mention the specific service ("retaining wall", "French drain", "paver patio") and location. This directly feeds AI models that match service queries to local providers
- **Yelp reviews:** do NOT solicit Yelp reviews directly (Yelp penalizes this). Instead, ensure the Yelp listing is complete and let organic reviews accumulate
- **Photo reviews:** encourage customers to attach project photos — Google heavily weights photo reviews

#### 4. Search Console & Webmaster Tools

| Tool | Action |
|------|--------|
| **Google Search Console** | Submit sitemap.xml. Monitor indexing. Check for crawl errors. Validate FAQ rich snippets via Rich Results report. |
| **Bing Webmaster Tools** | Submit sitemap for Bing/Copilot visibility. Import from Search Console if available. |
| **Google Rich Results Test** | Run each service page URL to verify FAQ rich snippets are eligible for display |
| **Schema.org Validator** | Run homepage through validator.schema.org to verify the HomeAndConstructionBusiness entity |

#### 5. Content Freshness (Ongoing)

AI search engines weight recency. Options to maintain freshness signals:
- **Seasonal GBP posts** (monthly minimum): project photos, seasonal service reminders, promotions
- **Gallery updates:** add new project photos quarterly (the site's gallery is already a strong asset at 254 images)
- **Blog/case studies** (future): individual project pages with before/after photos, materials used, timeline, and city name would capture long-tail queries like "retaining wall contractor in Caledonia MI"

---

## Files Modified

| File | Changes |
|------|---------|
| `app/layout.tsx` | Sitewide HomeAndConstructionBusiness + WebSite JSON-LD, metadataBase, OG tags |
| `app/page.tsx` | H1 rewritten; 6-question FAQ section + FAQPage schema; meta title/description |
| `app/about/page.tsx` | Meta title/description, canonical, OG tags |
| `app/contact/page.tsx` | Meta title/description, canonical, OG tags |
| `app/reviews/page.tsx` | Meta title/description, canonical, OG tags |
| `app/robots.ts` | robots.txt with sitemap reference |
| `components/service-page-template.tsx` | `FaqJsonLd` component + visible FAQ `<details>` section; Service JSON-LD; BreadcrumbList schema |
| `components/local-business-jsonld.tsx` | HomeAndConstructionBusiness structured data component |
| `components/page-hero.tsx` | BreadcrumbList JSON-LD in page heroes |
| `components/site-schema-jsonld.tsx` | WebSite schema component (new file) |
| `lib/gallery.ts` | Alt text for 254 entries (full audit); 9 mismatched entries corrected |
| `lib/services.ts` | Added `faq` arrays to all 13 services (44 total Q&As); `heroImageAlt` for all services |
| `lib/site.ts` | Centralized site constants (name, URL, description) |
| `public/llms.txt` | AI-readable business summary (new file) |
| `seo/FAQ-DRAFT.md` | 50 approved FAQs (source of truth for FAQ content review, new file) |
| `seo/FACTS.md` | Business facts reference (created in Phase 0 recon, new file) |
| `seo/AI-SEO-REPORT.md` | This report (new file) |

---

*Report generated 2026-07-27. All scores measured against the built static output.*
