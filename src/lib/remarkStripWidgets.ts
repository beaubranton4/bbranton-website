// remark plugin: strip machine-only ```widget:*``` fenced blocks from rendered HTML.
//
// The blocks stay in the markdown source (the data backbone / scripts/extract-widgets.mjs
// reads them into data/widgets/*.json), but readers of a post only see the human-friendly
// tables — never raw YAML. Used by BOTH render paths: src/lib/posts.ts (getPostData) and
// the runtime API route src/pages/api/posts/[id].ts.
// See docs/explorations/specs/journal-widgets.md.

export function remarkStripWidgets() {
  return (tree: any) => {
    const walk = (node: any) => {
      if (!node || !Array.isArray(node.children)) return;
      node.children = node.children.filter(
        (child: any) =>
          !(child.type === 'code' && typeof child.lang === 'string' && child.lang.startsWith('widget:'))
      );
      node.children.forEach(walk);
    };
    walk(tree);
  };
}
