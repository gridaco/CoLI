import { Identifier } from "../../ast/identifier";

export class JSXIdentifier extends Identifier {
  constructor(name: string) {
    super(name);
  }
}
