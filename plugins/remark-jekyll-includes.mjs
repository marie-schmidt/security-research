import { visit } from 'unist-util-visit';

/**
 * Remark plugin to handle Jekyll liquid {% include %} syntax
 * and convert it to HTML.
 *
 * Converts:
 *   {% include embed/youtube.html id='Balreaj8Yqs' %}
 *
 * Into an iframe HTML element
 */
export function remarkJekyllIncludes() {
  return (tree) => {
    const replacements = [];

    visit(tree, (node, index, parent) => {
      if (!parent || typeof index === 'undefined') return;

      let textToCheck = '';
      let shouldReplace = false;

      // Handle paragraphs
      if (node.type === 'paragraph' && node.children) {
        // Check if it contains only text
        const allText = node.children.every(child => child.type === 'text');
        if (allText) {
          textToCheck = node.children.map(child => child.value).join('');
          shouldReplace = true;
        }
      }

      if (shouldReplace && textToCheck) {
        // Match YouTube embed
        const youtubeMatch = textToCheck.match(/\{%\s*include\s+embed\/youtube\.html\s+id\s*=\s*['"]([^'"]+)['"]\s*%\}/i);

        if (youtubeMatch) {
          const videoId = youtubeMatch[1];
          replacements.push({ parent, index, videoId });
        }
      }
    });

    // Apply replacements in reverse order to maintain indices
    replacements.reverse().forEach(({ parent, index, videoId }) => {
      parent.children[index] = {
        type: 'html',
        value: `<iframe class="embed-video" loading="lazy" src="https://www.youtube.com/embed/${videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      };
    });
  };
}
