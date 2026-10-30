# OXYGEN — makeover matters

Responsive editorial salon UI built with React, TypeScript and Vite. No UI framework or animation dependency.

## Run

```sh
npm install
npm run dev
```

`npm run build` checks TypeScript and creates the production `dist/` folder. `npm run preview` serves that build locally.

## Replace the illustrative content

- `src/data.ts`: service categories, sample service menu, durations, null prices, staff profiles, gallery, salon contact information and texture variants.
- `src/booking.ts`: replace the local adapter with an approved booking endpoint. It currently sends nothing and explicitly reports that booking is unavailable. Keep server-side validation and availability checks when integrating a backend.
- `src/main.tsx`: named, independent section components and shared UI primitives.
- `src/style.css`: palette, typography, responsive compositions and motion rules.

All customer and staff photos are Unsplash editorial placeholders, not photographs of Oxygen customers or employees. Replace with salon-approved images and accurate alt text before public launch. All staff names and contact details remain unfilled. Prices use `null` and display `₹—`. The sample menu and indicative durations require salon approval.

Google Fonts provides Newsreader and Courier Prime. Photography uses responsive Unsplash URLs; below-fold images lazy-load. These external assets require an internet connection.

## Interactions

The service preview selects the corresponding rates category. Rates use accessible pressed-state selectors. The texture selector redraws a measured SVG path on entry and on selection. The mobile menu supports Escape. Booking fields have native required, email, phone and date validation, dependent service options and explicit female-only acknowledgement.

Scroll motion is position-bound and reversible. Entry transforms reveal once. Reduced-motion users see all content immediately, with the travelling comb hidden. The comb also hides on mobile.

The site starts private on Sites. Hosting identity is saved in `.openai/hosting.json`; preserve it on updates.
