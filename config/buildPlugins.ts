import webpack, { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export function buildPlugins(options: BuildOptions): Configuration["plugins"] {
  const { mode, paths, analyzer, platform } = options;

  const isDev = mode === "development";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    }),
  ];

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    plugins.push(new ForkTsCheckerWebpackPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  }

  if (!isDev) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
    );
  }

  if (analyzer) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return plugins;
}
