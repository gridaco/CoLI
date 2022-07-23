import { Block, FunctionDeclaration, Identifier, Snippet, Types } from "coli";
import { stringfy } from "../";

test("function-declaration", () => {
  const sum = new FunctionDeclaration("sum", {
    body: new Block(),
    params: [
      new Identifier("a", {
        typeAnnotation: Types.number,
      }),
      new Identifier("b", {
        typeAnnotation: Types.number,
      }),
    ],
  });
  expect(stringfy(sum)).toBe(`
function sum (a: number, b: number) {
\t
}

`);
});
