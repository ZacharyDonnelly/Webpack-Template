const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      entry: "./src/index.tsx",
      mode,
      module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: "file-loader",
                options: {
                  name: "[path][name].[ext]"
                }
              }
            ]
          },
          {
            test: /\.tsx?$/,
            loader: "awesome-typescript-loader",
            exclude: /node_modules/
          },
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader",
            query: {
              presets: ["@babel/preset-react"]
            }
          }
        ]
      },
      resolve: {
        extensions: ["*", ".ts", ".tsx", ".js", ".json", ".jsx"]
      },
      output: {
        filename: "./bundle.js",
        publicPath: "/",
        chunkFilename: "[name].lazy-chunk.js"
      },
      plugins: [
        new HtmlWebpackPlugin({
          inject: false,
          template: "./public/index.html",
          filename: "index.html"
        }),
        new webpack.ProgressPlugin(),
        new CheckerPlugin()
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
