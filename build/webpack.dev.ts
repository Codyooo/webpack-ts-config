import { Configuration } from "webpack";
import baseConifg from "./webpack.base";
import merge from "webpack-merge";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
// import MomentLocalesPlugin = require("moment-locales-webpack-plugin");

const config: Configuration = {
  mode: "development",
  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: "./dev",
    open: true,
    port: 3005,
    hot: true,
    // compress: true,
    // hotOnly: true,
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
  plugins: [
    new BundleAnalyzerPlugin()
    // new MomentLocalesPlugin({ localesToKeep: ["es-us", "zn-ch"] })
  ]
};

export default merge(baseConifg, config);
