import { JSXIdentifier } from "../jsx-identifier";
import { JsxBaseElement } from "../elements/element.base";
import { _ELEMENT_JSX_CLOSING } from "@coli.codes/core/_internal/node-name";

export class JSXClosingElement extends JsxBaseElement {
  constructor(readonly name: JSXIdentifier) {
    super(_ELEMENT_JSX_CLOSING);
  }
}
