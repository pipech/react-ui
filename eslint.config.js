import js from "@eslint/js";
import pluginStylistic from "@stylistic/eslint-plugin";
import pluginTypescript from "@typescript-eslint/eslint-plugin";
import parserTypescript from "@typescript-eslint/parser";
import pluginImport from "eslint-plugin-import";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import * as mdx from "eslint-plugin-mdx";
import pluginPerfectionist from "eslint-plugin-perfectionist";
import pluginReact from "eslint-plugin-react";
import pluginReactHook from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";
import pluginReadableTailwind from "eslint-plugin-readable-tailwind";
import pluginStorybook from "eslint-plugin-storybook";
import pluginTailwindcss from "eslint-plugin-tailwindcss";
import globals from "globals";

/** @type { import("eslint").Linter.FlatConfig[] } */
const config = [
  {
    ignores: [
      "dist/**",
      "node_modules/**",
      "bin/**",
      "build/**",
      "**/*.min.js",
    ],
    settings: {
      react: {
        version: "detect",
      },
      tailwindcss: {
        callees: ["classnames", "cn"],
      },
    },
  },
  {
    files: ["**/*.{cjs,js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "jsx-a11y": pluginJsxA11y,
      "perfectionist": pluginPerfectionist,
      "react": pluginReact,
      "react-hooks": pluginReactHook,
      "react-refresh": pluginReactRefresh,
      "readable-tailwind": pluginReadableTailwind,
      "stylistic": pluginStylistic,
      "tailwindcss": pluginTailwindcss,
    },
    rules: {
      // eslint-js
      ...js.configs.all.rules,
      "arrow-body-style": ["warn", "always"],
      "camelcase": "off",
      "capitalized-comments": "off",
      "consistent-return": "off",
      "default-case": "off",
      "id-length": "off",
      "max-lines": "off",
      "max-lines-per-function": "off",
      "max-params": "off",
      "max-statements": "off",
      "multiline-comment-style": "off",
      "no-magic-numbers": ["warn", {
        detectObjects: true,
        enforceConst: true,
        ignore: [-1, 0, 1],
        ignoreArrayIndexes: true,
      }],
      "no-shadow": ["error", {
        allow: ["params"],
        builtinGlobals: false,
        hoist: "functions",
        ignoreOnInitialization: false,
      }],
      "no-ternary": "warn",
      "no-undefined": "off",
      "no-warning-comments": "off",
      "one-var": ["error", "never"],
      "sort-imports": "off",
      "sort-keys": "off",

      // react
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs["jsx-runtime"].rules,
      "react/button-has-type": "error",
      "react/jsx-no-script-url": "error",
      "react/jsx-pascal-case": "error",
      "react/no-unstable-nested-components": ["error", { allowAsProps: true }],

      // react-hooks
      ...pluginReactHook.configs.recommended.rules,

      // react-refresh
      "react-refresh/only-export-components": "warn",

      // jsxA11y
      ...pluginJsxA11y.configs.recommended.rules,

      // tailwindcss
      ...pluginTailwindcss.configs.recommended.rules,
      "tailwindcss/classnames-order": ["off"],

      // readable-tailwind
      "readable-tailwind/multiline": [
        "error",
        {
          callees: [
            ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
            ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
          ],
          group: "newLine",
          printWidth: 60,
        },
      ],
      "readable-tailwind/no-unnecessary-whitespace": [
        "error",
        {
          callees: [
            ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
            ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
          ],
        },
      ],
      "readable-tailwind/sort-classes": [
        "error",
        {
          callees: [
            ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
            ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
          ],
        },
      ],

      // stylistic
      ...pluginStylistic.configs.customize({
        arrowParens: "true",
        blockSpacing: true,
        braceStyle: "stroustrup",
        commaDangle: "always-multiline",
        flat: true,
        indent: 2,
        jsx: true,
        pluginName: "stylistic",
        quoteProps: "consistent-as-needed",
        quotes: "double",
        semi: true,
      }).rules,
      "stylistic/max-len": [
        "warn",
        {
          code: 90,
          comments: 100,
          ignoreUrls: true,
        },
      ],
      "stylistic/max-statements-per-line": [
        "warn",
        {
          max: 1,
        },
      ],

      // perfectionist
      ...pluginPerfectionist.configs["recommended-natural"].rules,
      "perfectionist/sort-imports": [
        "error",
        {
          "custom-groups": {
            type: {
              react: "react",
              refine: "@refinedev/*",
            },
            value: {
              react: ["react"],
              refine: ["@refinedev/*"],
            },
          },
          "groups": [
            "type",
            "react",
            "refine",
            "builtin",
            "external",
            "internal-type",
            "internal",
            ["parent-type", "sibling-type", "index-type"],
            ["parent", "sibling", "index"],
            "side-effect",
            "style",
            "object",
            "unknown",
          ],
          "internal-pattern": [
            "@/**/**",
          ],
          "newlines-between": "always",
          "order": "asc",
          "type": "natural",
        },
      ],
      "perfectionist/sort-interfaces": [
        "error", {
          "partition-by-new-line": true,
        },
      ],
      "perfectionist/sort-object-types": [
        "error", {
          "custom-groups": {
            key: ["id", "key"],
            name: ["name", "title", "label"],
          },
          "groups": [
            "key",
            "name",
            "unknown",
          ],
          "partition-by-new-line": true,
        },
      ],
      "perfectionist/sort-objects": [
        "error",
        {
          "custom-groups": {
            key: ["id", "key"],
            name: ["name", "title", "label"],
          },
          "groups": [
            "key",
            "name",
            "unknown",
          ],
          "order": "asc",
          "partition-by-new-line": true,
          "type": "natural",
        },
      ],
    },
  },
  {
    files: [
      "**/*.{ts,tsx}",
    ],
    languageOptions: {
      parser: parserTypescript,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": pluginTypescript,
      "import": pluginImport,
    },
    rules: {
      // eslint-js
      "no-shadow": "off",

      // typescript
      ...pluginTypescript.configs.strict.rules,
      "@typescript-eslint/no-empty-interface": [
        "error",
        {
          allowSingleExtends: true,
        },
      ],
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-unused-vars": ["warn"],

      // eslint-import
      ...pluginImport.configs.recommended.rules,
      ...pluginImport.configs.typescript.rules,
      "import/no-unresolved": "off",
    },
    settings: {
      "import/parsers": {
        espree: [".js", ".cjs", ".mjs", ".jsx"],
      },
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
  /**
   * ----------
   * Storybook
   * ----------
   */
  {
    files: [
      "**/*.{stories,story}.{ts,tsx}",
    ],
    plugins: {
      storybook: pluginStorybook,
    },
    rules: {
      // js
      "func-name-matching": "off",
      "no-alert": "off",
      "no-console": "off",

      // storybook
      ...pluginStorybook.configs.recommended.overrides[0].rules,
    },
  },
  /**
   * ----------
   * Mdx
   * ----------
   */
  {
    ...mdx.flat,
    files: ["**/*.{md,mdx}"],
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
    rules: {
      "mdx/remark": ["warn"],
    },
  },
  {
    ...mdx.flatCodeBlocks,
    files: ["**/*.{md,mdx}/*"],
    rules: {
      ...mdx.flatCodeBlocks.rules,
    },
  },
  /**
   * ----------
   * Custom
   * ----------
   */
  {
    /**
     * # fix className prop-types error from ui.shadcn component
     * https://github.com/shadcn-ui/ui/issues/120
     * disable the react/prop-types rule,
     * because it's not necessary when TypeScript is also doing the type checking
     */
    files: ["**/components/**/*.{ts,tsx}"],
    rules: {
      "react/prop-types": "off",
    },
  },
];

export default config;
