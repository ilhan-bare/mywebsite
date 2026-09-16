# Maniza Perfume — Website Project

Dudai Fragrance & Modest Wear

## Student Information

- **Subject:** WEDE5020 — Web Design Fundamentals
- **Student Name:** Ilhan Bare
- **Student Number:** ST10528710
- **Group:** N/A (Individual Submission)

## Project Overview

Maniza Perfume is a small retail business trading in premium Dudai perfumes alongside a curated
range of modest Islamic clothing, including abayas for women and thobes for men. The business
previously had no online presence and relied entirely on foot traffic and word of mouth.

This project is a multi-page website built for Maniza Perfume so that customers can browse the
full perfume and clothing catalogue online, learn about the business, and send an enquiry or
place an order without needing to visit in person. The site is being developed in three parts
across the semester: Part 1 covered initiation, planning, content and basic HTML structure; Part 2
(this submission) adds a single external stylesheet, a consistent visual identity, and full
responsive behaviour for desktop, tablet and mobile; Part 3 will add interactivity and
refinement.

## Website Goals and Objectives

- Establish an online presence that showcases the full perfume and clothing catalogue to a wider
  audience than foot traffic alone allows.
- Generate qualified leads and sales enquiries through a simple, accessible enquiry form.
- Build customer trust through clear product information, professional presentation, and
  easy-to-find contact details.
- Provide an easy-to-navigate experience so visitors can move from browsing to enquiring with
  minimal friction, on any device.

**Key Performance Indicators (KPIs):**

- Number of enquiry form submissions per month.
- Average time on site / pages viewed per session.
- Growth in unique visitors month-on-month following launch.
- Bounce rate on the homepage.
- Mobile vs desktop visitor split, now that the site is fully responsive.

## Key Features and Functionality

- **Home** (`INDEX.HTML`) — hero introduction, featured perfumes and clothing, and the site's
  primary navigation.
- **About** (`PAGES/about.html`) — the story of Maniza Perfume, its mission and vision.
- **Perfumes** (`PAGES/perfume.html`) — the Dudai fragrance catalogue, now shown as a styled
  product card grid.
- **Islamic Clothing** (`PAGES/islamic-clothing.html`) — abaya and thobe catalogue with a
  filter bar, product cards, and pricing.
- **Enquiry** (`PAGES/enquiry.html`) — a form for visitors to ask about products or place an
  order, with a WhatsApp shortcut.
- **Contact** (`PAGES/contact.html`) — business contact details, trading hours, an embedded map,
  a quick-message form, and an FAQ section.
- **Floating WhatsApp button** — present on every page for a one-tap order shortcut.

## Design and User Experience

- **Colour Scheme:** Deep plum (`#6B2140`) and warm gold (`#C9A24B`) on a soft cream background
  (`#FBF6EC`), reflecting the elegance of both fragrance and modest fashion.
- **Typography:** A serif typeface (Georgia) used site-wide for both headings and body text, for
  a warm, elegant, boutique feel.
- **Layout:** CSS Grid for product card catalogues (4 columns on desktop), Flexbox for the header,
  navigation, and two-column content sections. A sticky header keeps navigation reachable while
  scrolling.
- **Interactive/visual detail:** hover and focus states on all links, buttons and form fields;
  card lift-and-shadow effect on hover; box-shadows for depth; a floating WhatsApp action button.

## Technical Requirements

- **Languages:** HTML5 (Part 1) and CSS3 (Part 2). JavaScript will be introduced in Part 3.
- **Stylesheet:** One external stylesheet, `CSS/style.css`, linked from every page — no inline or
  embedded styles were introduced for layout/visual rules.
- **Hosting:** Static hosting (Netlify).
- **Domain:** A `.co.za` or `.com` domain reflecting the business name.

## Responsive Design

The site uses a mobile-first-friendly, three-tier responsive approach:

| Breakpoint | Width | Behaviour |
|---|---|---|
| Desktop (default) | > 900px | 4-column product grids, 2-column content sections, horizontal nav |
| Tablet | ≤ 900px | 2-column product grids, content sections stack to 1 column |
| Mobile | ≤ 600px | Single-column product grids, navigation stacks vertically below the logo, floating WhatsApp button collapses to icon-only |

Techniques used: CSS Grid with `auto-fit`/`minmax()` for naturally reflowing product grids,
`clamp()` for fluid heading sizes, relative units (`rem`, `%`) for spacing and widths, and media
queries at the two breakpoints above.

**Screenshot evidence (desktop / tablet / mobile):**

> _Add screenshots here before final submission — e.g. `ASSETS/screenshots/home-desktop.png`,
> `home-tablet.png`, `home-mobile.png`. Browser developer tools (responsive design mode) can be
> used to capture each screen size._

## Sitemap

All secondary pages sit one level below the homepage in the navigation:

```
Home (INDEX.HTML)
├── About (about.html)
├── Perfumes (perfume.html)
├── Islamic Clothing (islamic-clothing.html)
├── Enquiry (enquiry.html)
└── Contact (contact.html)
```

## File and Folder Structure

```
mywebsite/
├── INDEX.HTML
├── PAGES/
│   ├── about.html
│   ├── perfume.html
│   ├── islamic-clothing.html
│   ├── enquiry.html
│   └── contact.html
├── CSS/
│   └── style.css        (single external stylesheet, linked from every page)
├── ASSETS/               (product photos, logo)
└── README.md
```

## Timeline and Milestones

| Milestone | Status |
|---|---|
| Organisation selection & proposal approval | Complete |
| Content research and sourcing | Complete |
| File and folder structure set up | Complete |
| HTML structure and navigation for all pages (Part 1) | Complete |
| Part 1 feedback corrections implemented | Complete |
| External stylesheet created and linked to all pages (Part 2) | Complete |
| Base styles, typography and layout (Part 2) | Complete |
| Visual styling — colour, shadow, hover/focus states (Part 2) | Complete |
| Responsive design — breakpoints, relative units, fluid grids (Part 2) | Complete |
| Cross-device testing and screenshot evidence (Part 2) | In progress |
| Interactivity and refinement (Part 3) | Upcoming |

## Part 1 Details

Part 1 covered project initiation and planning: the Website Project Proposal, content research
and sourcing, and the initial set of HTML files with a working navigation system across all six
pages.

## Part 2 Details

Part 2 (this submission) focuses on visual design and responsiveness:

- Created one external stylesheet (`CSS/style.css`) and linked it from every page — no page uses
  embedded `<style>` blocks for layout or visual rules.
- Established a consistent base style (typography, colour variables, spacing, box-sizing reset)
  applied site-wide via CSS custom properties.
- Applied typographic styling (font sizing with `clamp()`, line-height, letter-spacing) for
  headings and body text.
- Built the desktop layout using CSS Grid (product card catalogues) and Flexbox (header,
  navigation, two-column sections), minimising the number of selectors needed by relying on the
  cascade (e.g. a single `.btn` class shared by every button-style link, extended by `.btn-plum`
  / `.btn-gold` modifiers).
- Applied decorative/visual styling: colour, background-color, border, box-shadow, and
  `:hover` / `:focus` / `:active` states on links, buttons and form fields.
- Implemented responsive design with two breakpoints (900px, 600px), relative units, and
  responsive product grids that reflow from 4 → 2 → 1 columns.
- Standardised the previously plain Home, About and Perfumes pages onto the same header/footer/
  hero structure already used by Contact, Enquiry and Clothing, so the stylesheet applies
  consistently across the whole site.

## Changelog

### Part 2

- **2026-09-16** — Created `CSS/style.css` and linked it from every page in the site.
- **2026-09-16** — Rebuilt `INDEX.HTML`, `about.html` and `perfume.html` to use the same
  `site-header` / `page-hero` / `site-footer` structure already used on the Contact, Enquiry and
  Clothing pages, so styling is consistent across the entire site.
- **2026-09-16** — Added a responsive CSS Grid product catalogue (4 → 2 → 1 columns) to the
  Home, Perfumes and Clothing pages.
- **2026-09-16** — Applied the site's colour palette, typography, box-shadows, and hover/focus
  states across all buttons, links, form fields and cards.
- **2026-09-16** — Added two responsive breakpoints (900px tablet, 600px mobile) covering
  navigation, grids, two-column sections, and the footer.
- **2026-09-16** — Added `viewport` meta tag to `INDEX.HTML` (missing in Part 1), required for
  responsive scaling on mobile devices.
- **2026-09-16 (Part 1 feedback correction)** — Moved all product/logo images from the repository
  root into `ASSETS/`, matching the paths the HTML already expected, fixing broken images.
- **2026-09-16 (Part 1 feedback correction)** — Removed duplicate `about.html`, `contact.html`
  and `islamic-clothing.html` files that were left in the repository root instead of `PAGES/`.
- **2026-09-16 (Part 1 feedback correction)** — Fixed a filename typo (`perfume,html` →
  `perfume.html`) that was preventing the Perfumes page from being recognised as an HTML file.
- **2026-09-16 (Part 1 feedback correction)** — Removed a leftover, unused nested folder from the
  repository root.
- **2026-09-16** — Replaced illustrative "Photo:" placeholder tiles with real product photos on
  the Clothing page wherever a matching image exists (Black Abaya, Purple Abaya, Beige Thobe,
  White Thobe); jilbab and prayer-wear tiles remain as clearly-labelled placeholders pending
  photos.
- **2026-09-16** — Removed a homepage product tile ("Golden Musk") that referenced an image file
  that was never actually added to `ASSETS/`; to be reinstated once the photo is supplied.

### Part 1

- **2026-08-15** — Set the real WhatsApp number (+27 73 964 9791) across all "Order on
  WhatsApp" links, the enquiry page, and the contact page, replacing placeholder numbers.
- **2026-08-14** — Renamed `islamic  clothing.html` (contained a double space) to
  `islamic-clothing.html` and updated all navigation links accordingly.
- **2026-08-14** — Fixed inconsistent/broken navigation links across pages (`index.html` →
  `../INDEX.HTML`, and mismatched-case footer links on the Clothing page).
- **2026-08-14** — Removed dead references to a stylesheet/script (`css/style.css`,
  `js/script.js`) that did not yet exist; reintroduced properly in Part 2.
- **2026-08-14** — Renamed an image file so its casing matches the reference used in `INDEX.HTML`.
- **2026-08-14** — Added explanatory HTML comments to every page (header, navigation, main
  content, footer).
- **2026-08-14** — Expanded README to cover goals/objectives, KPIs, sitemap, timeline, and
  changelog as required for Part 1.

## References

- MDN Web Docs. (n.d.). *CSS: Cascading Style Sheets*. Mozilla. Retrieved September 2026, from
  https://developer.mozilla.org/en-US/docs/Web/CSS
- MDN Web Docs. (n.d.). *CSS Grid Layout*. Mozilla. Retrieved September 2026, from
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- MDN Web Docs. (n.d.). *Using CSS flexible boxes*. Mozilla. Retrieved September 2026, from
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout
- MDN Web Docs. (n.d.). *Using media queries*. Mozilla. Retrieved September 2026, from
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
- Google Fonts. (n.d.). *Google Fonts*. Retrieved August 2026, from https://fonts.google.com
- MDN Web Docs. (n.d.). *HTML: HyperText Markup Language*. Mozilla. Retrieved August 2026, from
  https://developer.mozilla.org/en-US/docs/Web/HTML
- [Insert any organisation-specific references used for Maniza Perfume content, per your
  institution's referencing style.]

---
© 2026 Maniza Perfume. All rights reserved.
