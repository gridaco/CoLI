import { _STATEMENT_RETURN } from "../../_internal/node-name/statements-name";
import { Statement } from "../statement.base";

export class ReturnStatement extends Statement {
  constructor(
    /**
     * body of the return statement
     */
    readonly argument: any
  ) {
    super(_STATEMENT_RETURN);
  }
}
