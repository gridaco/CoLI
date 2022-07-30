import { _internal } from "@coli.codes/core";
import { JSXAttributes } from "../jsx-attributes";
import { JSXIdentifier } from "../jsx-identifier";
import { JsxBaseElement } from "../elements/element.base";

export class JSXOpeningElement extends JsxBaseElement {
  name: JSXIdentifier;
  readonly attributes: JSXAttributes = [];

  constructor(
    name: JSXIdentifier,
    params?: {
      attributes: JSXAttributes;
    }
  ) {
    super(_internal._ELEMENT_JSX_OPENING);
    this.name = name;
    this.attributes = params?.attributes || [];
  }
}
