# Oxygen — Makeover Matters

Responsive editorial salon UI built with React, TypeScript and Vite. No UI framework or animation dependency.

## Run

```sh
npm install
npm run dev
```

`npm run build` checks TypeScript and creates the production `dist/` folder. `npm run preview` serves that build locally.

## Replace the illustrative content

- `src/data.ts`: service categories, sample service menu, durations, null prices, gallery, salon contact information and texture variants.
- `src/booking.ts`: replace the local adapter with an approved booking endpoint. It currently sends nothing and explicitly reports that booking is unavailable. Keep server-side validation and availability checks when integrating a backend.
- `src/main.tsx`: application entry point; `src/App.tsx`: routes and shared layout.
- `src/style.css`: palette, typography, responsive compositions and motion rules.

All gallery photos are Unsplash editorial placeholders, not photographs of Oxygen customers. Replace with salon-approved images and accurate alt text before public launch. Contact details remain unfilled. Prices use `null` and display `₹—`. The sample menu and indicative durations require salon approval.

Google Fonts provides Newsreader and Courier Prime. Photography uses responsive Unsplash URLs; below-fold images lazy-load. These external assets require an internet connection.

## Interactions

The service slider links to category pages with expandable service details. Gallery filters use accessible pressed-state selectors. The texture selector redraws a measured SVG path on entry and on selection. The mobile menu supports Escape. Booking fields have native required, email, phone and date validation, dependent service options and explicit female-only acknowledgement.

Scroll motion is position-bound and reversible. Entry transforms reveal once. Reduced-motion users see all content immediately, with the travelling comb hidden. The comb also hides on mobile.

The site starts private on Sites. Hosting identity is saved in `.openai/hosting.json`; preserve it on updates.

## Interactive v2 (review branch)

React Router provides `/`, `/services`, `/services/:category`, `/makeovers`, `/about`, `/book`, and an unknown-route fallback. Configure production hosting to rewrite unknown paths to `index.html` for direct links; Vite dev and preview already support this.

The new implementation lives in `src/pages/`, `src/components/`, `src/sections/`, and `src/hooks/`. `src/data.ts` remains the single source of salon placeholder content. `src/style.css` defines the responsive structure; `src/v2.css` adds the dark theme and interactive layer.

The five-step booking flow accepts validated category/service search parameters and retains selections while moving back and forward between steps. It sends no requests and reports that the backend is not connected. Personal details stay in component memory and are not persisted.

`BeforeAfterSlider` supports mouse, touch and keyboard through a labelled native range input. The paired-image list remains empty until genuine pairs are supplied. Empty gallery categories show honest coming-soon states.

Opening motion runs once per session; reduced motion skips it. The native dialog-based mobile menu and lightbox provide focus containment and Escape handling. This branch is for review only; it has not been merged or deployed over the live site.

The review theme uses near-black, navy and antique gold. Split panels close for 350ms before routed content changes, then open for 400ms. Reduced motion switches content immediately. The staff feature has been removed.
