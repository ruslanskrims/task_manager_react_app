const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    hot: true,
    open: true,
  },
  devtool: "cheap-module-source-map",
  plugins: [
    new ReactRefreshWebpackPlugin(),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    }
  }
};
