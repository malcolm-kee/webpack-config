const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { regexes } = require('./regexes');

/**
 * @returns {webpack.Configuration}
 */
module.exports = function createWebpackConfig() {
  return {
    module: {
      rules: [
        {
          test: regexes.css,
          exclude: regexes.cssModules,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
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
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-modules-typescript-loader',
              options: {
                mode: 'verify',
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
    devtool: 'source-map',
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'static/css/[name].css',
        chunkFilename: 'static/css/[id].css',
      }),
    ],
  };
};
