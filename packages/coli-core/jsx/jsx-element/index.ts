import { Element } from "../../elements/element.base";
import { _ELEMENT_JSX } from "../../_internal/node-name/elements-name";
import { JSXClosingElement } from "../jsx-closing-element";
import { JSXExpression } from "../jsx-expression";
import { JSXOpeningElement } from "../jsx-opening-element";
import { JSXSelfClosingElement } from "../jsx-self-closing-element";
import { JSXText } from "../jsx-text";

/**
 * Types that can be accapted as jsx child
 */
export type JSXChildLike =
  | JSXElement
  | JSXSelfClosingElement
  | JSXText
  | JSXExpression;

/**
 * Types that can be a root Jsx Syntax
 */
export type JSXElementLike = JSXElement | JSXSelfClosingElement;

export class JSXElement extends Element {
  openingElement: JSXOpeningElement;
  closingElement: JSXClosingElement;
  children: Array<JSXChildLike> | JSXChildLike;

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
