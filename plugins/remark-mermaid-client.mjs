import { visit } from 'unist-util-visit';

/**
 * Remark plugin to mark Mermaid code blocks for client-side rendering
 * Converts ```mermaid blocks to <pre class="mermaid"> for client-side processing
 */
export function remarkMermaidClient() {
  return (tree) => {
    visit(tree, 'code', (node, index, parent) => {
      if (!parent || typeof index === 'undefined') return;

      if (node.lang === 'mermaid') {
        // Replace the code block with HTML for client-side rendering
        parent.children[index] = {
          type: 'html',
          value: `<pre class="mermaid">${node.value}</pre>`
        };
      }
    });
  };
}
