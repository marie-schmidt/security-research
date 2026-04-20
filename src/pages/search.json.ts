import type { APIRoute } from 'astro';
import { getVisiblePosts } from '@/utils/taxonomy';

export const GET: APIRoute = async () => {
  const posts = await getVisiblePosts();

  const searchData = posts.map(post => {
    // Get plain text content from the post (strip markdown and HTML)
    let content = post.body
      // Remove frontmatter
      .replace(/^---[\s\S]*?---/, '')
      // Remove HTML comments
      .replace(/<!--[\s\S]*?-->/g, '')
      // Remove code blocks (fenced and indented)
      .replace(/```[\s\S]*?```/g, '')
      .replace(/~~~[\s\S]*?~~~/g, '')
      // Remove inline code
      .replace(/`[^`]*`/g, '')
      // Remove markdown attributes {: ... }
      .replace(/\{:[^}]*\}/g, '')
      // Remove images
      .replace(/!\[.*?\]\(.*?\)/g, '')
      // Convert links to text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
      // Remove headings markers
      .replace(/^#{1,6}\s+/gm, '')
      // Remove bold/italic
      .replace(/(\*\*|__)(.*?)\1/g, '$2')
      .replace(/(\*|_)(.*?)\1/g, '$2')
      // Remove strikethrough
      .replace(/~~(.*?)~~/g, '$1')
      // Remove horizontal rules
      .replace(/^[-*_]{3,}$/gm, '')
      // Remove blockquotes
      .replace(/^>\s+/gm, '')
      // Remove list markers
      .replace(/^[\s]*[-*+]\s+/gm, '')
      .replace(/^[\s]*\d+\.\s+/gm, '')
      // Remove HTML tags
      .replace(/<[^>]+>/g, '')
      // Normalize whitespace
      .replace(/\s+/g, ' ')
      .trim();

    // Store more content for search indexing (CSS will handle visual truncation)
    // Index up to 8000 chars for comprehensive search - covers full post content
    // This ensures cross-references and mentions later in posts are searchable
    if (content.length > 8000) {
      content = content.substring(0, 8000).trim();
    }

    return {
      title: post.data.title,
      url: `${import.meta.env.BASE_URL}posts/${post.slug}`,
      categories: post.data.categories?.join(', ') || '',
      tags: post.data.tags?.join(', ') || '',
      date: post.data.date.toISOString(),
      content: content,
    };
  });

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
