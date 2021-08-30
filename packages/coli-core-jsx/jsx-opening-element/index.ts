import { _ELEMENT_JSX_OPENING } from "@coli.codes/core/_internal/node-name";
import { JSXAtrributes } from "../jsx-attributes";
import { JSXIdentifier } from "../jsx-identifier";
import { Element } from "@coli.codes/core/elements/element.base";

export class JSXOpeningElement extends Element {
  name: JSXIdentifier;
  readonly atrributes: JSXAtrributes = [];

  constructor(
    name: JSXIdentifier,
    params?: {
      atrributes: JSXAtrributes;
    }
  ) {
    super(_ELEMENT_JSX_OPENING);
    this.name = name;
    this.atrributes = params?.atrributes;
  }
}
