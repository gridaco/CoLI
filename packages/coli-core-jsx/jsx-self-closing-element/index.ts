import { JSXAttributes } from "../jsx-attributes";
import { JSXIdentifier } from "../jsx-identifier";
import { JsxBaseElement } from "../elements/element.base";
import { _internal } from "@coli.codes/core";
export class JSXSelfClosingElement extends JsxBaseElement {
  name: JSXIdentifier;
  readonly attributes: JSXAttributes = [];

  constructor(
    name: JSXIdentifier,
    params?: {
      attributes?: JSXAttributes;
    }
  ) {
    super(_internal._ELEMENT_JSX_SELF_CLOSING);
    this.name = name;
    this.attributes = params?.attributes;
  }
}
