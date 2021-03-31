import { Identifier } from "../../ast/identifier";
import { ColiObject } from "../../_abstract";
import { JSXIdentifier } from "../jsx-identifier";

/**
 * e.g. new JSXAtrribute("name", {fisrt: "GY", last: "K"})
 * >> name={{fisrt: "GY", last: "K"}}
 */
export class JSXAtrribute {
  name: JSXIdentifier;
  value: ColiObject;
  constructor(name: string, value: any) {
    this.name = new JSXIdentifier(name);
    this.value = value;
  }
}
