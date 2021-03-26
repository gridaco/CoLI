import { BlockStatement } from "../../statements";

export class Block extends BlockStatement {
  constructor(...body: any[]) {
    super(body);
  }

  add(body: any): this {
    this.body.push(body);
    return this;
  }
}
