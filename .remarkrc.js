import remarkLintListItemIndent from "remark-lint-list-item-indent";
import remarkLintListItemSpacing from "remark-lint-list-item-spacing";
import remarkPresetLintConsistent from "remark-preset-lint-consistent";
import remarkPresetLintMarkdownStyleGuide from "remark-preset-lint-markdown-style-guide";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";

const remarkConfig = {
  plugins: [
    remarkPresetLintConsistent,
    remarkPresetLintRecommended,
    remarkPresetLintMarkdownStyleGuide,
    [remarkLintListItemIndent, "space"],
    [remarkLintListItemSpacing, false],
  ],
  // Settings can be found here:
  // https://github.com/remarkjs/remark/tree/main/packages/remark-stringify#options
  settings: {
    bullet: "-",
    incrementListMarker: false,
    listItemIndent: "one",
  },
};

export default remarkConfig;
