import { Identifier } from "../../ast/identifier";

export class JSXIdentifier extends Identifier {
  constructor(readonly name: string) {
    super(name);
  }
}
