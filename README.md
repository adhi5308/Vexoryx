# Vexoryx — company website

Next.js (App Router) + Tailwind CSS + Framer Motion.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Pages
- `/` — Home
- `/about` — Team
- `/services` — Services (accordion) + process
- `/work` — Case studies (placeholder — swap in real projects as you ship them)
- `/contact` — Enquiry form

## Content to edit
- `lib/data.ts` — services, team, process steps, case studies
- `app/contact/page.tsx` — email/location shown on the contact page

## Contact form
No database is used. Submissions currently just log to the server console
via `app/api/contact/route.ts`. To actually receive enquiries by email,
wire in a provider there — e.g. Resend (resend.com) or Formspree — and
send the `data` object instead of (or in addition to) `console.log`.

## Animations
- Hairline rules draw in on scroll (`components/Reveal.tsx`)
- Section content fades/slides in on scroll (`Reveal`)
- Service index numbers stamp in (`StampIndex`)
- Cards/images tilt toward the cursor on hover only, no idle motion
  (`components/TiltCard.tsx`)
- Services list expands/collapses on click, `+` rotates to `×`
  (`components/ServiceAccordion.tsx`)
- No logo animation / rotation is used anywhere, per your last note.
