import { ColiObject } from "../../_abstract";
import { _JSX_ATTRIBUTE } from "../../_internal/node-name/jsx-names";
import { JSXIdentifier } from "../jsx-identifier";

/**
 * e.g. new JSXAtrribute("name", {fisrt: "GY", last: "K"})
 * >> name={{fisrt: "GY", last: "K"}}
 */
export class JSXAtrribute extends ColiObject {
  name: JSXIdentifier;
  value: ColiObject;
  constructor(name: string, value: ColiObject) {
    super(_JSX_ATTRIBUTE);
    this.name = new JSXIdentifier(name);
    this.value = value;
  }
}
