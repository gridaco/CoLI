import { Identifier } from "../../ast/identifier";
import { Type, Types } from "../../builders/type";
import { BlockStatement } from "../../statements";
import { _DECLARATION_FUNCTION } from "../../_internal/constants/declarations-name";
import { Declaration } from "../declaration.base";
import assert from "assert";
import { EmptyBlock } from "../../builders/block/empty-block";
export class FunctionDeclraration extends Declaration {
  id: Identifier;
  params: [] = [];
  body: BlockStatement = new EmptyBlock();
  returnType: Type = Types.any;

  constructor(
    name: string,
    args?: {
      returnType?: Type;
      body?: BlockStatement;
    }
  ) {
    super(_DECLARATION_FUNCTION);
    // validate function name
    // ref: https://stackoverflow.com/questions/2008279/validate-a-javascript-function-name
    assert(/^[$A-Z_][0-9A-Z_$]*$/i.test(name), "invalid function name");

    // set return type. default value is provided.
    if (args?.returnType) {
      this.returnType = args.returnType;
    }
  }
}

const test = new FunctionDeclraration("test", {});
