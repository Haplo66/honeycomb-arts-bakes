# Honeycomb Arts & Bakes

A static Astro website for an artisan bakery and handmade studio. It is designed for GitHub Pages and uses no client-side framework or unnecessary JavaScript.

## Run locally

```bash
npm install
npm run dev
```

The site runs at the URL shown by Astro. For this project’s background workflow, use `astro dev --background` and manage it with `astro dev status`, `astro dev logs`, and `astro dev stop`.

## Build

```bash
npm run build
```

The static production site is written to `dist/`.

## Deploy to GitHub Pages

1. Replace `YOUR_GITHUB_USERNAME` in `astro.config.mjs` with the GitHub account or organization that owns the repository. If you rename the repository, update the `base` value too.
2. Push the `main` branch to GitHub.
3. In the repository settings, open **Pages** and set the source to **GitHub Actions**.
4. The included workflow builds and publishes the site on each push to `main`.

## Updating content

- Replace the editorial color panels with real photography when available.
- Update gallery items in `src/data/gallery.ts`.
- Replace placeholder testimonials in `src/data/testimonials.ts` with customer-approved quotes.
- Connect the contact form in `src/components/ContactForm.astro` to your preferred form handler.
