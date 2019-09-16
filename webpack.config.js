const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const { regexes } = require('./build-utils/regexes');
const modeConfig = mode => require(`./build-utils/webpack.${mode}`)(mode);

module.exports = function createWebpackConfig({ mode }) {
  return webpackMerge(
    {
      mode,
      output: {
        filename: 'static/js/[name].js',
        publicPath: '/',
      },
      module: {
        rules: [
          {
            test: regexes.scripts,
            loader: 'babel-loader',
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
          inject: true,
        }),
        new ForkTsCheckerWebpackPlugin(),
      ],
    },
    modeConfig(mode)
  );
};
