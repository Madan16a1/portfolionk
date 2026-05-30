# Alex Chen — Portfolio

A premium personal portfolio for a UX Designer & React Developer. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Design Philosophy

- **Minimalist, modern, timeless** — inspired by Linear's design language
- **Dark mode by default** — neutral near-black background, soft white typography, single electric blue accent
- **Typography-first** — DM Serif Display for editorial headings, DM Sans for UI, JetBrains Mono for labels
- **Subtle motion** — scroll-triggered reveals, staggered fades, magnetic buttons, smooth panel transitions
- **No excessive effects** — no gradients, no flaccid glows, nothing that won't age well

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| Fonts | DM Serif Display, DM Sans, JetBrains Mono |
| Deployment | Vercel (recommended) |

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Copy env file
cp .env.example .env.local

# 3. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts
│   ├── page.tsx            # Main page — composes all sections
│   └── globals.css         # CSS design tokens, base reset
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Fixed nav, scroll-aware, mobile menu
│   │   └── Footer.tsx      # Simple footer
│   │
│   ├── sections/
│   │   ├── Hero.tsx        # Full-height hero, animated entry
│   │   ├── Work.tsx        # Project showcase + case study trigger
│   │   ├── Process.tsx     # 5-step methodology grid
│   │   ├── Skills.tsx      # Animated skill bars, dual-column
│   │   ├── About.tsx       # Bio, stats grid, career timeline
│   │   ├── Testimonials.tsx# 3-column testimonial cards
│   │   └── Contact.tsx     # Form + social links
│   │
│   └── ui/
│       ├── Button.tsx          # Primary + ghost, magnetic hover
│       ├── CaseStudyPanel.tsx  # Slide-up drawer with AnimatePresence
│       ├── ProjectThumbnail.tsx# 3 CSS-only thumbnail variants
│       ├── Reveal.tsx          # Scroll-triggered reveal wrapper
│       ├── SectionHeader.tsx   # Label + serif heading
│       └── Tag.tsx             # Pill tag, accent or default variant
│
├── hooks/
│   ├── useMagneticButton.ts   # Subtle magnetic cursor effect
│   ├── useReducedMotion.ts    # Respects prefers-reduced-motion
│   └── useScrollReveal.ts     # IntersectionObserver-based reveal
│
├── lib/
│   ├── data.ts     # ⭐ All portfolio content — edit this to customise
│   ├── motion.ts   # Framer Motion variant definitions
│   └── utils.ts    # cn() utility (clsx + tailwind-merge)
│
└── types/
    └── index.ts    # TypeScript interfaces for all data models
```

---

## Customising Your Content

**All content lives in `src/lib/data.ts`.** Edit this one file to personalise the portfolio:

### Projects
```ts
export const projects: Project[] = [
  {
    id: "your-project",
    name: "Project Name",
    description: "Short description shown in the list.",
    tags: [
      { label: "React", variant: "accent" },
      { label: "UI/UX", variant: "default" },
    ],
    thumbnailVariant: "dashboard", // "dashboard" | "design-system" | "mobile-app"
    caseStudy: {
      label: "Case Study · 01",
      title: "Full title",
      tags: ["Tag1", "Tag2"],
      challenge: "What was the problem?",
      research: "What did you discover?",
      solution: "What did you build?",
      metrics: [
        { value: "64%", label: "Improvement in X" },
      ],
    },
  },
];
```

### Adding Custom Thumbnails
Create a new component in `src/components/ui/ProjectThumbnail.tsx` following the existing pattern, then add your variant to the `ProjectThumbnail` switch.

### Contact Form
Wire the `handleSubmit` function in `Contact.tsx` to your preferred service:
- **Resend** (recommended): `npm install resend`, create `src/app/api/contact/route.ts`
- **Formspree**: replace `handleSubmit` with a `fetch` to your Formspree endpoint

---

## Performance

- **Fonts**: loaded via Google Fonts with `display=swap` and preconnect hints
- **Images**: Next.js `<Image>` with AVIF/WebP format
- **CSS**: Tailwind purges unused styles at build time
- **JS**: Framer Motion is tree-shakeable; only imported variants load
- **Animations**: all respect `prefers-reduced-motion` via `useReducedMotion` hook

---

## Accessibility

- Semantic HTML throughout (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- All interactive elements keyboard-accessible (Enter/Space on project cards)
- ARIA labels on icon-only buttons and custom controls
- Colour contrast WCAG AA minimum on all text
- `role="progressbar"` on skill bars with `aria-valuenow`
- `role="dialog"` + `aria-modal` on case study panel
- Focus trap pattern on mobile menu overlay
- `prefers-reduced-motion` disables all animations

---

## Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deployments on push.

---

## License

MIT — use freely, attribution appreciated but not required.
