import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

/**
 * Rehype plugin to wrap tables in a .table-wrapper div for horizontal scrolling
 * Matches Jekyll's behavior from _includes/refactor-content.html
 */
export function rehypeTableWrapper() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // Wrap table elements with .table-wrapper div
      if (node.tagName === 'table' && parent && typeof index === 'number') {
        // Create wrapper div
        const wrapper = h('div', { class: 'table-wrapper' }, [node]);

        // Replace table with wrapper
        parent.children[index] = wrapper;
      }
    });
  };
}
