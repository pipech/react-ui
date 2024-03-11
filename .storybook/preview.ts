import { type Preview } from "@storybook/react";

import "../dist/tailwind.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        // eslint-disable-next-line prefer-named-capture-group
        color: /(background|color)$/ui,
        date: /Date$/ui,
      },
    },
    options: {
      storySort: {
        order: [
          "Docs",
          "Theme",
          "Components",
          "Forms",
          "Organisms",
          "Libraries",
          "Pages",
        ],
      },
    },
  },
};

export default preview;
