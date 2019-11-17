import { resolve } from "path";

export const babelLoader = () => {
  return {
    test: /\.js$/,
    use: "babel-loader"
  };
};

export const cssLoader = () => {
  return {
    test: /\.(css|sass|scss)$/,
    use: [
      "style-loader",
      // {
      //   loader: "typings-for-css-modules-loader"
      //   options: {
      //     modules: true,
      //     namedExport: true
      //     // sass: true,
      //     // camelCase: true
      //   }
      // },
      {
        loader: "css-loader",
        options: {
          importLoaders: 2 //保证嵌套css能执行
          // modules: true //引入css_module 保证css在模块内生效
        }
      },
      "sass-loader",
      "postcss-loader"
    ]
    // style-loader 挂<style>标签
    // css-loader 处理css依赖关系
    // sass-loader 处理sass文件
    // postcss-loader 给css属性加厂商前缀
    //  执行顺序顺序从后往前
  };
};

export const tsLoader = () => {
  return {
    test: /\.ts?$/,
    use: "ts-loader"
  };
};

export const imageLoader = () => {
  return {
    test: /\.(jpe?g|png|svg|gif)$/i,
    use: {
      loader: "url-loader",
      options: {
        //placeholder
        name: "[name]_[hash].[ext]",
        outputPath: "images/",
        limit: 4096
      }
    }
  };
};

export const fontLoader = () => {
  return {
    test: /\.(eot|ttf|svg|woff)$/,
    use: {
      loader: "file-loader",
      options: {
        outputPath: "fonts/"
      }
    }
  };
};

export const alias = () => {
  return {
    "@cmp": resolve(__dirname, "../src/components/"),
    "@img": resolve(__dirname, "../src/assets/image/")
  };
};
