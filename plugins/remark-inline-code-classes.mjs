import { visit } from 'unist-util-visit';

/**
 * Remark plugin to handle Kramdown-style inline attribute lists (IAL)
 * for inline code, specifically for .filepath class.
 *
 * Converts:
 *   `code`{: .filepath}
 *
 * Into inline code with class="filepath"
 */
export function remarkInlineCodeClasses() {
  return (tree) => {
    const nodesToProcess = [];

    visit(tree, 'inlineCode', (node, index, parent) => {
      if (!parent || typeof index !== 'number') return;

      // Check if there's a following text node with IAL syntax
      const nextNode = parent.children[index + 1];

      if (nextNode?.type === 'text' && nextNode.value) {
        const match = nextNode.value.match(/^\{:\s*\.([\w-]+)\s*\}/);

        if (match) {
          // Check the previous sibling for spacing context
          const prevNode = parent.children[index - 1];

          // Store for processing
          nodesToProcess.push({
            node,
            nextNode,
            prevNode,
            className: match[1],
            parent,
            nextIndex: index + 1,
            nodeIndex: index
          });
        }
      }
    });

    // Process nodes
    nodesToProcess.forEach(({ node, nextNode, className, parent, nextIndex }) => {
      // Add the class to the inline code (use array to prevent character splitting)
      node.data = node.data || {};
      node.data.hProperties = node.data.hProperties || {};
      node.data.hProperties.className = [className];

      // Remove the IAL marker
      nextNode.value = nextNode.value.replace(/^\{:\s*\.[\w-]+\s*\}/, '');

      // If the text node is now empty or only whitespace, remove it
      if (!nextNode.value.trim() && parent.children[nextIndex] === nextNode) {
        parent.children.splice(nextIndex, 1);
      }
    });
  };
}
