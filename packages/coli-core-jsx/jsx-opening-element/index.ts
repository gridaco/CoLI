import { _ELEMENT_JSX_OPENING } from "@coli.codes/core/_internal/node-name";
import { JSXAtrributes } from "../jsx-attributes";
import { JSXIdentifier } from "../jsx-identifier";
import { JsxBaseElement } from "../elements/element.base";

export class JSXOpeningElement extends JsxBaseElement {
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
