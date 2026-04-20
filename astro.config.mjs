import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import remarkDeflist from "remark-deflist";
import { remarkPromptBlockquotes } from "./plugins/remark-prompt-blockquotes.mjs";
import { remarkCodeAttributes } from "./plugins/remark-code-attributes.mjs";
import { remarkInlineCodeClasses } from "./plugins/remark-inline-code-classes.mjs";
import { remarkImageAttributes } from "./plugins/remark-image-attributes.mjs";
import { remarkHeadingAttributes } from "./plugins/remark-heading-attributes.mjs";
import { remarkJekyllIncludes } from "./plugins/remark-jekyll-includes.mjs";
import { remarkMermaidClient } from "./plugins/remark-mermaid-client.mjs";
import { rehypeHeadingAnchors } from "./plugins/rehype-heading-anchors.mjs";
import { rehypeCodeBlocks } from "./plugins/rehype-code-blocks.mjs";
import { rehypeTableWrapper } from "./plugins/rehype-table-wrapper.mjs";
import { rehypeDescriptionLists } from "./plugins/rehype-description-lists.mjs";
// rehypeCodeFileAttributes removed - file attributes handled by post-build script
import { rehypeFixLanguageClasses } from "./plugins/rehype-fix-language-classes.mjs";
import { rehypeTaskListIcons } from "./plugins/rehype-task-list-icons.mjs";
import { rehypeFilepathSpacing } from "./plugins/rehype-filepath-spacing.mjs";
import { rehypeFootnotes } from "./plugins/rehype-footnotes.mjs";
import shikiLineNumbers from "./plugins/shiki-line-numbers.mjs";
import chirpyDark from "./themes/chirpy-dark.json";
import chirpyLight from "./themes/chirpy-light.json";
import postcssVendorFixes from "./plugins/postcss-vendor-fixes.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://marie-schmidt.github.io",
  base: "/security-research/",
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: "shiki",
    shikiConfig: {
      themes: {
        light: chirpyLight,
        dark: chirpyDark
      },
      wrap: false,
      transformers: [shikiLineNumbers()]
    },
    remarkPlugins: [
      remarkDeflist, // Enable description list support
      remarkMermaidClient, // Mark mermaid blocks for client-side rendering
      remarkPromptBlockquotes,
      remarkCodeAttributes,
      remarkInlineCodeClasses,
      remarkImageAttributes,
      remarkHeadingAttributes,
      remarkJekyllIncludes
    ],
    rehypePlugins: [
      rehypeCodeBlocks,
      rehypeDescriptionLists, // Convert remark-deflist divs to proper dl/dt/dd elements
      rehypeTableWrapper,
      rehypeTaskListIcons, // Convert checkboxes to Font Awesome icons
      rehypeFilepathSpacing, // Ensure proper spacing around filepath inline code
      rehypeFootnotes, // Transform footnote IDs and classes to match Chirpy theme
      rehypeFixLanguageClasses, // Must run last to fix language classes after Shiki
      rehypeHeadingAnchors // Must run after all other plugins that might modify headings
    ]
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
        "@scripts": "/src/scripts"
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Silence deprecation warnings from Bootstrap 5.x
          // These will be fixed in Bootstrap 6 (not yet released)
          silenceDeprecations: ['import', 'global-builtin', 'color-functions']
        }
      },
      postcss: {
        plugins: [
          postcssVendorFixes(),
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              }
            }
          }
        ]
      }
    },
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress "Module level directives cause errors when bundled" warnings from Bootstrap
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
          warn(warning);
        }
      }
    },
    customLogger: {
      warn(msg) {
        // Suppress unused import warnings from Astro's internal files
        if (msg.includes('matchHostname') || msg.includes('@astrojs/internal-helpers/remote')) {
          return;
        }
        // Log other warnings normally
        console.warn(msg);
      }
    }
  }
});
