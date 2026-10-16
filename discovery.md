# Discovery Document: Concierge Home-Dentist Landing Page

**Project:** High-end, conversion-focused landing page for a solo concierge home-service dentist
**Stack:** HTML, Tailwind CSS, icon set (Lucide specified, see audit)
**Design tool:** Google Stitch
**Primary conversion:** WhatsApp chat with prefilled message
**Document status:** Discovery + Stitch result audit (v1)

---

## 1. Project Summary

A single-page, mobile-first landing page for a solo dentist who treats patients at their home or office. The page has one job: get the visitor to tap **Book via WhatsApp**. Every section builds trust, removes a fear, or pushes toward that tap.

**Positioning:** Quiet luxury. Boutique hotel meets private physician. Calm, premium, clinical-clean. Never "dental-clinic blue".

**Key promise:** Exceptional dental care delivered to your doorstep: private, unhurried, anxiety-free.

---

## 2. Goals and Success Metrics

| Goal | Metric | Target (to be agreed) |
|---|---|---|
| Generate booking enquiries | WhatsApp CTA click-through rate | [X]% of sessions |
| Qualify leads | Enquiries that mention a service or area | [X]% of chats |
| Build trust fast | Scroll depth to How It Works / FAQ | [X]% reach FAQ |
| Mobile performance | Largest Contentful Paint | under 2.5 s on 4G |
| Mobile usability | Tap-target compliance | 100% at 44px or more |

---

## 3. Audience and Objections

| Persona | Core need | Main objection | Where the page answers it |
|---|---|---|---|
| Busy executives | Save time, privacy | "Is it as good as a clinic?" | Trust stack, About, FAQ 1 and 2 |
| Parents with young children | Avoid chaos of waiting rooms | "Is it safe for kids?" | Who It Serves, Family card |
| Seniors / limited mobility | Dignified bedside care | "Can it be done at home?" | Experience section, Family and Senior card |
| Anxious / dental-phobic patients | Control and calm | "Will I be judged or rushed?" | Zero Anxiety pillar, FAQ 4 |

**Universal objections to answer:** safety and hygiene, price transparency, insurance, space and power needed, emergency handling, service area.

---

## 4. Design System (Brief vs Stitch Output)

### 4.1 Intended tokens (brief)

| Token | Value |
|---|---|
| Page background | #FAFAF9 |
| Card surface | #FFFFFF, border neutral-200/60, shadow-sm |
| Headings | #1C1917 |
| Body text | #57534E |
| Accent (champagne gold) | #C5A059 |
| Primary action | WhatsApp green #25D366 |
| Dark band | #1C1917 |
| Font | Plus Jakarta Sans |

### 4.2 Tokens Stitch actually generated

Stitch produced a Material-style token set rather than the exact values above.

| Role | Stitch token | Value | Matches brief? |
|---|---|---|---|
| Page background | surface | #fff8f5 | No (warmer, pinker than #FAFAF9) |
| Card surface | surface-container-lowest | #ffffff | Yes |
| Card border | outline-variant at 20% | #d1c5b4 at 20% | Approximate |
| Heading text | on-surface | #1e1b19 | Close to #1C1917 |
| Body text | on-surface-variant | #4e4639 | No (darker, browner than #57534E) |
| Gold accent | primary-container | #c5a059 | Yes |
| Text-safe gold | primary | #775a19 | Added by Stitch (good for contrast) |
| Green (header button) | secondary | #006d2f | Differs from #25D366 |
| Green (CTAs) | hard-coded | #25D366 | Yes |
| Dark band | inverse-surface | #33302d | Close, not #1C1917 |
| Font | Plus Jakarta Sans | 400 to 700 loaded | Yes |

**Type scale (Stitch):** display-lg 56/64, headline-lg 40/48 (28/36 mobile), headline-sm 22/30, body-lg 18/28, body-md 16/24, body-sm 14/20, label-md 13, label-sm 11.
**Spacing:** 4 / 8 / 16 / 24 / 40 / 64 / 96 px scale, container 80rem, gutter 1.5rem.
**Radius:** cards rounded-2xl, hero and banners rounded-3xl, buttons rounded-full.

---

## 5. Information Architecture and Section Inventory

Stitch generated 13 sections plus two persistent elements. This is the structure as built.

| # | Section | Anchor | Purpose | CTA present |
|---|---|---|---|---|
| H | Sticky header (logo AURELIA, nav, WhatsApp button) | n/a | Navigation and constant conversion point | Yes |
| 1 | Announcement strip ("Now Booking", "State Board Licensed", "Strict Confidentiality") | n/a | Instant trust | No |
| 2 | Hero (badge, H1, subhead, dual CTA, micro-reassurance, trust micro-bar, image with live card) | n/a | Hook and primary conversion | Yes |
| 3 | Trust strip (4 stats) | n/a | Social proof | No |
| 4 | Three pillars: Clinical Authority, Zero Anxiety, Boutique Discretion | n/a | Value proposition | No |
| 5 | Services grid (4 cards, each with its own WhatsApp link) + mid-page CTA strip | #services | Offer and lead capture | Yes |
| 6 | Who Aurelia Serves (4 persona cards) | n/a | Self-identification | No |
| 7 | How It Works (3 steps) | #how-it-works | Remove friction | Yes |
| 8 | In-Home Experience (what we bring / what you provide) | #experience | Remove practical objections | No |
| 9 | Testimonials (3 placeholders) | n/a | Social proof | No |
| 10 | About the doctor | #about | Credibility | No |
| 11 | FAQ accordion (6 items) | #faq | Objection handling | Yes (soft link) |
| 12 | Final CTA banner (dark) | n/a | Last conversion push | Yes |
| 13 | Practice details block + footer | n/a | Compliance and contact | No |
| F1 | Mobile sticky bottom bar (below md) | n/a | Thumb-reach conversion | Yes |
| F2 | Floating "Direct Concierge" button (bottom right) | n/a | Persistent conversion | Yes |

**WhatsApp CTA count:** header, hero, services mid-strip, four service links, How It Works, FAQ link, final banner, mobile bar, floating button. That meets the "at least 5" conversion rule.

**WhatsApp link pattern:** `https://wa.me/[PHONE_NUMBER]?text=Hi,%20I%20would%20like%20to%20inquire%20about%20scheduling%20a%20home%20dental%20visit`. Service links carry a service-specific prefilled message, which helps lead qualification.

---

## 6. Interaction Behaviour (from the generated script)

- **FAQ accordion:** single-open. Clicking a question closes the others, sets `aria-expanded`, animates `max-height` using `scrollHeight`, and rotates the chevron 180 degrees.
- **Anchor scrolling:** smooth scroll with a 90px header offset.
- **Hover states:** cards lift (`-translate-y-1`, deeper shadow), hero image scales slowly, icon circles invert to gold on pillar cards.
- **Motion:** pulsing "Now Booking" dot and ping animation on the hero live card. No scroll-reveal animations were generated, though the brief asked for a subtle fade-up.

---

## 7. Copy Inventory and Placeholders to Replace

| Placeholder / filler | Where | Needed from client |
|---|---|---|
| [PHONE_NUMBER] | All WhatsApp links | International format, digits only, no plus sign (e.g. 2348012345678) |
| [AREA/CITY], [METROPOLITAN AREA] | Announcement strip, hero card, FAQ 5, footer | Exact service area |
| Brand "AURELIA" | Header, footer, headings | Confirm or replace practice name |
| Dr. [FIRST & LAST NAME], DDS / DMD, [YEARS], [LICENSE NO.] | About, footer | Real credentials |
| [X]+ home visits, [X] years | Trust strip | Verified figures |
| Testimonials (3) | Testimonials | Real, consented patient reviews |
| Doctor portrait and hero image | About, hero | Real photography |
| Email and phone | Final banner, footer | Real contact details |
| Hours | Practice details, footer | Real hours (see conflict in 8.3) |

---

## 8. Audit of the Stitch Result

### 8.1 What Stitch did well

- Strong visual hierarchy and consistent luxury tone; gold is used sparingly and the green CTA is the clear focal point.
- Every required section was delivered, plus useful additions (persona cards, "what we bring / what you provide", testimonials, About).
- Conversion architecture is solid: repeated CTAs, mobile bottom bar, service-specific WhatsApp messages, reassurance micro-copy ("Reply within minutes, no forms").
- FAQ answers address real objections (safety, equipment, pricing, anxiety, area, emergencies).
- Mobile-first grid behaviour (stacking, 2x2 services, 4-up personas that collapse).

### 8.2 Deviations from the brief

1. **Icons:** Material Symbols Outlined are used throughout, not Lucide as specified. Material Symbols is also loaded twice.
2. **Colour tokens:** background, body text and border colours drifted from the specified hex values (see 4.2).
3. **Two greens:** the header button uses #006d2f while every other CTA uses #25D366. Pick one for consistency.
4. **Fade-up scroll animation** requested in the brief is missing.

### 8.3 Defects and risks (prioritised)

**P0: fix before launch**

| # | Issue | Why it matters | Fix |
|---|---|---|---|
| 1 | **Contrast failure on CTAs:** white text on #25D366 is roughly 2:1 | Fails WCAG AA (needs 4.5:1); hurts readability for the most important button | Use dark text (#0B3D1E) on #25D366, or a deeper green (#128C4A or darker) with white text |
| 2 | **Gold text on cream** (text-primary-container, #c5a059 on #fff8f5) is roughly 2.3:1 | Fails AA for small text (e.g. "Years Clinical Experience" label) | Use #775a19 (primary) for text; keep #c5a059 for borders, icons and large decoration |
| 3 | **Hero and doctor images use `data-alt` but have no `alt` attribute** | Accessibility and SEO failure | Add real `alt` text |
| 4 | **Overlapping fixed elements on mobile:** the full-width bottom bar and the floating "Direct Concierge" button both sit at the bottom with z-50 | Floating button covers the bar's content | Hide the floating button below `md` (`hidden md:flex`) |
| 5 | **Unverifiable claims stated as fact:** "5.0" rating, "100% sterile", "Board-certified", "ADA Member", "weekly biological autoclave monitoring confirmed", "HEPA air filtration", "set up in under 8 minutes", "unmarked arrival vehicles", "partner surgical facilities", "digital records sent instantly", "oral cancer screening", "limited weekly roster" | Legal and reputational risk in healthcare marketing; misleading if untrue | Keep only claims the practice can prove; mark the rest as placeholders |
| 6 | **A hard-coded testimonial inside the Experience section** is written as a real quote while the main testimonials are flagged as placeholders | Fabricated social proof | Remove or label as placeholder |
| 7 | **Region-specific compliance language** (HIPAA/HITECH, 911, ADA, State Dental Board, PPO, superbills, ADA codes) is baked in | Wrong or non-compliant if the practice operates elsewhere | Replace with the regulator, privacy law, emergency number and insurance terms of the real market |
| 8 | **Contact and hours conflict:** practice block says Mon to Sat 8 to 7 with Sunday on-call; footer says "Mon to Sun 24/7 on-call surgical team". A fake number (+1 800 555-DENT) and fake email remain beside bracketed placeholders | Confusing and unprofessional | Keep one contact block with real data |

**P1: should fix**

| # | Issue | Fix |
|---|---|---|
| 9 | **Tone clash:** "surgical precision", "surgical suites", "bedside" contradict the "anxiety-free" promise and may alarm phobic patients | Replace with "gentle", "precise", "calm", "private" language |
| 10 | **Header avatar icon** (person circle) implies a login that does not exist | Remove |
| 11 | **Redundant "Now Booking" signals** in the announcement strip and the hero card | Keep one |
| 12 | **Duplicate footer content:** practice details block and footer both carry contact and accreditation | Merge into one footer |
| 13 | **Copyright reads 2025** | Update to the current year or generate dynamically |
| 14 | **Missing SEO and meta:** no `<title>`, meta description, Open Graph tags, favicon, or structured data | Add; include `Dentist` / `LocalBusiness` JSON-LD |
| 15 | **Accordion accessibility:** no `aria-controls`, `focus:outline-none` with no replacement focus style, content not `hidden` for assistive tech | Add focus ring, ARIA wiring, `role="region"` |
| 16 | **Image gender assumption:** the portrait prompt describes a female dentist | Use a real photo of the actual dentist |

**P2: production hardening**

| # | Issue | Fix |
|---|---|---|
| 17 | Tailwind via CDN script | Build with the Tailwind CLI for production (smaller, faster, no runtime compile) |
| 18 | Images hosted on Stitch's `googleusercontent` links | Download, optimise (WebP/AVIF), self-host; add `width`, `height`, `loading="lazy"` |
| 19 | Fonts loaded from two Material Symbols requests | Remove the duplicate; consider self-hosting fonts and subsetting icons |
| 20 | No analytics | Add event tracking on every WhatsApp link (see section 9) |
| 21 | No `prefers-reduced-motion` handling | Disable pulses and transitions for those users |
| 22 | Hard-coded `<script>` inside `<main>` | Move to a deferred script at end of body |

---

## 9. Conversion and Tracking Plan

- **Events to track:** `whatsapp_click` with parameters `location` (header, hero, services-card, mid-strip, how-it-works, faq, final, mobile-bar, floating) and `service` (for card links).
- **UTM discipline:** tag each traffic source so enquiries can be attributed; consider a short unique code in the prefilled message (e.g. "Ref: IG") so the dentist can see where chats originate.
- **Test ideas:** hero CTA copy ("Request a Home Visit" vs "Chat with the Dentist"), position of price transparency, with and without scarcity line, real photo vs stock.
- **Follow-up SLA:** the page promises replies "within minutes". Confirm the dentist can honour it; otherwise soften the copy.

---

## 10. Content and Compliance Checklist

- [ ] All clinical, credential and safety claims verified with documents
- [ ] Licence number and issuing authority displayed and correct
- [ ] Patient testimonials collected with written consent
- [ ] Before/after photos (if used) consented and compliant with advertising rules
- [ ] Privacy policy and terms pages written (footer links currently go to `#`)
- [ ] Privacy and health-data wording matches the local law
- [ ] Emergency instruction uses the correct local emergency number
- [ ] Pricing approach decided (flat estimate, "from" prices, or on enquiry)
- [ ] Insurance statement matches the real billing model

---

## 11. Discovery Questions for the Client

1. Practice name, tagline and logo files
2. Dentist's full name, qualifications, years in practice, licence details
3. Exact service area and travel radius; any surcharge by distance
4. Services actually offered at home (and which are excluded)
5. Price list or pricing model; deposit and cancellation policy
6. Payment methods and insurance or reimbursement process
7. Operating hours; emergency availability
8. Equipment list and sterilisation process (for accurate claims)
9. Languages spoken; WhatsApp response hours
10. Photography: dentist, equipment, real home-visit imagery
11. Existing reviews, press, or social proof
12. Preferred domain, and whether a Business WhatsApp account and catalogue exist

---

## 12. Recommended Next Steps

1. Confirm the client answers in section 11.
2. Apply the P0 fixes (contrast, alt text, mobile overlap, claim verification, regional compliance, contact data).
3. Remap Stitch tokens to the brief (#FAFAF9, #1C1917, #57534E) or formally adopt the Stitch palette.
4. Swap Material Symbols for Lucide, or update the spec to accept Material Symbols.
5. Add SEO, structured data and analytics.
6. Replace stock imagery and placeholder testimonials with real assets.
7. Build for production (Tailwind CLI, optimised images, self-hosted fonts).
8. QA on real devices (iOS Safari, Android Chrome), then Lighthouse targets: Performance 90+, Accessibility 95+, SEO 95+.

---

## Appendix A: Stitch Result Summary

**File type:** Single HTML document, Tailwind via CDN (`cdn.tailwindcss.com`) with a custom `tailwind.config` block.
**Brand placeholder used by Stitch:** AURELIA / "Concierge Dentistry".
**Fonts:** Plus Jakarta Sans (400, 500, 600, 700) and Material Symbols Outlined.
**Layout shell:** fixed 80px header, `main` with top padding, sections wrapped in a max-width 80rem container.

### A.1 Tailwind colour tokens (as generated)

```
background / surface / surface-bright: #fff8f5
surface-container-lowest: #ffffff
surface-container-low: #faf2ee
surface-container: #f4ece8
surface-container-high: #eee7e3
surface-container-highest: #e9e1dd
on-surface / on-background: #1e1b19
on-surface-variant: #4e4639
outline: #7f7667
outline-variant: #d1c5b4
primary: #775a19
primary-container: #c5a059
primary-fixed: #ffdea5
primary-fixed-dim: #e9c176
secondary: #006d2f
secondary-fixed: #66ff8e
secondary-container: #5dfd8a
tertiary: #485e8b
inverse-surface: #33302d
inverse-on-surface: #f7efeb
inverse-primary: #e9c176
error: #ba1a1a
Hard-coded CTA green: #25D366
```

### A.2 Accordion and scroll script (as generated)

```js
document.addEventListener('DOMContentLoaded', function () {
  const accordionButtons = document.querySelectorAll('.faq-button');

  accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('.faq-icon');
      const isExpanded = button.getAttribute('aria-expanded') === 'true';

      accordionButtons.forEach(otherButton => {
        if (otherButton !== button) {
          otherButton.setAttribute('aria-expanded', 'false');
          otherButton.nextElementSibling.style.maxHeight = null;
          const otherIcon = otherButton.querySelector('.faq-icon');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        }
      });

      if (isExpanded) {
        button.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        button.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 90;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });
});
```

### A.3 Full source

The complete generated HTML (all 13 sections, header, footer, mobile bar and floating button) is the version David pasted from Stitch. It is not duplicated here to keep this document readable; keep the original Stitch export or project as the source of truth for the unmodified build.

---

## Appendix B: Section Copy Snapshot (as generated)

- **Hero badge:** Exclusive In-Home Concierge Dental Care
- **H1:** Exceptional Dental Care, Delivered to Your Doorstep.
- **Hero CTA:** Request a Home Visit on WhatsApp
- **Micro-reassurance:** Reply within minutes · No cumbersome intake forms · No obligation
- **Trust micro-bar:** Licensed & Insured · Hospital-Grade Sterilisation · Trusted by Executives & Families
- **Pillars:** Clinical Authority · Zero Anxiety · Boutique Discretion
- **Services:** Comprehensive Preventative Suite · Cosmetic Enhancements & Smile Design · Restorative & Maintenance Care · Family & Senior Concierge Dental
- **Steps:** Connect on WhatsApp · Virtual Screening & Plan · Concierge Arrival & Care
- **FAQ:** safety, equipment, pricing and payment, anxiety, service area and lead time, emergencies
- **Final banner:** Ready to experience dental care on your terms? (Limited home-visit appointments each week)
- **Mobile bar:** Book In-Home Visit via WhatsApp · Direct concierge response · Usually replies in minutes
