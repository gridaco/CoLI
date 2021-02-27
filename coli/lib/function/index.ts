import { Type, Types } from "../type";

type Params = { argName: string, argType: Type }[]

export class Function {
    functionName: string;
    functionArguments: Params;
    functionReturnType: Type;

    constructor(funcName: string, args?: Params, returnType?: Type) {
        this.functionName = funcName;
        this.functionArguments = args;
        this.functionReturnType = returnType;
    }

    public args(...args: Params) {
        this.functionArguments = args
        return this;
    }

    public returnType(type: Type) {
        this.functionReturnType = type
        return this;
    }

    public call(...value: any) {
        return this;
    }
}

/** Example */

new Function("test").args({ argName: "testArg", argType: Types.any }).returnType(Types.any)
// -> function test( testArg : any ) : any

new Function("test", [{ argName: "testArg", argType: Types.any }]).returnType(Types.any)
// -> function test( testArg : any ) : any

new Function("test", [{ argName: "testArg", argType: Types.any }], Types.any)
// -> function test( testArg : any ) : any

new Function("test", [{ argName: "testArg", argType: Types.any }], Types.any).call()
// -> test()
