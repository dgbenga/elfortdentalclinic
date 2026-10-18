# Design Tokens & Visual Architecture — A.U.T.O.M.A.T.E. (Tier 1)

## 1. Creative Direction: "Engineering Lab Precision"
The visual identity of **A.U.T.O.M.A.T.E.** is anchored in mathematical clarity, architectural balance, and scientific minimalism. Think of an advanced hardware research facility or a precision instrument interface—crisp white surfaces, deep slate ink, razor-sharp 1px dividers, and high-frequency cyan telemetry highlights.

**Key Aesthetic Principles**:
* **Light Theme Supremacy**: 100% white and light slate canvases. Light mode is inherently unforgiving of bad alignment and sloppy typography; our precision execution turns this into a high-trust competitive advantage.
* **Typographic Authority**: High-contrast heading hierarchy. Banning rounded novelty badges; metadata is communicated through uppercase tracking and mono accents.
* **Dynamic Restraint**: Animations are purposeful and functional (drawing circuit traces, stacking cards, cycling typewriter terms). Nothing bounces, floats, or distracts.

---

## 2. Locked Color Tokens (CSS Custom Properties)

All colors are declared once in `assets/css/styles.css` under `:root` and mapped directly into the Tailwind configuration. Changing a single custom property cascades globally across all components.

```css
:root {
  /* Surface & Canvas */
  --bg: #FFFFFF;             /* Crisp page canvas */
  --surface: #F8FAFC;        /* Slate-50: Cards, alternating sections, form inputs */
  --line: #E2E8F0;           /* Slate-200: 1px geometric borders, dividers, grid lines */

  /* Text & Ink */
  --ink: #0F172A;            /* Slate-900: High-contrast headings, body text, primary buttons */
  --ink-soft: #475569;       /* Slate-600: Secondary text, descriptions (passes 4.5:1 on white) */

  /* Telemetry & Accent (Cyan Spectrum) */
  --accent: #06B6D4;         /* Cyan-500: Highlights, borders, active focus rings, button glow halos */
  --accent-deep: #0E7490;    /* Cyan-700: Small text on white (passes WCAG AA 4.5:1 contrast) */
  --accent-glow: rgba(6, 182, 212, 0.25); /* Cyan glow spread for interactive hover states */

  /* State & Feedback */
  --success: #10B981;        /* Emerald-500: Form success checkmark and draft restored state */
  --error: #DC2626;          /* Red-600: Form validation errors and required alert tags */

  /* Radii */
  --radius-sm: 8px;          /* Badges and chip inputs */
  --radius-md: 12px;         /* Buttons and form fields */
  --radius-lg: 16px;         /* Service cards, testimonial blocks, contact containers */
  --radius-full: 9999px;     /* Pill avatars and dot indicators only */
}
```

### Contrast & Accessibility Invariant
> [!IMPORTANT]
> **The Cyan Text Contrast Rule**: `--accent` (`#06B6D4`) has a contrast ratio of only **2.9:1** against white `#FFFFFF`, which FAILS WCAG AA for body text. Therefore:
> * `#06B6D4` is strictly quarantined to decorative fills, borders, glowing halos, icons, and large graphic accents.
> * Any colored text, link, or label rendered on a white or surface background MUST use `--accent-deep` (`#0E7490`), which provides an accessible **4.8:1** contrast ratio.

---

## 3. Typography Hierarchy

### 3.1 Font Families
* **Primary Sans-Serif**: `Inter`, `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`.
  * Weights loaded: `400` (Regular), `500` (Medium), `600` (Semi-bold), `700` (Bold), `800` (Extra-bold).
  * Usage: Headings, body copy, form labels, button text, navigation links.
* **Monospace Utility**: `JetBrains Mono`, `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`.
  * Weights loaded: `400` (Regular), `500` (Medium).
  * **Strict Monospace Quarantine**: Quarantined strictly to the typewriter cycling text, step numbers (`01`, `02`, `03`), card count tags, and technical metadata. Never used for narrative body text.

### 3.2 Typographic Scale

| Level | Size (Desktop) | Size (Mobile) | Weight | Tracking | Line-Height | Element |
|---|---|---|---|---|---|---|
| **Display H1** | `clamp(2.5rem, 7vw, 5.5rem)` | `2.5rem` | 800 | `-0.03em` | `1.0` | Hero Title (`A.U.T.O.M.A.T.E.`) |
| **Section H2** | `clamp(1.875rem, 4vw, 3rem)` | `1.875rem` | 700 | `-0.02em` | `1.15` | Section Headings |
| **Card H3** | `1.375rem` (22px) | `1.25rem` (20px) | 700 | `-0.01em` | `1.3` | Service & Story Titles |
| **Subhead** | `1.25rem` to `1.5rem` | `1.125rem` | 400 | `normal` | `1.45` | Hero Tagline |
| **Body Large**| `1.125rem` (18px) | `1.0rem` (16px) | 400 | `normal` | `1.65` | Introductions, key descriptions |
| **Body Base** | `1.0rem` (16px) | `1.0rem` (16px) | 400 | `normal` | `1.65` | General copy, form inputs |
| **Body Small**| `0.875rem` (14px) | `0.875rem` (14px) | 500 | `normal` | `1.5` | Helper text, form hints, footer |
| **Metadata**  | `0.75rem` to `0.8125rem`| `0.75rem` | 600 | `+0.08em` | `1.0` | Eyebrow tags, counters (uppercase) |

* **Max Line Length Constraint**: All explanatory paragraphs and body blocks are capped at `max-w-[65ch]` (65 characters per line) to prevent reading fatigue.

---

## 4. Spacing, Rhythm & Container Architecture

* **Grid Base**: 8px baseline increment (`8px`, `16px`, `24px`, `32px`, `40px`, `48px`, `64px`, `80px`, `96px`).
* **Container Max-Width**: `1200px` max-width, horizontally centered (`mx-auto`).
* **Horizontal Gutters**: `24px` (`px-6`) on mobile (<640px), scaling to `32px` (`px-8`) on desktop.
* **Vertical Section Rhythm**:
  * Desktop (≥1024px): `96px` (`py-24`).
  * Mobile (<1024px): `64px` (`py-16`).
* **Elevation & Shadows**:
  * **Card Resting**: `box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.05);`
  * **Card Hover**: `box-shadow: 0 4px 6px rgba(15, 23, 42, 0.05), 0 16px 32px rgba(15, 23, 42, 0.08);`
  * **Glow Button Resting**: `box-shadow: 0 4px 14px rgba(6, 182, 212, 0.25);`
  * **Glow Button Hover**: `box-shadow: 0 0 0 4px rgba(6, 182, 212, 0.25), 0 8px 30px rgba(6, 182, 212, 0.35); transform: translateY(-2px);`

---

## 5. Circuit Grid Background Specification (Hero)

* **Architecture**: Handcrafted inline SVG pattern (0 external asset requests).
* **Pattern Geometry**:
  * Grid unit: `48px x 48px`.
  * Grid lines: `1px` stroke in `--line` (`#E2E8F0`) at `50%` opacity.
  * Circuit traces: Right-angle paths (`d="M0 24 H24 V48"`) with `3px` node terminal circles rendered in `--accent` (`#06B6D4`) at `15%` to `35%` opacity.
  * Node animation: 3 random terminal nodes pulse softly between `0.15` and `0.45` opacity over a 4-second sinusoidal loop.
* **Vignette Masking**: A radial CSS `mask-image` fades the grid out smoothly toward the left column and bottom edge, ensuring the pattern never competes with text legibility.

---

## 6. Motion & Interactive Contracts

* **Global Transitions**: `200ms` to `300ms` `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out). No bouncy springs.
* **Sticky Card Stacking Effect**:
  * Four service cards with progressive sticky top offsets (`120px`, `140px`, `160px`, `180px` on desktop).
  * Light JS scroll enhancement via `requestAnimationFrame`: cards being covered scale down to `0.96` and dim to `0.92` opacity.
* **Conic Border Glow Animation**:
  * Hero CTA button features an outer pseudo-element with a rotating conic gradient (`#06B6D4`, transparent, `#06B6D4`) looping over 6 seconds.
* **Process Line Draw**:
  * Horizontal connector line in the Process section animates `stroke-dashoffset` from 100% to 0% over `900ms` when scrolled into view.
* **Reduced Motion Guarantee (`prefers-reduced-motion: reduce`)**:
  * Typewriter animation stops: full static sentence is displayed immediately.
  * Conic gradient rotation and pulsing nodes are completely halted.
  * Sticky cards retain physical stacking without scaling or dimming.
  * All transitions snap to `0ms`.
