import { JSXIdentifier } from "../jsx-identifier";
import { Element } from "@coli.codes/core/elements/element.base";
import { _ELEMENT_JSX_CLOSING } from "@coli.codes/core/_internal/node-name";

export class JSXClosingElement extends Element {
  constructor(readonly name: JSXIdentifier) {
    super(_ELEMENT_JSX_CLOSING);
  }
}
