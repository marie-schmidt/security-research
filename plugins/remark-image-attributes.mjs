import { visit } from 'unist-util-visit';

/**
 * Remark plugin to handle Kramdown-style inline attribute lists (IAL)
 * for images.
 *
 * Converts:
 *   ![alt](/path/to/image.png){: width="972" height="589" .w-50 .left}
 *
 * Into an image with appropriate HTML attributes and classes
 */
export function remarkImageAttributes() {
  return (tree) => {
    visit(tree, 'paragraph', (node, _index, _parent) => {
      if (!node.children || node.children.length === 0) return;

      // Process each child node
      for (let i = 0; i < node.children.length; i++) {
        const child = node.children[i];

        // Look for image nodes
        if (child.type === 'image') {
          // Check if there's a following text node with IAL syntax
          const nextNode = node.children[i + 1];

          if (nextNode?.type === 'text' && nextNode.value) {
            // Allow optional whitespace/newlines before IAL
            const ialMatch = nextNode.value.match(/^\s*\{:\s*([^}]+)\s*\}/);

            if (ialMatch) {
              const attributes = ialMatch[1];

              // Initialize hProperties if not exists
              child.data = child.data || {};
              child.data.hProperties = child.data.hProperties || {};

              const classes = [];

              // Parse attributes (classes, width, height, w, h, etc.)
              // Classes start with a dot
              const classMatches = attributes.match(/\.([\w-]+)/g);
              if (classMatches) {
                classMatches.forEach(cls => {
                  classes.push(cls.substring(1)); // Remove the dot
                });
              }

              // Width attribute
              const widthMatch = attributes.match(/width="(\d+)"/);
              if (widthMatch) {
                child.data.hProperties.width = widthMatch[1];
              }

              // Height attribute
              const heightMatch = attributes.match(/height="(\d+)"/);
              if (heightMatch) {
                child.data.hProperties.height = heightMatch[1];
              }

              // Short form: w='...'
              const wMatch = attributes.match(/w='(\d+)'/);
              if (wMatch) {
                child.data.hProperties.width = wMatch[1];
              }

              // Short form: h='...'
              const hMatch = attributes.match(/h='(\d+)'/);
              if (hMatch) {
                child.data.hProperties.height = hMatch[1];
              }

              // Add classes if any were found
              if (classes.length > 0) {
                child.data.hProperties.className = classes;
              }

              // Remove the IAL from the text node (including any leading whitespace)
              nextNode.value = nextNode.value.replace(/^\s*\{:\s*[^}]+\s*\}/, '').trim();

              // If the text node is now empty, remove it
              if (!nextNode.value) {
                node.children.splice(i + 1, 1);
              }
            }
          }
        }
      }
    });
  };
}
