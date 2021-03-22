import { Function } from "coli/lib/function";
import { Type, Types } from "coli/lib/type";

/** Example */
new Function("test")
  .args({ argName: "testArg", argType: Types.any })
  .returnType(Types.any);
// -> function test( testArg : any ) : any

new Function("test", [{ argName: "testArg", argType: Types.any }]).returnType(
  Types.any
);
// -> function test( testArg : any ) : any

new Function("test", [{ argName: "testArg", argType: Types.any }], Types.any);
// -> function test( testArg : any ) : any

new Function(
  "test",
  [{ argName: "testArg", argType: Types.any }],
  Types.any
).call();
// -> test()
