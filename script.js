// Pereira Osteopathy & Wellness — site interactions

document.getElementById("year").textContent = new Date().getFullYear();

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
