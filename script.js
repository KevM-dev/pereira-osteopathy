// Pereira Osteopathy & Wellness — site interactions

document.getElementById("year").textContent = new Date().getFullYear();

// Navbar scroll state
const navbar = document.getElementById("navbar");
if (navbar) {
  const onScroll = () =>
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Reveal on scroll
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

// Service condition pills
const cpills = document.querySelectorAll(".cpill");
if (cpills.length) {
  cpills.forEach((pill) => {
    pill.addEventListener("click", () => {
      cpills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      document
        .querySelectorAll(".cpanel")
        .forEach((p) => p.classList.remove("active"));
      const target = document.getElementById("info-" + pill.dataset.info);
      if (target) target.classList.add("active");
    });
  });
}

// Testimonial slider
const slides = document.querySelectorAll(".tslide");
const dotsWrap = document.getElementById("tDots");
if (slides.length && dotsWrap) {
  let current = 0;
  let autoTimer;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "tdot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Go to slide " + (i + 1));
    dot.addEventListener("click", () => {
      goTo(i);
      resetAuto();
    });
    dotsWrap.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove("active");
    dotsWrap.querySelectorAll(".tdot")[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
    dotsWrap.querySelectorAll(".tdot")[current].classList.add("active");
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 6000);
  }

  document.getElementById("tPrev")?.addEventListener("click", () => {
    goTo(current - 1);
    resetAuto();
  });
  document.getElementById("tNext")?.addEventListener("click", () => {
    goTo(current + 1);
    resetAuto();
  });

  resetAuto();
}

// Contact form -> WhatsApp handoff
// NOTE: replace WHATSAPP_NUMBER with the real number in international
// format, no leading 0 and no "+", e.g. "447123456789".
const WHATSAPP_NUMBER = "447000000000"; // PLACEHOLDER — update before launch
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();

  if (!EMAIL_PATTERN.test(email)) {
    contactForm.email.setCustomValidity("Please enter a valid email address.");
    contactForm.reportValidity();
    contactForm.email.setCustomValidity("");
    return;
  }

  const text = `Hi Pereira Osteopathy & Wellness, my name is ${name} (${email}). ${message}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    text,
  )}`;

  window.open(url, "_blank", "noopener");
});
