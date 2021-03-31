import { Element } from "../../elements/element.base";
import { _ELEMENT_JSX } from "../../_internal/node-name/elements-name";
import { JSXClosingElement } from "../jsx-closing-element";
import { JSXOpeningElement } from "../jsx-opening-element";
import { JSXSelfClosingElement } from "../jsx-self-closing-element";
import { JSXText } from "../jsx-text";

type JSXChildLike = JSXElement | JSXSelfClosingElement | JSXText;

export class JSXElement extends Element {
  readonly openingElement: JSXOpeningElement;
  readonly closingElement: JSXClosingElement;
  readonly children: Array<JSXChildLike> | JSXChildLike;

  constructor(params: {
    openingElement: JSXOpeningElement;
    closingElement: JSXClosingElement;
    children?: Array<JSXChildLike> | JSXChildLike;
  }) {
    super(_ELEMENT_JSX);
    this.openingElement = params.openingElement;
    this.closingElement = params.closingElement;
    this.children = params.children;
  }
}
