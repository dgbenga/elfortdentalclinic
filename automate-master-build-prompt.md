# A.U.T.O.M.A.T.E. — Master Build Prompt (Landing Page + Project Registration Page)

> Paste everything below the line into your AI builder tool (Cursor, Bolt, Lovable, v0, Claude Code, etc.). Items marked **[YOUR INPUT]** are the only places you need to fill in real details before building.

---

## 0. Role and Mission

You are a senior front-end engineer and UI/UX designer. Build a two-page website for **A.U.T.O.M.A.T.E.**, a development brand that builds full-stack websites, e-commerce platforms, web applications, and custom software for clients.

The site has one job: **get a qualified visitor to submit a project brief.** Every section, every button, and every line of copy should move the visitor toward that.

The look is clean, light, high-tech, and minimal. It should feel precise and trustworthy, not flashy. Think engineering lab, not sci-fi movie.

---

## 1. Hard Rules (Read First)

These are fixed. Do not change them, and do not "improve" them.

1. **Two pages only:** `index.html` (landing) and `start.html` (registration). Do not add extra pages, blog routes, login screens, or dashboards.
2. **Light mode only.** No dark mode toggle. No dark sections except the final CTA banner described in Section 5.
3. **Stack:** plain HTML, Tailwind CSS (via CDN), vanilla JavaScript, and Lucide icons. No React, no build step, no frameworks, no jQuery.
4. **Palette is locked.** Use only the colors in Section 2. No gradients except the ones named in this prompt.
5. **No invented facts.** Do not make up client names, logos, statistics, awards, or testimonials as if they were real. Use the clearly labelled placeholder content in Section 4.5 and flag it.
6. **No fake backend.** The form simulates submission on the front end only, but the code must be structured so a real endpoint can be dropped in with a one-line change (see Section 6.6).
7. **Performance budget:** no image over 150 KB, no more than 2 external scripts (Tailwind CDN, Lucide), one font family loaded with `display=swap`.
8. **Accessibility is not optional.** WCAG 2.2 AA contrast, full keyboard navigation, visible focus states, and `prefers-reduced-motion` respected everywhere.
9. **Plain, human copy.** Short sentences. No buzzword stacking, no "synergy", no "cutting-edge", no "revolutionize", no "unleash". Write like a sharp person talking to a business owner.
10. **Every "Get Started" button on the site goes to `start.html`.** No exceptions, no modals.

---

## 2. Brand Identity and Design System

### 2.1 Brand

- **Name:** A.U.T.O.M.A.T.E. (keep the dots, always uppercase)
- **Tagline:** "Digital Precision. Human Connection. Engineered for Scalable Impact."
- **Logo:** "AE" monogram with circuit-node arms beside a human-centric tech figure. **[YOUR INPUT: supply the logo file as SVG or transparent PNG.]**
  - Until the real file is provided, build a simple inline SVG placeholder (an "AE" monogram with three small node dots and thin connector lines) inside a single reusable `<symbol id="automate-logo">`, so swapping the real logo is a one-place change.
  - Logo appears in the nav (32 px high), the footer (28 px high), and as the browser favicon.

### 2.2 Colors (locked)

| Token | Hex | Use |
|---|---|---|
| `--bg` | `#FFFFFF` | Page background |
| `--surface` | `#F8FAFC` | Section cards, form groups, alternating sections |
| `--ink` | `#0F172A` | Headings, body text, primary buttons, final CTA banner background |
| `--ink-soft` | `#475569` | Secondary text (must pass 4.5:1 on white) |
| `--line` | `#E2E8F0` | Borders, dividers, grid lines |
| `--accent` | `#06B6D4` | Highlights, badges, focus rings, active states, button glow |
| `--accent-deep` | `#0E7490` | Accent text on white (cyan `#06B6D4` alone fails contrast for small text) |
| `--success` | `#10B981` | Form success state only |
| `--error` | `#DC2626` | Form validation errors only |

Define all of these as CSS custom properties in one `:root` block and map them into the Tailwind config so there is one source of truth.

**Contrast rule:** cyan `#06B6D4` is for large elements, borders, glows, icons, and fills only. Never use it for body-size text on white. Use `--accent-deep` for cyan-colored text.

### 2.3 Typography

- **One family:** Inter, with a system sans fallback stack. Load weights 400, 500, 600, 700, 800 only.
- Optional single mono accent for the typewriter line and small badges: `JetBrains Mono` (weights 400 and 500 only). Counts as the same font budget; do not add a third family.
- **Scale:**
  - Hero heading: `clamp(2.5rem, 7vw, 5.5rem)`, weight 800, tight tracking (`-0.03em`), line-height 1.0
  - Section headings: `clamp(1.875rem, 4vw, 3rem)`, weight 700
  - Body: 1rem to 1.125rem, line-height 1.65
  - Small labels and badges: 0.75rem to 0.8125rem, uppercase, letter-spacing `0.08em`
- Max line length for paragraphs: 65 characters.

### 2.4 Spacing, Shape, and Effects

- 8 px spacing grid. Section vertical padding: 96 px desktop, 64 px mobile.
- Content max width: 1200 px, centered, with 24 px side padding on mobile.
- Cards: 16 px radius, 1 px `--line` border, very soft shadow (`0 1px 2px rgba(15,23,42,0.04), 0 8px 24px rgba(15,23,42,0.05)`).
- Buttons: 12 px radius, 48 px minimum height (44 px touch target minimum everywhere).
- **Primary button:** `--ink` background, white text. On hover, a cyan glow ring (`0 0 0 4px rgba(6,182,212,0.25), 0 8px 30px rgba(6,182,212,0.35)`) and a 2 px lift.
- **Hero CTA ("glowing high-tech button"):** same as primary, plus a slow looping cyan border-glow animation (a rotating conic-gradient border, 6 s loop). Disabled under `prefers-reduced-motion`.
- **Secondary button:** white background, 1 px `--ink` border, cyan underline sweep on hover.
- Motion: 200 to 300 ms ease-out for UI transitions. Nothing bounces.

### 2.4.1 Circuit Grid Background (Hero)

- Inline SVG pattern, not an image file. A 48 px grid of 1 px lines in `--line` at 50% opacity, with a few short circuit traces (right-angle paths ending in small node circles) in `--accent` at 15% opacity.
- Fade the pattern out toward the left and bottom edges with a CSS mask so it never competes with text.
- Optional: two or three nodes pulse softly (opacity 0.15 to 0.4, 4 s loop). Static under reduced motion.

---

## 3. Shared Components

Build these once and reuse them. Keep the code modular: one `styles` block for tokens and keyframes, one `main.js` for behavior, with each feature in its own clearly named function.

1. **`Navbar`** (Section 4.1)
2. **`Button`** variants: primary, secondary, glow (hero only)
3. **`SectionHeader`**: small cyan badge label, heading, one-line subtext
4. **`Footer`**
5. **`FormField`** pattern: label, input, helper text, error text (Section 6)

Shared `<head>` on both pages: correct `<title>`, meta description, `theme-color` (`#FFFFFF`), Open Graph tags (title, description, image placeholder), favicon from the logo, and `<html lang="en">`.

---

## 4. Page 1: Landing Page (`index.html`)

Single-page scroll. Smooth scroll for anchor links with `scroll-margin-top` set to the nav height so headings are never hidden under the sticky nav.

### 4.1 Navigation Bar

- Sticky, 72 px high (64 px on mobile). White at 85% opacity with `backdrop-filter: blur(12px)` and a 1 px bottom border that appears only after the user scrolls 8 px.
- **Left:** logo + wordmark "A.U.T.O.M.A.T.E."
- **Right (desktop):** links to `#services`, `#process`, `#stories`, `#contact` (labels: Services, Process, Success Stories, Contact), then the **Get Started** primary button linking to `start.html`.
- **Active-link highlighting:** use `IntersectionObserver` to underline (cyan, 2 px) the link of the section currently in view.
- **Mobile (under 900 px):** hamburger button opens a full-width dropdown panel with the same links stacked and a full-width Get Started button. Requirements: `aria-expanded` toggles, closes on link click, closes on `Escape`, focus returns to the hamburger, body scroll is not locked.

### 4.2 Hero Section

- Full viewport height minus nav (`min-height: calc(100svh - 72px)`), white background with the circuit grid from 2.4.1.
- **Layout (desktop):** a two-column grid. The left column stays quiet (just the circuit pattern showing through, plus a small vertical caption "EST. 2024 — Lagos, Nigeria" **[YOUR INPUT: confirm or remove]**). The **right-aligned text block** sits in the right 7 columns, with all text right-aligned (`text-align: right`, content pushed to the right edge).
- **Layout (mobile):** single column, text stays right-aligned, grid pattern at lower opacity, CTA full width.
- **Content, top to bottom:**
  1. Small badge, right-aligned: a pulsing cyan dot + "Now taking new projects" **[YOUR INPUT: keep only if true]**
  2. **H1:** `A.U.T.O.M.A.T.E.` Giant. Each dot rendered in `--accent` for a subtle brand detail.
  3. **Tagline:** "Digital Precision. Human Connection. Engineered for Scalable Impact." (`--ink-soft`, 1.25 to 1.5 rem)
  4. **Typewriter line:** a static prefix "We build" followed by the cycling text, styled in the mono font with a blinking cyan caret.
  5. **Glow CTA:** "Get Started" with an arrow icon, linking to `start.html`.
  6. Small supporting line under the button: "Takes about 5 minutes. No payment, no commitment."

#### Typewriter Spec (exact behavior)

- Cycles through these phrases, in this order, looping forever:
  1. `website`
  2. `ecommerce website`
  3. `web application`
  4. `softwares and applications, projects`
- Type speed: 70 ms per character. Delete speed: 40 ms per character. Pause after fully typed: 1600 ms. Pause after fully deleted: 350 ms.
- Implement with `setTimeout` chaining (not `setInterval`), in a function that can be cleanly stopped.
- Pause the loop when the tab is hidden (`visibilitychange`) and when the hero is off-screen (`IntersectionObserver`).
- **Reduced motion:** do not animate. Show the phrases as a static line: "website · ecommerce website · web application · softwares and applications, projects".
- **Accessibility:** the animated element has `aria-hidden="true"`. A visually hidden sibling holds the full static sentence for screen readers: "We build websites, ecommerce websites, web applications, and custom software." This avoids a screen reader announcing every keystroke.
- Reserve the line's height with `min-height` so the layout never jumps when text changes or wraps.

### 4.3 Core Services Section: Sticky Stacked Cards

- Section id `services`, `--surface` background. Header: badge "What we build", heading "Four ways we build for you", subtext "Pick the one that fits, or mix them. We scope it with you."
- **Effect:** four cards, each `position: sticky`, with increasing `top` values (for example 120 px, 140 px, 160 px, 180 px on desktop) so each new card slides up and overlaps the previous one, leaving a thin strip of the earlier cards visible at the top like a stacked deck.
- **Smoothness, with CSS first:** sticky positioning does the stacking. Add a light JS enhancement: as a card gets covered by the next one, scale it slightly down (to 0.96) and dim it (to 0.92 opacity) using a `requestAnimationFrame`-throttled scroll handler or a scroll-timeline `@supports` path with the JS fallback. Never use scroll listeners without throttling.
- Each card gets a minimum height of 420 px (desktop) so the stack has room to breathe. Each card is a two-column layout on desktop (text left, visual right) and stacked on mobile.
- **Mobile:** keep the stack, with smaller sticky offsets (80 px, 92 px, 104 px, 116 px) and a minimum card height of auto. If overlapping causes content clipping at any width, fall back to normal stacked cards with spacing, and do not clip content ever.
- **Reduced motion:** keep sticky stacking (it is positional, not animated) but remove the scale and dim effect.
- Each card contains: a large faded number (01 to 04), a Lucide icon in a cyan-tinted square, title, one-line description, 3 to 4 feature bullets with check icons, a small "Good for:" line, and a text link "Start this project →" linking to `start.html`.

**Card content:**

**01. Standard Websites** — Icon: `layout-template`
- Description: "Fast, clean websites that explain what you do and make it easy to contact you."
- Features: Mobile-first responsive design; Clear page structure and navigation; Basic SEO and fast load times; Contact forms and WhatsApp links
- Good for: personal brands, service businesses, schools, churches, portfolios.
- Visual: a simple CSS-built browser window mockup (no image files).

**02. E-commerce Platforms** — Icon: `shopping-cart`
- Description: "Online stores that let customers browse, pay, and come back, while you manage stock without stress."
- Features: Secure checkout and payment gateway setup; Inventory and order management; Product pages built to convert; Discount codes and customer accounts
- Good for: fashion, food, retail, and any business selling products online.
- Visual: CSS mockup of a product grid with a cart badge.

**03. Web Applications** — Icon: `app-window`
- Description: "Interactive tools your users log into: dashboards, portals, booking systems, and marketplaces."
- Features: User accounts and role-based access; Dashboards with live data; Admin panels you can actually use; Third-party integrations and APIs
- Good for: startups, campus platforms, logistics, membership communities.
- Visual: CSS mockup of a dashboard with bars and a stat row.

**04. Custom Software Development** — Icon: `cpu`
- Description: "Software built around the way your business already works, including automation that removes repetitive tasks."
- Features: Tailored system architecture; Workflow and automation pipelines; AI-assisted processes where they genuinely help; Internal business tools and integrations
- Good for: teams drowning in manual work, or ideas that no off-the-shelf tool covers.
- Visual: CSS mockup of connected nodes (matches the circuit theme).

### 4.4 Our Process Section

- Section id `process`, white background. Header: badge "How it works", heading "Three steps from idea to live", subtext "No mystery. You always know what stage we are in."
- **Layout (desktop):** three equal columns connected by a thin horizontal line with cyan node dots at each step. On scroll into view, the connector line draws left to right (stroke-dashoffset, 900 ms) and the cards fade up in sequence (100 ms stagger). **Mobile:** vertical timeline with the line on the left.
- Each step card has a large step number, an icon, a title, a one-sentence summary, and 3 short bullets, plus a "You'll get:" line.

**Step 1: Discovery** — Icon: `search`
- "We learn your business, your users, and what success looks like."
- Define business requirements; Map the user flow; Set strategic goals and scope
- You'll get: a clear project scope and page plan.

**Step 2: Development** — Icon: `code-2`
- "We build it carefully, show you progress, and test everything."
- Precision coding; UI/UX polish; Rigorous system integration and testing
- You'll get: working previews you can review and react to.

**Step 3: Launch & Scale** — Icon: `rocket`
- "We deploy, tune performance, and hand over something ready to grow."
- Deployment and domain setup; Performance optimization; Handover and walkthrough
- You'll get: a live, growth-ready platform and the know-how to run it.

### 4.5 Client Success Stories

- Section id `stories`, `--surface` background. Header: badge "Success stories", heading "Built with clients who grew", subtext "A few of the people who trusted us with their project."
- **Layout:** 3 cards in a grid (desktop), horizontal scroll-snap carousel on mobile with visible next-card peek and dot indicators. Arrow buttons and keyboard support on the carousel.
- Each card: a quote, a result line shown as a cyan badge (for example "Orders up after launch"), client name, role and business, and an avatar built from initials (no photo files).
- **Placeholder rule (important):** Create three testimonial cards with obviously placeholder text, and mark every one with a small gray "Placeholder" tag and an HTML comment `<!-- REPLACE WITH REAL TESTIMONIAL -->`. Put all testimonial data in a single JavaScript array at the top of `main.js` so real entries can be pasted in without touching markup. **[YOUR INPUT: real client names, quotes, results, and permission to publish.]** Do not write fake metrics like "300% growth".
- Optional trust row above the cards: three real numbers **[YOUR INPUT: projects shipped, clients served, years building]**. If none are provided, omit the row entirely rather than inventing numbers.

### 4.6 FAQ (Added Section)

- Short accordion, 5 questions, placed between Success Stories and Contact. This removes the common doubts that stop people from filling in a form.
- Use native `<details>`/`<summary>` for accessibility, styled to match.
- Questions (keep the answers short and honest; mark prices and timelines **[YOUR INPUT]**):
  1. How long does a project take? **[YOUR INPUT: typical range by project type]**
  2. How much does it cost? **[YOUR INPUT: starting price or "quoted after discovery"]**
  3. What do I need to give you before we start? (Answer: the project brief, plus a Drive link with your logo and images.)
  4. Do you handle hosting and the domain? **[YOUR INPUT]**
  5. What happens after launch? **[YOUR INPUT: support period, maintenance options]**

### 4.7 Contact Section and Footer

- Section id `contact`. Two-part block:
  1. **Contact details card:** Email, Phone, and optional WhatsApp button **[YOUR INPUT: email, phone, WhatsApp number]**. Email and phone are real `mailto:` and `tel:` links. WhatsApp uses `https://wa.me/<number>` with a pre-filled message.
  2. **Final CTA banner:** the only dark block on the site. `--ink` background, white heading "Have a project in mind? Let's build it.", one supporting line, and a glowing cyan "Get Started" button linking to `start.html`. Subtle circuit pattern in the corner at low opacity.
- **Footer:** logo, tagline, quick links repeated, contact links, social links **[YOUR INPUT: handles]**, and "© 2026 A.U.T.O.M.A.T.E. All rights reserved." Use a script to keep the year current.

---

## 5. Page 2: Project Registration (`start.html`)

Reached from every Get Started button. Same navbar and footer as the landing page (the nav links point back to `index.html#section`).

### 5.1 Page Layout

- White background with the faint circuit grid at very low opacity (5%).
- Centered container, max width 760 px. Above the form: a small "Back to home" link, a badge "Project brief", heading "Tell us about your project", and a short intro: "The more detail you give, the faster and more accurate your quote and build will be. Most people finish in 5 to 10 minutes."
- **Progress indicator:** because the form is long, divide it into **4 labelled sections** shown in a sticky progress bar at the top of the form (a thin cyan bar plus "Step 2 of 4: Audience and goals"). All sections stay on the same page (not a multi-screen wizard), and the progress bar updates by section scrolled into view. A visitor must be able to scroll through the whole form and see everything.

### 5.2 Form Sections and Fields

All fields use visible labels (never placeholder-only labels), helper text where noted, and `autocomplete` attributes where they apply. Mark required fields with an asterisk and `required`/`aria-required`.

**Section 1: About you and your business**

| # | Field | Type | Required | Notes |
|---|---|---|---|---|
| 1 | Full Name | text | Yes | `autocomplete="name"` |
| 2 | Business Name | text | Yes | `autocomplete="organization"` |
| 3 | One-sentence Description | text | Yes | Helper: "What does your business do, in one sentence?" Max 160 characters with live counter. |
| – | Email *(added)* | email | Yes | `autocomplete="email"`. We need a way to reply. |
| – | WhatsApp / Phone *(added)* | tel | Yes | `autocomplete="tel"`. Helper: "Include country code, e.g. +234…" |

**Section 2: Audience and goals**

| # | Field | Type | Required | Notes |
|---|---|---|---|---|
| 4 | The Audience | textarea | Yes | Helper: "Who are they, and what do they need?" |
| 5 | The Primary Problem Solved | textarea | Yes | Helper: "What problem should this site solve for you or your customers?" |
| 6 | Main Action the Site Should Drive | text | Yes | Helper: "For example: book a call, buy, subscribe, sign up." |
| – | Project Type *(added)* | radio cards | Yes | Standard Website / E-commerce / Web Application / Custom Software / Not sure yet |

**Section 3: Look, feel, and inspiration**

| # | Field | Type | Required | Notes |
|---|---|---|---|---|
| 7 | Existing Branding | text | No | Helper: "Colors, fonts, logo notes. Write 'none yet' if you are starting fresh." |
| 8 | Three Liked Websites | 3 structured rows | At least 1 | Each row: URL input + "What do you like about it?" input. |
| 9 | Three Disliked Websites | 3 structured rows | No | Each row: URL input + "What put you off?" input. |
| 12 | Tone Words | text | Yes | Helper: "3 to 5 words, e.g. 'Authoritative but approachable'." Show 4 clickable suggestion chips (Professional, Friendly, Bold, Minimal) that append to the field. |

**Section 4: Scope, features, and assets**

| # | Field | Type | Required | Notes |
|---|---|---|---|---|
| 10 | Pages Required | checkboxes + "Other" text | At least 1 | Options: Homepage, About, Services, Pricing, Portfolio, Contact, Blog, FAQ, Login / Account area, Other (reveals a text input). |
| 11 | Special Features Needed | checkboxes + "Other" text | No | Options: Booking calendar, Payment gateway, Custom forms, Blog / CMS, User accounts, Admin dashboard, WhatsApp integration, Live chat, Multi-language, Other (reveals a text input). |
| – | Budget Range *(added)* | select | No | **[YOUR INPUT: ranges in your currency]**, plus "Not sure yet". |
| – | Ideal Timeline *(added)* | select | No | ASAP / 2–4 weeks / 1–2 months / Flexible. |
| 13 | **Asset Upload Link** | url | Yes | See below. |

**Asset Upload Link field (exact copy):**
- Label: "Asset Upload Link *"
- Helper text (verbatim): *"Provide a Google Drive link containing your logo, brand assets, and any images your website will need."*
- Add a collapsible "How to share a Drive folder" note with 4 short steps: create a folder, upload your files, set sharing to "Anyone with the link can view", paste the link here.
- Validation: must be a valid `https://` URL. Show a soft warning (not a block) if the host is not `drive.google.com` or `docs.google.com`.

**Final block:**
- Optional textarea: "Anything else we should know?"
- Consent checkbox (required): "I agree that A.U.T.O.M.A.T.E. may contact me about this project."
- **Submit button (14):** "Submit Project Brief" (full width, primary button with glow on hover).

### 5.3 Validation Behavior

- Use native HTML constraints plus a custom JS layer. Turn off the browser's default tooltips (`novalidate`) and show inline messages instead.
- Validate on blur, and re-validate on input once a field has shown an error. On submit, validate everything, focus the first invalid field, and show a summary line above the button: "Please fix 3 fields to continue." (`role="alert"`).
- Error text sits under the field in `--error` with an icon, and is linked with `aria-describedby`. Invalid fields get `aria-invalid="true"` and a red border.
- Messages are specific and human: "Please enter a valid email, like name@example.com", not "Invalid input".
- Rules: names 2 to 80 characters; email by a sensible pattern; phone digits with optional `+`, 7 to 15 digits; URLs must start with `http://` or `https://`; textareas capped at 1,000 characters with live counters; the one-sentence description capped at 160.

### 5.4 Draft Saving (Added)

Long forms get abandoned. Auto-save the in-progress form to `localStorage` (debounced 500 ms), restore it on reload with a small banner "We restored your draft. Clear draft", and clear it after a successful submission. Wrap all storage calls in try/catch so the form still works if storage is blocked. Do not store the consent checkbox.

### 5.5 Submission and Success State

- On valid submit: disable the button, show a spinner and "Sending…", wait about 1.2 seconds to simulate the request, then replace the form with the success state (fade transition, scroll to top of the container, move focus to the success heading).
- **Success state content:** a large cyan-green check icon that draws itself, heading "Brief received.", text "Thanks, [first name]. We will review it and reply within [YOUR INPUT: e.g. 24 hours] on the email or WhatsApp number you gave us.", a short "What happens next" list (3 items mirroring the Process steps), and two buttons: "Back to home" and "Submit another brief".
- Include a "Copy my brief" button that copies a plain-text summary of the answers to the clipboard, so the visitor keeps a record.

### 5.6 Backend Hook (Drop-in)

Put this at the top of `main.js` so a real endpoint is a one-line change:

```js
const FORM_CONFIG = {
  endpoint: null,        // e.g. "https://formspree.io/f/xxxx" or a Google Apps Script URL
  method: "POST",
  simulateDelayMs: 1200  // used only when endpoint is null
};
```

- `submitBrief(data)` sends JSON to `endpoint` when it is set, and otherwise runs the simulated delay. Handle network failure with a friendly error message and a retry button that keeps all entered data.
- Add a hidden **honeypot** field (`name="website_url_confirm"`, off-screen, `tabindex="-1"`, `autocomplete="off"`). If it is filled, silently show the success state but do not send.
- Add a minimum time-on-page check (reject submissions faster than 5 seconds from page load).
- Never inject user input into the page with `innerHTML`. Use `textContent` everywhere user text is displayed (for example the name on the success screen).

---

## 6. Responsiveness

Test and polish at these widths: 360, 390, 768, 1024, 1280, 1536.

- Breakpoints: mobile under 640, tablet 640 to 1023, desktop 1024 and up.
- No horizontal scrolling at any width.
- Tap targets 44 px or larger. Form inputs 16 px font size minimum (prevents iOS zoom on focus).
- Use `100svh` (not `100vh`) for full-height sections so mobile browser bars do not break the hero.
- Typography scales with `clamp()`. Images and mockups never overflow their containers.
- Form: single column on mobile, with the three liked and three disliked website rows stacking URL above reason. On tablet and desktop the URL and reason sit side by side.

---

## 7. Motion and Performance

- Entrance animations: sections fade up 16 px over 500 ms when 15% visible (`IntersectionObserver`, one-time). Elements that appear above the fold on load must not wait for scroll.
- Animate only `transform` and `opacity`. No layout-shifting animations.
- Throttle all scroll work with `requestAnimationFrame`. Disconnect observers when no longer needed.
- `@media (prefers-reduced-motion: reduce)`: disable the typewriter animation, button glow loop, pulsing nodes, line drawing, and scale/dim effects. Content must remain fully visible and usable.
- Preconnect to the font and CDN hosts. Lazy-load anything below the fold.
- Lighthouse targets: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+ on mobile.

---

## 8. Accessibility Checklist

- Semantic landmarks: `header`, `nav`, `main`, `section` (each with a labelled heading), `footer`.
- A "Skip to content" link as the first focusable element.
- One `h1` per page, with headings in logical order.
- Focus ring: 3 px `--accent` outline with 2 px offset, always visible on keyboard focus, never removed.
- All icons that carry meaning have text alternatives. Decorative icons and the circuit pattern use `aria-hidden="true"`.
- Form errors announced via `aria-live`. Success state receives focus.
- Color is never the only signal (errors also have icons and text).
- The sticky stack and carousel must be fully usable by keyboard and screen reader (logical DOM order, no hidden duplicate content).

---

## 9. SEO and Meta

- `index.html` title: "A.U.T.O.M.A.T.E. | Websites, Web Apps and Custom Software". `start.html` title: "Start Your Project | A.U.T.O.M.A.T.E."
- Meta descriptions under 160 characters, written by hand.
- JSON-LD `Organization` (and `WebSite`) structured data on the landing page **[YOUR INPUT: URL, contact details]**.
- `start.html` gets `<meta name="robots" content="noindex">` only if you do not want the form page indexed; default is to leave it indexable.
- Canonical URLs, `sitemap.xml` and `robots.txt` stubs.

---

## 10. File Structure

```
/automate-site
├── index.html          Landing page
├── start.html          Registration page
├── assets/
│   ├── css/styles.css  Tokens, keyframes, the few custom rules Tailwind can't cover
│   ├── js/main.js      All behavior, one function per feature
│   └── img/            Logo SVG, favicon, OG image placeholder
├── robots.txt
└── sitemap.xml
```

**`main.js` modules (one function each, all initialised in a single `init()` on `DOMContentLoaded`):**
`initNav`, `initActiveLinks`, `initTypewriter`, `initReveal`, `initServiceStack`, `initProcessLine`, `initTestimonials`, `initFaq`, `initFooterYear`, `initFormValidation`, `initFormDraft`, `initFormCounters`, `initChips`, `submitBrief`, `initSuccessState`.

Comment each function with one line explaining what it does. No dead code, no unused variables, no `console.log` left behind.

---

## 11. Build Order

Build in this order and stop to confirm each phase works before moving on.

1. **Phase 1: Foundations.** Tokens, Tailwind config, fonts, `<head>`, logo symbol, navbar, footer, skip link.
2. **Phase 2: Hero.** Circuit background, right-aligned layout, typewriter, glow CTA.
3. **Phase 3: Services stack.** Four sticky cards with mockups and the scale/dim enhancement.
4. **Phase 4: Process, Stories, FAQ, Contact, CTA banner.**
5. **Phase 5: Registration page.** Layout, all fields, progress bar, validation.
6. **Phase 6: Submission, draft saving, success state, honeypot.**
7. **Phase 7: Polish.** Responsive pass at all six widths, reduced-motion pass, accessibility pass, Lighthouse pass.

---

## 12. Acceptance Criteria (All Must Pass)

- [ ] Every "Get Started" button (nav, hero, service cards, final banner) lands on `start.html`.
- [ ] Hero text is right-aligned on desktop and mobile.
- [ ] Typewriter cycles through all four phrases in order and loops, with the exact timings, and pauses when hidden.
- [ ] Service cards stack and overlap while scrolling, with no clipped content at 360 px.
- [ ] All 13 requested form fields are present, plus the added ones, with correct types and the exact Drive-link helper text.
- [ ] Invalid submit focuses the first error and shows specific messages. Valid submit shows the success state.
- [ ] Draft restores after a reload and clears after success.
- [ ] Works with keyboard only. Works with reduced motion on.
- [ ] No horizontal scroll at any tested width.
- [ ] No invented testimonials, numbers, or clients appear unlabelled.
- [ ] Palette matches Section 2 exactly, and no cyan body text on white.
- [ ] Code is modular, commented, and free of `console.log` and dead code.

---

## 13. Final Output Instruction

Deliver complete, working, copy-paste-ready files with no "rest of the code here" shortcuts. After the code, add a short **Handover Notes** list covering: every **[YOUR INPUT]** placeholder that still needs real content (with the file and line), how to swap the logo, how to add the real form endpoint, and how to add real testimonials.

---

### Appendix: What Was Added and Why (For You, Not the Builder)

| Addition | Reason |
|---|---|
| Hard Rules and scope fences | Stops the builder tool adding extra pages, frameworks, or fake content |
| `--accent-deep` color | Cyan fails contrast on white for small text |
| Email and phone fields | The original form had no way to reply to the client |
| Project Type, Budget, Timeline | Lets you qualify leads before the first call |
| Progress bar, sections, and draft saving | A 13-field form loses people without them |
| Honeypot and time-on-page check | Basic spam protection with no backend |
| Backend hook (`FORM_CONFIG`) | Makes the simulated form real in one line |
| FAQ section | Answers the doubts that stop people submitting |
| Reduced-motion and accessibility rules | Required for quality, and good for SEO |
| Placeholder rule for testimonials | Prevents fake social proof from going live |
| Exact typewriter timings and build order | Removes guesswork so the output is consistent |
