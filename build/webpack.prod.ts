import { Configuration } from "webpack";
import merge from "webpack-merge";
import baseConfig from "./webpack.base";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
const config: Configuration = {
  mode: "production",
  plugins: [new CleanWebpackPlugin()]
};

export default merge(baseConfig, config);
