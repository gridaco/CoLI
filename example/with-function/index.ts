import { Function } from "coli/lib";
import { Type, Types } from "coli/lib";

/** Example */
new Function("test")
  .withParams({ argName: "testArg", argType: Types.any })
  .returns(Types.any);
// -> function test( testArg : any ) : any

new Function("test", [{ argName: "testArg", argType: Types.any }]).returns(
  Types.any
);
// -> function test( testArg : any ) : any

new Function("test", [{ argName: "testArg", argType: Types.any }], Types.any);
// -> function test( testArg : any ) : any

new Function(
  "test",
  [{ argName: "testArg", argType: Types.any }],
  Types.any
).exportAs();
// -> test()
