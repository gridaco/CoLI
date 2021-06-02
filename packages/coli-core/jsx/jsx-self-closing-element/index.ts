import { JSXAtrributes } from "../jsx-attributes";
import { JSXIdentifier } from "../jsx-identifier";
import { Element } from "../../elements/element.base";
import { _ELEMENT_JSX_SELF_CLOSING } from "../../_internal/node-name";
export class JSXSelfClosingElement extends Element {
  name: JSXIdentifier;
  readonly atrributes: JSXAtrributes = [];

  constructor(
    name: JSXIdentifier,
    params?: {
      atrributes?: JSXAtrributes;
    }
  ) {
    super(_ELEMENT_JSX_SELF_CLOSING);
    this.name = name;
    this.atrributes = params?.atrributes;
  }
}
