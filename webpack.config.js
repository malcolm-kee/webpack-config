const webpack = require('webpack');

/**
 * @returns {webpack.Configuration}
 */
module.exports = function createWebpackConfig({ mode }) {
  return {
    mode,
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          loader: 'babel-loader',
        },
      ],
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
    },
  };
};
