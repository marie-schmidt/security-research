import { visit } from 'unist-util-visit';

/**
 * Rehype plugin to convert remark-deflist divs to proper dl/dt/dd elements
 */
export function rehypeDescriptionLists() {
  return (tree) => {
    visit(tree, 'element', (node, _index, _parent) => {
      // Look for div elements that contain definition list structure
      if (node.tagName === 'div' && node.children && node.children.length > 0) {
        // Check if this looks like a definition list (alternating term/definition divs)
        let isDefList = false;
        let hasTerms = false;

        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (child.type === 'element' && child.tagName === 'div') {
            // Even indices should be terms (dt), odd should be definitions (dd)
            if (i % 2 === 0) {
              // Term - should have text content only
              hasTerms = true;
            }
            isDefList = true;
          } else if (child.type !== 'text' || child.value.trim() !== '') {
            isDefList = false;
            break;
          }
        }

        if (isDefList && hasTerms) {
          // Convert to proper dl structure
          const dlChildren = [];

          for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            if (child.type === 'element' && child.tagName === 'div') {
              if (i % 2 === 0) {
                // Term (dt)
                dlChildren.push({
                  type: 'element',
                  tagName: 'dt',
                  properties: {},
                  children: child.children
                });
              } else {
                // Definition (dd)
                dlChildren.push({
                  type: 'element',
                  tagName: 'dd',
                  properties: {},
                  children: child.children
                });
              }
            }
          }

          // Replace the div with a dl
          node.tagName = 'dl';
          node.children = dlChildren;
        }
      }
    });
  };
}
