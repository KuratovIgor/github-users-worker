const StyleLintPlugin = require('stylelint-webpack-plugin')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')
const path = require('path')

module.exports = {
  publicPath: '/github-users-worker/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
        },
        {
          test: /\.scss$/,
          use: [
            'sass-loader',
            {
              loader: 'style-resources-loader',
              options: {
                patterns: [
                  './src/styles/variables.scss',
                  './src/styles/mixins.scss',
                  './node_modules/dc-ui-library/packages/theme/styles/variables.scss',
                  './node_modules/dc-ui-library/packages/theme/styles/mixins.scss',
                ],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new SpriteLoaderPlugin(),
      new StyleLintPlugin({
        files: ['src/**/*.{vue,scss}'],
      }),
    ],
    resolve: {
      alias: {
        '@': path.join(__dirname, '/src'),
      },
    },
  },
  chainWebpack: (config) => {
    config.module.rules.delete('svg')
  },
}
