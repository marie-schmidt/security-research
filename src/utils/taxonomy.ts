import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export interface CategoryNode {
  name: string;
  slug: string;
  count: number;
  subCategories: Map<string, { slug: string; count: number }>;
}

export interface TagInfo {
  name: string;
  slug: string;
  count: number;
}

export interface YearGroup {
  year: number;
  posts: CollectionEntry<'posts'>[];
}

/**
 * Slugify a string for use in URLs
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-')   // Replace multiple - with single -
    .replace(/^-+/, '')       // Trim - from start of text
    .replace(/-+$/, '');      // Trim - from end of text
}

/**
 * Get all posts excluding hidden ones
 */
export async function getVisiblePosts() {
  const posts = await getCollection('posts');
  return posts.filter(post => !post.data.hidden);
}

/**
 * Get all unique categories with their hierarchical structure
 * Returns a Map of top-level categories with subcategories
 */
export async function getAllCategories(): Promise<Map<string, CategoryNode>> {
  const posts = await getVisiblePosts();
  const categoryMap = new Map<string, CategoryNode>();

  for (const post of posts) {
    const categories = post.data.categories || [];

    if (categories.length === 0) continue;

    const topCategory = categories[0];
    const topSlug = slugify(topCategory);

    // Initialize top-level category if not exists
    if (!categoryMap.has(topSlug)) {
      categoryMap.set(topSlug, {
        name: topCategory,
        slug: topSlug,
        count: 0,
        subCategories: new Map(),
      });
    }

    const categoryNode = categoryMap.get(topSlug)!;
    categoryNode.count++;

    // Handle subcategory if exists
    if (categories.length > 1) {
      const subCategory = categories[1];
      const subSlug = slugify(subCategory);

      if (!categoryNode.subCategories.has(subSlug)) {
        categoryNode.subCategories.set(subSlug, {
          slug: subSlug,
          count: 0,
        });
      }

      const subCategoryNode = categoryNode.subCategories.get(subSlug)!;
      subCategoryNode.count++;
    }
  }

  return categoryMap;
}

/**
 * Get all unique tags with post counts
 */
export async function getAllTags(): Promise<TagInfo[]> {
  const posts = await getVisiblePosts();
  const tagMap = new Map<string, { name: string; count: number }>();

  for (const post of posts) {
    const tags = post.data.tags || [];

    for (const tag of tags) {
      const slug = slugify(tag);
      if (!tagMap.has(slug)) {
        tagMap.set(slug, { name: tag, count: 0 });
      }
      tagMap.get(slug)!.count++;
    }
  }

  // Convert to array and sort naturally
  return Array.from(tagMap.entries())
    .map(([slug, info]) => ({
      slug,
      name: info.name,
      count: info.count,
    }))
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));
}

/**
 * Get posts by category (matches first level category)
 */
export async function getPostsByCategory(categorySlug: string): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getVisiblePosts();

  return posts
    .filter(post => {
      const categories = post.data.categories || [];
      if (categories.length === 0) return false;
      return slugify(categories[0]) === categorySlug;
    })
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/**
 * Get posts by subcategory (matches both parent and subcategory)
 */
export async function getPostsBySubCategory(
  parentSlug: string,
  subSlug: string
): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getVisiblePosts();

  return posts
    .filter(post => {
      const categories = post.data.categories || [];
      if (categories.length < 2) return false;
      return slugify(categories[0]) === parentSlug && slugify(categories[1]) === subSlug;
    })
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/**
 * Get posts by tag
 */
export async function getPostsByTag(tagSlug: string): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getVisiblePosts();

  return posts
    .filter(post => {
      const tags = post.data.tags || [];
      return tags.some(tag => slugify(tag) === tagSlug);
    })
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/**
 * Get posts grouped by year for archives
 */
export async function getPostsByYear(): Promise<YearGroup[]> {
  const posts = await getVisiblePosts();
  const yearMap = new Map<number, CollectionEntry<'posts'>[]>();

  for (const post of posts) {
    const year = post.data.date.getFullYear();

    if (!yearMap.has(year)) {
      yearMap.set(year, []);
    }

    yearMap.get(year)!.push(post);
  }

  // Sort posts within each year by date (descending)
  yearMap.forEach(posts => {
    posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
  });

  // Convert to array and sort by year (descending)
  return Array.from(yearMap.entries())
    .map(([year, posts]) => ({ year, posts }))
    .sort((a, b) => b.year - a.year);
}

/**
 * Get the display name for a category from slug
 */
export async function getCategoryName(categorySlug: string): Promise<string | null> {
  const categories = await getAllCategories();
  const category = categories.get(categorySlug);
  return category ? category.name : null;
}

/**
 * Get the display name for a subcategory from slug
 */
export async function getSubCategoryName(
  parentSlug: string,
  subSlug: string
): Promise<string | null> {
  const categories = await getAllCategories();
  const category = categories.get(parentSlug);
  if (!category) return null;

  // Convert slug back to display name
  return subSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Get the display name for a tag from slug
 */
export async function getTagName(tagSlug: string): Promise<string | null> {
  const tags = await getAllTags();
  const tag = tags.find(t => t.slug === tagSlug);
  return tag ? tag.name : null;
}

/**
 * Get adjacent posts (older and newer) for post navigation
 */
export async function getAdjacentPosts(currentSlug: string): Promise<{
  older: CollectionEntry<'posts'> | null;
  newer: CollectionEntry<'posts'> | null;
}> {
  const posts = await getVisiblePosts();

  // Sort posts by date descending (newest first)
  const sortedPosts = posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  // Find current post index
  const currentIndex = sortedPosts.findIndex(post => post.slug === currentSlug);

  if (currentIndex === -1) {
    return { older: null, newer: null };
  }

  // Newer post is at index - 1 (comes before in descending sort)
  // Older post is at index + 1 (comes after in descending sort)
  return {
    older: currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null,
    newer: currentIndex > 0 ? sortedPosts[currentIndex - 1] : null,
  };
}

/**
 * Get related posts based on shared tags and categories
 * Returns up to maxPosts posts sorted by relevance score
 */
export async function getRelatedPosts(
  currentSlug: string,
  maxPosts: number = 3
): Promise<CollectionEntry<'posts'>[]> {
  const posts = await getVisiblePosts();

  // Find current post
  const currentPost = posts.find(post => post.slug === currentSlug);
  if (!currentPost) return [];

  const currentTags = currentPost.data.tags || [];
  const currentCategories = currentPost.data.categories || [];

  // Calculate relevance score for each post
  const scoredPosts = posts
    .filter(post => post.slug !== currentSlug) // Exclude current post
    .map(post => {
      let score = 0;
      const postTags = post.data.tags || [];
      const postCategories = post.data.categories || [];

      // Score based on matching categories (higher weight)
      for (const category of currentCategories) {
        if (postCategories.includes(category)) {
          score += 10;
        }
      }

      // Score based on matching tags
      for (const tag of currentTags) {
        if (postTags.includes(tag)) {
          score += 5;
        }
      }

      return { post, score };
    })
    .filter(({ score }) => score > 0) // Only include posts with at least one match
    .sort((a, b) => {
      // Sort by score (descending), then by date (descending)
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return b.post.data.date.getTime() - a.post.data.date.getTime();
    })
    .slice(0, maxPosts)
    .map(({ post }) => post);

  return scoredPosts;
}
