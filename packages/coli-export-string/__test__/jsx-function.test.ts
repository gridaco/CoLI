import {
  Block,
  FunctionDeclaration,
  Identifier,
  JSX,
  Return,
  Types,
} from "coli";
import { stringfy } from "../";

const jsxbody = JSX.div().make();
test("jsx-body", () => {
  expect(stringfy(jsxbody)).toBe("<div/>");
});

const _return = new Return(jsxbody);

test("with-return", () => {
  const _ = stringfy(_return);
  expect(_).toBe(
    `return (
\t<div/>
)`
  );
});

const block = new Block(_return);
test("with-block", () => {
  const str = stringfy(block);
  expect(str).toBe(
    `{
\treturn (
\t\t<div/>
\t)
}`
  );
});

const _func = new FunctionDeclaration("sum", {
  body: block,
  params: [
    new Identifier("a", {
      typeAnnotation: Types.number,
    }),
    new Identifier("b", {
      typeAnnotation: Types.number,
    }),
  ],
});

test("jsx-function-declaration-with-return", () => {
  expect(stringfy(_func)).toBe(`
function sum (a: number, b: number) {
\treturn (
\t\t<div/>
\t)
}

`);
});
