const path = require('path')

const toPath = (_path) => path.join(process.cwd(), _path)

/** @type {import('@storybook/react/types').StorybookConfig} */
const config = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    check: false,
    checkOptions: {},
    // FIXME: https://github.com/storybookjs/storybook/issues/15067
    reactDocgen: 'none',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  features: {
    postcss: false,
  },
  // FIXME: https://github.com/storybookjs/storybook/issues/14805
  babel: async (options) => {
    const { plugins = [] } = options
    return {
      ...options,
      plugins: [
        ...plugins,
        [
          require.resolve('@babel/plugin-proposal-private-property-in-object'),
          { loose: true },
        ],
      ],
    }
  },
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve?.alias,
        '@emotion/core': toPath('node_modules/@emotion/react'),
        'emotion-theming': toPath('node_modules/@emotion/react'),
      },
    },
  }),
}

module.exports = config
