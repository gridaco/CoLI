import { JSXIdentifier } from "../jsx-identifier";
import { JsxBaseElement } from "../elements/element.base";
import { _internal } from "@coli.codes/core";

export class JSXClosingElement extends JsxBaseElement {
  constructor(readonly name: JSXIdentifier) {
    super(_internal._ELEMENT_JSX_CLOSING);
  }
}
