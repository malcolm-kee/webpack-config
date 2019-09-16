const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const regexes = {
  scripts: /\.[jt]sx?$/i,
  css: /\.s?css$/i,
  cssModules: /\.module\.s?css$/i,
};

/**
 * @returns {webpack.Configuration}
 */
module.exports = function createWebpackConfig({ mode }) {
  return {
    mode,
    output: {
      filename: 'static/js/[name].js',
      publicPath: '/',
    },
    devServer: {
      port: 9000,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: regexes.scripts,
          loader: 'babel-loader',
        },
        {
          test: regexes.css,
          exclude: regexes.cssModules,
          use: [
            mode === 'production'
              ? {
                  loader: MiniCssExtractPlugin.loader,
                }
              : 'style-loader',
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
            mode === 'production'
              ? {
                  loader: MiniCssExtractPlugin.loader,
                }
              : 'style-loader',
            {
              loader: 'css-modules-typescript-loader',
              options: {
                mode: mode === 'production' ? 'verify' : 'emit',
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
        {
          test: /\.(svg|woff2?|ttf|eot)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'static/media/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
      }),
      mode === 'production' &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].css',
          chunkFilename: 'static/css/[id].css',
        }),
    ].filter(Boolean),
  };
};
