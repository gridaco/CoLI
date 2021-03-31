import { ColiObject } from "../../_abstract";
import { _STATEMENT_EXPRESSION } from "../../_internal/node-name/statements-name";
import { Statement } from "../statement.base";

export class ExpressionStatement extends Statement {
  constructor(readonly expression: ColiObject) {
    super(_STATEMENT_EXPRESSION);
  }
}
