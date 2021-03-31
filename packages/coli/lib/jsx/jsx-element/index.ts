import { Identifier } from "../../ast";
import { Element } from "../../elements/element.base";
import { _ELEMENT_JSX } from "../../_internal/node-name/elements-name";
import { JSXAtrribute } from "../jsx-attribute";
import { JSXIdentifier } from "../jsx-identifier";
import { JSXText } from "../jsx-text";

type JSXAtrributes = Array<JSXAtrribute>;

export class JSXElement extends Element {
  readonly name: JSXIdentifier;
  readonly atrributes: JSXAtrributes = [];
  constructor(name: string) {
    super(_ELEMENT_JSX);

    this.name = new Identifier(name);
  }

  openingElement: any;
  closingElement: any;
  children: Array<JSXElement | JSXText>;
}
