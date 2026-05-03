# EMBER | Fire-Roasted Street Food

A modern, responsive food portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

![EMBER Website](https://ember-demo.vercel.app)

## Overview

EMBER is a three-page portfolio website showcasing a fire-roasted street food concept. Features include:

- **Home Page**: Full-viewport hero with animated headline, today's special, category previews, marquee, and featured items
- **Menu Page**: Filterable menu grid with cart functionality, item drawers, and toast notifications
- **Story Page**: Brand story with pillars and parallax image gallery

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Icons**: [Lucide React](https://lucide.dev/)

## Design System

**Colors:**
- Background: `#F5F0E8` (Warm Cream)
- Dark Sections: `#2B2018` (Dark Brown)
- Accent/CTA: `#C8602A` (Ember Red)
- Secondary: `#B8922A` (Warm Gold)
- Text Primary: `#1A1410`

**Typography:**
- Headlines: Playfair Display
- Body: Plus Jakarta Sans
- Accents: Fraunces (italic)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Jack-Pision/ember-roasted-food.git

# Navigate to project
cd ember-roasted-food

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `dist` folder.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts, Nav, Footer
│   ├── page.tsx            # Home page
│   ├── menu/page.tsx       # Menu page with filters
│   └── story/page.tsx      # Story page
├── components/
│   ├── Nav.tsx             # Navigation with cart
│   ├── Footer.tsx          # Footer with social links
│   ├── MenuCard.tsx        # Menu item cards
│   ├── TodaySpecial.tsx    # Today's special strip
│   ├── Marquee.tsx         # CSS marquee
│   ├── ItemDrawer.tsx      # Item detail drawer
│   ├── CartDrawer.tsx      # Shopping cart drawer
│   ├── Toast.tsx           # Add to cart notifications
│   └── ScrollReveal.tsx    # Scroll animation wrapper
├── data/
│   └── menu.ts             # Menu items data
├── store/
│   └── cartStore.ts        # Zustand cart state
├── hooks/
│   └── useInView.ts        # IntersectionObserver hook
└── public/
    └── images/             # Food photography
```

## Features

- **Responsive Design**: Desktop-first, fully responsive
- **Cart System**: Add items, adjust quantities, remove items
- **Animations**: Page transitions, scroll reveals, drawer animations
- **Menu Filtering**: Filter by category (Bowls, Wraps, Sides)
- **Toast Notifications**: Visual feedback on cart actions

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repo to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Manual Static Export

The project is configured for static export. The `dist` folder contains static files ready for any hosting platform.

## Credits

Built by [Jack Pision](https://github.com/Jack-Pision)

- LinkedIn: [linkedin.com/in/jack-pision-201764377](https://www.linkedin.com/in/jack-pision-201764377)
- GitHub: [github.com/Jack-Pision](https://github.com/Jack-Pision)
- X: [x.com/Jack_pision](https://x.com/Jack_pision)

## License

MIT License - feel free to use this as a portfolio template.
