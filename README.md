# Muenot Services Website

A modern, responsive website built with **Next.js 14**, **Aceternity UI**, **shadcn/ui**, and **Tailwind CSS**.

## 🚀 Features

- **Modern UI/UX**: Beautiful animations and effects using Framer Motion and Aceternity UI components
- **Responsive Design**: Fully responsive across all device sizes
- **Dark Theme**: Elegant dark mode design with purple/violet accent colors
- **Performance Optimized**: Built with Next.js App Router for optimal performance
- **Accessible**: Built with accessibility in mind

## 📋 Services Showcased

1. **AI Data Services**
   - Data Annotation
   - Data Curation
   - Model Training
   - Human Intelligence (HITL)

2. **E-Learning Services**
   - Content Development
   - Content Production
   - Faculty Support
   - Art Production

3. **Technology**
   - Software Development
   - Web Solutions
   - Cloud Services
   - Automation

4. **Localization**
   - Translation
   - Transcription
   - Subtitling
   - Voiceover

5. **Publishing**
   - Editorial Services
   - Accessibility
   - Conversion Services

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: 
  - Aceternity UI (custom effects)
  - shadcn/ui (base components)
  - Radix UI (headless components)
- **Icons**: Lucide React

## 📦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
cd CMS
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles and CSS variables
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── layout/
│   │   ├── navbar.tsx    # Navigation bar
│   │   └── footer.tsx    # Footer
│   ├── sections/
│   │   ├── hero.tsx              # Hero section
│   │   ├── services-overview.tsx # Services overview
│   │   ├── ai-data-services.tsx  # AI Data section
│   │   ├── elearning-services.tsx # E-Learning section
│   │   ├── technology-services.tsx # Technology section
│   │   ├── localization-services.tsx # Localization section
│   │   ├── publishing-services.tsx # Publishing section
│   │   ├── about-section.tsx     # About section
│   │   └── cta-section.tsx       # Call-to-action section
│   └── ui/
│       ├── spotlight.tsx         # Spotlight effect
│       ├── sparkles.tsx          # Sparkles effect
│       ├── meteors.tsx           # Meteors effect
│       ├── background-beams.tsx  # Background beams
│       ├── moving-border.tsx     # Moving border effect
│       ├── text-generate-effect.tsx # Text generation animation
│       ├── card-hover-effect.tsx # Card hover effects
│       ├── bento-grid.tsx        # Bento grid layout
│       ├── infinite-moving-cards.tsx # Testimonials carousel
│       ├── button.tsx            # Button component
│       ├── tabs.tsx              # Tabs component
│       └── accordion.tsx         # Accordion component
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Customization

### Colors

The color scheme can be modified in `src/app/globals.css`:

```css
:root {
  --primary: 262 83% 58%;      /* Purple/Violet */
  --background: 0 0% 3%;       /* Near black */
  --foreground: 0 0% 98%;      /* Near white */
  /* ... more variables */
}
```

### Fonts

Fonts are configured in `src/app/layout.tsx` using Next.js font optimization:

```typescript
const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
```

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm run build
# Deploy to Vercel
```

### Other Platforms

```bash
npm run build
npm run start
```

## 📄 License

This project is for demonstration purposes.

---

Built with ❤️ using Next.js and Aceternity UI
