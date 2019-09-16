const ForkTsCheckerNotifierWebpackPlugin = require('fork-ts-checker-notifier-webpack-plugin');
const webpack = require('webpack');
const { regexes } = require('./regexes');

/**
 * @returns {webpack.Configuration}
 */
module.exports = function createWebpackConfig() {
  return {
    devServer: {
      port: 9000,
      historyApiFallback: true,
    },
    devtool: 'cheap-eval-source-map',
    module: {
      rules: [
        {
          test: regexes.css,
          exclude: regexes.cssModules,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: regexes.cssModules,
          use: [
            'style-loader',
            {
              loader: 'css-modules-typescript-loader',
              options: {
                mode: 'emit',
              },
            },
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 2,
              },
            },
            'postcss-loader',
            'sass-loader',
          ],
        },
      ],
    },
    plugins: [
      new ForkTsCheckerNotifierWebpackPlugin({
        title: 'Typescript',
      }),
    ],
  };
};
