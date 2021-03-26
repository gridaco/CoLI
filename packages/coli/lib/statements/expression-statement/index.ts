import { ColiObject } from "../../_abstract";
import { _STATEMENT_EXPRESSION } from "../../_internal/constants/statements-name";
import { Statement } from "../statement.base";

export class ExpressionStatement extends Statement {
  expression: ColiObject;
  constructor() {
    super(_STATEMENT_EXPRESSION);
  }
}
