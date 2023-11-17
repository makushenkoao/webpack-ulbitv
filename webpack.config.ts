import webpack from "webpack";
import { buildWebpack } from "./config/buildWebpack";
import { BuildMode, BuildPaths } from "./config/types/types";
import path from "path";

interface EnvVariables {
  port: number;
  mode: BuildMode;
  analyzer?: boolean;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, "build"),
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  return buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? "development",
    analyzer: env.analyzer,
    paths,
  });
};
