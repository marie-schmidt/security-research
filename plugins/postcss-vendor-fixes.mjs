// PostCSS plugin to add missing vendor prefix counterparts
export default function postcssVendorFixes() {
  return {
    postcssPlugin: 'postcss-vendor-fixes',
    Declaration(decl) {
      // Add text-size-adjust alongside -webkit-text-size-adjust
      if (decl.prop === '-webkit-text-size-adjust' && decl.value === '100%') {
        if (!decl.parent.some(d => d.prop === 'text-size-adjust')) {
          decl.cloneAfter({ prop: 'text-size-adjust' });
        }
      }

      // Add -webkit-print-color-adjust alongside print-color-adjust
      if (decl.prop === 'print-color-adjust' && decl.value === 'exact') {
        if (!decl.parent.some(d => d.prop === '-webkit-print-color-adjust')) {
          decl.cloneBefore({ prop: '-webkit-print-color-adjust' });
        }
      }

      // Add -webkit-user-select alongside user-select
      if (decl.prop === 'user-select' && decl.value === 'none') {
        const parent = decl.parent;
        if (!parent.some(d => d.prop === '-webkit-user-select')) {
          decl.cloneBefore({ prop: '-webkit-user-select' });
        }
        if (!parent.some(d => d.prop === '-moz-user-select')) {
          decl.cloneBefore({ prop: '-moz-user-select' });
        }
        if (!parent.some(d => d.prop === '-ms-user-select')) {
          decl.cloneBefore({ prop: '-ms-user-select' });
        }
      }
    },
    Rule(rule) {
      // Add text-align: match-parent for th elements
      if (rule.selector === 'th') {
        const hasWebkitMatch = rule.some(d =>
          d.prop === 'text-align' && d.value === '-webkit-match-parent'
        );
        const hasMatch = rule.some(d =>
          d.prop === 'text-align' && d.value === 'match-parent'
        );

        if (hasWebkitMatch && !hasMatch) {
          rule.append({ prop: 'text-align', value: 'match-parent' });
        }
      }
    }
  };
}

postcssVendorFixes.postcss = true;
