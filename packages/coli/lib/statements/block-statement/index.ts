import { ColiObject } from "../../_abstract";
import { _STATEMENT_BLOCK } from "../../_internal/node-name/statements-name";
import { Statement } from "../statement.base";

export class BlockStatement extends Statement {
  readonly body: ColiObject[];
  constructor(...body: ColiObject[]) {
    super(_STATEMENT_BLOCK);
    this.body = body;
  }
}
