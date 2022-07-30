import { ColiObject, _internal } from "@coli.codes/core";
import { JSXIdentifier } from "../jsx-identifier";

/**
 * e.g. new JSXAtrribute("name", {fisrt: "GY", last: "K"})
 * >> name={{fisrt: "GY", last: "K"}}
 */
export class JSXAttribute extends ColiObject {
  name: JSXIdentifier;
  initializer?: ColiObject;
  constructor(name: string, initializer?: ColiObject) {
    super(_internal._JSX_ATTRIBUTE);
    this.name = new JSXIdentifier(name);
    this.initializer = initializer;
  }
}
