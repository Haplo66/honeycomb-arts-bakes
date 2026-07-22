# Honeycomb Arts & Bakes

# Project Roadmap v2

## Status: Post Data Pipeline Architecture

---

# Vision

Create a fully data-driven, maintainable e-commerce website where the business owner manages products, collections, forms, images, and business information without editing source code.

Long-term workflow:

```
Google Sheet
      │
      ▼
Data Pipeline
      │
      ▼
Generated Content
      │
      ▼
Asset Pipeline
      │
      ▼
Astro Website
      │
      ▼
GitHub Pages
```

---

# Current Status (Completed)

## Website Foundation

* ✅ Astro website
* ✅ Dynamic routing
* ✅ Collection architecture
* ✅ Product architecture
* ✅ Dynamic product pages
* ✅ Dynamic order forms

## Data Architecture

* ✅ products.json
* ✅ collections.json
* ✅ forms.json

## Data Loaders

* ✅ Product loader
* ✅ Collection loader
* ✅ Form loader

## Data Pipeline

* ✅ CSV import pipeline
* ✅ Validation
* ✅ Metadata generation
* ✅ Sample CSV files
* ✅ Import logging
* ✅ Documentation

---

# Phase 1 — Repository Organization

## Goal

Separate generated content from application logic.

### Target Structure

```
src/
│
├── components/
├── content/
│   ├── products.json
│   ├── collections.json
│   ├── forms.json
│   ├── settings.json
│   ├── images.json
│   └── metadata/
│
├── data/
│   ├── products.ts
│   ├── collections.ts
│   ├── forms.ts
│   ├── settings.ts
│   └── images.ts
│
├── layouts/
├── pages/
└── types/
```

Also create:

```
reports/
```

Examples:

* import-report.json
* image-report.json

---

# Phase 2 — Asset Pipeline

## Goal

Treat images as managed assets instead of static files.

Images should never be referenced manually inside products.

## Source Asset Structure

```
assets/

├── bakery/
│   ├── filled-pockets/
│   │   ├── FP-001/
│   │   │   ├── cover.jpg
│   │   │   ├── 01.jpg
│   │   │   ├── 02.jpg
│   │   │   └── 03.jpg
│   │   └── FP-002/
│   │
│   ├── flat-bread/
│   └── sourdough/
│
└── sewing/
    ├── custom-shirts/
    ├── bucket-hats/
    ├── beanie-hats/
    ├── baby-blankets/
    └── rice-packs/
```

Each product owns its own folder.

### Naming Convention

Required:

```
cover.jpg
```

Gallery:

```
01.jpg
02.jpg
03.jpg
...
```

Future support:

* WebP
* PNG
* MP4
* PDF

## Asset Pipeline

Create:

```
scripts/assets/
```

Modules:

* scan-assets.ts
* validate-assets.ts
* generate-images.ts
* generate-thumbnails.ts
* logger.ts

## Responsibilities

* Scan product folders
* Validate naming
* Validate required cover image
* Detect duplicate images
* Detect orphan folders
* Detect products without images
* Detect images without products
* Generate image metadata
* Generate reports

## Generated Files

```
src/content/images.json
```

```
reports/image-report.json
```

## Future Features

* Image optimization
* Responsive images
* WebP conversion
* Thumbnail generation
* Blur placeholders
* Dominant color extraction
* Broken image detection
* Unused image detection
* Automatic ALT text support

---

# Phase 3 — Google Sheets Integration

Replace manual CSV exports with direct Google Sheets API access.

Current:

```
Google Sheet
      │
CSV Export
      │
Data Pipeline
```

Future:

```
Google Sheets API
      │
Data Pipeline
```

Requirements:

* Google Service Account
* Read-only access
* Environment variables
* Local development
* GitHub Actions compatibility

The pipeline must support multiple input adapters:

* CSV
* Google Sheets API

The remainder of the pipeline should remain unchanged.

---

# Phase 4 — Settings Architecture

Move all business configuration into data.

Create:

```
settings.json
```

Examples:

* Business name
* Contact information
* Address
* Social media
* Business hours
* Footer
* Announcement banner
* Theme configuration

No business information should be hardcoded.

---

# Phase 5 — Customer Ordering Experience

## Customer Journey

```
Home

↓

Business Area

↓

Collection

↓

Product

↓

Configure Product

↓

Add To Cart

↓

Review Cart

↓

Checkout

↓

Confirmation
```

## Shopping Cart

Each cart item stores:

* Product
* Selected options
* Quantity
* Customer notes

## Checkout

Customer Information:

* Name
* Email
* Phone

Optional:

* Pickup / Delivery
* Preferred date
* Preferred time
* Additional comments

Future:

* Order confirmation emails
* Customer order history

---

# Phase 6 — Order Management

## Initial Version

Generate structured order data.

Potential destinations:

* Email
* Google Sheets
* JSON archive

Future integrations:

* Airtable
* Supabase

## Order Lifecycle

```
New

↓

Confirmed

↓

In Progress

↓

Ready

↓

Completed

↓

Archived
```

Future:

* Customer notifications
* Status tracking
* Internal notes
* Production schedule

---

# Phase 7 — Inventory & Availability

This project is primarily made-to-order.

Focus on availability rather than stock counts.

Supported states:

* Active
* Hidden
* Seasonal
* Sold Out
* Coming Soon

Future:

* Limited availability
* Holiday products
* Automatic scheduling

---

# Phase 8 — Search & Discovery

Features:

* Search
* Tags
* Featured products
* Related products
* Seasonal collections
* Popular items

---

# Phase 9 — Performance

Pipeline-generated assets:

* Search index
* Sitemap
* Image metadata
* Collection metadata
* Static optimization

Future:

* RSS feeds
* Structured data
* SEO enhancements

---

# Phase 10 — Pipeline Improvements

Enhance the Data Pipeline with:

* Schema validation
* Duplicate ID detection
* Broken reference detection
* Import reports
* Pipeline timing
* Verbose mode
* Dry-run mode

Enhance the Asset Pipeline with:

* Missing image detection
* Broken image detection
* Duplicate image detection
* Responsive image generation
* Compression
* Optimization

---

# Phase 11 — Documentation

Maintain:

* ARCHITECTURE.md
* DATA_MODEL.md
* GOOGLE_SHEET_SCHEMA.md
* IMPORT_PIPELINE.md
* DEVELOPER_GUIDE.md

Documentation is considered part of the codebase.

Every task that changes architecture, workflows, or data structures should update the relevant documentation before completion.

---

# Long-Term Architecture

```
                    Honeycomb Build System

               Google Sheets / CSV
                      │
               Data Pipeline
                      │
          ┌───────────┴───────────┐
          │                       │
   Generated Content        Import Reports
          │
          ▼

        Astro Data Loaders

          ▲
          │

      Asset Pipeline
          ▲
          │

      Source Assets

          ▼

Optimized Website Assets

          ▼

      Astro Build

          ▼

   GitHub Pages Website
```

---

# Long-Term Goal

A new product should require only four steps:

1. Add the product to the Google Sheet.
2. Copy the product images into the appropriate asset folder.
3. Run the Data Pipeline.
4. Deploy the website.

No source code changes should be required for normal business operations.
