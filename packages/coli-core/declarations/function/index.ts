import { Identifier } from "../../ast/identifier";
import { Type, Types } from "../../type";
import { BlockStatement } from "../../statements";
import { _DECLARATION_FUNCTION } from "../../_internal/node-name/declarations-name";
import { Declaration } from "../declaration.base";
import assert from "assert";

export class FunctionDeclaration extends Declaration {
  id: Identifier;
  params: Identifier[];
  body: BlockStatement;
  returnType: Type = Types.any;

  constructor(
    name: string,
    args?: {
      params?: Identifier[];
      returnType?: Type;
      body?: BlockStatement;
    }
  ) {
    super(_DECLARATION_FUNCTION);
    // validate function name
    // ref: https://stackoverflow.com/questions/2008279/validate-a-javascript-function-name
    assert(/^[$A-Z_][0-9A-Z_$]*$/i.test(name), "invalid function name");
    this.id = new Identifier(name);
    // set return type. default value is provided.
    if (args?.returnType) {
      this.returnType = args.returnType;
    }
    if (args?.body) {
      this.body = args.body;
    }
    if (args?.params) {
      this.params = args.params;
    }
  }
}
