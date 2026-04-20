/**
 * Remove date prefix from slug to match Chirpy Jekyll theme URL structure.
 * Converts "2019-08-08-write-a-new-post" to "write-a-new-post"
 */
export function getCleanSlug(slug: string): string {
  return slug.replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

/**
 * Generate post URL path without date prefix
 */
export function getPostUrl(slug: string): string {
  return `${import.meta.env.BASE_URL}posts/${getCleanSlug(slug)}/`;
}
