import { Type, Types } from "../../type";
import { VariableDeclaration } from "../../declarations/variable";
import { VariableKind } from "../../_internal/kinds/variable-kind";
import { _STATEMENT_VARIABLE } from "../../_internal/node-name/statements-name";
import { Statement } from "../statement.base";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { TypeLike } from "../../types";

/**
 * @exceptional
 * the default structure of modifiers is in array form.
 * but here, we use object form so we can prevent duplicated modifer on ast token level.
 */
type VariableStatementModifiers = {
  export?: SyntaxKind.ExportKeyword;
  declare?: SyntaxKind.DeclareKeyword;
  default?: SyntaxKind.DefaultKeyword;
};

/**
 * Variable statement is set of Variable declarations. for general simple usage, you may use VariableDeclaration instead.
 */
export class VariableStatement extends Statement {
  readonly kind: VariableKind = SyntaxKind.VarKeyword;
  readonly type: TypeLike = Types.any;
  readonly declarations: ReadonlyArray<VariableDeclaration> = [];
  modifiers?: VariableStatementModifiers = {};

  constructor(args: {
    kind?: VariableKind;
    type?: TypeLike;
    declarations?: Array<VariableDeclaration>;
    modifiers?: VariableStatementModifiers;
  }) {
    super(_STATEMENT_VARIABLE);
    args.type && (this.type = args.type);
    args.kind && (this.kind = args.kind);
    args.declarations && (this.declarations = args.declarations);
    args.modifiers && (this.modifiers = args.modifiers);
  }
}
