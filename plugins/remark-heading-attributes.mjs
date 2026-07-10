import { visit } from 'unist-util-visit';

/**
 * Remark plugin to handle Kramdown-style inline attribute lists (IAL)
 * for headings.
 *
 * Converts:
 *   # Heading
 *   {: .mt-4 .mb-0 }
 *
 * Into a heading with appropriate CSS classes
 */
export function remarkHeadingAttributes() {
  return (tree) => {
    const nodesToProcess = [];

    visit(tree, 'heading', (node, index, parent) => {
      if (!parent || typeof index !== 'number') return;

      // Check if the next sibling is a paragraph with IAL syntax
      const nextNode = parent.children[index + 1];

      if (nextNode?.type === 'paragraph') {
        const text = nextNode.children?.[0];

        if (text?.type === 'text' && text.value) {
          const match = text.value.trim().match(/^\{:\s*([^}]+)\s*\}$/);

          if (match) {
            const attributes = match[1];
            const classes = [];
            const dataAttributes = {};

            // Parse class attributes (start with a dot)
            const classMatches = attributes.match(/\.([\w-]+)/g);
            if (classMatches) {
              classMatches.forEach(cls => {
                classes.push(cls.substring(1)); // Remove the dot
              });
            }

            // Parse data attributes like data-toc-skip=''
            // Can match multiple data attributes
            const dataAttrMatches = attributes.matchAll(/data-([\w-]+)=''/g);
            for (const match of dataAttrMatches) {
              const attrName = match[1];
              // Convert to camelCase: data-toc-skip -> dataTocSkip
              const camelCase = 'data-' + attrName;
              const camelCased = camelCase.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
              // For hProperties, use the full camelCase name
              dataAttributes[camelCased] = '';
            }

            // Store for processing
            nodesToProcess.push({
              node,
              nextNode,
              parent,
              nextIndex: index + 1,
              classes,
              dataAttributes
            });
          }
        }
      }
    });

    // Process nodes and remove IAL paragraphs
    nodesToProcess.reverse().forEach(({ node, parent, nextIndex, classes, dataAttributes }) => {
      // Add properties to heading
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};

      if (classes.length > 0) {
        node.data.hProperties.className = classes;
      }

      // Add data attributes
      Object.assign(node.data.hProperties, dataAttributes);

      // Remove the IAL paragraph
      parent.children.splice(nextIndex, 1);
    });
  };
}
