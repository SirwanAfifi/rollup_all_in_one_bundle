import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
import serve from "rollup-plugin-serve";

export default {
  input: "./src/index.js",
  output: {
    file: "./dist/bundle.js",
    format: "iife",
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    resolve({
      browser: true,
      customResolveOptions: {
        moduleDirectories: ["node_modules"],
      },
    }),
    commonjs(),
    json(),
  ],
};
