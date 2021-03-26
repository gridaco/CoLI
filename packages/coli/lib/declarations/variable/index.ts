import { Type, Types } from "../../builders/type";
import { _DECLARATION_VARIABLE } from "../../_internal/constants/declarations-name";
import { Declaration } from "../declaration.base";

type ESScope = "const" | "let" | "var";

type VariableScope = ESScope;

export class VariableDeclaration extends Declaration {
  scope: VariableScope;
  variableType: Type = Types.any;
  name: string;
  value?: any;

  constructor(
    name: string,
    args?: {
      scope: VariableScope;
      type: Type;
      init: any;
    }
  ) {
    super(_DECLARATION_VARIABLE);
    this.name = name;
    this.scope = args.scope;
    this.variableType = args.type;
    // fixme
    this.value = args.init;
  }
}

// const a : any = ""

// const, let, var ... -> scope
// a, test, functionName -> name
// any, String, int -> type
// "str", 1, {} -> value
