import { Function } from "coli/lib";
import { Type, Types } from "coli/lib";

/** Example */
new Function("test")
  .withParams(
    { name: "a", typeAnnotation: Types.boolean },
    { name: "b", typeAnnotation: Types.boolean }
  )
  .returns(Types.any);
// -> function test( testArg : any ) : any

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
