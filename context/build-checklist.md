# Build Checklist & Quality Gate — A.U.T.O.M.A.T.E. (Tier 1)

## 1. Multi-Device Responsiveness (Zero Horizontal Overflow)

- [ ] **360px (Small Android)**:
  - Navigation drawer opens cleanly without clipping.
  - Giant H1 wraps gracefully using `clamp()` without overflowing viewport width.
  - Service stack cards stack cleanly with `80px` sticky top offsets and zero clipped text.
  - Three liked/disliked website rows stack URL above reason.
- [ ] **390px (Modern iPhone)**:
  - Minimum tap target of 44×44px verified on all interactive buttons and chips.
  - Text inputs font size set to `16px` (`1rem`) to prevent iOS Safari auto-zoom on focus.
- [ ] **768px (Tablet)**:
  - Two-column hero grid displays with right-aligned text block and circuit background.
  - Form fields pair logically (Name & Business, Email & Phone side-by-side).
- [ ] **1024px (Small Laptop)**:
  - Sticky navigation bar shows full desktop links with active IntersectionObserver highlights.
  - Process section displays horizontal 3-step timeline with animated connector line.
- [ ] **1280px+ (Desktop & Ultrawide)**:
  - Container stays centered at `max-w-[1200px]` with balanced gutters.
  - Service cards display 2-column layout (content left, CSS mockup right).

---

## 2. WCAG 2.2 AA Accessibility Verification

- [ ] **Semantic Landmarks**:
  - Valid `<header>`, `<nav>`, `<main>`, `<section>`, and `<footer>` elements used on both pages.
  - Exactly one `<h1>` per page (`A.U.T.O.M.A.T.E.` on landing, `Tell us about your project` on registration).
- [ ] **Keyboard Navigation & Focus Management**:
  - "Skip to main content" link present as the very first focusable element on both pages.
  - Focus ring styled with 3px `--accent` outline and 2px offset (`ring-2 ring-cyan-500 ring-offset-2`).
  - Mobile menu traps focus when open and returns focus to the hamburger trigger on `Escape`.
  - Service cards and process steps navigable via keyboard tab index without hidden duplicate DOM traps.
- [ ] **Color Contrast Verification**:
  - Body text (`--ink: #0F172A`) on white: Contrast ratio **16.1:1** (Exceeds WCAG AAA).
  - Secondary text (`--ink-soft: #475569`) on white: Contrast ratio **5.2:1** (Passes WCAG AA).
  - Cyan text on white (`--accent-deep: #0E7490`): Contrast ratio **4.8:1** (Passes WCAG AA).
  - Decorative cyan (`--accent: #06B6D4`) quarantined strictly to borders, glows, and large graphics.
- [ ] **Screen Reader Compatibility**:
  - Animated typewriter visually hidden alternative provided with full static sentence.
  - Decorative icons and circuit background SVG marked with `aria-hidden="true"`.
  - Form error messages linked via `aria-describedby` and announced via `aria-live="polite"`.
  - Success screen moves focus to the success heading (`tabindex="-1"` + `.focus()`).
- [ ] **Motion Sensitivity (`prefers-reduced-motion: reduce`)**:
  - Typewriter animation halted; static text displayed.
  - Rotating conic-gradient border on hero CTA disabled.
  - Pulsing circuit nodes frozen.
  - Sticky card scale/dim scroll effects turned off.

---

## 3. Performance & Core Web Vitals (Target: 95+ Lighthouse)

- [ ] **Resource Budgets**:
  - Zero external CSS frameworks beyond Tailwind CDN script.
  - Zero heavy JavaScript libraries (no React, no jQuery, no Lodash, no GSAP).
  - Lucide icons loaded as lightweight SVG sprite or modern ES module.
  - Total external fonts: Only `Inter` and `JetBrains Mono` with `font-display: swap`.
  - Preconnect tags added for Google Fonts CDN.
- [ ] **Core Web Vitals Thresholds**:
  - **LCP (Largest Contentful Paint)**: < 1.2s (clean HTML markup, inline SVG circuit grid, no render-blocking external images).
  - **CLS (Cumulative Layout Shift)**: 0.0 (reserved min-height on typewriter container, explicit aspect ratios).
  - **INP (Interaction to Next Paint)**: < 100ms (all scroll and input handlers throttled with `requestAnimationFrame` or debounced).

---

## 4. Observability & Defensive Engineering

- [ ] **Lightweight Sentry Browser SDK**:
  - Initialized in `<head>` via official CDN snippet to track uncaught runtime crashes.
  - Release version pinned (e.g. `automate-web@1.0.0`).
- [ ] **Defensive Storage**:
  - `localStorage` operations wrapped in `try/catch` to prevent exceptions in private/incognito browsing modes.
- [ ] **XSS & Injection Protection**:
  - User name and brief summary reflections on the success screen injected strictly via `.textContent` (never `.innerHTML`).
- [ ] **Anti-Spam & Bot Traps**:
  - Honeypot field `website_url_confirm` configured off-screen with `tabindex="-1"` and `autocomplete="off"`.
  - Time-on-page submission validator rejecting submissions faster than 5 seconds.

---

## 5. SEO & Structured Data

- [ ] **Metadata**:
  - `index.html` Title: `"A.U.T.O.M.A.T.E. | Websites, Web Apps and Custom Software"` (<60 chars).
  - `index.html` Meta Description: Handcrafted, high-conversion summary (<160 chars).
  - `start.html` Title: `"Start Your Project | A.U.T.O.M.A.T.E."`.
- [ ] **OpenGraph & Twitter Cards**:
  - OpenGraph title, description, URL, and placeholder image specified.
- [ ] **Schema.org Structured Data**:
  - JSON-LD `Organization` and `WebSite` schemas embedded in `index.html`.
- [ ] **Crawl Configuration**:
  - Clean `robots.txt` and `sitemap.xml` included in root.

---

## 6. Handover Catalog ([YOUR INPUT] Placeholders)

Every item below is marked with `<!-- [YOUR INPUT] -->` in the codebase and requires final client confirmation:

| # | Item | Location | Default / Fallback |
|---|---|---|---|
| 1 | **Brand Logo SVG / Image** | `assets/img/logo.svg` / `<symbol id="automate-logo">` | Bespoke inline AE monogram SVG with circuit dots |
| 2 | **Location / Est. Caption** | `index.html` (Hero left column) | `"EST. 2024 — Lagos, Nigeria"` |
| 3 | **Hero Taking Projects Badge** | `index.html` (Hero right column) | `"Now taking new projects"` (with pulsing cyan node) |
| 4 | **Trust Row Metrics** | `index.html` (`#stories` section) | Omitted by default until verified numbers provided |
| 5 | **Real Client Testimonials** | `assets/js/main.js` (`TESTIMONIALS` array) | 3 structured placeholder cards with gray badge tag |
| 6 | **FAQ Pricing & Timelines** | `index.html` (FAQ details #1 and #2) | Standard market ranges (2–3 wks websites, 4–8 wks apps) |
| 7 | **Contact Email & Phone** | `index.html` (`#contact` card) | `hello@automate.build` / `+234...` |
| 8 | **WhatsApp Direct Link** | `index.html` (`#contact` card) | `https://wa.me/2340000000000?text=Hello%20A.U.T.O.M.A.T.E.` |
| 9 | **Social Handles** | `index.html` & `start.html` (Footer) | Twitter/X, GitHub, LinkedIn links |
| 10| **Budget Range Options** | `start.html` (Section 4 Select) | Multi-tier ranges in USD / NGN |
| 11| **Live Form Submission Endpoint**| `assets/js/main.js` (`FORM_CONFIG.endpoint`) | `null` (Simulates 1200ms delay and local brief summary) |
