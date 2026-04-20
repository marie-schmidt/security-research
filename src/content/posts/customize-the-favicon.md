---
title: Customize the Favicon
author: geocine
date: 2019-08-11T00:34:00+08:00
categories: [Blogging, Tutorial]
tags: [favicon]
---

The [favicons](https://www.favicon-generator.org/about/) of Astro-Chirpy are placed in the `public/`{: .filepath} directory. You may want to replace them with your own. The following sections will guide you to create and replace the default favicons.

## Generate the Favicon

Prepare a square image (PNG, JPG, or SVG) with a size of 512x512 or more, and then go to the online tool [**Real Favicon Generator**](https://realfavicongenerator.net/) and click the button <kbd>Pick your favicon image</kbd> to upload your image file.

In the next step, the webpage will show all usage scenarios. You can keep the default options, scroll to the bottom of the page, and click the button <kbd>Next →</kbd> to generate the favicon.

## Download & Replace

Download the generated package, unzip and delete the following file(s) from the extracted files:

- `site.webmanifest`{: .filepath}

And then copy the remaining image files (`.PNG`{: .filepath}, `.ICO`{: .filepath} and `.SVG`{: .filepath}) to the `public/`{: .filepath} directory of your Astro-Chirpy site, replacing the original files.

The following table will help you understand the changes to the favicon files:

| File(s)           | From Online Tool | From Astro-Chirpy |
| ----------------- | :--------------: | :---------------: |
| `*.PNG`           |        ✓         |         ✗         |
| `*.ICO`           |        ✓         |         ✗         |
| `*.SVG`           |        ✓         |         ✗         |
| `favicon.ico`     |        ✓         |         ✗         |
| `apple-touch-icon.png` |   ✓         |         ✗         |

> ✓ means keep, ✗ means delete.
{: .prompt-info }

## How It Works in Astro

In Astro, files in the `public/`{: .filepath} folder are served at the root path. This means:

- `public/favicon.ico`{: .filepath} becomes `/favicon.ico`
- `public/apple-touch-icon.png`{: .filepath} becomes `/apple-touch-icon.png`
- And so on...

The favicon references are included in the site's HTML head, and browsers will automatically discover and use them.

## Next Build

The next time you build the site with `npm run build`, your custom favicon will be included in the deployment. The development server (`npm run dev`) will also serve your new favicon immediately.

---

_This guide is adapted for Astro-Chirpy, based on the original [Jekyll Chirpy theme](https://github.com/cotes2020/jekyll-theme-chirpy) by Cotes Chung._
