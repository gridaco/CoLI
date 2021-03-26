import { stringfy } from "../../../../export-string";
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
      variableType?: Type;
      value?: any;
    }
  ) {
    super(_DECLARATION_VARIABLE);
    if (args.value) {
      this.value = args.value;
    }
    if (args.variableType) {
      this.variableType = args.variableType;
    }
    this.scope = args.scope;
    this.name = name;
  }
}
