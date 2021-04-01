import { BlockStatement } from "../../statements";
import { ColiObject } from "../../_abstract";

export class Block extends BlockStatement {
  constructor(...body: ColiObject[]) {
    super(...body);
  }

  add(body: ColiObject): this {
    this.body.push(body);
    return this;
  }
}
