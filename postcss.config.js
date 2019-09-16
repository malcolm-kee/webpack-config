const postcssPresetEnv = require('postcss-preset-env');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssReporter = require('postcss-reporter');

module.exports = {
  plugins: [postcssPresetEnv(), postcssReporter(), postcssFlexbugsFixes()],
};
