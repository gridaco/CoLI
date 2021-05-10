import { stringfy } from "@coli.codes/export-string";
import { Identifier, Block, Snippet, Types, FunctionDeclaration } from "coli";

const sumNotReturn = new FunctionDeclaration("sum", {
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

const sumReturn = new FunctionDeclaration("sum", {
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

const emptyFunction = new FunctionDeclaration("emptyFunction");

// function emptyFunction() : any {}
console.log(stringfy(emptyFunction, { language: "typescript" }));

const returnTypeFunction = new FunctionDeclaration("returnTypeFunction", {
  returnType: Types.string,
});

// function returnTypeFunction () : string {}
console.log(stringfy(returnTypeFunction, { language: "typescript" }));
