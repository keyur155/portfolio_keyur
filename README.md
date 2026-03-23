# Portfolio — Next.js 14

A dark, futuristic full stack engineer portfolio built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # CSS custom properties, animations, global styles
│   ├── layout.tsx        # Root layout with Google Fonts + metadata
│   └── page.tsx          # Main page assembling all sections
├── components/
│   ├── Navbar.tsx        # Sticky nav with active section highlighting
│   ├── Hero.tsx          # Hero section with animated headline
│   ├── About.tsx         # About section with stats
│   ├── Skills.tsx        # Tech stack grid
│   ├── Projects.tsx      # Project list with hover effects
│   ├── Contact.tsx       # Contact form + social links
│   └── Footer.tsx        # Footer
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

## Customization

### 1. Personal Info
- **Name**: Find/replace `Alex Chen` → your name across all components
- **Role**: Update `Full Stack Engineer` in `Hero.tsx` and `layout.tsx`
- **Nav logo**: Change `ac.dev` in `Navbar.tsx`

### 2. Photo
In `About.tsx`, replace the placeholder with:
```tsx
import Image from 'next/image'
// ...
<Image src="/photo.jpg" fill alt="Your Name" className="object-cover" />
```
Place `photo.jpg` in the `/public` folder.

### 3. Projects
Edit the `projects` array in `components/Projects.tsx`:
```ts
const projects = [
  {
    num: '01',
    title: 'Your Project Name',
    desc: 'Project description...',
    tags: ['React', 'Node.js'],
    href: 'https://yourproject.com',
  },
  // ...
]
```

### 4. Skills
Edit the `skillCategories` array in `components/Skills.tsx`.

### 5. Contact Links
Update the `contactLinks` array and form submission logic in `components/Contact.tsx`.

### 6. Colors
All colors are CSS custom properties in `app/globals.css`:
```css
:root {
  --accent: #00f5c4;    /* Primary accent (teal) */
  --accent2: #7c6ff7;   /* Secondary accent (purple) */
  --accent3: #f72585;   /* Tertiary accent (pink) */
}
```

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com).
