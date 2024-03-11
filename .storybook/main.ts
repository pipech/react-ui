import { type StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import svgr from "vite-plugin-svgr";

const config: StorybookConfig = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "storybook-addon-react-router-v6",
    "storybook-addon-pseudo-states",
  ],
  docs: {
    autodocs: "tag",
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  typescript: {
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
      propFilter: (prop) => {
        return (
          prop.parent ? !/node_modules/u.test(prop.parent.fileName) : true
        );
      },
      shouldExtractLiteralValuesFromEnum: true,
    },
  },
  viteFinal: (c) => {
    return mergeConfig(
      c,
      {
        plugins: [svgr({ include: "**/*.svg" })],
      },
    );
  },
};
export default config;
