import { stringfy } from "../../export-string";
import { Block, Snippet, Types } from "../lib";
import { Identifier } from "../lib/ast/identifier";
import { FunctionDeclraration } from "../lib/declarations/function";

const sumNotReturn = new FunctionDeclraration("sum", {
  params: [
    new Identifier("a", {
      typeAnnotation: Types.number,
    }),
    new Identifier("b", {
      typeAnnotation: Types.number,
    }),
  ],
});

// function sum(a : number, b : number) : any {}
console.log(stringfy(sumNotReturn, { language: "typescript" }));

const sumReturn = new FunctionDeclraration("sum", {
  body: new Block(Snippet.fromStatic("return a + b")),
  params: [
    new Identifier("a", {
      typeAnnotation: Types.number,
    }),
    new Identifier("b", {
      typeAnnotation: Types.number,
    }),
  ],
});

// TODO UPDATE INNER BODY EXPRESSION
console.log(stringfy(sumReturn, { language: "typescript" }));

const emptyFunction = new FunctionDeclraration("emptyFunction");

// function emptyFunction() : any {}
console.log(stringfy(emptyFunction, { language: "typescript" }));

const returnTypeFunction = new FunctionDeclraration("returnTypeFunction", {
  returnType: Types.string,
});

// function returnTypeFunction () : string {}
console.log(stringfy(returnTypeFunction, { language: "typescript" }));
