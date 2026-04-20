import { visit } from "unist-util-visit";

/**
 * Rehype plugin to transform footnote markup to match Chirpy theme format
 */
export function rehypeFootnotes() {
  return (tree) => {
    visit(tree, "element", (node) => {
      // Transform footnote section
      if (
        node.tagName === "section" &&
        node.properties?.dataFootnotes !== undefined
      ) {
        // Change section attributes
        delete node.properties.dataFootnotes;
        node.properties.role = "doc-endnotes";
        node.properties.className = ["footnotes"];

        // Remove the sr-only h2 heading
        node.children = node.children.filter((child) => {
          if (
            child.tagName === "h2" &&
            child.properties?.className?.includes("sr-only")
          ) {
            return false;
          }
          return true;
        });
      }

      // Transform footnote list items (fn-xxx -> fn:xxx)
      if (
        node.tagName === "li" &&
        node.properties?.id?.startsWith("user-content-fn-")
      ) {
        node.properties.id = node.properties.id.replace(
          "user-content-fn-",
          "fn:"
        );
      }

      // Transform footnote backref links
      if (node.tagName === "a") {
        // Transform href (fnref-xxx -> fnref:xxx)
        if (node.properties?.href?.startsWith("#user-content-fnref-")) {
          node.properties.href = node.properties.href.replace(
            "#user-content-fnref-",
            "#fnref:"
          );
        }

        // Transform backref link attributes
        if (node.properties?.dataFootnoteBackref !== undefined) {
          delete node.properties.dataFootnoteBackref;
          delete node.properties.ariaLabel;
          node.properties.className = ["reversefootnote"];
          node.properties.role = "doc-backlink";

          // Add non-breaking space before the backref arrow
          if (node.children.length > 0 && node.children[0].value === "↩") {
            // Find parent paragraph
            // We'll add nbsp in the parent transformation
          }
        }
      }

      // Transform footnote references in text (fnref:xxx)
      if (node.properties?.id?.startsWith("user-content-fnref-")) {
        node.properties.id = node.properties.id.replace(
          "user-content-fnref-",
          "fnref:"
        );
      }

      // Transform href to footnotes (fn:xxx)
      if (
        node.tagName === "a" &&
        node.properties?.href?.startsWith("#user-content-fn-")
      ) {
        node.properties.href = node.properties.href.replace(
          "#user-content-fn-",
          "#fn:"
        );
      }

      // Add non-breaking space before reversefootnote link and fix arrow
      if (node.tagName === "p") {
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          if (
            child.type === "element" &&
            child.tagName === "a" &&
            child.properties?.className?.includes("reversefootnote")
          ) {
            // Replace regular space with nbsp before the link
            if (i > 0 && node.children[i - 1].type === "text") {
              const prevText = node.children[i - 1].value;
              // Replace trailing space(s) with a single nbsp
              if (prevText.match(/\s+$/)) {
                node.children[i - 1].value = prevText.replace(/\s+$/, "\u00A0");
              } else if (!prevText.endsWith("\u00A0")) {
                // No space at all, add nbsp
                node.children[i - 1].value = prevText + "\u00A0";
              }
            }

            // Change arrow to include variant selector for text presentation (↩︎)
            if (
              child.children.length > 0 &&
              child.children[0].type === "text"
            ) {
              const arrow = child.children[0].value;
              // U+21A9 (↩) with U+FE0E (text variant) = ↩︎
              if (arrow.includes("↩") && !arrow.includes("︎")) {
                child.children[0].value = "↩︎";
              }
            }
          }
        }
      }
    });
  };
}
