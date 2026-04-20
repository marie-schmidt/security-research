---
title: Getting Started
description: >-
  Get started with Astro-Chirpy basics in this comprehensive overview.
  You will learn how to install, configure, and use your first Astro-Chirpy website, as well as deploy it to a web server.
author: geocine
date: 2019-08-09T20:55:00+08:00
categories: [Blogging, Tutorial]
tags: [getting started]
pin: true
media_subpath: '/posts/20180809'
hidden: true
---

## About Astro-Chirpy

Astro-Chirpy is an Astro port of the popular [Jekyll Chirpy theme](https://github.com/cotes2020/jekyll-theme-chirpy) by Cotes Chung. This implementation brings the beautiful Chirpy design to the Astro ecosystem, offering better performance and a modern development experience.

## Creating Your Site Repository

To get started with Astro-Chirpy, you have two main options:

### Option 1. Using the Starter (Recommended)

This approach is perfect for users who want to focus on writing with minimal configuration.

1. Sign in to GitHub and navigate to the [**Astro-Chirpy starter**](https://github.com/geocine/astro-chirpy).
2. Click the <kbd>Use this template</kbd> button and then select <kbd>Create a new repository</kbd>.
3. Name the new repository `<username>.github.io` (for GitHub Pages), or any name you prefer.

### Option 2. Forking the Theme

This approach is convenient for modifying features or UI design.

1. Sign in to GitHub.
2. [Fork the Astro-Chirpy repository](https://github.com/geocine/astro-chirpy/fork).
3. Name the new repository as you prefer.

## Setting up the Environment

Once your repository is created, it's time to set up your development environment.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [Git](https://git-scm.com/)
- A code editor (we recommend [VS Code](https://code.visualstudio.com/))

### Installation Steps

1. Clone your repository to your local machine:

   ```bash
   git clone https://github.com/<username>/<repository-name>.git
   cd <repository-name>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   Or if you prefer using pnpm or yarn:

   ```bash
   pnpm install
   # or
   yarn install
   ```

## Development

### Start the Astro Development Server

To run the site locally, use the following command:

```bash
npm run dev
```

After a few seconds, the local development server will be available at <http://localhost:4321>.

The development server includes:
- Hot module replacement for instant updates
- Fast refresh for component changes
- Built-in error overlay

### Configuration

Update the configuration in `astro.config.mjs`{: .filepath} as needed. Key options include:

- `site`: Your website URL (important for sitemap generation)

For site-wide settings, check `src/config.ts`{: .filepath} where you can configure:

- `SITE_TITLE`
- `SITE_DESCRIPTION`
- `AUTHOR`
- `TIMEZONE`
- `LANG`

### Social Contact Options

Social contact options are displayed at the bottom of the sidebar. You can configure these in your site configuration file.

### Customizing Styles

Astro-Chirpy uses CSS and supports easy customization:

1. The main styles are in `src/styles/`{: .filepath}
2. You can override any styles by adding your custom CSS
3. The theme supports both light and dark modes out of the box

## Building Your Site

Before deploying, build your site to generate the static files:

```bash
npm run build
```

This will create an optimized production build in the `dist/`{: .filepath} folder.

You can preview the production build locally:

```bash
npm run preview
```

## Deployment

Astro-Chirpy requires a build step and can be deployed to any static hosting service. Below are detailed guides for the most popular options.

### Deploy to Netlify (Recommended)

Netlify offers excellent support for Astro sites with automatic deployments and edge functions.

#### Option 1: Git-based Deployment (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket

2. Log in to [Netlify](https://app.netlify.com/)

3. Click **Add new site** → **Import an existing project**

4. Connect your Git provider and select your repository

5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 or higher (set via environment variable `NODE_VERSION=20`)

6. Click **Deploy site**

Netlify will automatically deploy your site whenever you push to your repository!

#### Option 2: Manual Deployment

1. Build your site locally:
   ```bash
   npm run build
   ```

2. Go to [Netlify Drop](https://app.netlify.com/drop)

3. Drag and drop your `dist/` folder

> For custom domains and advanced configuration, check [Netlify's documentation](https://docs.netlify.com/).
{: .prompt-tip }

### Deploy to GitHub Pages

GitHub Pages requires GitHub Actions to build and deploy Astro sites (unlike Jekyll which has native support).

#### Setup Instructions

1. Ensure your `astro.config.mjs` has the correct `site` URL configured.

   For `<username>.github.io`:
   ```js
   site: 'https://<username>.github.io'
   ```

   For project pages like `<username>.github.io/my-blog`:
   ```js
   site: 'https://<username>.github.io',
   base: '/my-blog'
   ```

2. Create `.github/workflows/deploy.yml`{: .filepath} in your repository:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4

         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: '20'

         - name: Install dependencies
           run: npm ci

         - name: Build
           run: npm run build

         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

3. In your GitHub repository settings:
   - Go to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

4. Push your changes to trigger the deployment:
   ```bash
   git add .
   git commit -m "Add GitHub Actions deployment"
   git push
   ```

5. Check the **Actions** tab to monitor the deployment progress

> GitHub Pages deployment typically takes 2-5 minutes after the workflow completes.
{: .prompt-info }

### Deploy to Other Platforms

Astro-Chirpy works with any static hosting service:

- **Vercel**: Connect your repository for automatic deployments with zero configuration
- **Cloudflare Pages**: Excellent performance with edge network distribution
- **Render**: Simple setup with automatic SSL and CDN
- **Any static host**: Build locally with `npm run build` and upload the `dist/` folder

For detailed guides on other platforms, check the [Astro deployment documentation](https://docs.astro.build/en/guides/deploy/).

## Next Steps

Now that you have Astro-Chirpy set up, you can:

1. [Write your first post](../write-a-new-post/)
2. Customize the theme to match your style
3. Explore Astro's features and integrations

## Acknowledgments

This theme is based on the excellent [Jekyll Chirpy theme](https://github.com/cotes2020/jekyll-theme-chirpy) created by [Cotes Chung](https://github.com/cotes2020). We're grateful for the original design and inspiration.
