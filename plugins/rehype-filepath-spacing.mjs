import { visit } from 'unist-util-visit';

/**
 * Rehype plugin to ensure proper spacing around .filepath inline code elements
 * Adds text nodes with spaces where needed
 */
export function rehypeFilepathSpacing() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // Look for inline code elements with filepath class
      if (node.tagName === 'code' &&
          node.properties?.className?.includes('filepath') &&
          parent && typeof index === 'number') {

        const prevSibling = parent.children[index - 1];
        const nextSibling = parent.children[index + 1];

        // Check if we need a space before the code element
        if (prevSibling?.type === 'text') {
          const prevText = prevSibling.value;
          // If previous text doesn't end with whitespace, add a space
          if (prevText && !/\s$/.test(prevText)) {
            prevSibling.value = prevText + ' ';
          }
        }

        // Check if we need a space after the code element
        if (nextSibling?.type === 'text') {
          const nextText = nextSibling.value;
          // If next text doesn't start with whitespace or punctuation, add a space
          if (nextText && !/^[\s.,;:!?)\]}]/.test(nextText)) {
            nextSibling.value = ' ' + nextText;
          }
        }
      }
    });
  };
}
