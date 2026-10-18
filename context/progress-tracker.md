# Progress Tracker & Decisions Log — A.U.T.O.M.A.T.E. (Tier 1)

## 1. Project Health & Lifecycle Status

* **Project**: A.U.T.O.M.A.T.E. High-Conversion Website & Registration Funnel
* **Architecture**: Tier 1: Mini-Website (2 Pages: `index.html` + `start.html`)
* **Operational Scope**: Bootstrapped Lean Launch ($0/mo recurring infrastructure burn)
* **Governing Rules**: `AGENTS.md` (Locked in root)
* **Context Suite**: 4-File Lean Suite Locked (`site-overview.md`, `design-tokens.md`, `page-specs.md`, `build-checklist.md`)
* **Current Stage**: Kickoff Complete -> Awaiting Builder Approval to transition to `/architect` and Milestone 1 (Phase 1 Foundations).

---

## 2. Milestone Execution Roadmap

| Phase | Milestone | Scope | Status | Deliverables |
|---|---|---|---|---|
| **Phase 0** | **Kickoff & Context Suite** | Discovery, UX research synthesis, tokens, AGENTS.md, context specs | **COMPLETED** | `AGENTS.md`, `context/*.md` suite |
| **Phase 1** | **Foundations & Shell** | HTML boilerplate, Tailwind CDN config, CSS custom properties, fonts, `<head>`, inline logo symbol, navbar, footer, skip links | **READY** | `assets/css/styles.css`, shared shell markup |
| **Phase 2** | **Hero Section** | Inline SVG circuit grid with pulsing nodes, right-aligned typography, cycling typewriter engine, glowing CTA button | **PENDING** | `index.html` hero block, `initTypewriter` |
| **Phase 3** | **Services Stack** | 4 sticky stacked cards (`#services`), pure CSS UI mockups (browser, store, dashboard, network), RAF-throttled scroll scale/dim enhancement | **PENDING** | `index.html` services block, `initServiceStack` |
| **Phase 4** | **Process, Stories, FAQ & Contact** | 3-step SVG connector line trace, 3 placeholder testimonial cards, 5 native details/summary FAQ items, split contact card + dark ink CTA banner | **PENDING** | `index.html` sections 4–7, `initProcessLine`, `initFaq` |
| **Phase 5** | **Registration Form Page** | `start.html` layout, 4-section field architecture, sticky progress indicator, visible labels, live character counters, tone suggestion chips, Drive link guide | **PENDING** | `start.html` markup, `initFormCounters`, `initChips` |
| **Phase 6** | **Form Engine, Drafts & Submission** | Client-side validation engine, debounced `localStorage` draft saving + restore banner, honeypot bot trap, drop-in `FORM_CONFIG`, animated success state with "Copy my brief" clipboard engine | **PENDING** | `initFormValidation`, `initFormDraft`, `submitBrief` |
| **Phase 7** | **Quality Assurance & Handover** | Responsive sweep (360px–1536px), WCAG 2.2 AA audit, reduced-motion pass, Core Web Vitals audit, SEO meta tags, `robots.txt`, `sitemap.xml`, Handover notes | **PENDING** | Clean repo, Lighthouse 95+ score |

---

## 3. Architectural Decisions Log (ADR)

### ADR-01: Tier 1 Mini-Website Scope Lock
* **Date**: 2026-10-18
* **Context**: The project consists of a high-converting landing page and an interactive project brief intake form.
* **Decision**: Adopt the Tier 1 Mini-Website framework (4 lean context files: `site-overview.md`, `design-tokens.md`, `page-specs.md`, `build-checklist.md`).
* **Rationale**: Eliminates the overhead of complex backend databases, auth states, and server migrations while locking in high-end design standards and WCAG AA accessibility.

### ADR-02: Hard Rule #3 Strict Compliance (Zero-Build Vanilla Architecture)
* **Date**: 2026-10-18
* **Context**: Client prompt strictly specified: "plain HTML, Tailwind CSS (via CDN), vanilla JavaScript, and Lucide icons. No React, no build step, no frameworks, no jQuery."
* **Decision**: Confirmed and locked. The application will be engineered in pure HTML5, vanilla ES6+ modules, Tailwind CDN with inline custom property mappings, and SVG sprite/CDN Lucide icons.
* **Rationale**: Near-zero maintenance, 100% portable, hostable on any static CDN (Cloudflare Pages, Vercel, GitHub Pages) for $0/month indefinitely.

### ADR-03: Single-Knob Global CSS Cascade in `:root`
* **Date**: 2026-10-18
* **Context**: Need a single source of truth for color and radius tokens that seamlessly works with Tailwind CSS.
* **Decision**: Declare all tokens as CSS custom properties in `:root` inside `assets/css/styles.css` and map them into `tailwind.config`.
* **Rationale**: Changing a single CSS custom property (e.g. `--accent`) updates all borders, glows, focus rings, and badges app-wide without touching individual HTML class attributes.

### ADR-04: The Cyan Contrast Quarantining (`--accent-deep`)
* **Date**: 2026-10-18
* **Context**: Cyan `#06B6D4` fails WCAG AA contrast (2.9:1) on white `#FFFFFF` for small and body text.
* **Decision**: Quarantined `#06B6D4` strictly to large graphics, borders, glowing halos, and icons. Introduced `--accent-deep: #0E7490` (4.8:1 contrast) for all cyan text on white surfaces.
* **Rationale**: Uncompromising accessibility compliance without sacrificing the vibrant cyber-engineering brand identity.

### ADR-05: Local-First Draft Persistence (`localStorage`)
* **Date**: 2026-10-18
* **Context**: A 13-field project brief suffers from high drop-off if users accidentally refresh, switch apps, or close tabs.
* **Decision**: Auto-save form values into `localStorage` (debounced 500ms) with a gentle restoration banner on reload.
* **Rationale**: Zero backend requirements, protects user time, and dramatically increases brief completion rates.
