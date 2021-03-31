import { Identifier } from "../../ast/identifier";

/**
 * e.g. new JSXAtrribute("name", {fisrt: "GY", last: "K"})
 * >> name={{fisrt: "GY", last: "K"}}
 */
export class JSXAtrribute {
  name: Identifier;
  value: any;
  constructor(name: string, value: any) {
    this.name = new Identifier(name);
    this.value = value;
  }
}
