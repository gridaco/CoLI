import { Type, Types } from "../../builders/type";
import { _DECLARATION_VARIABLE } from "../../_internal/constants/declarations-name";
import { Declaration } from "../declaration.base";

type ESScope = "const" | "let" | "var";

type VariableScope = ESScope;

export class VariableDeclaration extends Declaration {
  scope: VariableScope = "let";
  variableType: Type = Types.any;
  name: string;
  value?: any;

  constructor(
    name: string,
    args?: {
      scope: VariableScope;
      variableType?: Type;
      value?: any;
    }
  ) {
    super(_DECLARATION_VARIABLE);
    this.name = name;
    if (args) {
      args.value && (this.value = args.value);
      args.variableType && (this.variableType = args.variableType);
      args.scope && (this.scope = args.scope);
    }
  }
}
