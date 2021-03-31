import { _STATEMENT_BLOCK } from "../../_internal/node-name/statements-name";
import { Statement } from "../statement.base";

export class BlockStatement extends Statement {
  readonly body: any[];
  constructor(...body: any[]) {
    super(_STATEMENT_BLOCK);
    this.body = body;
  }
}
