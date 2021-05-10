import { _abstract, BlockStatement } from "@coli.codes/core";

export class Block extends BlockStatement {
  constructor(...body: _abstract.ColiObject[]) {
    super(...body);
  }

  add(body: _abstract.ColiObject): this {
    this.body.push(body);
    return this;
  }
}
