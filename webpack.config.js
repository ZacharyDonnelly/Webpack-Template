const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");
const { CheckerPlugin } = require("awesome-typescript-loader");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      entry: "./src/index.ts",
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
          }
        ]
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js"]
      },
      output: {
        filename: "./bundle.js",
        chunkFilename: "[name].lazy-chunk.js"
      },
      plugins: [
        new HtmlWebpackPlugin(),
        new webpack.ProgressPlugin(),
        new CheckerPlugin()
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
