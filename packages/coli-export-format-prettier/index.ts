import parserTypeScript from "prettier/parser-typescript";
import prettier from "prettier/standalone";

export function formatter(source: string) {
  return prettier.format(source, {
    parser: "typescript",
    plugins: [parserTypeScript],
  });
}
