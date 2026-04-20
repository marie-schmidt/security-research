import { visit } from 'unist-util-visit';

/**
 * Rehype plugin to add heading anchor links with hashtag icons
 * Matches Jekyll Chirpy theme structure
 */
export function rehypeHeadingAnchors() {
  return (tree, _file) => {
    visit(tree, 'element', (node) => {
      // Only process h2-h5 headings with IDs
      if (['h2', 'h3', 'h4', 'h5'].includes(node.tagName) && node.properties && node.properties.id) {
        const id = node.properties.id;

        // Skip if already processed (has anchor child)
        const hasAnchor = node.children && node.children.some(child => 
          child.type === 'element' && 
          child.tagName === 'a' && 
          child.properties?.className &&
          (Array.isArray(child.properties.className) 
            ? child.properties.className.includes('anchor')
            : child.properties.className.split(' ').includes('anchor'))
        );
        
        if (hasAnchor) {
          return;
        }

        // Get the text content - need to clone to avoid mutation issues
        const textContent = node.children ? [...node.children] : [];

        // Create span wrapper for text
        const textSpan = {
          type: 'element',
          tagName: 'span',
          properties: { className: ['me-2'] },
          children: textContent
        };

        // Create anchor link with hashtag icon
        const anchorLink = {
          type: 'element',
          tagName: 'a',
          properties: {
            href: `#${id}`,
            className: ['anchor', 'text-muted']
          },
          children: [
            {
              type: 'element',
              tagName: 'i',
              properties: { className: ['fas', 'fa-hashtag'] },
              children: []
            }
          ]
        };

        // Replace children with wrapped structure
        node.children = [textSpan, anchorLink];
      }
    });
  };
}
