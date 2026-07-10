import { getCollection } from 'astro:content';
import { SITE, SOCIAL } from '@/config';

// Generate Atom feed (matching original Chirpy format)
export async function GET(context: any) {
  const posts = await getCollection('posts');
  const sortedPosts = posts
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  // Get site URL and ensure no trailing slash
  let siteUrl = SITE.url;
  if (context.site) {
    siteUrl = context.site.toString();
  }
  siteUrl = siteUrl.replace(/\/$/, ''); // Remove trailing slash
  
  const latestPost = sortedPosts[0];
  const updated = latestPost ? latestPost.data.date.toISOString() : new Date().toISOString();

  // Build Atom feed XML
  const feed = `<feed xmlns="http://www.w3.org/2005/Atom"> <id>${siteUrl}/</id><title>${SITE.title}</title><subtitle>${SITE.description}</subtitle> <updated>${updated}</updated> <author> <name>${SOCIAL.name}</name> <uri>${siteUrl}/</uri> </author><link rel="self" type="application/atom+xml" href="${siteUrl}/feed.xml"/><link rel="alternate" type="text/html" hreflang="${SITE.lang}" href="${siteUrl}/"/> <generator uri="https://astro.build/" version="5.0">Astro</generator> <rights> © ${new Date().getFullYear()} ${SOCIAL.name} </rights> <icon>${siteUrl}/assets/img/favicons/favicon.ico</icon> <logo>${siteUrl}/assets/img/favicons/favicon-96x96.png</logo>
${sortedPosts.map((post) => {
  const postUrl = `${siteUrl}/posts/${post.slug}/`;
  const categories = post.data.categories || [];
  const tags = post.data.tags || [];
  const allCategories = [...categories, ...tags];
  
  return ` <entry><title>${escapeXml(post.data.title)}</title><link href="${postUrl}" rel="alternate" type="text/html" title="${escapeXml(post.data.title)}" /><published>${post.data.date.toISOString()}</published> <updated>${post.data.date.toISOString()}</updated> <id>${postUrl}</id> <content type="html" src="${postUrl}" /> <author> <name>${post.data.author || SOCIAL.name}</name> </author>${allCategories.map(cat => ` <category term="${escapeXml(cat)}" />`).join('')} <summary>${escapeXml(post.data.description || '')}</summary> </entry>`;
}).join('')} </feed>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}

// Helper function to escape XML special characters
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

