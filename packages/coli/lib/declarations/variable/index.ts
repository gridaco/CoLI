import { Type, Types } from "../../builders/type";
import { _DECLARATION_VARIABLE } from "../../_internal/constants/declarations-name";
import { Declaration } from "../declaration.base";

type JSScope = "const" | "let" | "var";

type VariableScope = JSScope | string;

export class VariableDeclaration extends Declaration {
  scope: VariableScope;
  variableType: Type = Types.any;
  name: string;
  value?: any;

  constructor() {
    super(_DECLARATION_VARIABLE);
  }
}

// const a : any = ""

// const, let, var ... -> scope
// a, test, functionName -> name
// any, String, int -> type
// "str", 1, {} -> value
