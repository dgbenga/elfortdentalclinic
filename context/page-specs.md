# Page Specifications & Wireframes: Aurelia Concierge Dentistry

**Scope:** Complete Section-by-Section Wireframe Specifications, Atomic Component Breakdown, and Finalized Human Copy for the Aurelia Concierge Dentistry Landing Page.  
**Invariants Enforced:** Zero Lorem Ipsum • Anti-Pill Law (No emoji badge chips) • Atomic Component Decomposition • WCAG 2.1 AA Contrast Enforced • Mobile Overlap Fixed (`hidden md:flex`).

---

## 1. Atomic Component Architecture

### Atoms (Primitives)
* `AtomButton`: Base button styled with `--radius-full`, focus ring, active press feedback. Variants: `whatsapp-forest`, `whatsapp-bright`, `secondary-outline`, `ghost-nav`.
* `AtomHeading`: Typographic headline component with strict scale (`display-lg`, `headline-lg`, `headline-sm`) using Instrument Serif or Plus Jakarta Sans.
* `AtomText`: Body text component with capped line-length (max 65ch) and `--muted-foreground`.
* `AtomTag`: Clean tabular metadata tag (Geist Mono, uppercase tracking, zero pill emojis).
* `AtomIcon`: Scalable Lucide icon wrapper with consistent stroke width (1.5px) and gold/neutral accents.
* `AtomSeparator`: Subtle 1px divider line (`--border`).

### Molecules (Composed Units)
* `MoleculeWhatsAppCTA`: Encapsulated CTA button with WhatsApp icon, prefilled destination URL, and optional micro-reassurance label (*"Replies in minutes"*).
* `MoleculeSectionHeader`: Section title block featuring uppercase editorial category, commanding `h2` heading, and descriptive intro paragraph. Zero pill chips.
* `MoleculeServiceCard`: Interactive card with service title, clinical scope, bullet list, price indicator, and direct WhatsApp referral trigger.
* `MoleculePersonaCard`: Empathetic persona scenario card highlighting specific home convenience scenarios.
* `MoleculeTrustMetric`: Large tabular metric figure with explanatory label and subtle gold divider.
* `MoleculeFAQAccordionItem`: Accessible Radix accordion item with smooth CSS `scrollHeight` transition, chevron rotation, and full keyboard navigation.
* `MoleculeTestimonial`: Consented patient quote card with attribution, location, and verified visit context.

### Organisms (Section Composites)
* `OrganismStickyHeader`: Top navigation with wordmark, anchor links, and desktop WhatsApp button.
* `OrganismAnnouncementStrip`: High-trust operational banner with schedule and service territory.
* `OrganismHero`: Full-width 60/40 visual hero with H1, value proposition, dual CTAs, live availability indicator, and in-home dental suite imagery.
* `OrganismTrustStrip`: 4-column metric grid establishing credentials.
* `OrganismPillars`: 3-card value proposition layout (Clinical Authority, Zero Anxiety, Boutique Discretion).
* `OrganismServicesGrid`: 4-card clinical service grid + mid-page WhatsApp conversion strip.
* `OrganismWhoWeServe`: 4 persona scenario cards providing instant self-identification.
* `OrganismHowItWorks`: 3-step timeline removing friction.
* `OrganismExperience`: Side-by-side comparative breakdown ("What We Bring / What You Provide").
* `OrganismTestimonials`: 3 patient endorsement cards.
* `OrganismAboutDoctor`: Clinician profile, credentials, philosophy, and personal quote.
* `OrganismFAQ`: 6-item objection-handling accordion.
* `OrganismFinalCTA`: High-contrast evening dark banner with scarcity note.
* `OrganismFooter`: Practice details, legal compliance, emergency disclaimer, and copyright.
* `OrganismMobileBar`: Fixed bottom viewport bar for touch-first conversion (`< md`).
* `OrganismFloatingButton`: Persistent bottom-right WhatsApp trigger (`hidden md:flex`).

---

## 2. Section-by-Section Wireframe Specifications & Copy

### SECTION H: Sticky Header
* **Position:** Fixed top (Z-Index 40, Height 80px, Background `--background/90` with backdrop blur).
* **Layout:** Container max-80rem, flex justify-between items-center.
* **Element Inventory:**
  1. Wordmark: `"AURELIA"` (Instrument Serif, 24px, tracking 0.05em) + sub-label `"CONCIERGE DENTISTRY"` (Geist Mono, 9px, tracking 0.2em).
  2. Desktop Navigation: `#services` ("Services"), `#how-it-works` ("How It Works"), `#experience` ("The Visit"), `#about` ("About Dr. [Name]"), `#faq` ("FAQ").
  3. Action CTA: `MoleculeWhatsAppCTA` ("Inquire on WhatsApp", compact variant, forest green).
* **Mobile Behavior:** Nav links hidden; wordmark left, compact WhatsApp icon button right.

---

### SECTION 1: Announcement & Operating Strip
* **Position:** Top of page below header (Z-Index 10, Height 40px, Background `--secondary`, border-b).
* **Layout:** Centered flex row with subtle bullet separators.
* **Copy:**
  - Item 1: `"Now Scheduling Private Home Visits in [Metropolitan Area]"`
  - Item 2: `"State Dental Board Licensed & Insured"`
  - Item 3: `"Mon–Sat 8:00 AM – 7:00 PM • Sunday Emergency On-Call"`
* **Mobile Behavior:** Marquee or single centered item ("Now Scheduling in [Metropolitan Area] • Licensed & Insured").

---

### SECTION 2: Hero Section
* **Position:** Main viewport above the fold.
* **Layout:** 60/40 Asymmetric Split (Desktop), stacked single-column (Mobile).
* **Left Column (Text & Conversion):**
  - Category Eyebrow: `"PRIVATE IN-HOME DENTAL CARE"` (Plus Jakarta Sans, 12px, bold, tracking 0.15em, text `--primary-text-safe`).
  - H1 Display Heading: `"Exceptional Dental Care, Delivered to Your Doorstep."` (Instrument Serif, 54px desktop / 38px mobile, leading 1.15).
  - Subhead: `"Experience unhurried, hospital-grade dental treatments in the quiet comfort of your residence or private office. Tailored for busy executives, families, and patients seeking calm, anxiety-free care."` (Plus Jakarta Sans, 18px, leading 1.6, text `--muted-foreground`).
  - Primary CTA Group:
    * Primary Button: `"Request a Home Visit on WhatsApp"` (`MoleculeWhatsAppCTA`, Forest Green `#128C4A`, white text, 48px height, rounded-full, WhatsApp icon).
    * Secondary Anchor: `"Explore Treatments & Pricing"` (Ghost button, border-b, arrow icon, anchors to `#services`).
  - Micro-Reassurance Line: `"Direct response from our clinical team • Replies within minutes • No obligation"` (Geist Mono, 12px).
  - Trust Micro-Bar: 3 checkmarks: `"Hospital-Grade Autoclave Sterilization"`, `"Board-Certified Clinicians"`, `"Zero Waiting Room Anxiety"`.
* **Right Column (Visual Grounding):**
  - High-resolution editorial portrait/scene: Quiet luxury setting with portable medical unit (sleek Pelican-style case, gentle ambient light, zero intimidating clinic machinery).
  - Floating Live Status Card (bottom left of image):
    * Pulsing amber/gold dot + `"Now Booking [Area] • 4 Home Slots Available This Week"` (Geist Mono, 12px).

---

### SECTION 3: Trust Metric Strip
* **Position:** Immediately following Hero.
* **Layout:** 4-Column Grid (Desktop), 2x2 Grid (Mobile). Background `--card`, border-y `--border`.
* **Metrics:**
  1. `[12]+ Years` — Clinical Private Practice Experience
  2. `[1,500]+` — Completed In-Home Patient Visits
  3. `100%` — Hospital-Grade Mobile Sterilization Standards
  4. `4.9 / 5.0` — Patient Satisfaction Across 200+ Private Reviews

---

### SECTION 4: Three Pillars of Care
* **Position:** Section 4.
* **Layout:** 3-Column Card Grid (Desktop), stacked single column (Mobile).
* **Headline:** `"Dentistry Reimagined Around Your Life"`
* **Cards:**
  1. **Clinical Authority:**
     - Title: `"Hospital-Grade Precision"`
     - Body: `"We transport complete clinical capabilities into your home—from ultra-low-radiation digital sensors to biological autoclave monitored instruments. Zero compromises on clinical rigor."`
  2. **Zero Anxiety:**
     - Title: `"Calm, Unhurried Appointments"`
     - Body: `"Never feel rushed, judged, or trapped in a noisy waiting room. You control the pace of every treatment in your own living room, armchair, or bedroom."`
  3. **Boutique Discretion:**
     - Title: `"Absolute Privacy & Convenience"`
     - Body: `"Unmarked arrivals, confidential treatment, and flexible scheduling designed around demanding executive and family itineraries."`

---

### SECTION 5: Comprehensive Services Grid
* **Position:** `#services`.
* **Layout:** 2x2 Card Grid with high-contrast mid-page conversion strip.
* **Headline:** `"Clinical Treatments in the Sanctuary of Your Home"`
* **Service Cards:**
  1. **Comprehensive Preventive Suite:**
     - Scope: Ultrasonic dental cleaning, gentle periodontal scaling, comprehensive oral cancer screening, remineralizing fluoride varnish, and digital imaging.
     - Prefilled Link: `wa.me/[PHONE]?text=Hi,%20I'd%20like%20to%20inquire%20about%20a%20Comprehensive%20Preventive%20visit.`
     - CTA Text: `"Inquire for Preventive Visit →"`
  2. **Cosmetic Enhancements & Smile Design:**
     - Scope: Professional in-home enamel brightening, cosmetic composite bonding, custom nightguards, clear aligner consultations.
     - Prefilled Link: `wa.me/[PHONE]?text=Hi,%20I'd%20like%20to%20inquire%20about%20Cosmetic%20Brightening%20and%20Smile%20Design.`
     - CTA Text: `"Inquire for Cosmetic Care →"`
  3. **Restorative & Gentle Maintenance:**
     - Scope: Tooth-colored composite restorations, crown recementation, chipped tooth repairs, emergency relief, and desensitizing therapies.
     - Prefilled Link: `wa.me/[PHONE]?text=Hi,%20I'd%20like%20to%20inquire%20about%20Restorative%20Treatment%20at%20home.`
     - CTA Text: `"Inquire for Restorative Care →"`
  4. **Family & Senior Concierge Care:**
     - Scope: Multi-member household visits, gentle pediatric habituation, comfortable bedside oral care for seniors with limited mobility, denture adjustments.
     - Prefilled Link: `wa.me/[PHONE]?text=Hi,%20I'd%20like%20to%20inquire%20about%20Family%20or%20Senior%20Concierge%20Care.`
     - CTA Text: `"Inquire for Family / Senior Visit →"`
* **Mid-Page Conversion Banner:**
  - Copy: `"Need a treatment not listed above? Send us a quick note on WhatsApp to verify clinical feasibility."`
  - Button: `"Chat Directly with Dr. [Name]"`

---

### SECTION 6: Who Aurelia Serves (Persona Self-Identification)
* **Position:** Section 6.
* **Layout:** 4-Column Horizontal Cards (Desktop), 2x2 (Tablet), 1-Col (Mobile).
* **Headline:** `"Tailored Care for Discerning Lifestyles"`
* **Persona Profiles:**
  1. **For Busy Executives:** Eliminate the 2.5-hour clinic disruption. Receive routine cleanings between video conferences.
  2. **For Parents & Children:** No stressful parking, waiting room tantrums, or childcare juggling. The whole family treated in one relaxed afternoon.
  3. **For Anxious Patients:** Full autonomy. Bring your favorite music, take breaks whenever needed, and experience dentistry without clinic phobia.
  4. **For Aging Parents & Bedside:** Compassionate, dignified bedside care for loved ones with limited mobility or physical fatigue.

---

### SECTION 7: How It Works (3 Frictionless Steps)
* **Position:** `#how-it-works`.
* **Layout:** 3-Step Horizontal Process with connecting guideline.
* **Headline:** `"From First Message to Treatment in Three Simple Steps"`
* **Steps:**
  1. **Step 1: Message on WhatsApp:** Send a brief message describing your location and required care. Our team replies within minutes to confirm availability and upfront fee estimates.
  2. **Step 2: Virtual Screening:** Share brief clinical details or past dental records securely so we prepare the exact instrument suite for your home.
  3. **Step 3: Concierge Arrival:** Dr. [Name] arrives with sterilized mobile equipment, sets up in 10 minutes in your chosen room, and provides unhurried, private care.

---

### SECTION 8: The In-Home Experience ("What We Bring / What You Provide")
* **Position:** `#experience`.
* **Layout:** Side-by-side 2-column comparison card dispelling equipment fears.
* **Left Column ("What Aurelia Brings"):**
  - Portable ergonomic treatment unit & silent air compressor
  - Ultra-low radiation handheld digital x-ray sensor
  - Hospital-grade autoclave sterilized instrument cassettes
  - Protective hygienic floor draping & HEPA air filtration
  - Calming ambient sound & optional eye masks
* **Right Column ("What You Provide"):**
  - A standard living room, dining area, or bedside space (approx 6x6 ft)
  - One standard household electrical outlet (110V/220V)
  - Access to a standard sink for hand hygiene
  - Your favorite chair or sofa (we adapt comfortably to your posture)

---

### SECTION 9: Patient Testimonials & Case Stories
* **Position:** Section 9.
* **Layout:** 3-Card Carousel/Grid with verified star ratings and verified review tags.
* **Headline:** `"Private Care, Praised by Patients"`
* **Testimonials:**
  1. `"Having Dr. [Name] come to our home was life-changing for our family. Both kids had their teeth cleaned in their pajamas without a single tear, and I answered work emails in the other room. We will never go back to a waiting room."` — *Eleanor M., Mother of Two, [Neighborhood]*
  2. `"As someone who avoided the dentist for six years due to extreme panic, the unhurried gentleness of this visit was remarkable. Dr. [Name] was completely patient, explained every step, and treated me in my favorite armchair."` — *Marcus V., Managing Partner, [Financial District]*
  3. `"My mother has severe arthritis and getting her into a clinic chair was traumatic. Aurelia provided gentle, dignified cleaning right at her bedside. Highly recommended for senior care."` — *Sarah K., [Neighborhood]*

---

### SECTION 10: About Dr. [Dentist Name]
* **Position:** `#about`.
* **Layout:** 40/60 Split (Doctor Portrait Left, Bio & Credentials Right).
* **Headline:** `"A Commitment to Uncompromising, Patient-First Dentistry"`
* **Doctor Bio:**
  - `"Dr. [First & Last Name], DDS / DMD, founded Aurelia Concierge Dentistry with a clear conviction: exceptional clinical dentistry should fit effortlessly into patients' lives, not demand their day. With over [12] years of clinical practice and advanced training in anxiety-free restorative protocols, Dr. [Name] brings the standards of a premier private clinic directly to your personal sanctuary."`
  - Verified Credentials Box:
    * Dental Degree: `[University / Dental School, Year]`
    * State Dental Board License No: `[License No. Verified]`
    * Professional Affiliations: `[ADA / Relevant National Association Member]`
    * Infection Control: `Hospital-grade autoclave sterilization protocols confirmed`

---

### SECTION 11: Frequently Asked Questions (FAQ Accordion)
* **Position:** `#faq`.
* **Layout:** Centered single-column accordion (Max 800px width).
* **Questions & Verbatim Human Answers:**
  1. **Q: Is mobile dentistry as clean and sterile as a traditional dental clinic?**  
     *A: Absolutely. We follow stringent hospital-grade infection control standards. All clinical instruments arrive in sealed, autoclave-sterilized cassettes opened exclusively in front of you. We use single-use disposables wherever appropriate and protect your home surfaces with medical draping.*
  2. **Q: How much space is needed for the appointment?**  
     *A: Very little. A space approximately 6 by 6 feet in a living room, dining room, study, or bedroom is plenty. All we need is access to a standard electrical outlet and a nearby sink for clinical hand washing.*
  3. **Q: What are your fees, and do you accept dental insurance?**  
     *A: We operate on an upfront, transparent fee schedule with zero surprise bills. We provide detailed itemized superbills with standard dental procedure codes that you can submit to your PPO dental insurer for out-of-network reimbursement. We provide exact visit estimates via WhatsApp before confirming your booking.*
  4. **Q: I experience severe dental phobia. How do you handle anxious patients?**  
     *A: Anxiety-free care is a foundational pillar of Aurelia. You are always in control: you decide when we begin, when we take a break, and what music you prefer. There are no cold waiting rooms, no clinical smells, and no judgment regarding past dental neglect.*
  5. **Q: What areas do you serve, and what is your advance booking time?**  
     *A: We serve patients throughout [City/Metropolitan Area] within a [15-mile / 25km] radius. We typically schedule visits 2 to 5 days in advance, with limited same-day or next-day slots reserved for urgent needs.*
  6. **Q: How do you handle true dental emergencies?**  
     *A: For active pain, broken restorations, or chipped teeth, we offer priority home visits whenever our clinical schedule allows. However, for severe facial trauma, uncontrolled bleeding, or breathing difficulties, please call [911 / Local Emergency Services] or visit the nearest emergency department immediately.*

---

### SECTION 12: Final Call to Action Banner
* **Position:** Section 12 (Pre-Footer).
* **Layout:** High-contrast evening dark banner (`--dark-surface`, text `--dark-foreground`, rounded-3xl with subtle gold perimeter glow).
* **Headline:** `"Experience Dental Care on Your Terms."`
* **Subhead:** `"Limited in-home appointments scheduled each week to guarantee unhurried, private clinical care for every patient."`
* **CTA Button:** `MoleculeWhatsAppCTA` ("Inquire & Reserve Your Visit on WhatsApp", large 52px, Forest Green `#128C4A` or Bright `#25D366` with `#0B3D1E` text).
* **Micro-Copy:** `"Direct WhatsApp chat with our dental concierge • No cumbersome forms • Response in minutes"`

---

### SECTION 13: Practice Details & Legal Footer
* **Position:** Bottom of page.
* **Layout:** 3-Column Footer Grid + Bottom Legal Copyright Bar.
* **Column 1:** Aurelia Concierge Dentistry wordmark, operating philosophy, and direct emergency medical disclaimer.
* **Column 2:** Service Area ([City / Neighborhoods]), Operating Hours (`Mon–Sat 8:00 AM – 7:00 PM • Sunday Emergency On-Call`).
* **Column 3:** Direct Contact (`WhatsApp: [Phone Number]`, `Email: concierge@[domain].com`).
* **Legal Bar:**
  - Copyright: `© 2026 Aurelia Concierge Dentistry. All rights reserved.`
  - Medical Disclaimer: `"The information on this website is for informational purposes and does not establish a dentist-patient relationship until an in-person clinical examination is conducted."`
  - Links: `Privacy Policy`, `Terms of Service`, `Accessibility Statement`.

---

### SECTION F1: Persistent Mobile Sticky Bar (`< md` only)
* **Position:** Fixed bottom viewport (Z-Index 50, Height 68px, Background `--background/95`, border-t).
* **Layout:** Flex row with compact service reminder on left + full-touch WhatsApp button on right.
* **Button Copy:** `"Book Home Visit on WhatsApp"` (`MoleculeWhatsAppCTA`, 44px min tap target).
* **Micro-label:** `"Direct reply • Usually in minutes"`

---

### SECTION F2: Floating Concierge Button (`md+` only)
* **Position:** Fixed bottom-right (Z-Index 40, Bottom 32px, Right 32px, `hidden md:flex`).
* **Fix Applied:** Strictly hidden on mobile screens (`< md`) to eliminate viewport collisions with Section F1.
* **Appearance:** Circular green WhatsApp button with pulsing gold ping ring and tooltip label `"Direct Concierge Chat"`.
