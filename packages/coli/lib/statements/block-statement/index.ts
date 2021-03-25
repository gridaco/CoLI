import { _STATEMENT_BLOCK } from "../../_internal/constants/statements-name";
import { Statement } from "../statement.base";

export class BlockStatement extends Statement {
  constructor() {
    super(_STATEMENT_BLOCK);
  }
}
