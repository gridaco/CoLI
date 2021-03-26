import { Function, Block, Snippet } from "coli/lib";
import { Type, Types } from "coli/lib";

/** Example */
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

new Function("test", [{ name: "b", typeAnnotation: Types.boolean }]).returns(
  Types.any
);
// -> function test( testArg : any ) : any

new Function("test", [{ name: "b", typeAnnotation: Types.boolean }], Types.any);
// -> function test( testArg : any ) : any

new Function(
  "test",
  [{ name: "b", typeAnnotation: Types.boolean }],
  Types.any
).exportAs();
// -> test()
