const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  context: path.resolve(__dirname, "../"),
  mode: "development",
  entry: "./example/entry.js",
  output: {
    path: path.resolve(__dirname, "../dist2"),
    filename: "app.js",
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /.(png|jpe?g|gif)$/,
        use: ['url-loader']
      }
    ],
  },
  devServer: {
    hot: true,
    port: 8001,
  },
  resolve: {
    extensions: [".js", ".json", ".vue"],
    alias: {
      markjs: path.resolve(__dirname, "../src/markjs.js"),
      'markjs/src/plugins/img': path.resolve(__dirname, "../src/src/plugins/img.js")
    },
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./example/index.html.tpl",
    }),
  ],
};
