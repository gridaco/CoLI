import {
  Block,
  FunctionDeclaration,
  Identifier,
  JSX,
  Return,
  Types,
} from "coli";
import { stringfy } from "../";

const jsxbody = JSX.fragment({
  children: [JSX.text("This is a JSX element"), JSX.div()],
}).make();

const _return = new Return(jsxbody);

const block = new Block(_return);

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

test("default indent", () => {
  expect(stringfy(_func)).toBe(`
function sum (a: number, b: number) {
\treturn (
\t\t<>
\t\t\tThis is a JSX element
\t\t\t<div/>
\t\t</>
\t)
}

`);
});

test("indent 2", () => {
  expect(
    stringfy(_func, {
      language: "tsx",
      indentation: 2,
    })
  ).toBe(`
function sum (a: number, b: number) {
  return (
    <>
      This is a JSX element
      <div/>
    </>
  )
}

`);
});

test("indent 4", () => {
  expect(
    stringfy(_func, {
      language: "tsx",
      indentation: 4,
    })
  ).toBe(`
function sum (a: number, b: number) {
    return (
        <>
            This is a JSX element
            <div/>
        </>
    )
}

`);
});
