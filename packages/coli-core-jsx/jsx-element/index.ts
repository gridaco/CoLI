import { JsxBaseElement } from "../elements/element.base";
import { _ELEMENT_JSX } from "@coli.codes/core/_internal/node-name/elements-name";
import { JSXClosingElement } from "../jsx-closing-element";
import { JSXExpression } from "../jsx-expression";
import { JSXIdentifier } from "../jsx-identifier";
import { JSXOpeningElement } from "../jsx-opening-element";
import { JSXSelfClosingElement } from "../jsx-self-closing-element";
import { JSXText } from "../jsx-text";

/**
 * Types that can be accapted as jsx child
 */
export type JSXChildLike =
  | JsxBaseElement
  | JSXSelfClosingElement
  | JSXText
  | JSXExpression;

/**
 * Types that can be a root Jsx Syntax
 */
export type JSXElementLike = JsxBaseElement | JSXSelfClosingElement;

export class JSXElement extends JsxBaseElement {
  openingElement: JSXOpeningElement;
  closingElement: JSXClosingElement;
  children: Array<JSXChildLike> | JSXChildLike;

  /**
   * tag for developers. (assigning this for better readability) (for console log)
   */
  private readonly __tag: string;

  constructor(params: {
    openingElement: JSXOpeningElement;
    closingElement: JSXClosingElement;
    children?: Array<JSXChildLike> | JSXChildLike;
  }) {
    super(_ELEMENT_JSX);
    this.openingElement = params.openingElement;
    this.closingElement = params.closingElement;
    this.__tag = this.openingElement?.name?.name;
    this.children = params.children;
  }

  /**
   * change tag will change the tag, copying the existing attributes, but it destroys existing identifier, so technically this, inside coli, will be treated as a new element.
   * @param newTag
   */
  changeTag(newTag: JSXIdentifier): this {
    const existingAttributes = this.openingElement.attributes;
    this.openingElement = new JSXOpeningElement(newTag, {
      attributes: existingAttributes,
    });

    this.closingElement = new JSXClosingElement(newTag);
    return this;
  }

  /**
   * Like rename, this renames the jsx tag. it won't change the existing identifier's id.
   */
  rename(name: string): this {
    this.openingElement.name.rename(name);
    this.closingElement.name.rename(name);
    return this;
  }
}
