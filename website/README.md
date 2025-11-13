# Josh Yeung - Personal Website

A modern, responsive personal portfolio website built with Next.js 14 and featuring a vibrant dark mode design.

🌐 **Live Site:** [https://yeungjosh.github.io/](https://yeungjosh.github.io/)

![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwind-css)

## Features

- 🎨 **Modern Design System** - Material Design 3 inspired with vibrant ColorHunt palette
- 🌙 **Dark Mode Toggle** - Persistent theme switching with localStorage
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **Static Export** - Lightning-fast GitHub Pages deployment
- 🎯 **Interactive UI** - Clickable project cards with detailed modals
- ♿ **Accessible** - Semantic HTML and ARIA labels

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3
- **UI Components:** shadcn/ui, Radix UI
- **Icons:** Lucide React
- **Font:** DM Sans
- **Deployment:** GitHub Pages

## Color Palette

The dark mode features a vibrant color scheme:

- `#090040` - Deep navy background
- `#471396` - Deep purple cards/surfaces
- `#B13BFF` - Bright violet accents
- `#FFCC00` - Vibrant yellow highlights

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Project Structure

```
website/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles & design tokens
│   └── components/
│       ├── component.tsx       # Main component
│       ├── theme-provider.tsx  # Theme context & state
│       ├── theme-toggle.tsx    # Dark mode toggle button
│       └── ui/                 # shadcn/ui components
├── public/                     # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages deployment
└── next.config.mjs             # Next.js configuration
```

## Sections

- **Hero** - Introduction with gradient background
- **About** - Professional summary
- **Work Experience** - Amazon, Google, Qualtrics roles with detailed accomplishments
- **Education** - UC Berkeley CS degree
- **Projects** - Featured projects with live demos and GitHub links
  - BrickStyle-Gen (Text-to-LEGO AI)
  - Pokemon Team Recommender (ML + LightGBM)
  - Bible Study App (React + Capacitor)
- **Skills** - Tech stack organized by category
- **Blog** - Writing and thoughts
- **Contact** - Social links

## Deployment

This site automatically deploys to GitHub Pages on every push to `main`:

1. Commits pushed to `main` trigger GitHub Actions
2. Next.js builds a static export to `./out`
3. GitHub Pages serves the static files
4. Live at https://yeungjosh.github.io/

## Development

### Adding Projects

Edit `src/components/component.tsx` and add:
1. Project card in the Projects section
2. Modal dialog with detailed information

### Customizing Theme

Update color tokens in `src/app/globals.css`:
- Light mode: `:root`
- Dark mode: `.dark`

### Modifying Content

Main content is in `src/components/component.tsx` - update:
- Work experience bullets
- Project descriptions
- Skills lists
- Social links

## License

Personal project - all rights reserved.

---

Built with ⚡ by [Josh Yeung](https://github.com/yeungjosh)
