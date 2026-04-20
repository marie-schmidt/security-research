import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Read config file
const configPath = join(__dirname, '../src/config.ts');
const configContent = readFileSync(configPath, 'utf-8');

// Simple parsing of SITE object (works for our case)
const titleMatch = configContent.match(/title:\s*["']([^"']+)["']/);
const descriptionMatch = configContent.match(/description:\s*["']([^"']+)["']/);

const title = titleMatch ? titleMatch[1] : 'Chirpy';
const description = descriptionMatch ? descriptionMatch[1] : 'A text-focused Jekyll theme';

const manifest = {
  name: title,
  short_name: title,
  description: description,
  icons: [
    {
      src: '/assets/img/favicons/web-app-manifest-192x192.png',
      sizes: '192x192',
      type: 'image/png'
    },
    {
      src: '/assets/img/favicons/web-app-manifest-512x512.png',
      sizes: '512x512',
      type: 'image/png',
      purpose: 'maskable'
    }
  ],
  start_url: '/',
  theme_color: '#2a1e6b',
  background_color: '#ffffff',
  display: 'standalone'
};

const outputPath = './public/assets/img/favicons/site.webmanifest';
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, JSON.stringify(manifest, null, 2));

console.log('✓ Generated site.webmanifest from config');
