import { Function, Block, Snippet } from "coli/lib";
import { Type, Types } from "coli/lib";
import { FunctionDeclraration } from "coli/lib/declarations/function";

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
  body: new Block(Snippet.fromStatic("")),
});
