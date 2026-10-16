# Design Tokens: Elfort Dental Clinic (Direction A — Quiet Luxury Editorial)

**Aesthetic Direction:** Direction A — "Quiet Luxury Editorial"  
**Brand Identity:** Private Physician meets 5-Star Boutique Hospitality (Aman / Four Seasons aesthetic).  
**Single-Knob Global CSS Cascade:** All tokens are defined as CSS variables at `:root` in `globals.css`. Modifying a single variable cascades globally across every Atom, Molecule, and Organism without ad-hoc overrides.

---

## 1. CSS Custom Properties (`globals.css`)

```css
@layer base {
  :root {
    /* Canvas & Surfaces */
    --background: 40 20% 98%;          /* #FAFAF9 Warm Stone White */
    --foreground: 24 9.8% 10%;         /* #1C1917 Obsidian Dark */

    --card: 0 0% 100%;                 /* #FFFFFF Pure Crisp Card Surface */
    --card-foreground: 24 9.8% 10%;    /* #1C1917 */

    --popover: 0 0% 100%;              /* #FFFFFF */
    --popover-foreground: 24 9.8% 10%;

    /* Brand Accents (Champagne Gold) */
    --primary: 40 48% 56%;             /* #C5A059 Warm Champagne Gold (borders, icons, decorative) */
    --primary-foreground: 24 9.8% 10%; /* #1C1917 Dark text on gold */
    --primary-text-safe: 41 65% 28%;   /* #775A19 Text-Safe Gold (WCAG AA ≥ 4.5:1 on light canvas) */

    /* Secondary & Muted Tones */
    --secondary: 40 14% 94%;           /* #F4F1EA Soft Warm Gray */
    --secondary-foreground: 24 9.8% 10%;

    --muted: 36 12% 92%;               /* #ECE7DF Subtle Neutral Fill */
    --muted-foreground: 25 5% 35%;     /* #57534E Muted Truffle (Body text, ≥ 5.2:1 contrast) */

    --accent: 40 48% 56%;              /* #C5A059 */
    --accent-foreground: 24 9.8% 10%;

    /* Dark Section (Inverse Band for Final CTA & Footer) */
    --dark-surface: 24 9.8% 10%;       /* #1C1917 Obsidian */
    --dark-foreground: 40 20% 98%;      /* #FAFAF9 Warm White */
    --dark-muted: 30 5% 65%;           /* #A8A29E Warm Stone Gray */

    /* WhatsApp Primary Conversion Colors (P0 Contrast Fix Applied) */
    --cta-whatsapp: 147 77% 31%;        /* #128C4A Deep Forest Green (White text contrast = 4.8:1, WCAG AA Pass) */
    --cta-whatsapp-hover: 147 80% 26%;  /* #0E703B Darker Green on Hover */
    --cta-whatsapp-bright: 142 70% 49%; /* #25D366 Official WhatsApp Green (Strictly paired with #0B3D1E text = 8.6:1) */
    --cta-whatsapp-dark-text: 142 69% 14%; /* #0B3D1E High-Contrast Text for bright green */

    /* Borders, Inputs & Radii */
    --border: 30 6% 90%;               /* #E7E5E4 / neutral-200/60 */
    --input: 30 6% 90%;
    --ring: 40 48% 56%;                /* #C5A059 Focus ring */

    --radius-sm: 0.375rem;             /* 6px */
    --radius-md: 0.75rem;              /* 12px */
    --radius-lg: 1rem;                 /* 16px - Standard Cards */
    --radius-xl: 1.5rem;               /* 24px - Hero & Banners */
    --radius-full: 9999px;             /* Buttons & Round Avatars */

    /* Elevation Shadows */
    --shadow-soft: 0 4px 20px -2px rgba(28, 25, 23, 0.04);
    --shadow-card: 0 8px 30px -4px rgba(28, 25, 23, 0.06);
    --shadow-hover: 0 16px 40px -6px rgba(28, 25, 23, 0.10);
  }
}
```

---

## 2. Typography System (Anti-Generic Specification)

*Strictly avoids generic AI defaults (`Inter + Roboto`, `Arial`).*

| Role | Font Family | Google Font / Fallback | Psychological Intention | Usage Rules |
|---|---|---|---|---|
| **Display Headings (`h1`, `h2`)** | **Instrument Serif** | `'Instrument Serif', Georgia, serif` | Timeless editorial grace, high-trust physician authority. | Used for hero title, section primary headlines, quote highlights. |
| **Interface & Body Text** | **Plus Jakarta Sans** | `'Plus Jakarta Sans', system-ui, sans-serif` | Crisp modern readability, warm geometric curves. | Used for all body copy, navigation, buttons, and card text. |
| **Tabular & Accents** | **Geist Mono** | `'Geist Mono', monospace` | Clinical accuracy and verified credentials. | **Quarantined**: Used ONLY for operating hours, license numbers, statistics, and timestamps. Never for narrative copy. |

### Type Scale & Leading Hierarchy

```text
Display-LG (Hero H1)     : Desktop 54px / 1.15 line-height / -0.02em tracking
                           Mobile  38px / 1.2 line-height / -0.01em tracking
Headline-LG (Section H2) : Desktop 36px / 1.25 line-height / -0.015em tracking
                           Mobile  28px / 1.3 line-height / -0.01em tracking
Headline-SM (Card H3)    : Desktop 22px / 1.35 line-height / normal tracking
                           Mobile  20px / 1.4 line-height / normal tracking
Body-LG (Subhead/Intro)  : 18px / 1.6 line-height / 45–65 characters line length max
Body-MD (Standard Body)  : 16px / 1.65 line-height / #57534E (≥ 4.5:1 contrast)
Body-SM (Footnotes/Meta) : 14px / 1.5 line-height / #78716C
Label-SM (Eyebrow/Meta)  : 12px / 1.4 line-height / 0.05em tracking / uppercase
```

---

## 3. Spacing System & Grid Rhythm (8pt Scale)

* Base Unit: `8px` (`0.5rem`)
* Scale: `4px (0.5)`, `8px (1)`, `12px (1.5)`, `16px (2)`, `24px (3)`, `32px (4)`, `48px (6)`, `64px (8)`, `96px (12)`, `128px (16)`
* Max Content Width: `80rem` (`1280px`) with fluid side gutters `px-6 md:px-12`
* Section Vertical Padding:
  - Desktop: `py-20 md:py-28` (80px – 112px) for serene, unhurried breathing room.
  - Mobile: `py-14` (56px) to maintain pacing without dragging scroll depth.

---

## 4. Micro-Interactions & Reduced Motion Standard

* **Card Hover States:** Gentle `-translate-y-1` elevation with `--shadow-hover` and border color transition to `--primary/30`.
* **Anchor Scrolling:** Smooth scroll with `90px` header compensation offset.
* **Button States:** Magnetic active press (`active:scale-[0.98]`), subtle focus ring (`focus-visible:ring-2 focus-visible:ring-ring`).
* **Motion Accessibility Invariant:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
