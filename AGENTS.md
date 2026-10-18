# AGENTS.md — Engineering Standards for A.U.T.O.M.A.T.E. (Tier 1)

## Role & Project Mandate
You are working on **A.U.T.O.M.A.T.E.**, an elite digital engineering studio building websites, e-commerce platforms, web applications, and custom software.
The project is a **Tier 1: Mini-Website** consisting of exactly two pages:
1. `index.html` — High-converting, light-mode engineering lab landing page.
2. `start.html` — Interactive, 4-step project brief registration form.

**The Primary Directive**: Get a qualified visitor to complete and submit a comprehensive project brief. Every line of copy, layout decision, micro-interaction, and button must guide the visitor toward this conversion without friction.

---

## Standing Invariants (Non-Negotiable)

### 1. Hard Rules (Strict Scope Fences)
* **Two Pages Only**: `index.html` and `start.html`. Do not generate blogs, login portals, user dashboards, or multi-screen wizards.
* **Light Mode Architecture**: White `#FFFFFF` page background with `#F8FAFC` surface cards. No dark mode toggle. The only dark element is the final CTA card (`#0F172A`).
* **Technical Stack Lock**: Plain HTML5, Tailwind CSS (via CDN), vanilla ES6+ JavaScript, and Lucide Icons. No React, no Vite, no npm build steps, no jQuery.
* **Locked Color Palette**: Use only the designated hex codes in `context/design-tokens.md`. No unauthorized gradients or arbitrary colors.
* **Every "Get Started" Button**: Nav, hero, service cards, and final banner buttons MUST navigate directly to `start.html`. No modals or page jumps.

### 2. The Anti-Pill / Anti-Badge Law
* **BANNED**: Rounded badge pills, emoji chips, or rainbow taglines above headings (e.g. `[✨ OUR SERVICES]`, `[🚀 WHY US]`).
* **ENFORCED**: Pure, commanding typographic hierarchy using semantic heading tags (`h1`, `h2`, `h3`). Technical category tags must be rendered as crisp, unrounded uppercase metadata labels (`0.75rem`, `letter-spacing: 0.08em`, `JetBrains Mono` or `Inter`).

### 3. Single-Knob Global CSS Cascade
* All theme tokens must be defined as CSS variables in a single `:root` block in `assets/css/styles.css` and mapped into `tailwind.config` via inline script.
* Modifying a single token (e.g. `--accent` or `--ink`) must cascade app-wide across all cards, buttons, rings, and borders without manual inline utility rewrites.

### 4. Zero Invented Social Proof & Explicit Placeholder Flagging
* Do NOT invent real-sounding client companies, testimonials, or fake metrics (e.g., "Increased sales by 340%").
* Use the three structured placeholder cards flagged with `<!-- REPLACE WITH REAL TESTIMONIAL -->` and visual "Placeholder" tags.
* All client quotes are stored in a dedicated array at the top of `assets/js/main.js` for instant single-point updating.

### 5. Accessibility Baseline (WCAG 2.2 AA)
* Cyan `#06B6D4` is strictly restricted to borders, large graphic elements, glows, and icons. Never use cyan body-size text on white. Use `--accent-deep: #0E7490` for text contrast compliance (≥4.5:1).
* Visible focus indicators (`focus-visible`) must use a 3px `--accent` outline with a 2px offset.
* Form labels must be explicit HTML `<label>` elements linked via `id`/`for`. Placeholders are never labels.
* Respect `prefers-reduced-motion`: disable typewriter loops, border-glow animations, and line drawing transitions.

### 6. Observability & Defensive Scripting
* Embed lightweight Sentry browser telemetry via CDN script to catch runtime errors in production.
* Wrap all `localStorage` draft-saving operations in `try/catch` to gracefully support private browsing modes.
* Sanitize all user reflections on the success screen using `.textContent` (never `.innerHTML`).

---

## Context Suite Reading Protocol
Before drafting or modifying any code, consult the context files in this strict sequence:
1. `context/site-overview.md` — Product mission, target persona, synthesized UX research, JTBD, and conversion flow.
2. `context/design-tokens.md` — Design system, locked color tokens, typographic scale, and motion contracts.
3. `context/page-specs.md` — Atomic component specifications, section wireframes, form fields, and exact human copy.
4. `context/build-checklist.md` — Responsive breakpoints, WCAG checklist, SEO schemas, and definition of done.
5. `context/progress-tracker.md` — Phase status and decisions log.
