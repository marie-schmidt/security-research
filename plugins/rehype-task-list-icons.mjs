import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

/**
 * Rehype plugin to convert task list checkboxes to Font Awesome icons
 * to match the original Chirpy theme style.
 */
export function rehypeTaskListIcons() {
  return (tree) => {
    visit(tree, 'element', (node, _index, _parent) => {
      // Find ul with class contains-task-list and change to task-list
      if (node.tagName === 'ul' && node.properties?.className?.includes('contains-task-list')) {
        node.properties.className = ['task-list'];
      }

      // Find li with class task-list-item
      if (node.tagName === 'li' && node.properties?.className?.includes('task-list-item')) {
        // Look for input[type=checkbox] in the children
        const checkboxIndex = node.children.findIndex(
          child => child.type === 'element' &&
                   child.tagName === 'input' &&
                   child.properties?.type === 'checkbox'
        );

        if (checkboxIndex !== -1) {
          const checkbox = node.children[checkboxIndex];
          const isChecked = checkbox.properties?.checked;

          // Create Font Awesome icon element
          const icon = h('i', {
            className: isChecked
              ? ['fas', 'fa-check-circle', 'fa-fw', 'checked']
              : ['far', 'fa-circle', 'fa-fw']
          });

          // Replace checkbox with icon
          node.children[checkboxIndex] = icon;
        }
      }
    });
  };
}
