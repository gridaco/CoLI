import { Function, Block, Snippet } from "coli/lib";
import { Type, Types } from "coli/lib";
import { Identifier } from "coli/lib/ast/identifier";
import { FunctionDeclraration } from "coli/lib/declarations/function";
import { stringfy } from "../../packages/export-string";

// builder example
new Function("sum")
  .withParams(
    { name: "a", typeAnnotation: Types.number },
    { name: "b", typeAnnotation: Types.number }
  )
  .withBody(new Block().add(Snippet.fromStatic("return a + b")))
  .returns(Types.number);
/// function sum( a: number, b: number ) : number {
///   return a + b
/// }

// raw example
const sum = new FunctionDeclraration("sum", {
  body: new Block(Snippet.fromStatic("return a+b")),
  params: [
    new Identifier("a", {
      typeAnnotation: Types.number,
    }),
    new Identifier("b", {
      typeAnnotation: Types.number,
    }),
  ],
});

console.log(stringfy(sum, { language: "typescript" }));

// new FunctionDeclaration({
//    name: “Heading”,
//    returnType: Types.fromStatic(“JSX.Element”),
//    body: Snippet.fromStatic(“return <div/>”)
// })
