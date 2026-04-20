import { visit } from 'unist-util-visit';

/**
 * Rehype plugin to fix language classes after Shiki runs.
 * Shiki adds data-language to pre elements, but the wrapper div may still have language-plaintext.
 * This plugin syncs them up.
 *
 * IMPORTANT: This must run AFTER all other plugins, ideally as the last rehype plugin.
 */
export function rehypeFixLanguageClasses() {
  return (tree, file) => {
    console.log('[rehype-fix-language-classes] Running on:', file?.history?.[0] || 'unknown');
    const nodesToRemove = [];

    visit(tree, 'element', (node, index, parent) => {
      // Look for divs with language- class
      if (node.tagName === 'div' && node.properties?.className) {
        const className = Array.isArray(node.properties.className) ? node.properties.className : [node.properties.className];
        const hasLanguageClass = className.some(c => typeof c === 'string' && c.startsWith('language-'));

        if (hasLanguageClass) {
          // Find the pre element inside
          const preNode = node.children?.find(child => child.tagName === 'pre');

          if (preNode) {
            // Get the language from pre's data-language attribute
            const shikiLang = preNode.properties?.dataLanguage || preNode.properties?.['data-language'];

            if (shikiLang && shikiLang !== 'plaintext') {
              // Update the wrapper div's class to match
              const otherClasses = className.filter(c => !c.startsWith('language-'));
              node.properties.className = [`language-${shikiLang}`, ...otherClasses];

              // Also update the code-header label if it exists
              const codeHeader = node.children?.find(child =>
                child.tagName === 'div' &&
                (Array.isArray(child.properties?.className) ? child.properties.className : []).includes('code-header')
              );

              if (codeHeader) {
                const labelSpan = codeHeader.children?.find(child =>
                  child.tagName === 'span' && child.properties && 'data-label-text' in child.properties
                );

                if (labelSpan) {
                  const currentLabel = labelSpan.properties['data-label-text'];
                  // Only update if it's still showing the default language (not a filename)
                  if (currentLabel === 'PLAINTEXT' || currentLabel === 'TEXT') {
                    labelSpan.properties['data-label-text'] = shikiLang.toUpperCase();
                  }
                }
              }
            }
          }
        }
      }

      // Also handle file attribute paragraphs
      if (node.tagName === 'p' && node.children && parent && typeof index === 'number') {
        const text = node.children
          .filter(child => child.type === 'text')
          .map(child => child.value)
          .join('').trim();

        // Check if this is a file attribute paragraph
        if (text.startsWith('{:') && text.includes('file=')) {
          // Try to extract filename with various quote styles (including fancy quotes U+2019)
          let match = text.match(/file=\u2019([^\u2019]+)\u2019/);  // Fancy single quotes
          if (!match) match = text.match(/file='([^']+)'/);  // Regular single quotes
          if (!match) match = text.match(/file="([^"]+)"/);  // Regular double quotes

          if (match) {
            const filename = match[1];

            // Find the preceding code wrapper div
            const prevNode = parent.children[index - 1];

            if (prevNode?.tagName === 'div') {
              const prevClass = prevNode.properties?.className;
              const prevClassArray = Array.isArray(prevClass) ? prevClass : (prevClass ? [prevClass] : []);

              // Check if previous node is a code block wrapper
              if (prevClassArray.includes('highlighter-rouge')) {
                // Find the code-header div inside
                const codeHeader = prevNode.children?.find(child =>
                  child.tagName === 'div' &&
                  (Array.isArray(child.properties?.className) ? child.properties.className : []).includes('code-header')
                );

                if (codeHeader) {
                  // Find the span with data-label-text
                  const labelSpan = codeHeader.children?.find(child =>
                    child.tagName === 'span' && child.properties && 'data-label-text' in child.properties
                  );

                  if (labelSpan) {
                    // Update the label to show the filename
                    labelSpan.properties['data-label-text'] = filename;

                    // Update the icon to file icon
                    const icon = labelSpan.children?.[0];
                    if (icon && icon.tagName === 'i' && icon.properties) {
                      icon.properties.className = ['far', 'fa-file-code', 'fa-fw'];
                    }
                  }
                }

                // Mark paragraph for removal
                nodesToRemove.push({ parent, index });
              }
            }
          }
        }
      }
    });

    // Remove marked paragraphs (in reverse order to preserve indices)
    nodesToRemove.reverse().forEach(({ parent, index }) => {
      parent.children.splice(index, 1);
    });
  };
}
