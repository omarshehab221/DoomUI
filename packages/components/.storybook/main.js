const path = require("node:path");

const config = {
  stories: [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@chromatic-com/storybook",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@doom-ui/components": path.resolve(__dirname, "../src"),
        // "@doom-ui/core": path.resolve(__dirname, "../../core/src"),
        // "@plugins": path.resolve(__dirname, "../../core/src/plugins"),
        // "@components": path.resolve(__dirname, "../../core/src/components"),
        // "@theme": path.resolve(__dirname, "../../core/src/theme"),
        // "@utils": path.resolve(__dirname, "../../core/src/utils"),
      };
      
      config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, "../node_modules"),
        "node_modules"
      ];
      
      config.resolve.extensions = [
        ...(config.resolve.extensions || []),
        '.ts',
        '.tsx',
      ];
    }

    if (config.module?.rules) {
      config.module.rules.push({
        test: /\.tsx?$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              presets: [
                ['@babel/preset-env', { targets: "defaults" }],
                '@babel/preset-typescript',
                ['@babel/preset-react', { runtime: "automatic" }]
              ],
            },
          },
        ],
      });

      config.module.rules.push({
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, '../../../postcss.config.js')
              },
            },
          },
        ],
      });
    }
    return config;
  },
};

module.exports = config; 