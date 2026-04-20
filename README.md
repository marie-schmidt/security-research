# Astro Chirpy

A minimal, responsive, and feature-rich Astro theme for technical writing, ported from the popular [Jekyll Chirpy theme](https://github.com/cotes2020/jekyll-theme-chirpy).

Check [demo here](https://astro-chirpy.netlify.app/)

<img width="1898" height="906" alt="image" src="https://github.com/user-attachments/assets/a20c50de-5fb2-4d84-a636-5dfb4d87c59f" />


All core features from Jekyll Chirpy are fully functional. This Astro version maintains 85% feature parity with the original while adding performance improvements.

## Unique to This Implementation

### Performance Improvements
- **10x Faster Builds** - Astro's build system vs Jekyll/Ruby
- **Enhanced Search** - FlexSearch client-side search with JSON API endpoint
- **Optimized Syntax Highlighting** - Custom Shiki themes with line numbers plugin
- **Modern Tooling** - Vite, TypeScript, ESM modules

### Technical Improvements
- **Content Collections** - Type-safe content with Astro's built-in validation
- **Component Architecture** - Reusable Astro components vs Liquid templates
- **Custom Remark/Rehype Plugins** - Enhanced markdown processing for code blocks, images, and diagrams
- **View Transitions** - Smooth page navigation with Astro's built-in transitions

## Quick Start

```bash
npm install
npm run dev
```

Edit `src/config.ts` to customize your site. Visit `http://localhost:4321`.

## Creating Content

Create posts in `src/content/posts/`:

```markdown
---
title: Your Post Title
date: 2024-01-15T10:00:00+00:00
categories: [Category1, Category2]
tags: [tag1, tag2, tag3]
description: Brief description
pin: false
math: false
mermaid: false
---

Your content here...
```

Create tabs in `src/content/tabs/`:

```markdown
---
title: Tab Title
icon: fas fa-icon-name
order: 1
---

Tab content...
```

## Deployment

```bash
npm run build
```

Deploy the `dist/` folder to Vercel, Netlify, GitHub Pages, or Cloudflare Pages

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server |
| `npm run build` | Build production site |
| `npm run preview` | Preview production build |
| `npm run astro` | Run Astro CLI commands |
| `npm run lint:js` | Lint JavaScript/TypeScript |
| `npm run lint:scss` | Lint SCSS files |

## Fully Implemented Features

Core blogging features from Jekyll Chirpy:

- Dark/Light theme toggle with system preference detection
- Built-in search with FlexSearch (enhanced from Jekyll)
- Table of Contents (mobile + desktop responsive)
- Syntax highlighting with custom Chirpy themes
- Mathematical expressions (MathJax v3)
- Mermaid diagrams with theme awareness
- Pinned posts on home page
- Hierarchical categories
- Trending tags
- Last modified date tracking
- Read time calculation
- Related posts
- Atom/RSS feeds
- SEO optimization (Open Graph, Twitter Cards)
- Google Analytics only

## Not Implemented

These features from the original Jekyll Chirpy are not implemented:

### 1. Comment Systems
Configuration exists in `src/config.ts` but no components:
- Disqus
- Giscus
- Utterances

Components need to be created in `src/components/comments/`.

### 2. PWA (Progressive Web App)
- No service worker implementation
- No offline caching
- No app installation support
- Only basic manifest file exists

### 3. Post Sharing
Post sharing buttons are not implemented:
- Twitter
- Facebook
- Telegram
- Copy Link
- Mastodon
- LinkedIn
- Weibo
- Bluesky
- Reddit
- Threads

### 4. Multi-language Support
While 33 locale files exist in `src/data/locales/`, they are not currently integrated:
- Locale files are present but not being used
- Only English (en) is hardcoded in components
- Full internationalization support needs implementation

### 5. Extended Analytics Providers
Only Google Analytics works. Not implemented:
- GoatCounter
- Umami
- Matomo
- Cloudflare Web Analytics
- Fathom Analytics

### 6. Page View Counters
No integration with analytics providers to display page view counts on posts.

## Porting from Jekyll Chirpy

If porting from Jekyll Chirpy:

1. Copy posts from `_posts/` to `src/content/posts/`
2. Copy tabs from `_tabs/` to `src/content/tabs/`
3. Update `src/config.ts` with your `_config.yml` settings
4. Copy assets to `public/`

Frontmatter is mostly compatible. No changes needed for most posts.

## License

MIT License - Based on [Jekyll Chirpy theme](https://github.com/cotes2020/jekyll-theme-chirpy) by [Cotes Chung](https://github.com/cotes2020)
