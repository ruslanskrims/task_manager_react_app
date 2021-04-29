const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

module.exports = (vars) => {
  const { env } = vars;
  const envConfig = require(`./webpack.${env}.js`);
  return merge(commonConfig, envConfig);
};
