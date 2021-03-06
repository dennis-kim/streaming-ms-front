const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.jsx",
  output: {
    filename: "bundle.[contenthash].js",
    path: path.resolve(__dirname, "../build")
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: ["babel-loader"]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: ['file-loader']
      },
      {
        test: /\.(ttf)$/,
        use: ['file-loader']
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html",
      favicon: "./src/img/favicon/favicon.png"
    }),
    new MiniCssExtractPlugin({
      filename: "style.css"
    }),
    new CleanWebpackPlugin()
  ]
};