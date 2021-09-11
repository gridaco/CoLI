import { JSXAttributes } from "../jsx-attributes";
import { JSXIdentifier } from "../jsx-identifier";
import { JsxBaseElement } from "../elements/element.base";
import { _ELEMENT_JSX_SELF_CLOSING } from "@coli.codes/core/_internal/node-name";
export class JSXSelfClosingElement extends JsxBaseElement {
  name: JSXIdentifier;
  readonly attributes: JSXAttributes = [];

  constructor(
    name: JSXIdentifier,
    params?: {
      attributes?: JSXAttributes;
    }
  ) {
    super(_ELEMENT_JSX_SELF_CLOSING);
    this.name = name;
    this.attributes = params?.attributes;
  }
}
