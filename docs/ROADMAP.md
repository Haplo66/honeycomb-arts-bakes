# Honeycomb Arts & Bakes Website Roadmap

## Project Objective

Build a fully static, data-driven Astro website for Honeycomb Arts & Bakes.

The website supports:

- Bakery products
- Sewing products
- Custom orders
- Dynamic collections
- Product customization
- Shopping cart
- Checkout workflow

Technical constraints:

- Astro static site
- GitHub Pages compatible
- No backend
- No database
- No payment processing

---

# Phase 1 — Foundation Refactor ✅ COMPLETE

## Objective

Refactor the current Astro website into a data-driven Collection architecture without changing the visual appearance.

This is an architectural refactor, not a redesign.

---

## Implemented

### Collection Architecture

Created reusable Collection model supporting:

- id
- category
- slug
- title
- subtitle
- shortDescription
- description
- heroImage
- galleryImages
- featured
- active
- displayOrder

---

### Data Layer

Created:

```
src/data/
```

for Bakery and Sewing collection data.

---

### Reusable Types

Created reusable interfaces for:

- Collections
- Collection images
- Product structures

---

### Helper Functions

Implemented:

- getAllCollections()
- getBakeryCollections()
- getSewingCollections()
- getCollectionBySlug()

---

## Acceptance Criteria

✅ No visible UI changes  
✅ Existing pages continue working  
✅ Architecture supports future expansion  
✅ Build succeeds  

---

# Phase 2 — Collections Pages ✅ COMPLETE

## Objective

Convert Bakery and Sewing pages into Collection landing pages.

---

## Implemented

Created reusable:

```
CollectionCard
```

component.

Cards support:

- Hero image
- Title
- Short description
- Explore Collection link
- Responsive layout
- Hover effects
- Keyboard accessibility
- Future badges

---

## Acceptance Criteria

✅ Bakery and Sewing use same component  
✅ Data comes from src/data  
✅ No duplicated layouts  

---

# Phase 3 — Dynamic Collection Pages ✅ COMPLETE

## Objective

Create one reusable template for all Collection pages.

Examples:

```
/bakery/cakes

/bakery/cookies

/sewing/shirts

/sewing/hats
```

---

## Implemented

Collection pages render from data.

Template supports:

## Hero

- Title
- Description
- Image

## Gallery

- Collection images

## Popular Ideas

- Suggestions
- Examples

## Customization Section

Placeholder for dynamic forms.

---

## Acceptance Criteria

✅ One template generates all collections  
✅ Only data changes between collections  
✅ No duplicated pages  

---

# Phase 4 — Dynamic Form Engine ✅ COMPLETE

## Objective

Create a reusable form engine where forms are generated from configuration.

---

# Task 4A — Form Architecture ✅ COMPLETE

Created:

```
src/types/form.ts

src/data/forms.ts
```

Supports:

- Form definitions
- Field definitions
- Options
- Conditional rules

---

# Task 4B — Dynamic Form Renderer ✅ COMPLETE

Created:

```
src/components/forms/

FormRenderer.astro

FormField.astro
```

Supports:

- text
- textarea
- select
- multiselect
- checkbox
- radio
- number
- date
- email
- phone

Integrated through:

```
Product.formId
```

---

# Task 4C — Form Engine Completion ✅ COMPLETE

Added:

- Validation metadata
- Default values
- Field sections

Supports:

- required fields
- placeholders
- minlength
- maxlength
- pattern
- conditional fields

---

## Phase 4 Acceptance Criteria

✅ Forms generated from configuration  
✅ No product-specific form components  
✅ Conditional fields supported  
✅ Existing products continue working  
✅ Build succeeds  

---

# Phase 5 — Shopping Cart ⬜

## Objective

Implement a lightweight client-side shopping cart.

The cart must remain compatible with:

- Astro static output
- GitHub Pages
- No backend

Storage:

```
localStorage
```

---

# Task 5A — Cart Architecture ⬜

## Objective

Create the cart data model and utility layer.

Create:

```
src/types/cart.ts

src/utils/cart.ts
```

---

## Requirements

Support:

- Add item
- Remove item
- Update quantity
- Clear cart
- Load cart
- Save cart

Cart items store:

- Collection
- Product
- Configuration
- Quantity
- Notes

Example:

```ts
{
  productId,
  collectionId,
  title,
  quantity,
  customizationValues,
  notes
}
```

---

## Acceptance Criteria

✅ Cart architecture exists  
✅ No UI yet  
✅ Build succeeds  

---

# Task 5B — Add To Cart Integration ⬜

## Objective

Connect product pages with cart functionality.

---

## Requirements

Product pages support:

- Add to Cart button
- Dynamic form value capture
- Quantity
- Notes

Store:

- Product data
- Customization choices
- Quantity

---

## Acceptance Criteria

Customer can add customized products to cart.

---

# Task 5C — Cart UI ⬜

## Objective

Create customer cart experience.

Create:

```
src/pages/cart.astro

src/components/cart/
```

---

## Requirements

Implement:

- Cart icon
- Cart item list
- Product details
- Customizations
- Quantity controls
- Remove item
- Clear cart
- Empty state

---

## Acceptance Criteria

Customer can review and modify cart.

---

# Task 5D — Cart Polish ⬜

## Objective

Improve cart reliability and user experience.

Add:

- Cart item count
- Better empty states
- Duplicate item handling
- Navigation integration
- Persistence improvements

---

## Phase 5 Acceptance Criteria

Customer can:

1. Browse collections
2. Select products
3. Customize products
4. Add multiple items
5. Review cart

---

# Phase 6 — Checkout ⬜

## Objective

Create a static-site-compatible checkout flow.

No:

- Payment
- Stripe
- Backend
- User accounts

---

# Task 6A — Checkout Page ⬜

Create:

```
src/pages/checkout.astro
```

---

## Collect Customer Information

- Name
- Email
- Phone
- Preferred Contact Method
- Preferred Pickup Date
- Additional Notes

---

## Display

- Cart items
- Quantities
- Customizations

---

# Task 6B — Order Payload Generation ⬜

## Objective

Create structured order data.

Example:

```ts
{
  customer,
  items,
  notes,
  createdAt
}
```

Each item contains:

- Product
- Collection
- Quantity
- Customization values
- Notes

---

# Task 6C — Order Submission Preparation ⬜

Prepare final submission method.

create src/utils/submission.ts
Responsibilities:

validate order exists
prepare JSON payload
send POST request
return success/error result
Checkout Page
      |
      ↓
submission.ts
      |
      ↓
Order Handler Endpoint
      |
      ↓
Google Apps Script
      |
      ├── Email notification
      |
      └── Google Sheet order log

Possible options:

- Email submission
- GitHub-compatible form handling
- External form service

No backend required.

---

# Task 6D — Checkout Completion ⬜

## Acceptance Criteria

Customer can:

1. Browse collections
2. Select products
3. Customize products
4. Add multiple products to cart
5. Review cart
6. Enter customer information
7. Generate one complete order request

Website remains:

✅ Static  
✅ Free to host  
✅ GitHub Pages compatible