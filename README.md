# OnlineAds360 - Marketing Platform

A modern, high-performance marketing platform built with **Next.js 16**, featuring comprehensive SEO optimization, dynamic content management, and a stunning user interface.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)

## ✨ Features

- **🎨 Modern UI** - Sleek, responsive design with Framer Motion animations
- **🔍 SEO Optimized** - Comprehensive meta tags, Open Graph, Twitter Cards, and dynamic sitemap
- **📝 Blog System** - Dynamic blog with Supabase CMS integration
- **⚡ Performance** - Optimized images (AVIF/WebP), caching headers, and compression
- **🛡️ Security** - Security headers and GPTBot blocking

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Database | Supabase |
| Fonts | Inter (Google Fonts) |
| Icons | Lucide React |

## 📁 Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── admin/          # Admin dashboard
│   ├── api/            # API routes
│   ├── blog/           # Blog listing & detail pages
│   ├── contact/        # Contact page
│   ├── services/       # Services page
│   ├── layout.tsx      # Root layout with global metadata
│   ├── page.tsx        # Homepage
│   ├── sitemap.ts      # Dynamic sitemap generation
│   └── robots.ts       # Robots.txt configuration
├── components/         # Reusable UI components
├── lib/               # Utility libraries
├── types/             # TypeScript type definitions
└── utils/             # Helper functions & Supabase client
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd marketing360

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 🔍 SEO Configuration

The project includes comprehensive SEO setup:

- **Meta Tags** - Title templates, descriptions, keywords
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Rich Twitter previews
- **Sitemap** - Dynamic XML sitemap at `/sitemap.xml`
- **Robots.txt** - Crawler directives at `/robots.txt`

### Customization

Update the site configuration in `src/app/layout.tsx`:

```typescript
const siteConfig = {
  name: "OnlineAds360",
  url: "https://onlineads360.com",
  description: "Your site description",
  ogImage: "/images/og-image.png",
};
```

## ⚡ Performance Features

- **Image Optimization** - Automatic AVIF/WebP conversion
- **Caching** - 1-year cache for static assets
- **Compression** - Gzip/Brotli enabled
- **Security Headers** - X-Content-Type-Options, Referrer-Policy

## 📄 Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

## 🚢 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Other Platforms

The project supports any Node.js hosting platform. Run `npm run build` and deploy the `.next` directory.

## 📜 License

This project is proprietary software. All rights reserved.

---

Built with ❤️ by [OnlineAds360](https://onlineads360.com)
