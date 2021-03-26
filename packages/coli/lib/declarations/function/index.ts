import { Identifier } from "../../ast/identifier";
import { Type, Types } from "../../builders/type";
import { BlockStatement } from "../../statements";
import { _DECLARATION_FUNCTION } from "../../_internal/constants/declarations-name";
import { Declaration } from "../declaration.base";
import assert from "assert";
import { EmptyBlockStatement } from "../../builders/block-statement/empty-block";
export class FunctionDeclraration extends Declaration {
  id: Identifier;
  params: [] = [];
  body: BlockStatement = new EmptyBlockStatement();
  returnType: Type = Types.any;

  constructor(
    name: string,
    args: {
      returnType?: Type;
      body?: BlockStatement;
    }
  ) {
    super(_DECLARATION_FUNCTION);
    // validate function name
    assert(/^[$A-Z_][0-9A-Z_$]*$/i.test(name), "invalid function name");

    // set return type. default value is provided.
    if (args.returnType) {
      this.returnType = args.returnType;
    }
  }
}

const test = new FunctionDeclraration("test", {});
