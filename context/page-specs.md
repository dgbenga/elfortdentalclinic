# Page Specifications & Atomic Architecture — A.U.T.O.M.A.T.E. (Tier 1)

## 1. Atomic Component Architecture

### 1.1 Atoms
* **`Button`**:
  * `Variant: Primary` — Background `--ink` (`#0F172A`), text white, 12px radius, 48px height. On hover: 2px lift + cyan glow halo (`box-shadow: 0 0 0 4px rgba(6,182,212,0.25), 0 8px 30px rgba(6,182,212,0.35)`).
  * `Variant: Secondary` — Background white, 1px `--line` border, text `--ink`. On hover: cyan border transition + subtle background tint.
  * `Variant: GlowHero` — Same as primary with an active rotating conic-gradient border animation (6s cycle).
* **`Input / Textarea`**:
  * Background `--surface` (`#F8FAFC`), 1px `--line` border, text `--ink`, 12px radius, 16px minimum font size (prevents iOS auto-zoom).
  * Focus state: 3px `--accent` outline with 2px offset (`ring-2 ring-cyan-500 ring-offset-2`).
  * Error state: 1px `--error` (`#DC2626`) border + red exclamation icon.
* **`RadioCard / CheckboxCard`**:
  * Custom styled selection boxes with 12px radius, 1px `--line` border. Checked state transitions border to `--accent` and background to `rgba(6,182,212,0.04)`.
* **`MetadataLabel`**:
  * Uppercase, `0.75rem` (12px), `letter-spacing: 0.08em`, font `JetBrains Mono` or `Inter`, `--accent-deep` (`#0E7490`) or `--ink-soft` (`#475569`).

### 1.2 Molecules
* **`FormField`**: Label (semantic HTML `<label>` with asterisk for required) + Input/Textarea + Helper text (`--ink-soft`, 14px) + Live character counter (if applicable) + Error message container (`role="alert"`, `--error`).
* **`TypewriterBlock`**: Static text "We build " + animated mono cycling phrase + blinking cyan cursor + visually hidden screen-reader sentence (`aria-hidden="true"` on visual animation).
* **`AccordionItem`**: Semantic `<details>` and `<summary>` element with custom SVG chevron rotating 180° on toggle, zero JavaScript required for open/close state.
* **`TestimonialCard`**: Blockquote in quotation marks + outcome badge (`--accent-deep` tint) + client metadata + initial circle avatar (two-letter monogram in cyan square).

### 1.3 Organisms
* **`Navbar`**: Sticky 72px desktop / 64px mobile, backdrop blur, scroll-depth bottom border, desktop navigation links with cyan IntersectionObserver active indicators, mobile accessible drawer.
* **`HeroSection`**: Circuit grid SVG background, 2-column layout (empty left column with establishment caption, right-aligned content block), cycling typewriter, primary CTA.
* **`ServicesStack`**: 4 sticky overlapping cards with pure CSS device mockups and RAF scroll-linked scale/opacity transform.
* **`ProcessTimeline`**: 3 sequential milestone cards with animated SVG trace line.
* **`ContactBanner`**: Split block: contact card (email, phone, WhatsApp) + dark ink card with cyan glow button.
* **`ProjectBriefForm`**: 4-section form with sticky progress bar, live draft restore banner, client-side validation, honeypot protection, and instant success screen.

---

## 2. Page 1: Landing Page (`index.html`) Detailed Specs

### 2.1 Navigation Bar
* **Position**: Sticky top, 72px height (64px mobile), `z-index: 50`.
* **Visuals**: White at 85% opacity (`bg-white/85`), `backdrop-filter: blur(12px)`. 1px bottom border in `--line` transitions in after 8px scroll.
* **Left**: Inline SVG logo (AE monogram with 3 circuit node dots) + wordmark `A.U.T.O.M.A.T.E.` in Inter 800.
* **Right**:
  * Desktop Links: `Services` (`#services`), `Process` (`#process`), `Success Stories` (`#stories`), `Contact` (`#contact`). Active link gets 2px cyan underline via IntersectionObserver.
  * Primary Button: "Get Started" -> links directly to `start.html`.
* **Mobile Drawer**:
  * Hamburger button with `aria-expanded="false"`, `aria-label="Toggle navigation menu"`.
  * Drops down a full-width white panel with stacked links + full-width "Get Started" button.
  * Closes on link click, overlay tap, or `Escape` key press. Focus returns to hamburger.

### 2.2 Hero Section
* **Dimensions**: `min-h-[calc(100svh-72px)]`, flex align-center.
* **Background**: White with the inline SVG circuit grid pattern (48px grid, cyan traces, 3 pulsing terminal nodes).
* **Grid Split (Desktop)**:
  * Left column (5 cols): Open circuit visual space + small vertical label: `"EST. 2024 — Lagos, Nigeria"` (flagged as `[YOUR INPUT]`).
  * Right column (7 cols): Fully right-aligned content block (`text-right items-end`).
* **Content Hierarchy (Top to Bottom)**:
  1. Status Eyebrow: Pulsing cyan node + `"Now taking new projects"` (flagged as `[YOUR INPUT]`).
  2. H1: `A.U.T.O.M.A.T.E.` (Giant, tight tracking `-0.03em`, with each period rendered in `--accent` cyan).
  3. Tagline: `"Digital Precision. Human Connection. Engineered for Scalable Impact."` (`--ink-soft`, 1.25rem–1.5rem).
  4. Typewriter Line:
     * Static prefix: `"We build "`
     * Rotating Mono phrases: `website`, `ecommerce website`, `web application`, `softwares and applications, projects`.
     * Speed: 70ms type, 40ms delete, 1600ms pause, 350ms delete pause.
     * Screen-reader alternative: `<span class="sr-only">We build websites, ecommerce websites, web applications, and custom software.</span>`
  5. Primary CTA: "Get Started →" (Glow button with conic-gradient border, linking to `start.html`).
  6. Reassurance line: `"Takes about 5 minutes. No payment, no commitment."` (14px, `--ink-soft`).

### 2.3 Core Services: Sticky Stacked Cards (`#services`)
* **Background**: `--surface` (`#F8FAFC`).
* **Header**: Eyebrow `"What we build"` (uppercase mono), H2 `"Four ways we build for you"`, subtext `"Pick the one that fits, or mix them. We scope it with you."`
* **Layout**: 4 cards, each with `position: sticky`. Top offsets: `top-[120px]`, `top-[140px]`, `top-[160px]`, `top-[180px]` on desktop. Mobile offsets: `top-[80px]`, `top-[92px]`, `top-[104px]`, `top-[116px]`.
* **Card Anatomy (Desktop: 2-column text left / visual right)**:
  * Left side: Large faded mono number (`01`–`04`), Lucide icon in cyan tinted box, title, 1-line description, 4 check-list bullets, "Good for:" target list, "Start this project →" link (`start.html`).
  * Right side: Pure CSS interactive UI mockup.
* **Card Specifics**:
  1. **01. Standard Websites** (`layout-template` icon):
     * Copy: "Fast, clean websites that explain what you do and make it easy to contact you."
     * Bullets: Mobile-first responsive design; Clear page structure and navigation; Basic SEO and fast load times; Contact forms and WhatsApp links.
     * Good for: Personal brands, service businesses, schools, clinics, portfolios.
     * Visual: Pure CSS browser chrome mockup with title bar, search pill, and layout wireframe.
  2. **02. E-commerce Platforms** (`shopping-cart` icon):
     * Copy: "Online stores that let customers browse, pay, and come back, while you manage stock without stress."
     * Bullets: Secure checkout and payment gateway setup; Inventory and order management; Product pages built to convert; Discount codes and customer accounts.
     * Good for: Fashion, food, retail, and any business selling products online.
     * Visual: Pure CSS product card mockup with image tile, price tag, and "Add to Cart" button.
  3. **03. Web Applications** (`app-window` icon):
     * Copy: "Interactive tools your users log into: dashboards, portals, booking systems, and marketplaces."
     * Bullets: User accounts and role-based access; Dashboards with live data; Admin panels you can actually use; Third-party integrations and APIs.
     * Good for: Startups, campus platforms, logistics, membership communities.
     * Visual: Pure CSS dashboard mockup with metric stats and mini bar chart.
  4. **04. Custom Software Development** (`cpu` icon):
     * Copy: "Software built around the way your business already works, including automation that removes repetitive tasks."
     * Bullets: Tailored system architecture; Workflow and automation pipelines; AI-assisted processes where they genuinely help; Internal business tools and integrations.
     * Good for: Teams drowning in manual work, or ideas that no off-the-shelf tool covers.
     * Visual: Pure CSS network graph mockup with pulsing node dots and connecting SVG paths.

### 2.4 Our Process Section (`#process`)
* **Background**: White (`#FFFFFF`).
* **Header**: Eyebrow `"How it works"`, H2 `"Three steps from idea to live"`, subtext `"No mystery. You always know what stage we are in."`
* **Layout**: 3 equal columns connected by a continuous horizontal line on desktop (vertical timeline on mobile).
* **Cards**:
  * **Step 1: Discovery** (`search` icon) — "We learn your business, your users, and what success looks like." Bullets: Define business requirements; Map the user flow; Set strategic goals and scope. Deliverable: "You'll get: a clear project scope and page plan."
  * **Step 2: Development** (`code-2` icon) — "We build it carefully, show you progress, and test everything." Bullets: Precision coding; UI/UX polish; Rigorous system integration and testing. Deliverable: "You'll get: working previews you can review and react to."
  * **Step 3: Launch & Scale** (`rocket` icon) — "We deploy, tune performance, and hand over something ready to grow." Bullets: Deployment and domain setup; Performance optimization; Handover and walkthrough. Deliverable: "You'll get: a live, growth-ready platform and the know-how to run it."

### 2.5 Client Success Stories (`#stories`)
* **Background**: `--surface` (`#F8FAFC`).
* **Header**: Eyebrow `"Success stories"`, H2 `"Built with clients who grew"`, subtext `"A few of the people who trusted us with their project."`
* **Trust Row**: 3 real numbers (flagged as `[YOUR INPUT]`; omitted if no real metrics provided).
* **Cards (Array-driven in `main.js`)**: 3 cards, each marked with a subtle gray `Placeholder` badge:
  * Card 1: E-commerce Retailer — "The checkout is seamless and our customers stopped calling to ask how to pay." Outcome: "Orders up after launch". Client: T. Adeyemi, Founder, Retail Studio. Avatar: `TA`.
  * Card 2: Professional Clinic — "Patients book consultations directly without our front desk getting overwhelmed." Outcome: "Zero booking errors". Client: Dr. E. Okafor, Director, HealthFirst. Avatar: `EO`.
  * Card 3: Logistics SaaS — "Replaced 6 messy spreadsheets with one automated dashboard that our drivers actually use." Outcome: "15 hrs saved weekly". Client: M. Ibrahim, Operations Lead. Avatar: `MI`.

### 2.6 FAQ Section
* **Background**: White (`#FFFFFF`).
* **Header**: Eyebrow `"Common questions"`, H2 `"Frequently asked questions"`, subtext `"Straightforward answers to the questions clients ask before starting."`
* **5 Native Details/Summary Items**:
  1. *How long does a project take?* -> "Standard websites typically take 2–3 weeks. E-commerce platforms and web applications take 4–8 weeks depending on scope. We give you a guaranteed milestone schedule during discovery."
  2. *How much does it cost?* -> "Every project is priced transparently based on the scope defined in your brief. Standard websites start from a fixed rate, while complex applications are quoted with zero hidden fees."
  3. *What do I need to give you before we start?* -> "Just fill out the project brief on the next page, and provide a Google Drive link with your logo, brand guidelines, and any reference images you'd like included."
  4. *Do you handle hosting and the domain?* -> "Yes. We configure your custom domain, SSL certificates, and cloud hosting, and hand over complete ownership upon launch."
  5. *What happens after launch?* -> "Every project includes a 30-day post-launch warranty and bug-fix guarantee, plus optional ongoing maintenance and optimization retainers."

### 2.7 Contact & Dark CTA Banner (`#contact`)
* **Split Layout**:
  * **Contact Details Card**: White card with email link (`mailto:`), phone link (`tel:`), and WhatsApp button (`https://wa.me/...`). Flagged as `[YOUR INPUT]`.
  * **Final CTA Banner**: The only dark block on the site (`bg-[#0F172A]`, white text).
    * H2: `"Have a project in mind? Let's build it."`
    * Subtext: `"Submit your brief today. We'll review your scope and reply within 24 hours with an actionable roadmap."`
    * CTA: Glowing Cyan "Get Started" button -> `start.html`.

### 2.8 Global Footer
* Logo + tagline: `"Digital Precision. Human Connection. Engineered for Scalable Impact."`
* Navigation columns repeated (Services, Process, Stories, FAQ).
* Legal & Social links: Twitter/X, GitHub, LinkedIn (flagged as `[YOUR INPUT]`).
* Dynamic copyright: `"© <span id="current-year">2026</span> A.U.T.O.M.A.T.E. All rights reserved."`

---

## 3. Page 2: Project Registration (`start.html`) Detailed Specs

### 3.1 Header & Sticky Progress Bar
* **Top Navigation**: Same sticky nav as landing page; anchor links point to `index.html#services`, etc.
* **Header Banner**: Back link `"← Back to home"`, Eyebrow `"Project brief"`, H1 `"Tell us about your project"`, subtext `"The more detail you give, the faster and more accurate your quote and build will be. Most people finish in 5 to 10 minutes."`
* **Sticky Progress Bar**: Fixed under nav when scrolling. Shows progress bar (0% to 100%) + step label (e.g., `"Step 2 of 4: Audience and goals"`). Updates dynamically via IntersectionObserver on each `<fieldset>`.
* **Draft Restoration Alert**: If a draft exists in `localStorage`, displays an emerald restoration banner: `"We restored your draft. [Clear draft]"`.

### 3.2 Form Architecture & Fields

```text
Section 1: About you and your business
├── Full Name * (text, autocomplete="name", 2-80 chars)
├── Business Name * (text, autocomplete="organization", 2-100 chars)
├── One-sentence Description * (text, max 160 chars with live counter)
├── Email Address * (email, autocomplete="email")
└── WhatsApp / Phone * (tel, autocomplete="tel", helper: "Include country code, e.g. +234...")

Section 2: Audience and goals
├── The Audience * (textarea, max 1000 chars with counter)
├── The Primary Problem Solved * (textarea, max 1000 chars with counter)
├── Main Action the Site Should Drive * (text, e.g., "Book a call, buy products, request a quote")
└── Project Type * (Radio cards: Standard Website | E-commerce | Web Application | Custom Software | Not sure yet)

Section 3: Look, feel, and inspiration
├── Existing Branding (text, optional, "Colors, fonts, logo notes. Write 'none yet' if starting fresh")
├── Three Liked Websites * (3 structured rows: URL input + "What do you like about it?" input; at least 1 required)
├── Three Disliked Websites (3 structured rows: URL input + "What put you off?" input; optional)
└── Tone Words * (text input + 4 clickable suggestion chips: [Professional] [Friendly] [Bold] [Minimal])

Section 4: Scope, features, and assets
├── Pages Required * (Checkboxes: Homepage, About, Services, Pricing, Portfolio, Contact, Blog, FAQ, Login/Account, Other [reveals text input])
├── Special Features Needed (Checkboxes: Booking calendar, Payment gateway, Custom forms, Blog/CMS, User accounts, Admin dashboard, WhatsApp integration, Live chat, Multi-language, Other [reveals text input])
├── Budget Range (Select dropdown: [YOUR INPUT: currency ranges], "Not sure yet")
├── Ideal Timeline (Select dropdown: ASAP | 2–4 weeks | 1–2 months | Flexible)
└── Asset Upload Link * (url, exact copy helper: "Provide a Google Drive link containing your logo, brand assets, and any images your website will need." + collapsible 4-step guide)

Final Block & Submission
├── Anything else we should know? (textarea, optional)
├── Honeypot Trap (name="website_url_confirm", off-screen, tabindex="-1", autocomplete="off")
├── Consent Checkbox * ("I agree that A.U.T.O.M.A.T.E. may contact me about this project.")
└── Submit Button: "Submit Project Brief" (Full width, glowing primary button)
```

### 3.3 Draft Saving & Submission Lifecycle
1. **Auto-Save**: On any input, debounce 500ms and write form state JSON to `localStorage.setItem('automate_brief_draft', ...)`.
2. **Honeypot Check**: If `website_url_confirm` is non-empty, silently transition to success screen without dispatching.
3. **Time-on-Page Check**: Reject submissions completed in under 5 seconds (bot protection).
4. **Validation on Blur & Submit**: Highlight invalid fields with red border + icon + specific error message (`role="alert"`). Focus first invalid field on submit.
5. **Drop-in Backend Hook (`FORM_CONFIG`)**:
   ```javascript
   const FORM_CONFIG = {
     endpoint: null, // e.g. "https://formspree.io/f/xxxx" or Google Apps Script URL
     method: "POST",
     simulateDelayMs: 1200
   };
   ```
6. **Animated Success Screen**:
   * Large drawing SVG checkmark icon in emerald-cyan.
   * H2: `"Brief received."`
   * Personal message: `"Thanks, <span id="client-first-name"></span>. We will review your requirements and reply within 24 hours on your email or WhatsApp number."`
   * Next steps list (Discovery call -> Scoped plan -> Timeline).
   * Two action buttons: `"Back to home"` and `"Submit another brief"`.
   * **"Copy my brief" Button**: Copies a clean plain-text summary of all answers to the visitor's clipboard with visual confirmation ("Copied to clipboard!").
