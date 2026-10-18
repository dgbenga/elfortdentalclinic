/**
 * A.U.T.O.MATE — Engineering Lab Precision Client Logic
 * Plain ES6+ Vanilla Architecture (Zero Frameworks, Zero Build Step)
 */

/* ==========================================================================
   1. Configuration & Data Structures
   ========================================================================== */

/**
 * Single-line Drop-in Backend Hook for Project Brief Submissions.
 * Set endpoint to a Formspree, Web3Forms, or Google Apps Script URL.
 */
const FORM_CONFIG = {
  endpoint: "https://script.google.com/macros/s/AKfycbz9EJBpIyyBqazYi324cuf-RNnORsXymjiTFtXeS87gQrBFaaQqvbAIRXaRtYtw6zpQ/exec",
  method: "POST",
  simulateDelayMs: 1200  // Fallback simulated latency if endpoint fails
};

/**
 * Client Success Stories & Testimonials Data Vault.
 * Replace placeholder entries here with real client testimonials.
 */
/* <!-- REPLACE WITH REAL TESTIMONIAL --> */
const TESTIMONIALS = [
  {
    quote: "The checkout is seamless and our customers stopped calling to ask how to pay. Best investment we made this year.",
    result: "Orders up after launch",
    name: "T. Adeyemi",
    role: "Founder, Retail Studio",
    avatar: "TA",
    isPlaceholder: true
  },
  {
    quote: "Patients book consultations directly without our front desk getting overwhelmed. Clean, fast, and never goes down.",
    result: "Zero booking errors",
    name: "Dr. E. Okafor",
    role: "Medical Director, HealthFirst",
    avatar: "EO",
    isPlaceholder: true
  },
  {
    quote: "Replaced 6 messy spreadsheets with one automated dashboard that our drivers actually use. Saved us countless hours.",
    result: "15 hrs saved weekly",
    name: "M. Ibrahim",
    role: "Operations Lead, FastFleet",
    avatar: "MI",
    isPlaceholder: true
  }
];

/* Page load timestamp for anti-bot time-on-page verification */
let pageLoadedAt = Date.now();

/* ==========================================================================
   2. Modular Functional Controllers
   ========================================================================== */

/**
 * Controls sticky navigation scroll depth, mobile menu toggling, and keyboard traps.
 */
function initNav() {
  const navbar = document.getElementById("main-nav");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link-item");

  if (!navbar) return;

  // Scroll depth border enhancement
  let isScrolled = false;
  window.addEventListener("scroll", () => {
    const shouldBeScrolled = window.scrollY > 8;
    if (shouldBeScrolled !== isScrolled) {
      isScrolled = shouldBeScrolled;
      if (isScrolled) {
        navbar.classList.add("border-b", "border-slate-200", "shadow-sm");
      } else {
        navbar.classList.remove("border-b", "border-slate-200", "shadow-sm");
      }
    }
  }, { passive: true });

  // Mobile drawer interaction
  if (navToggle && navMenu) {
    const toggleMenu = (open) => {
      const isOpen = open !== undefined ? open : navToggle.getAttribute("aria-expanded") !== "true";
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navMenu.classList.toggle("hidden", !isOpen);
      if (isOpen) {
        navMenu.focus();
      }
    };

    navToggle.addEventListener("click", () => toggleMenu());

    // Close on navigation link selection
    navLinks.forEach(link => {
      link.addEventListener("click", () => toggleMenu(false));
    });

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
        toggleMenu(false);
        navToggle.focus();
      }
    });

    // Close when tapping outside the menu
    document.addEventListener("click", (e) => {
      if (navToggle.getAttribute("aria-expanded") === "true" &&
          !navbar.contains(e.target)) {
        toggleMenu(false);
      }
    });
  }
}

/**
 * Tracks sections in viewport via IntersectionObserver to highlight active nav links.
 */
function initActiveLinks() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".desktop-nav-link");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          const href = link.getAttribute("href");
          if (href === `#${id}`) {
            link.classList.add("text-cyan-700", "font-semibold");
            link.classList.remove("text-slate-600");
          } else {
            link.classList.remove("text-cyan-700", "font-semibold");
            link.classList.add("text-slate-600");
          }
        });
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });

  sections.forEach(sec => observer.observe(sec));
}

/**
 * Cycles typewriter phrases in the hero section with strict timing and pause controls.
 */
function initTypewriter() {
  const target = document.getElementById("typewriter-text");
  const heroSection = document.getElementById("hero");
  if (!target) return;

  const phrases = [
    "website",
    "ecommerce website",
    "web application",
    "softwares and applications, projects"
  ];

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    target.textContent = phrases.join(" · ");
    return;
  }

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timerId = null;
  let isVisible = true;

  const type = () => {
    if (!isVisible) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      target.textContent = currentPhrase.substring(0, charIndex);
    } else {
      charIndex++;
      target.textContent = currentPhrase.substring(0, charIndex);
    }

    let delay = isDeleting ? 40 : 70;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = 1600; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 350; // Pause before typing next word
    }

    timerId = setTimeout(type, delay);
  };

  // Pause when hero is not visible
  if (heroSection) {
    const heroObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) {
        clearTimeout(timerId);
        type();
      } else {
        clearTimeout(timerId);
      }
    }, { threshold: 0.1 });
    heroObserver.observe(heroSection);
  }

  // Pause when tab is inactive
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      isVisible = false;
      clearTimeout(timerId);
    } else {
      isVisible = true;
      type();
    }
  });

  type();
}

/**
 * Handles smooth 16px entrance reveals for content sections.
 */
function initReveal() {
  const revealElements = document.querySelectorAll(".reveal-block");
  if (!revealElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(el => observer.observe(el));
}

/**
 * Handles subtle scale and opacity diminution on sticky service cards as they stack.
 */
function initServiceStack() {
  const cards = document.querySelectorAll(".service-sticky-card");
  if (!cards.length) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) return;

  let ticking = false;

  const updateCardTransforms = () => {
    const windowHeight = window.innerHeight;
    cards.forEach((card, index) => {
      if (index === cards.length - 1) return; // Topmost card does not need scaling
      const nextCard = cards[index + 1];
      const nextRect = nextCard.getBoundingClientRect();
      const currentRect = card.getBoundingClientRect();

      // If next card is sliding over current card
      if (nextRect.top <= currentRect.top + currentRect.height) {
        const overlap = Math.max(0, (currentRect.top + currentRect.height) - nextRect.top);
        const progress = Math.min(1, overlap / currentRect.height);
        const scale = 1 - (progress * 0.04); // Down to 0.96
        const opacity = 1 - (progress * 0.08); // Down to 0.92
        card.style.transform = `scale(${scale})`;
        card.style.opacity = `${opacity}`;
      } else {
        card.style.transform = "scale(1)";
        card.style.opacity = "1";
      }
    });
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(updateCardTransforms);
      ticking = true;
    }
  }, { passive: true });
}

/**
 * Triggers SVG stroke-dashoffset transition to draw the Process connector line on scroll.
 */
function initProcessLine() {
  const traceLine = document.getElementById("process-connector-line");
  const processSection = document.getElementById("process");
  if (!traceLine || !processSection) return;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      traceLine.classList.add("drawn");
      observer.unobserve(processSection);
    }
  }, { threshold: 0.25 });

  observer.observe(processSection);
}

/**
 * Injects testimonials into the DOM from the single-source array with placeholder tags.
 */
function initTestimonials() {
  const container = document.getElementById("testimonials-grid");
  if (!container) return;

  container.innerHTML = TESTIMONIALS.map((item, idx) => `
    <article class="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm relative reveal-block" data-index="${idx}">
      ${item.isPlaceholder ? `
        <span class="absolute top-4 right-4 text-[0.6875rem] font-mono-code uppercase tracking-wider px-2 py-0.5 rounded bg-slate-100 text-slate-500 border border-slate-200">
          Placeholder
        </span>
      ` : ''}
      <div>
        <span class="inline-block px-2.5 py-1 rounded-md text-xs font-semibold bg-cyan-50 text-cyan-800 border border-cyan-100 mb-4">
          ${escapeHtml(item.result)}
        </span>
        <blockquote class="text-slate-800 text-base md:text-lg leading-relaxed mb-6">
          &ldquo;${escapeHtml(item.quote)}&rdquo;
        </blockquote>
      </div>
      <div class="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div class="w-10 h-10 rounded-lg bg-slate-900 text-cyan-400 font-mono-code font-bold text-sm flex items-center justify-center flex-shrink-0">
          ${escapeHtml(item.avatar)}
        </div>
        <div>
          <h4 class="font-bold text-slate-900 text-sm leading-tight">${escapeHtml(item.name)}</h4>
          <p class="text-xs text-slate-500 leading-tight">${escapeHtml(item.role)}</p>
        </div>
      </div>
    </article>
  `).join('');
}

/**
 * Initializes FAQ interactive states (native HTML details handles accessibility).
 */
function initFaq() {
  const faqItems = document.querySelectorAll(".faq-accordion-item");
  faqItems.forEach(item => {
    item.addEventListener("toggle", () => {
      const chevron = item.querySelector(".faq-chevron");
      if (chevron) {
        chevron.classList.toggle("rotate-180", item.open);
      }
    });
  });
}

/**
 * Automatically keeps all copyright year labels current.
 */
function initFooterYear() {
  const currentYear = new Date().getFullYear();
  document.querySelectorAll(".current-year").forEach(el => {
    el.textContent = String(currentYear);
  });
}

/**
 * Live character counter logic for short and long form inputs.
 */
function initFormCounters() {
  const countedInputs = document.querySelectorAll("[data-counter-target]");
  countedInputs.forEach(input => {
    const counterId = input.getAttribute("data-counter-target");
    const counterEl = document.getElementById(counterId);
    const maxChars = parseInt(input.getAttribute("maxlength") || "1000", 10);

    if (!counterEl) return;

    const updateCounter = () => {
      const length = input.value.length;
      counterEl.textContent = `${length} / ${maxChars}`;
      if (length >= maxChars) {
        counterEl.classList.add("text-red-600");
      } else {
        counterEl.classList.remove("text-red-600");
      }
    };

    input.addEventListener("input", updateCounter);
    updateCounter();
  });
}

/**
 * Clickable tone suggestion chips that cleanly append terms to the Tone Words input.
 */
function initChips() {
  const chips = document.querySelectorAll(".tone-suggestion-chip");
  const toneInput = document.getElementById("tone_words");
  if (!chips.length || !toneInput) return;

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      const word = chip.getAttribute("data-word") || chip.textContent.trim();
      const currentVal = toneInput.value.trim();
      if (!currentVal) {
        toneInput.value = word;
      } else if (!currentVal.toLowerCase().includes(word.toLowerCase())) {
        toneInput.value = `${currentVal}, ${word}`;
      }
      toneInput.dispatchEvent(new Event("input", { bubbles: true }));
      chip.classList.add("bg-cyan-100", "border-cyan-400", "text-cyan-900");
    });
  });
}

/**
 * Auto-saves in-progress brief drafts to localStorage (debounced 500ms) and provides restore banner.
 */
function initFormDraft() {
  const form = document.getElementById("project-brief-form");
  const restoreBanner = document.getElementById("draft-restore-banner");
  const clearDraftBtn = document.getElementById("clear-draft-btn");
  const DRAFT_KEY = "automate_brief_draft_v1";

  if (!form) return;

  // Restore draft if present
  try {
    const saved = localStorage.getItem(DRAFT_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      let fieldsRestored = 0;

      Object.entries(data).forEach(([name, value]) => {
        if (name === "consent" || name === "website_url_confirm") return;
        const input = form.elements[name];
        if (!input) return;

        if (input.type === "checkbox") {
          input.checked = Boolean(value);
          fieldsRestored++;
        } else if (input instanceof RadioNodeList) {
          input.value = value;
          fieldsRestored++;
        } else if (input.type === "radio") {
          if (input.value === value) input.checked = true;
          fieldsRestored++;
        } else {
          input.value = value;
          fieldsRestored++;
        }
      });

      if (fieldsRestored > 0 && restoreBanner) {
        restoreBanner.classList.remove("hidden");
      }
    }
  } catch (err) {
    // Private browsing or storage blocked; fail silently
  }

  // Clear draft handler
  if (clearDraftBtn) {
    clearDraftBtn.addEventListener("click", () => {
      try {
        localStorage.removeItem(DRAFT_KEY);
        form.reset();
        if (restoreBanner) restoreBanner.classList.add("hidden");
      } catch (err) {}
    });
  }

  // Debounced auto-save listener
  let saveTimer = null;
  form.addEventListener("input", () => {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      try {
        const formData = new FormData(form);
        const draftObj = {};
        for (const [key, value] of formData.entries()) {
          if (key === "consent" || key === "website_url_confirm") continue;
          draftObj[key] = value;
        }
        localStorage.setItem(DRAFT_KEY, JSON.stringify(draftObj));
      } catch (err) {}
    }, 500);
  });
}

/**
 * Full client-side validation engine with accessible inline errors.
 */
function initFormValidation() {
  const form = document.getElementById("project-brief-form");
  const errorSummary = document.getElementById("form-error-summary");
  if (!form) return;

  const validateField = (field) => {
    const errorEl = document.getElementById(`${field.id || field.name}-error`);
    let isValid = true;
    let message = "";

    // Skip honeypot
    if (field.name === "website_url_confirm") return true;

    // Required check
    if (field.hasAttribute("required")) {
      if (field.type === "checkbox" && !field.checked) {
        isValid = false;
        message = "This field is required.";
      } else if (!field.value.trim()) {
        isValid = false;
        message = "This field is required.";
      }
    }

    // Specific input format checks
    if (isValid && field.value.trim()) {
      if (field.type === "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(field.value.trim())) {
          isValid = false;
          message = "Please enter a valid email address (e.g. name@example.com).";
        }
      } else if (field.type === "tel") {
        const phoneDigits = field.value.replace(/\D/g, "");
        if (phoneDigits.length < 7 || phoneDigits.length > 15) {
          isValid = false;
          message = "Please enter a valid phone number with country code (e.g. +234...).";
        }
      } else if (field.type === "url") {
        try {
          const url = new URL(field.value.trim());
          if (url.protocol !== "http:" && url.protocol !== "https:") {
            isValid = false;
            message = "Please include http:// or https:// in the web address.";
          }
        } catch {
          isValid = false;
          message = "Please enter a valid URL (e.g. https://...).";
        }
      }
    }

    // Drive Link Soft Warning
    if (field.id === "asset_link" && isValid && field.value.trim()) {
      const isDrive = field.value.includes("drive.google.com") || field.value.includes("docs.google.com");
      const warningEl = document.getElementById("asset_link-warning");
      if (warningEl) {
        warningEl.classList.toggle("hidden", isDrive);
      }
    }

    // Apply error UI
    if (errorEl) {
      if (!isValid) {
        errorEl.textContent = message;
        errorEl.classList.remove("hidden");
        field.setAttribute("aria-invalid", "true");
        field.classList.add("border-red-500", "ring-1", "ring-red-500");
      } else {
        errorEl.textContent = "";
        errorEl.classList.add("hidden");
        field.removeAttribute("aria-invalid");
        field.classList.remove("border-red-500", "ring-1", "ring-red-500");
      }
    }

    return isValid;
  };

  // Attach blur and re-validate listeners
  const inputs = form.querySelectorAll("input, textarea, select");
  inputs.forEach(input => {
    input.addEventListener("blur", () => validateField(input));
    input.addEventListener("input", () => {
      if (input.getAttribute("aria-invalid") === "true") {
        validateField(input);
      }
    });
  });

  // Track sticky progress bar across 4 form fieldsets
  const fieldsets = document.querySelectorAll(".form-fieldset-section");
  const progressText = document.getElementById("form-step-text");
  const progressBar = document.getElementById("form-progress-fill");

  if (fieldsets.length && progressText && progressBar) {
    const titles = [
      "About you and your business",
      "Audience and goals",
      "Look, feel, and inspiration",
      "Scope, features, and assets"
    ];

    const stepObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepIndex = parseInt(entry.target.getAttribute("data-step") || "1", 10);
          progressText.textContent = `Step ${stepIndex} of 4: ${titles[stepIndex - 1]}`;
          progressBar.style.width = `${(stepIndex / 4) * 100}%`;
        }
      });
    }, { rootMargin: "-30% 0px -50% 0px" });

    fieldsets.forEach(fs => stepObserver.observe(fs));
  }

  // Submit Handler
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    let firstInvalid = null;
    let errorCount = 0;

    inputs.forEach(input => {
      if (!validateField(input)) {
        errorCount++;
        if (!firstInvalid) firstInvalid = input;
      }
    });

    // Validate at least one liked website URL
    const likedUrl = document.getElementById("liked_site_1_url");
    if (likedUrl && !likedUrl.value.trim()) {
      errorCount++;
      validateField(likedUrl);
      if (!firstInvalid) firstInvalid = likedUrl;
    }

    // Validate at least one page checkbox selected
    const pageCheckboxes = form.querySelectorAll("input[name='pages_required']:checked");
    const pagesError = document.getElementById("pages_required-error");
    if (!pageCheckboxes.length) {
      errorCount++;
      if (pagesError) {
        pagesError.textContent = "Please select at least one page.";
        pagesError.classList.remove("hidden");
      }
      if (!firstInvalid) firstInvalid = document.querySelector("input[name='pages_required']");
    } else if (pagesError) {
      pagesError.classList.add("hidden");
    }

    if (errorCount > 0) {
      if (errorSummary) {
        errorSummary.textContent = `Please fix ${errorCount} field${errorCount > 1 ? 's' : ''} to continue.`;
        errorSummary.classList.remove("hidden");
      }
      if (firstInvalid) {
        firstInvalid.focus();
        firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    if (errorSummary) errorSummary.classList.add("hidden");

    // Honeypot trap check
    const honeypot = form.elements["website_url_confirm"];
    if (honeypot && honeypot.value.trim() !== "") {
      // Silently display fake success to bots
      showSuccessState({ full_name: "Visitor" });
      return;
    }

    // Time-on-page submission validator (< 5s rejected as bot activity)
    const elapsedSeconds = (Date.now() - pageLoadedAt) / 1000;
    if (elapsedSeconds < 5) {
      alert("Submission was too quick. Please take a moment to review your answers.");
      return;
    }

    // Form data extraction
    const formData = new FormData(form);
    const submissionData = {};
    for (const [key, value] of formData.entries()) {
      if (key === "website_url_confirm") continue;
      if (submissionData[key]) {
        if (!Array.isArray(submissionData[key])) {
          submissionData[key] = [submissionData[key]];
        }
        submissionData[key].push(value);
      } else {
        submissionData[key] = value;
      }
    }

    await submitBrief(submissionData);
  });
}

/**
 * Dispatches brief payload to backend or executes simulated 1.2s delay.
 */
async function submitBrief(data) {
  const submitBtn = document.getElementById("brief-submit-btn");
  const originalBtnText = submitBtn ? submitBtn.innerHTML : "Submit Project Brief";

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending Brief...
    `;
  }

  try {
    if (FORM_CONFIG.endpoint) {
      if (FORM_CONFIG.endpoint.includes("script.google.com")) {
        // Direct Google Sheets Integration via Google Apps Script Web App
        const urlParams = new URLSearchParams();
        Object.entries(data).forEach(([key, val]) => {
          urlParams.append(key, Array.isArray(val) ? val.join(", ") : val);
        });

        // Use no-cors mode to seamlessly bypass Google Apps Script 302 redirect restriction
        await fetch(FORM_CONFIG.endpoint, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: urlParams.toString()
        });
      } else {
        // Standard REST API endpoints (Formspree, Web3Forms, SheetDB, Make, Zapier)
        const response = await fetch(FORM_CONFIG.endpoint, {
          method: FORM_CONFIG.method || "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error("Submission network failure");
      }
    } else {
      // Simulated preview delay when endpoint is not yet configured
      await new Promise(resolve => setTimeout(resolve, FORM_CONFIG.simulateDelayMs));
    }

    // Clear saved draft on confirmed submission
    try {
      localStorage.removeItem("automate_brief_draft_v1");
    } catch (err) {}

    showSuccessState(data);
  } catch (error) {
    alert("There was an issue sending your brief. Please verify your connection or reach out directly via WhatsApp/Email.");
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  }
}

/**
 * Renders the accessible brief received success screen and configures the clipboard summary.
 */
function showSuccessState(data) {
  const formWrapper = document.getElementById("brief-form-container");
  const successWrapper = document.getElementById("brief-success-container");
  const nameEl = document.getElementById("success-client-name");
  const copyBtn = document.getElementById("copy-brief-summary-btn");

  if (formWrapper && successWrapper) {
    formWrapper.classList.add("hidden");
    successWrapper.classList.remove("hidden");

    if (nameEl) {
      const firstName = (data.full_name || "there").split(" ")[0];
      nameEl.textContent = firstName;
    }

    const heading = successWrapper.querySelector("h2");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus();
    }
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Format clean plain-text summary for clipboard
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        let summaryText = `A.U.T.O.MATE — PROJECT BRIEF SUMMARY\n`;
        summaryText += `==========================================\n`;
        summaryText += `Date: ${new Date().toLocaleDateString()}\n\n`;
        Object.entries(data).forEach(([key, val]) => {
          if (key === "consent" || key === "website_url_confirm") return;
          const cleanKey = key.replace(/_/g, " ").toUpperCase();
          const cleanVal = Array.isArray(val) ? val.join(", ") : val;
          summaryText += `${cleanKey}: ${cleanVal}\n`;
        });
        summaryText += `\nEngineered by A.U.T.O.MATE`;

        navigator.clipboard.writeText(summaryText).then(() => {
          const originalText = copyBtn.textContent;
          copyBtn.textContent = "Copied to clipboard!";
          setTimeout(() => {
            copyBtn.textContent = originalText;
          }, 2500);
        });
      });
    }
  }
}

/**
 * Helper to safely sanitize plain text into HTML attributes.
 */
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ==========================================================================
   3. Initialization Orchestrator
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initActiveLinks();
  initTypewriter();
  initReveal();
  initServiceStack();
  initProcessLine();
  initTestimonials();
  initFaq();
  initFooterYear();
  initFormValidation();
  initFormDraft();
  initFormCounters();
  initChips();
});
