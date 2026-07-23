# RIPPLE Bakes & Makes — Project Continuation Notes (Updated)

## Project Status

We are building **RIPPLE Bakes & Makes**, an Astro static website deployed on GitHub Pages.

Current stack:

* Astro `6.4.8`
* TypeScript
* GitHub Pages deployment
* Google Sheets as the content source
* Static site generation

Repository:

* Branch: `master`
* Base path: `/ripple-bakes-makes`

---

# AI Workflow Preference

* Use ChatGPT for:

  * architecture
  * planning
  * reviews
  * implementation prompts

* Use DeepSeek/Codex-style tools for implementation.

When providing implementation prompts:

* Provide one single copy-paste markdown block.
* Keep prompts concise because local models have limited tokens.
* Recommend the appropriate model/effort when relevant.

---

# Current Architecture

## Data Flow

```
Google Sheets
      |
      v
scripts/pipeline/
      |
      ├── reader.ts
      ├── sheets-reader.ts
      ├── csv-reader.ts
      ├── validators.ts
      ├── normalizers.ts
      ├── generators.ts
      |
      v
src/content/
      |
      ├── products.json
      ├── collections.json
      └── forms.json
      |
      v
src/data/
      |
      ├── products.ts
      ├── collections.ts
      ├── forms.ts
      └── static/
          ├── gallery.ts
          └── testimonials.ts
      |
      v
Astro pages/components
```

---

# Completed Milestones

## v1.5 — Google Sheets Pipeline

Completed and tagged.

Implemented:

* Google Sheets API integration
* Service account authentication
* Sheet reader abstraction
* CSV fallback support

Pipeline:

```
scripts/pipeline/

├── constants.ts
├── csv-reader.ts
├── generators.ts
├── import-data.ts
├── logger.ts
├── normalizers.ts
├── reader.ts
├── sheets-auth.ts
├── sheets-reader.ts
├── types.ts
└── validators.ts
```

Environment variables:

```
GOOGLE_SHEETS_CLIENT_EMAIL
GOOGLE_SHEETS_PRIVATE_KEY
GOOGLE_SHEETS_ID
SHEETS_ENABLED=true
```

Service account:

```
ripple-reader
```

---

## v1.5.1 — Product Slug Generation

Completed and tagged.

Problem:

Astro dynamic route required:

```
product.slug
```

Google Sheets intentionally does not contain slug data.

Solution:

* Pipeline generates slugs automatically.
* Business users keep a simple spreadsheet.
* Technical fields remain inside the pipeline.

Example:

```
Personalized Baby Blanket
```

becomes:

```
personalized-baby-blanket
```

Verification:

* `npm run import:data` ✅
* `npm run build` ✅
* zero warnings

---

# Data Status

Current generated data:

Collections:

```
10 collections
```

Products:

```
13 products
```

Forms:

```
6 forms
```

Build status:

```
Successful
0 errors
```

---

# Product Image Architecture

Implemented:

* Product images array support
* Collection images support
* Image helper utilities

File:

```
src/utils/images.ts
```

Helpers:

```
getProductImages()
getProductPrimaryImage()
getCollectionImages()
getCollectionPrimaryImage()
```

Images:

```
public/images/

├── bakery/
└── sewing/
```

Current behavior:

* Real images supported.
* Missing images fall back to placeholders.

---

# v1.6-rebranding — RIPPLE Brand Migration

Completed and tagged.

Tag:

```
v1.6-rebranding
```

Implemented:

## Repository

* GitHub repository renamed:

  * from Honeycomb Arts & Bakes
  * to RIPPLE Bakes & Makes

* Local project folder renamed.

## Branding

Completed:

* RIPPLE logo assets integrated.
* Old Honeycomb references cleaned.
* Branding updated across the project.

## Logo handling

Implemented:

Header:

```
ripple-logo-transparent.png
```

Footer:

```
ripple-logo.png
```

`Logo.astro` now supports selecting the correct logo variant.

## Favicon

Implemented:

```
public/ripple-symbol.png
```

Updated:

```
src/layouts/MainLayout.astro
```

Verified:

```
/ripple-bakes-makes/ripple-symbol.png
```

## Verification

Build:

```
31 pages
0 errors
```

---

# Current State

The project is stable after rebranding.

Latest milestone:

```
v1.6-rebranding
```

Next milestone:

```
v1.7 — Product Options Integration
```

---

# v1.7 Planned Work — Product Options Integration

Goal:

Connect the existing Google Sheets Product Options system into the product architecture.

Current:

```
Google Sheets

Products
Collections
Forms
```

Need to add:

```
Product Options
```

Flow:

```
Google Sheets
(Product Options tab)

        |
        v

Pipeline

        |
        v

Generated content

        |
        v

Product model

        |
        v

Product detail page

        |
        v

Customization/order flow
```

---

## Existing Product Options Setup

Already exists:

Google Sheet:

```
Product Options
```

Columns:

```
Product ID
Option Name
Option Type
Values
```

Type file:

```
src/types/product-options.ts
```

Not yet integrated.

---

# v1.7 Initial Tasks

Before coding:

1. Audit current Product Options readiness.

Inspect:

```
src/types/product-options.ts

scripts/pipeline/

src/data/

src/components/forms/

src/pages/[businessArea]/[collection]/[slug].astro
```

Determine:

* where options enter the pipeline
* how options attach to products
* how forms consume options
* how customization UI should be generated

---

## v1.8 — Dynamic Customization & Forms Enhancement

Goal:

Improve the product customization experience.

Current:

- Dynamic FormRenderer exists.
- Forms are Google Sheets driven.

Enhance:

- Product-specific forms.
- Product options connected to form fields.
- Conditional fields.
- Better field validation.
- Improved customer input flow.

Example:


---

## v1.9 — Product Gallery & Content Improvements

Goal:

Improve product presentation.

Planned:

- Better image galleries.
- Multiple product images.
- Image ordering.
- Gallery interactions.
- Improved collection pages.
- More polished product cards.

---

## v2.0 — Ordering Workflow

Goal:

Create a complete customer order experience.

Potential features:

- Cart/order collection.
- Customer details.
- Product customization summary.
- Order submission.
- Email notification workflow.
- Order management process.

Constraints:

- Keep architecture compatible with static Astro.
- Avoid unnecessary backend complexity.
- Prefer free solutions.

---

## v2.x — Business Management Improvements

Future possibilities:

- Better inventory management.
- Availability tracking.
- More advanced Google Sheets workflows.
- Order history.
- Customer communication tools.
- Analytics.

Only implement when needed.


# Important Constraints

Do not:

* Move away from Astro static generation.
* Remove Google Sheets pipeline.
* Add paid services.
* Put unnecessary technical fields into Google Sheets.
* Overcomplicate the order system.

Keep:

* Google Sheets business-friendly.
* Transformations inside TypeScript pipeline.
* Static site architecture.

---

# Current Starting Point

Continue from:

**v1.6-rebranding complete**

Next objective:

**v1.7 — Product Options Integration**
Goal:

Connect Product Options from Google Sheets into the product data architecture.

Planned:

- Import Product Options through pipeline.
- Validate and normalize option data.
- Attach options to products.
- Expose options on product detail pages.
- Prepare customization flow.

Expected output:
