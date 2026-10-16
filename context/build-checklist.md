# Build Checklist: Elfort Dental Clinic

**Scope:** The deterministic Definition of Done for Elfort Dental Clinic. The page cannot be declared production-ready until every item below is audited and verified.

---

## 1. The 5-Second Test
- [ ] **Instant Comprehension:** A new visitor can immediately state what the service is in under 5 seconds (*"In-home private dental care"*).
- [ ] **Target Audience Recognition:** Busy executives, parents, anxious patients, and mobility-limited seniors immediately self-identify.
- [ ] **Unmistakable Next Step:** Primary action is prominently visible above the fold and repeatedly accessible (*"Request a Home Visit on WhatsApp"*).

---

## 2. Multi-Device Responsiveness Floor
- [ ] **375px Mobile Viewport:** Checked on small screens (iPhone SE / 375px width). Zero horizontal overflow or cut-off words.
- [ ] **Touch Target Integrity:** Every button, accordion trigger, and link has a minimum bounding box of `44x44px`.
- [ ] **Mobile Overlap Elimination:** Floating desktop concierge button is verified hidden below `md` (`hidden md:flex`), preventing collision with the persistent mobile bottom bar.
- [ ] **Fluid Typography:** Text scales gracefully between 375px, 768px, and 1280px+ viewports without clipped line-heights.

---

## 3. Accessibility & Contrast (WCAG 2.1 AA Baseline)
- [ ] **Primary Button Contrast:** WhatsApp CTA buttons achieve ≥ 4.5:1 contrast against their background (Forest Green `#128C4A` with white text = 4.8:1, or Bright Green `#25D366` with dark text `#0B3D1E` = 8.6:1).
- [ ] **Gold Accent Contrast:** All text and labels in gold use text-safe primary `#775A19` (≥ 4.9:1 on `#FAFAF9`), while `#C5A059` is reserved strictly for borders, icons, and decorative elements.
- [ ] **Body Copy Contrast:** Muted truffle body text `#57534E` achieves ≥ 5.2:1 contrast against `#FAFAF9`.
- [ ] **Semantic HTML:** Pure semantic structure (`<header>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`). Zero unstyled `<div>` buttons.
- [ ] **Keyboard Navigation:** All interactive elements support Tab navigation with distinct, visible `focus-visible` outlines.
- [ ] **Screen Reader & Alt Text:** All imagery features descriptive `alt` attributes (no empty `data-alt` tags). Decorative SVGs use `aria-hidden="true"`.
- [ ] **Accessible Accordion:** FAQ triggers use `aria-expanded`, `aria-controls`, and `role="region"`.

---

## 4. Single-Knob Global CSS Cascade Verification
- [ ] **Global Variable Mapping:** All color tokens are defined as CSS variables at `:root` in `globals.css` and mapped to Tailwind configuration.
- [ ] **Figma Webhook / Single-Knob Test:** Changing `--primary` or `--radius-lg` in `globals.css` cascades instantaneously across every Atom, Molecule, and Organism without manual component edits.
- [ ] **Zero Hardcoded Colors:** No raw hex codes (`#25D366`, `#1C1917`) or raw Tailwind color classes (`bg-blue-600`) appear inside component templates.

---

## 5. Performance & Core Web Vitals
- [ ] **Largest Contentful Paint (LCP):** < 1.5 seconds on simulated 4G mobile connections.
- [ ] **Cumulative Layout Shift (CLS):** < 0.1 (All images and icons declare explicit aspect ratios / dimensions).
- [ ] **Interaction to Next Paint (INP):** < 150ms.
- [ ] **Asset Optimization:** Hero images self-hosted, converted to WebP/AVIF with responsive `srcset` and lazy loading on below-the-fold assets.
- [ ] **Icon Tree-Shaking:** Self-contained Lucide icons replace heavy dual-request Material Symbols font downloads.
- [ ] **Reduced Motion Support:** `@media (prefers-reduced-motion: reduce)` disables non-essential animations and pulsing rings.

---

## 6. Observability & Crash Prevention
- [ ] **Sentry Browser SDK:** Initialized with environment and release tags to monitor uncaught client exceptions in production.
- [ ] **Error Boundary:** Top-level Error Boundary protects against unexpected rendering crashes with graceful fallback copy.

---

## 7. SEO & Compliance Foundations
- [ ] **Metadata:** Unique title (`<title>Elfort Dental Clinic | Private In-Home Concierge Care</title>`) and compelling meta description (< 155 chars).
- [ ] **OpenGraph:** Social share image (`og:image`), title, and description configured.
- [ ] **Structured Data:** `LocalBusiness` / `Dentist` JSON-LD schema with areaServed, priceRange, telephone, and openingHours.
- [ ] **Medical & Emergency Disclaimers:** Clear notice redirecting severe trauma/bleeding to local emergency services ([911]).
- [ ] **Clean WhatsApp Links:** All WhatsApp URLs properly encode query parameters (`wa.me/[PHONE]?text=...`).
