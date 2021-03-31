import { Type, Types } from "../../builders/type";
import { _STATEMENT_VARIABLE } from "../../_internal/node-name/statements-name";
import { Statement } from "../statement.base";

type EsVarKind = "const" | "let" | "var";

export type VariableKind = EsVarKind;

export class VariableStatement extends Statement {
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
    super(_STATEMENT_VARIABLE);
    this.name = name;
    if (args) {
      args.value && (this.value = args.value);
      args.variableType && (this.variableType = args.variableType);
      args.kind && (this.kind = args.kind);
    }
  }
}
