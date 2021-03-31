import { Type, Types } from "../../builders/type";
import { _DECLARATION_VARIABLE } from "../../_internal/constants/declarations-name";
import { Declaration } from "../declaration.base";

type EsVarKind = "const" | "let" | "var";

export type VariableKind = EsVarKind;

export class VariableDeclaration extends Declaration {
  kind: VariableKind = "let";
  variableType: Type = Types.any;
  name: string;
  value?: any;

  constructor(
    name: string,
    args?: {
      kind: VariableKind;
      variableType?: Type;
      value?: any;
    }
  ) {
    super(_DECLARATION_VARIABLE);
    this.name = name;
    if (args) {
      args.value && (this.value = args.value);
      args.variableType && (this.variableType = args.variableType);
      args.kind && (this.kind = args.kind);
    }
  }
}
