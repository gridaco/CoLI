import parserTypeScript from "prettier/parser-typescript";
import prettier from "prettier/standalone";

const code = "const a = 1;function A(){}";
const formatted = (source) =>
  prettier.format(source, {
    parser: "typescript",
    plugins: [parserTypeScript],
  });
test("test formatting", () => {
  // TODO: won't pass
  expect(formatted(code)).toBe(code);
});
