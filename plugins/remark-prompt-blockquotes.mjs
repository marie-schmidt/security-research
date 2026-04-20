import { visit } from 'unist-util-visit';

/**
 * Remark plugin to handle Kramdown-style inline attribute lists (IAL)
 * for blockquotes, specifically for prompt classes.
 *
 * Converts:
 *   > Text
 *   {: .prompt-tip }
 *
 * Into a blockquote with class="prompt-tip" and removes the IAL text
 */
export function remarkPromptBlockquotes() {
  return (tree) => {
    visit(tree, 'blockquote', (node) => {
      // Check if blockquote has paragraphs
      if (node.children && node.children.length > 0) {
        const lastChild = node.children[node.children.length - 1];

        // Check if last child is a paragraph
        if (lastChild.type === 'paragraph' && lastChild.children) {
          const lastTextNode = lastChild.children[lastChild.children.length - 1];

          // Check if last text node contains IAL
          if (lastTextNode?.type === 'text' && lastTextNode.value) {
            const ialMatch = lastTextNode.value.match(/\s*\{:\s*\.prompt-(tip|info|warning|danger)\s*\}\s*$/);

            if (ialMatch) {
              // Remove the IAL text from the text node
              lastTextNode.value = lastTextNode.value.replace(/\s*\{:\s*\.prompt-(tip|info|warning|danger)\s*\}\s*$/, '');

              // If the text node is now empty, remove it
              if (lastTextNode.value.trim() === '') {
                lastChild.children.pop();
              }

              // If the paragraph is now empty, remove it
              if (lastChild.children.length === 0) {
                node.children.pop();
              }

              // Add the class to the blockquote
              node.data = node.data || {};
              node.data.hProperties = node.data.hProperties || {};
              node.data.hProperties.className = `prompt-${ialMatch[1]}`;
            }
          }
        }
      }
    });

    // Also handle the case where IAL is a separate paragraph after blockquote
    const nodesToRemove = [];

    visit(tree, (node, index, parent) => {
      if (!parent || typeof index !== 'number') return;

      if (node.type === 'blockquote') {
        const nextNode = parent.children[index + 1];

        if (nextNode?.type === 'paragraph') {
          const text = nextNode.children[0];

          if (text?.type === 'text' && text.value) {
            const match = text.value.trim().match(/^\{:\s*\.prompt-(tip|info|warning|danger)\s*\}$/);

            if (match) {
              node.data = node.data || {};
              node.data.hProperties = node.data.hProperties || {};
              node.data.hProperties.className = `prompt-${match[1]}`;

              nodesToRemove.push({ parent, index: index + 1 });
            }
          }
        }
      }
    });

    // Remove marked nodes
    nodesToRemove.reverse().forEach(({ parent, index }) => {
      parent.children.splice(index, 1);
    });
  };
}
