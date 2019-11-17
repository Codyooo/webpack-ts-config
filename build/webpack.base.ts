import { resolve } from "path";
import { Configuration, ProgressPlugin, HashedModuleIdsPlugin } from "webpack";
import {
  tsLoader,
  cssLoader,
  imageLoader,
  babelLoader,
  fontLoader,
  alias
} from "./config";
import HtmlWebpackPlugin = require("html-webpack-plugin");
// import { CleanWebpackPlugin } from "clean-webpack-plugin";

const baseConfig: Configuration = {
  entry: {
    main: resolve(__dirname, "../src/index.ts")
    // sub: "./src/index.ts"
  },
  output: {
    // publicPath: "http://codycdn.cn",   //自动加cdn地址
    filename: "js/[name].js",
    chunkFilename: "js/[name].js", //异步加载js
    path: resolve(__dirname, "../dist")
  },
  module: {
    rules: [babelLoader(), tsLoader(), fontLoader(), cssLoader(), imageLoader()]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: alias()
  },
  plugins: [
    new ProgressPlugin(),
    new HashedModuleIdsPlugin(),

    new HtmlWebpackPlugin({
      template: "src/public/index.html"
    })
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      chunks: "async"
    }
  }
  // optimization: {
  //   usedExports: true, //tree shaking
  //   splitChunks: {
  //     chunks: "async",
  //     maxInitialRequests: Infinity,
  //     minSize: 0,
  //     cacheGroups: {
  //       vendors: {
  //         chunks: "async",
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10,
  //         minChunks: 1,
  //         minSize: 0,
  //         maxSize: 244000,
  //         name: module => {
  //           const packageName = module.context.match(
  //             /[\\/]node_modules[\\/](.*?)([\\/]|$)/
  //           )[1];
  //           return `npm.${packageName.replace("@", "")}`;
  //         }
  //       },
  //       default: {
  //         minChunks: 1,
  //         minSize: 0,
  //         chunks: "async",
  //         priority: -20,
  //         reuseExistingChunk: true,
  //         name: "async"
  //       }
  //       // vendors: false,
  //       // default: false
  //     }
  //   }
  // }
};

export default baseConfig;
