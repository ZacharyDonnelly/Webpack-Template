const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// CHANGE FILENAME BACK TO: [CHUNKHASH].JS
// WHEN PRODUCTION TIME COMES
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

module.exports = () => ({
  devtool: "source-map",
  output: {
    filename: "[chunkhash].js",
    chunkFilename: "[name].lazy-chunk.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [new MiniCssExtractPlugin()]
});
