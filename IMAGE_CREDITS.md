# Editorial photography credits

These images are stock/editorial inspiration, not Oxygen Salon clients, treatments, testimonials or before-and-after results. No affiliation or endorsement is implied. Authentic before/after pairs remain empty.

Six additions were checked against their original Unsplash pages on 2026-11-16. Each page states **Free to use under the Unsplash License** (not Unsplash+). License: https://unsplash.com/license . Credits are also linked from the gallery and lightbox.

| Local asset prefix | Photographer | Original source |
| --- | --- | --- |
| curls | Honey Yanibel Minaya Cruz | https://unsplash.com/photos/woman-with-curly-hair-gm5naIg3Fvo |
| bridal | Raju Kumar | https://unsplash.com/photos/a-bride-is-having-her-makeup-applied-gkLzTqe2aoE |
| manicure | Chelson Tamares | https://unsplash.com/photos/hand-with-light-pink-manicured-nails-vtQHwU4F13s |
| skin | Iwaria Inc. | https://unsplash.com/photos/a-woman-getting-a-facial-mask-on-her-face-TLLro7iVLtk |
| nail-art | Budka Damdinsuren | https://unsplash.com/photos/womans-nails-with-manicure-jRXxNpA6d_k |
| makeup | hosein zanbori | https://unsplash.com/photos/a-woman-with-a-pink-and-purple-make-up-on-her-face-0o4QY48B-r0 |

The assets in `public/images/editorial/` are cropped WebP derivatives at 480, 960 and 1440 pixels wide, quality 78. Responsive srcset selects the appropriate size; the lightbox uses the 1440px version. Total for all 18 variants: approximately 2.44 MB (not downloaded together). The four inherited gallery photos still use the existing responsive Unsplash URLs from `src/data.ts`; their homepage and hero use is unchanged.

## Implementation notes

`src/galleryData.ts` defines only the dedicated Makeovers collection. `EditorialPhotoCard` measures natural card height with ResizeObserver to reserve masonry grid spans. Tilt writes CSS variables at most once per animation frame; listeners/frames/observers are cleaned up. Text and surrounding cards do not move. Touch, reduced-motion and keyboard users can open the same native lightbox without hovering.

The prior local project had native CSS cursors only, no custom follower/trail implementation. `src/cursor.css` styles this single cursor path with a small SVG. No JavaScript overlay or cursor loop is added. Native text, form, resize, disabled and forced-colour/reduced-motion cursors remain available.
