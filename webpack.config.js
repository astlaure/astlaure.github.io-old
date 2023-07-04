const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: [
    './src/assets/js/app.js',
    './src/assets/sass/styles.scss',
  ],
  output: {
    filename: "js/app.js",
    path: path.resolve('public/assets'),
    publicPath: "",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          { loader: 'sass-loader', options: { sourceMap: false } },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/styles.css',
    }),
  ],
  devtool: 'source-map',
};
