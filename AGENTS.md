# AGENTS.md — High-End Standards for Aurelia Concierge Dentistry (Tier 1)

## Why These Rules Exist

Marketing websites and landing pages for luxury private medical practices fail when built with AI defaults:
- **AI Slop**: Tacky pill-shaped badges above every heading (`[✨ OUR SERVICES]`), generic 3-column card grids, hollow buzzwords (*"seamless"*, *"cutting-edge"*), and unverified clinical claims.
- **Mobile Neglect**: Broken layouts on phone viewports (<375px), overlapping floating action buttons, and unreadable tap targets.
- **Copy Jargon Clashes**: Terrifying dental-phobic patients with cold hospital jargon (*"surgical suites"*, *"invasive triage"*).
- **Accessibility & Contrast Failures**: Unreadable white text on bright green buttons or gold text on cream backgrounds.

These rules hold all agents and developers to the standard of an award-winning digital creative studio.

---

## The Mini-Context Protocol

Before writing or modifying any HTML, CSS, or component code, **read the project's context files in this strict sequence**:
1. [`context/site-overview.md`](file:///context/site-overview.md) — What is being built, user persona mental models, synthesized User UX Research (JTBD, pain points, verbatim language), and conversion mandate.
2. [`context/design-tokens.md`](file:///context/design-tokens.md) — The locked Direction A "Quiet Luxury Editorial" token system, single-knob CSS variables in `globals.css`, typography scale, spacing system, and micro-interactions.
3. [`context/page-specs.md`](file:///context/page-specs.md) — Atomic layout definitions (Atoms, Molecules, Organisms), section-by-section wireframes, and finalized human copy (zero filler, Anti-Pill Law enforced).
4. [`context/build-checklist.md`](file:///context/build-checklist.md) — The Definition of Done: responsive 375px floor, WCAG 2.1 AA contrast, Sentry crash tracking, and Core Web Vitals (<1.5s LCP).

If any required context file is missing, **stop and flag it to the developer** rather than guessing.

---

## Standing Invariants (Non-Negotiable)

### 1. The Anti-Pill / Anti-Badge Law (Strictly Banned)
* **BANNED**: Placing rounded pill badges, emoji tags, or miniature uppercase chips above headings (e.g., `[✨ OUR SERVICES]`, `[🚀 PRIVATE DENTISTRY]`, or rounded border pills).
* **ENFORCED**: Clear, commanding typographic hierarchy. Use standard semantic tags (`h1`, `h2`, `h3`) styled with intentional scale, font weight, line-height, and tracking.
* An eyebrow label is ONLY permitted if it encodes real structural metadata (e.g., `MON-SAT 8AM–7PM` or `PRIVATE CONCIERGE CARE` in clean tracking without pill bubbles).

### 2. Zero-Placeholder & Human Copywriting Guarantee
* **BANNED**: `Lorem Ipsum`, `// TODO`, `feature title here`, or hollow AI buzzwords (*"seamless"*, *"cutting-edge"*, *"streamline"*, *"game-changing"*).
* **BANNED**: Terrifying surgical jargon (*"surgical suites"*, *"invasive triage"*) that induces dental anxiety.
* **ENFORCED**: Use the exact, pre-defined human copy from `context/page-specs.md`. Every sentence must read like it was drafted by a senior healthcare copywriter emphasizing gentleness, privacy, and clinical rigor.

### 3. shadcn/ui + Radix UI Atomic Foundation (Zero Component Guessing)
* **ENFORCED**: All interactive components must be built on **shadcn/ui** using headless **Radix UI** primitives. No component may ever be guessed, improvised, or built from unstyled divs.
* **The Atomic Principle**:
  - **Atoms**: Basic indivisible primitives (`Button`, `Separator`, `Avatar`, `AccordionTrigger`).
  - **Molecules**: Purpose-built combinations (`WhatsAppCTAButton`, `SectionHeader`, `ServiceCard`, `FAQItem`).
  - **Organisms**: Distinct composite sections (`HeroSection`, `ServicesSection`, `StickyHeader`, `FinalCTASection`).
* **Sprint Design System Immutability**: Any subsequent sprint addition or section must be assembled strictly from registered Atoms and Molecules without prompting.

### 4. Global CSS Single-Knob Cascading (Figma Webhook Parity)
* All theme tokens MUST be configured as CSS variables in `globals.css` (e.g. `--primary`, `--background`, `--card`, `--radius`, `--cta-whatsapp`) and wired to Tailwind.
* Changing a single color variable in `globals.css` must cascade instantaneously across every Atom, Molecule, and Organism app-wide—matching the behavior of a live Figma Tokens API / webhook updater. Hardcoded hex codes and raw Tailwind colors (`bg-blue-600`) are strictly banned in component markup.

### 5. Flawless Mobile Responsiveness (375px Floor)
* Every layout must be fully responsive down to `375px` viewport width without horizontal scrolling or squished typography.
* Touch targets must be at least `44x44px`.
* Overlapping fixed elements on mobile are strictly prohibited: the floating "Direct Concierge" button must be hidden on screens `< md` (`hidden md:flex`) so it never obscures the sticky bottom bar.

### 6. Accessibility Baseline (WCAG 2.1 AA)
* Text contrast must meet or exceed `4.5:1` for normal text and `3:1` for large text against all backgrounds.
  - Primary WhatsApp button must use `#128C4A` behind white text, or `#25D366` with dark text `#0B3D1E` (≥4.5:1).
  - Gold text on light backgrounds must use text-safe primary `#775A19` (≥4.5:1).
* All interactive elements must be keyboard-accessible with visible `focus-visible` styling. Never remove focus outlines without a custom replacement.
* All images must feature descriptive `alt` tags (`alt=""` only for purely decorative SVGs).
* Forms/inputs must use real `<label>` tags linked to inputs via `id`.

### 7. Observability & Crash Prevention
* Initialize lightweight **Sentry** browser monitoring to capture unexpected client runtime crashes and unhandled exceptions with release tracking.
* Target Core Web Vitals: LCP < 1.5s, CLS < 0.1, INP < 150ms.

---

## Execution Discipline

1. **Context Files are Law**: Never write code in `src/` until the 4 context files are locked.
2. **Build UI with Locked Tokens First**: Assemble the visual structure and typography using `design-tokens.md` and `page-specs.md`.
3. **Compose Atomics**: Build atoms first, combine into molecules, and assemble into organisms.
4. **Never Drift**: Do not invent new components or styling classes that conflict with the design tokens.
5. **Circuit Breaker**: If a visual layout or styling bug persists after ONE failed correction, **stop immediately**. Do not guess blindly with random CSS tweaks. Inspect the root layout tree and apply a surgical fix.
6. **Pre-Ship Verification**: Verify the page against `context/build-checklist.md` before claiming completion.
