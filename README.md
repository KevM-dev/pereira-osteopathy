# Pereira Osteopathy & Wellness

Single-page site for an independent osteopathy/wellness practice. Static
HTML/CSS/JS, no build step, deployed to GitHub Pages.

## Preview locally

```
python -m http.server 8000
```

Then open http://localhost:8000

## Design

As of 2026-07-20, reuses the design system from the Tiago Physio site (source:
`OneDrive\Documents\Tiago website\`) at Kevin's request — slate (#0f172a) +
green (#059669) palette, Inter body / DM Serif Display headings, glowing dark
hero with a live stats card, interactive condition-pill service tabs, numbered
process steps, testimonial slider, floating "Book Now" button. Content and the
WhatsApp contact flow are unchanged from the original bespoke build; only the
visual system was replaced.

## Sections

Hero, About, Services (Osteopathy / Massage / Manual Therapy / Wellness),
Approach (3-step first-visit process), Pricing, Testimonials, Contact
(WhatsApp + email form), Footer.

## Placeholders to fill in before this goes live

- [ ] Real WhatsApp number — `script.js`, `WHATSAPP_NUMBER` constant
- [ ] Real contact email (currently `hello@pereiraosteopathy.co.uk`)
- [ ] Clinic hours (location confirmed: Norwich)
- [ ] GOsC registration number, Institute of Osteopathy membership status
- [ ] Real pricing (currently placeholder £65 / £50 / £270)
- [ ] Real testimonials (currently placeholder quotes)
- [ ] Real hero stats (patients treated / years experience / satisfaction % — currently 0)
- [ ] Practitioner bio detail / real photos if the client wants a headshot

## Scope note (Kevin's records)

Bespoke single-page design (not the standard template), 6 sections, WhatsApp +
email contact form, mobile-responsive, deployed to GitHub Pages.
