/**
 * Remove all markdown formatting and return plain text
 */
export function stripMarkdown(markdown: string): string {
  return markdown
    // Remove code blocks (multi-line)
    .replace(/```[\s\S]*?```/g, '')
    // Remove inline code backticks but keep content
    .replace(/`([^`]+)`/g, '$1')
    // Remove Jekyll/Chirpy attribute syntax {: .class} or {: file="path"}
    .replace(/\{:\s*[^}]+\}/g, '')
    // Remove images
    .replace(/!\[([^\]]*)\]\([^\)]+\)/g, '$1')
    // Remove links but keep text
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
    // Remove headings
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic
    .replace(/(\*\*|__)(.*?)\1/g, '$2')
    .replace(/(\*|_)(.*?)\1/g, '$2')
    // Remove blockquotes
    .replace(/^\s*>\s+/gm, '')
    // Remove list markers
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    // Remove horizontal rules
    .replace(/^[\s-*_]{3,}$/gm, '')
    // Remove HTML tags
    .replace(/<[^>]+>/g, '')
    // Remove extra whitespace
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Create an excerpt from markdown content
 * Strips all markdown formatting and truncates at word boundary
 */
export function getExcerpt(body: string, maxLength: number = 150): string {
  const text = stripMarkdown(body);

  if (text.length <= maxLength) return text;

  // Find last space before maxLength to avoid cutting words
  const lastSpace = text.lastIndexOf(' ', maxLength);
  const cutoff = lastSpace > 0 ? lastSpace : maxLength;
  return text.substring(0, cutoff).trim() + '...';
}
