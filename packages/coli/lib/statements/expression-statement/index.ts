import { _STATEMENT_EXPRESSION } from "../../_internal/constants/statements-name";
import { Statement } from "../statement.base";

export class ExpressionStatement extends Statement {
  constructor() {
    super(_STATEMENT_EXPRESSION);
  }
}
