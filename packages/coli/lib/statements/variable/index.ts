import { Type, Types } from "../../builders/type";
import { VariableDeclaration } from "../../declarations/variable";
import { VariableKind } from "../../_internal/kinds/variable-kind";
import { _STATEMENT_VARIABLE } from "../../_internal/node-name/statements-name";
import { Statement } from "../statement.base";

/**
 * Variable statement is set of Variable declarations. for general simple usage, you may use VariableDeclaration instead.
 */
export class VariableStatement extends Statement {
  readonly kind: VariableKind = "let";
  readonly type: Type = Types.any;
  readonly declarations: ReadonlyArray<VariableDeclaration> = [];

  constructor(args: {
    kind: VariableKind;
    type?: Type;
    declarations: Array<VariableDeclaration>;
  }) {
    super(_STATEMENT_VARIABLE);
    args.type && (this.type = args.type);
    args.kind && (this.kind = args.kind);
    args.declarations && (this.declarations = args.declarations);
  }
}
