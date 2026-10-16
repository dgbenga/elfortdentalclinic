# Aurelia Concierge Dentistry

> **Exceptional Dental Care, Delivered to Your Doorstep.**  
> High-end, conversion-focused landing page for a solo concierge home-service dentist.

---

## Overview

Aurelia Concierge Dentistry is a single-page, mobile-first conversion engine tailored for high-net-worth executives, families, and dental-phobic patients who value unhurried, clinical-grade dental care in complete privacy.

* **Tier:** Tier 1: Mini-Website
* **Conversion Engine:** Direct WhatsApp API integration (`wa.me`) with prefilled clinical service parameters.
* **Aesthetic Direction:** Direction A — "Quiet Luxury Editorial" (Instrument Serif + Plus Jakarta Sans + Geist Mono; Warm Stone `#FAFAF9`, Obsidian `#1C1917`, Champagne Gold `#C5A059`, Forest WhatsApp Green `#128C4A`).
* **Design Invariants:** Anti-Pill Law enforced, Zero AI-Slop / Zero Placeholder copy, single-knob CSS cascade in `globals.css`, shadcn/Radix atomic primitives.

---

## Repository Context Suite

This repository strictly adheres to the Silicon Valley Kickoff protocol. All creative, technical, and content decisions are locked in the `context/` directory:

* [`AGENTS.md`](./AGENTS.md) — Standing engineering invariants and non-negotiable rules.
* [`context/site-overview.md`](./context/site-overview.md) — PRD, Autonomous UX Research (JTBD, Personas, Pain Points, Verbatim Language), and conversion architecture.
* [`context/design-tokens.md`](./context/design-tokens.md) — CSS custom properties, WCAG AA contrast matrix, typography system, and 8pt spatial grid.
* [`context/page-specs.md`](./context/page-specs.md) — Atomic component decomposition (Atoms, Molecules, Organisms) and section-by-section human copy.
* [`context/build-checklist.md`](./context/build-checklist.md) — Deterministic Definition of Done (Responsiveness, a11y, Core Web Vitals, Sentry).

---

## Tech Stack (Planned)

* **Framework:** React 19 + Vite
* **Styling:** Tailwind CSS v4 + Vanilla CSS Custom Properties
* **Primitives:** Headless Radix UI + shadcn/ui atoms
* **Icons:** Lucide React (tree-shaken)
* **Observability:** Sentry Browser SDK
* **Hosting:** Cloudflare Pages / Vercel ($0/mo recurring infrastructure burn)
