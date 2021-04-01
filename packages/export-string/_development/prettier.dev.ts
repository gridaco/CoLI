import parserTypeScript from "prettier/parser-typescript";
import prettier from "prettier/standalone";

const code = "const a = 1;function A(){}";

export const formatted = (source) =>
  prettier.format(source, {
    parser: "typescript",
    plugins: [parserTypeScript],
  });
