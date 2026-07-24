# RIPPLE Bakes & Makes — Project Roadmap

## Project Overview

RIPPLE Bakes & Makes is an Astro static website deployed on GitHub Pages.

Purpose:

* Beautiful handmade product catalog
* Simple business maintenance workflow
* Future-ready inquiry/order workflow

Business areas:

* Bakery
* Sewing

Stack:

* Astro 6.4.8
* TypeScript
* GitHub Pages
* Google Sheets content source
* Static site generation

Repository:

* Branch: `master`
* Base path: `/ripple-bakes-makes`

---

# Development Philosophy

Keep:

* Static Astro architecture
* Google Sheets as business content source
* TypeScript transformation pipeline
* Simple maintenance workflow
* Free solutions

Avoid:

* Unnecessary backend complexity
* Duplicate data systems
* Manual technical maintenance

---

# AI Workflow

Use ChatGPT for:

* Architecture
* Planning
* Reviews
* Implementation prompts

Use DeepSeek/Codex tools for:

* Implementation
* Refactoring
* Testing

Implementation prompts:

* Single markdown block
* Clear scope
* Minimal unnecessary planning

Preferred implementation:

* DeepSeek V4 Flash Free
* High Thinking
* Build mode

---

# Current Architecture

## Data Flow

```
Google Sheets
      |
      v
Import Pipeline
      |
      v
Generated Data
      |
      +-- Products
      +-- Collections
      +-- Product Options
      +-- Forms
      |
      v
Astro Components
      |
      v
Static Website
```

---

# Completed Milestones

## v1.5 — Google Sheets Pipeline

Status:

✅ Completed

Implemented:

* Google Sheets integration
* Import pipeline
* CSV fallback
* Data normalization

---

## v1.6 — RIPPLE Rebranding

Status:

✅ Completed

Implemented:

* Honeycomb → RIPPLE rebrand
* Logo system
* Header/footer branding
* Favicon updates

Logo structure:

```
public/
└── images/
    └── logo/
        ├── ripple-logo-transparent.png
        ├── ripple-logo.png
        └── ripple-symbol.png
```

---

## v1.7 — Product Options Integration

Status:

✅ Completed

Implemented:

* Product option data source
* Import support
* Validation
* Product option lookup

---

## v1.8 — Dynamic Customization Forms

Status:

✅ Completed

Implemented:

* Dynamic product forms
* Required fields
* Display ordering
* Help text

Flow:

```
Product Options
        |
        v
Form Renderer
```

---

# v1.9 — Product Experience Improvements

Goal:

Create a polished handmade boutique catalog experience.

---

## v1.9.0 — Product Image Architecture

Status:

✅ Completed

Implemented:

* Automatic image discovery
* Product image folders
* Image fallback handling

Structure:

```
public/
└── images/
    └── products/
        └── {productId}/
            ├── 01.jpg
            ├── 02.jpg
            └── 03.jpg
```

Image priority:

```
Product Image
      |
Collection Image
      |
Business Area Image
      |
Fallback
```

---

## v1.9.1 — Product Gallery

Status:

✅ Completed

Implemented:

* Product image gallery
* Thumbnail navigation
* Responsive layout
* Multiple images per product

Current behavior:

* Default gallery support up to 12 images
* Flagship products can showcase larger collections

---

## v1.9.1.1 — Product Page Polish

Status:

✅ Completed

Implemented:

* Balanced product layout
* Improved spacing
* Better typography
* Boutique presentation style

---

## v1.9.2 — Catalog Experience Improvements

Status:

✅ Completed

Implemented:

* Fixed bakery/sewing discovery flow
* Featured products
* Related products
* Improved breadcrumbs
* Improved descriptions
* Improved product cards

Architecture:

* Existing Product model reused
* No unnecessary components
* Static architecture preserved

---

## v1.9.3 — Collection Presentation Improvements

Status:

✅ Completed

Implemented:

* "Ask About This Collection" inquiry CTA
* Better collection descriptions
* Collection subtitles
* Popular ideas
* Customization notes
* Removed empty sections
* Improved collection presentation

Architecture:

* Existing Collection model reused

---

## v1.9.4 — Homepage Brand Experience

Status:

✅ Completed

Goal:

Make the homepage feel like a boutique storefront.

Implemented:

* Large RIPPLE logo hero presentation
* Hero product image
* Featured creations section
* Data-driven homepage products
* Improved CTA wording
* Removed placeholder messaging
* Preserved cart navigation

Homepage structure:

```
Hero Brand Area

        |
        v

Featured Creations

        |
        v

Fresh from Kitchen & Studio

        |
        v

Services + Brand Story
```

Additional improvements:

* Added `homepageFeatured` product selection
* Homepage products are data-driven
* Improved handmade typography
* Added home hero image structure

---

# v1.9.5 — Content & Asset Refinement

Status:

🚧 Current

Goal:

Improve photography, branding, and content quality.

## Hero Images

Structure:

```
public/
└── images/
    └── home/
        └── hero/
            ├── hero-01.jpg
            ├── hero-02.jpg
            └── hero-03.jpg
```

Purpose:

Support future seasonal or rotating hero images.

---

## Gallery Images

Structure:

```
public/
└── images/
    └── gallery/
        ├── morning-loaves.jpg
        ├── stitched-care.jpg
        ├── autumn-tables.jpg
        ├── little-sweetness.jpg
        └── everyday-heirlooms.jpg
```

Behavior:

```
Image exists
      |
      v
Display photo

No image
      |
      v
Display fallback design
```

Remaining:

* Add real gallery photography
* Improve homepage visuals
* Continue brand refinement

---

# v1.9 Completion Criteria

Completed:

✅ Product image system
✅ Product galleries
✅ Product detail experience
✅ Collection catalog experience
✅ Homepage storefront experience
✅ Data-driven featured products
✅ Inquiry-based customer flow

---

# v2.0 — Inquiry & Ordering Workflow

Status:

Future

Goal:

Create a simple customer inquiry and order management workflow.

Principle:

Keep catalog data separate from transaction data.

## Catalog Data

Managed through Google Sheets.

Contains:

* Products
* Collections
* Product Options
* Forms

## Inquiry / Orders Data

Separate workflow.

Contains:

* Customer inquiries
* Orders
* Order items
* Status tracking

Example:

```
Orders

Order ID
Customer
Status
Date


Order Items

Order ID
Product ID
Quantity
Customization
Price
```

---

# Future v2.x Improvements

Possible improvements:

* Inventory tracking
* Availability management
* Customer history
* Analytics
* Business workflow tools

Only add complexity when business needs require it.

---

# Current Status Summary

Completed:

```
v1.9.0   Product Image Architecture        ✅
v1.9.1   Product Gallery                   ✅
v1.9.1.1 Product Page Polish               ✅
v1.9.2   Catalog Experience                 ✅
v1.9.3   Collection Experience              ✅
v1.9.4   Homepage Brand Experience          ✅
```

Current:

```
v1.9.5   Content & Asset Refinement         🚧
```

Future:

```
v2.0     Inquiry / Ordering Workflow        ⏳
```

---

# Current Architecture Supports

```
Google Sheets
      |
      v
Products + Collections + Options + Forms
      |
      v
Dynamic Astro Website
      |
      v
Product Discovery + Customization
      |
      v
Future Inquiry / Ordering Workflow
```
