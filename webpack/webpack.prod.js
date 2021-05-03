const webpack = require("webpack");
module.exports = {
  mode: "production",
  devtool: false,
  target: "browserslist",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.name": JSON.stringify("Production"),
    }),
  ],
};
