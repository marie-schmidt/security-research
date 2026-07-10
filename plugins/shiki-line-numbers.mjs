/**
 * Shiki transformer to add line numbers support and file attributes
 * Adds CSS classes and variables to enable line numbering via CSS counters
 * Respects .nolineno class from Kramdown-style IAL syntax
 * Extracts file= attribute from meta and adds it to pre element
 */
export default function shikiLineNumbers() {
  return {
    name: 'shiki-line-numbers',
    pre(node) {
      const meta = this.options.meta?.__raw;
      const lang = this.options.lang;

      // Languages that shouldn't have line numbers by default
      const skipLineNumbers = ['plaintext', 'console', 'terminal'];

      // Check if this is a language that should skip line numbers
      if (skipLineNumbers.includes(lang)) {
        return;
      }

      // Check for .nolineno in the meta string
      let hasNolineno = false;
      if (meta && meta.includes('.nolineno')) {
        hasNolineno = true;
      }

      // Add show-line-numbers class unless .nolineno is present
      if (!hasNolineno) {
        this.addClassToHast(node, 'show-line-numbers');
      }

      // Check for start line number in meta (e.g., start=5)
      if (meta) {
        const startMatch = meta.match(/start=(\d+)/);
        if (startMatch) {
          const startLine = parseInt(startMatch[1], 10);
          const existingStyle = (node.properties.style || '').toString();
          node.properties.style = existingStyle
            ? `${existingStyle}; --start-line: ${startLine - 1}`
            : `--start-line: ${startLine - 1}`;
        }
      }
    }
  };
}
