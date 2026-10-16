# CardCraft — Little cards. Big feelings.

Your CardCraft website rebuilt around nine real, editable vector templates, a polished card studio, and smooth navigation.

## Run locally

Extract the archive, open the `cardcraft` folder in VS Code or Antigravity, then run:

```sh
npm run dev
```

Open **http://localhost:3003**.

Node.js is required. There are no install-time dependencies, so `npm install` is optional. Use the included server rather than double-clicking index.html; fonts used by exports are fetched locally through HTTP. Port 3003 is used to avoid the other local projects from this session.

## All nine templates

| Wedding | Graduation | Invitations / events |
| --- | --- | --- |
| Botanical Vows — botanical cream and sage | The Next Chapter — navy and gold | After Hours — purple, stars, and a bold party layout |
| Modern Romance — blush, wine, and double arches | Class Act — geometric blue and white | Garden Gathering — botanical greens and flowers |
| Midnight Vows — stars, moon, and a night-sky arch | Golden Hour — warm sun and terracotta | Birthday Confetti — a playful coral birthday layout |

Each category has three complete templates. Choose one on the homepage or switch among the three in its studio. The “Keep my wording” checkbox controls whether switching templates retains your words or loads the new sample wording.

## Studio features

- Live text, names, message, venue, date, time, and finishing-note editing.
- Editable graduation year.
- Paper, text, and accent colors, five preset palettes, headline fonts, headline/message size, rounded corners, and background photo upload.
- Portrait, square, and landscape card formats.
- Undo/redo, preview zoom, fit-to-canvas, local autosave, and separate saved designs.
- My designs: reopen, duplicate, and delete cards.
- Keyboard support: Ctrl/Cmd+S saves; Ctrl/Cmd+Z and Shift+Ctrl/Cmd+Z use editor undo/redo outside text fields. Text inputs keep their native undo behavior.
- PNG, JPEG, and SVG exports without watermarks. Bundled fonts are embedded; Classic Georgia uses the system serif font.

## Handwritten signatures

Open a card studio and choose the new **Signature** tab, then **Draw your signature**.

- Draw using a mouse, finger, or stylus. This is actual freehand drawing, not a handwriting font.
- Choose an ink color and pen width. Match-card mode automatically uses the card’s text color, including after switching templates.
- Undo/redo individual strokes, clear the pad, or undo a clear. Use **Use this signature** to apply your mark; closing the pad discards unapplied edits.
- Drag the signature directly on the card, or use placement buttons and position sliders. Adjust its size and angle.
- Hide, edit, or remove it. Editor undo/redo also restores signature changes and movement.
- Signatures are preserved when switching templates and saved with local designs and recovery copies.
- Every PNG, JPEG, and SVG download includes the signature as vector artwork rendered at the selected output dimensions. Existing cards without signatures continue to work.

Touch scrolling is disabled only on the drawing surface and signature drag target. The pad uses Pointer Events and pointer capture, so strokes remain continuous when the pointer moves outside the pad. All handwriting stays locally on your device with the design. No signature service, account, or network upload is used.

Automated Chromium checks covered mouse strokes, trusted touch and pen input, stroke undo/redo, clear/undo clear, drag placement, editor undo/redo, save/reload, template switching, matching ink, removal/undo, responsive pad layout, modal scroll locking, and PNG/JPEG/SVG exports. Signed raster and vector outputs were inspected. Physical-device testing remains recommended before a public rollout.

## Downloads

PNG and JPEG export at twice the design size:

| Shape | Design dimensions | PNG / JPEG output |
| --- | --- | --- |
| Portrait | 800 × 1000 | 1600 × 2000 |
| Square | 800 × 800 | 1600 × 1600 |
| Landscape | 1000 × 700 | 2000 × 1400 |

Rounded PNG corners are transparent. JPEG fills the canvas with your selected paper color. SVG retains vector artwork and embedded bundled fonts. The templates use original SVG artwork drawn in code; no external stock images or image-generation service is required.

Downloads are suited to digital sharing and personal printing. Professional prepress features such as CMYK, printer bleed, and crop marks are not included. Check your wording and preview before sharing.

## Smoothness

- GSAP page transitions between the gallery, studios, and supporting pages, without full-page reloads.
- Animated template swaps, panel entrances, gallery filters, and download dialog.
- Smooth section navigation and desktop inertial scrolling using Lenis.
- Native touch scrolling and responsive studio layouts on mobile.
- Reduced-motion preferences are respected.

Animation libraries and fonts ship locally. There are no runtime CDN dependencies. All original public page filenames are retained: index.html, wedding.html, graduation.html, invitation.html, services.html, contact.html, and policy.html. drafts.html is new. Direct URLs work on static hosting.

## Saving and privacy

The app is fully client-side. Text, photos, and saved designs stay in local storage on the current browser/device; no account or server is required. The editor keeps a recovery copy per category, while **Save design** adds a separate entry to **My designs**. Changes to a saved design update that saved copy.

Gallery template links start a new design from that specific template. Opening a category without a template or draft URL restores its latest local recovery copy, if present. Clearing browser data removes local designs. Download anything important as a separate backup. Large photo collections may exceed browser storage; the app reports save failures.

The contact form prepares a mailto draft rather than sending anything to a server. support@cardcraft.com comes from the original project; verify or replace it before public use. No sample phone number or invented live service is displayed.

## Vercel deployment

Push the contents of `cardcraft` to the root of your GitHub repository. Import the repository into Vercel and choose **Other** as the framework. The included vercel.json sets:

- Build: `npm run build`
- Output directory: `dist`
- Environment variables: none

If using a larger repository, set its Root Directory to `cardcraft`. Netlify can use the same build command and `dist` publish directory. This archive is deployable source; it does not automatically publish a site.

## Main files

- `templates.js`: all nine template definitions and the shared vector renderer. Edit sample wording, colors, and artwork here.
- `app.js`: gallery, studio, navigation, editing, saved designs, undo/redo, photo processing, signature placement, and export.
- `signature.js`: vector handwriting renderer, mouse/touch/stylus pad, stroke undo/redo, ink controls, and signature editor panel.
- `style.css`: brand, layout, responsive rules, and motion styling.
- `assets/fonts/`: locally bundled fonts and licenses.
- `assets/vendor/`: GSAP, ScrollTrigger, Lenis, and notices.
- `server.cjs`: zero-dependency local HTTP server.
- `build.cjs`: creates the `dist` static build.
- `vercel.json`: Vercel configuration.

## Validation completed

Checked all eight pages at 320, 390, 768, 1024, 1440, and 1920 pixel widths. Verified nine templates, three per category, live editing, undo/redo, switching while retaining wording, saving/reopening/reloading, editable graduation year, card shapes, mobile navigation, and mobile editing. Downloaded and visually inspected PNGs from all nine templates and verified JPEG/SVG exports. A separate motion-enabled pass checked smooth navigation, template entry, image upload/removal, transparent rounded PNG corners, square/landscape exports, duplicate/delete actions, and dialog operation. No JavaScript errors or failed asset requests were observed. Production build passes.
