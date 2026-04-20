import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

/**
 * Rehype plugin to wrap code blocks with headers (language label + copy button)
 * and add proper classes to match Jekyll Chirpy theme
 */
export function rehypeCodeBlocks() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      // First check if this is already a wrapper div from Shiki (has both language- class and highlighter-rouge)
      if (node.tagName === 'div' && parent) {
        const className = Array.isArray(node.properties?.className) ? node.properties.className : [];
        const hasLanguageClass = className.some(c => typeof c === 'string' && c.startsWith('language-'));

        // If it's a language wrapper, check if it needs a code header
        if (hasLanguageClass && !node.children?.some(child => child.tagName === 'div' && child.properties?.className?.includes?.('code-header'))) {
          // Find the pre > code inside
          const preNode = node.children?.find(child => child.tagName === 'pre');
          if (preNode) {
            const codeNode = preNode.children?.[0];
            if (codeNode?.tagName === 'code') {
              // Try to get language from pre element's data-language attribute (set by Shiki)
              const shikiLang = preNode.properties?.dataLanguage || preNode.properties?.['data-language'];

              // If Shiki set a language, update the wrapper div's class
              if (shikiLang && shikiLang !== 'plaintext') {
                // Remove old language- class and add new one
                const otherClasses = className.filter(c => !c.startsWith('language-'));
                node.properties.className = [`language-${shikiLang}`, ...otherClasses];
              }

              // Extract language from updated class name
              const updatedClassName = node.properties.className;
              const langClass = (Array.isArray(updatedClassName) ? updatedClassName : []).find(c => typeof c === 'string' && c.startsWith('language-'));
              const lang = langClass ? langClass.replace('language-', '') : 'plaintext';

              // Check for dataFile
              const file = preNode.properties?.dataFile || codeNode.properties?.dataFile;

              const langDisplay = lang.toUpperCase();
              const labelText = file || langDisplay;
              const iconClass = file ? 'far fa-file-code fa-fw' : 'fas fa-code fa-fw small';

              // Create code header
              const codeHeader = h('div', { class: 'code-header' }, [
                h('span', { 'data-label-text': labelText }, [
                  h('i', { class: iconClass })
                ]),
                h('button', {
                  'aria-label': 'copy',
                  'data-title-succeed': 'Copied!'
                }, [
                  h('i', { class: 'far fa-clipboard' })
                ])
              ]);

              // Add the header as the first child
              node.children.unshift(codeHeader);

              // Ensure highlighter-rouge class is present
              if (!className.includes('highlighter-rouge')) {
                node.properties.className = [...className, 'highlighter-rouge'];
              }
            }
          }
        }
      }

      // Handle block-level code (pre > code) that isn't already wrapped
      if (node.tagName === 'pre' && node.children && node.children[0]?.tagName === 'code' && parent?.tagName !== 'div') {
        const codeNode = node.children[0];
        // Check multiple ways Shiki might store the language
        const lang = node.properties?.dataLanguage ||
                     node.properties?.['data-language'] ||
                     codeNode.properties?.dataLanguage ||
                     codeNode.properties?.['data-language'] ||
                     (codeNode.properties?.className?.[0]?.startsWith?.('language-') ? codeNode.properties.className[0].replace('language-', '') : null) ||
                     'plaintext';
        // Check both pre and code node for dataFile (different parsers put it in different places)
        const file = node.properties?.dataFile || codeNode.properties?.dataFile;

        // Get language display name
        const langDisplay = lang.toUpperCase();
        const labelText = file || langDisplay;
        const iconClass = file ? 'far fa-file-code fa-fw' : 'fas fa-code fa-fw small';


        // Create code header
        const codeHeader = h('div', { class: 'code-header' }, [
          h('span', { 'data-label-text': labelText }, [
            h('i', { class: iconClass })
          ]),
          h('button', {
            'aria-label': 'copy',
            'data-title-succeed': 'Copied!'
          }, [
            h('i', { class: 'far fa-clipboard' })
          ])
        ]);

        // Wrap in language-specific div
        const wrapper = h('div', {
          class: `language-${lang} highlighter-rouge`
        }, [
          codeHeader,
          node  // The original <pre> element
        ]);

        // Replace the pre node with the wrapper
        if (parent && typeof index === 'number') {
          parent.children[index] = wrapper;
        }
      }

      // Handle inline code - add highlighter-rouge class
      if (node.tagName === 'code' && parent?.tagName !== 'pre') {
        const existingClasses = node.properties?.className || [];

        // Add language-plaintext and highlighter-rouge if not already present
        if (!existingClasses.includes('highlighter-rouge')) {
          node.properties.className = [
            'language-plaintext',
            ...existingClasses,
            'highlighter-rouge'
          ];
        }
      }
    });
  };
}
