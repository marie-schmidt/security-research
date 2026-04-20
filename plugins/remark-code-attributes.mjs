import { visit } from 'unist-util-visit';

/**
 * Remark plugin to handle Kramdown-style inline attribute lists (IAL)
 * for code blocks.
 *
 * Handles .nolineno class only - file attributes are handled by post-build script.
 */
export function remarkCodeAttributes() {
  return (tree) => {
    const nodesToRemove = [];

    visit(tree, 'code', (node, index, parent) => {
      if (!parent || typeof index !== 'number') return;

      // Check if the next sibling is a paragraph with IAL syntax
      const nextNode = parent.children[index + 1];

      if (nextNode?.type === 'paragraph' && nextNode.children) {
        // Concatenate all text nodes in the paragraph
        const fullText = nextNode.children
          .filter(child => child.type === 'text')
          .map(child => child.value)
          .join('')
          .trim();

        // Check if this is an IAL paragraph (starts with {:)
        if (fullText.startsWith('{:')) {
          // If has file=, ALWAYS preserve (let post-build script handle it)
          if (fullText.includes('file=')) {
            // Still need to process .nolineno if present
            if (fullText.includes('.nolineno')) {
              node.meta = node.meta ? `${node.meta} .nolineno` : '.nolineno';
            }
            // Don't remove this paragraph - post-build script needs it
            return;
          }

          // No file attribute - check for .nolineno only
          if (fullText.includes('.nolineno')) {
            // Add .nolineno to the meta string so Shiki transformer can see it
            node.meta = node.meta ? `${node.meta} .nolineno` : '.nolineno';
            // Safe to remove this paragraph since it has no file attribute
            nodesToRemove.push({ parent, index: index + 1 });
          }
        }
      }
    });

    // Remove marked nodes (reverse order to preserve indices)
    nodesToRemove.reverse().forEach(({ parent, index}) => {
      parent.children.splice(index, 1);
    });
  };
}
