---
title: Welcome to Astro Chirpy
date: 2024-01-15T10:00:00+00:00
author: marie
categories: []
tags: []
description: A minimal, responsive and feature-rich Astro theme for technical writing, ported from Jekyll Chirpy.
pin: true
hidden: true
---

## Welcome

This is **Astro Chirpy**, a port of the popular Jekyll Chirpy theme to Astro. This project maintains the clean, minimal design of the original while leveraging Astro's modern build system for significant performance improvements.

## What We've Accomplished

This port achieves **85% feature parity** with the original Jekyll Chirpy theme while adding several enhancements:

### Performance Improvements
- **10x Faster Builds** - Astro's Vite-powered build system vs Jekyll/Ruby
- **Enhanced Search** - FlexSearch client-side search with JSON API endpoint
- **Optimized Syntax Highlighting** - Custom Shiki themes with line numbers plugin
- **Modern Tooling** - Vite, TypeScript, and ESM modules throughout

### Technical Enhancements
- **Content Collections** - Type-safe content with Astro's built-in validation
- **Component Architecture** - Reusable Astro components replacing Liquid templates
- **Custom Remark/Rehype Plugins** - Enhanced markdown processing for code blocks, images, and diagrams
- **View Transitions** - Smooth page navigation with Astro's built-in transitions

### Fully Implemented Features

All core blogging features from Jekyll Chirpy are working:

- Dark/Light theme toggle with system preference detection
- Built-in search functionality
- Table of Contents (mobile and desktop responsive)
- Syntax highlighting with custom Chirpy themes
- Mathematical expressions (MathJax v3)
- Mermaid diagrams with theme awareness
- Pinned posts on home page
- Hierarchical categories and trending tags
- Last modified date tracking and read time calculation
- Related posts
- Atom/RSS feeds
- SEO optimization (Open Graph, Twitter Cards)
- Google Analytics integration

### Not Yet Implemented

Some features from the original theme are not yet available:

- **Comment Systems** - Disqus, Giscus, Utterances (configuration exists but components not implemented)
- **PWA Support** - Service worker, offline caching, app installation
- **Post Sharing** - Twitter, Facebook, Telegram, Copy Link, Mastodon, LinkedIn, Weibo, Bluesky, Reddit, Threads
- **Multi-language Support** - 33 locale files exist but are not integrated; only English is currently hardcoded
- **Extended Analytics** - GoatCounter, Umami, Matomo, Cloudflare, Fathom
- **Page View Counters** - Analytics integration for view counts

## Getting Started

To create a new post, add a markdown file to `src/content/posts/` with the following frontmatter:

```yaml
---
title: Your Post Title
date: 2024-01-15T10:00:00+00:00
author: marie
categories: [TOP_CATEGORY, SUB_CATEGORY]
tags: [tag1, tag2]
description: Brief description of your post
pin: false
math: false
mermaid: false
hidden: false
---
```

## Syntax Highlighting

The theme includes custom Shiki themes for syntax highlighting:

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Astro Chirpy');
```

```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

print(fibonacci(10))
```

## Configuration

1. Customize your site settings in `src/config.ts`
2. Add your posts to `src/content/posts/`
3. Modify tabs in `src/content/tabs/`
4. Update styling in `src/styles/`

For more details, check the README.md file in the repository.
