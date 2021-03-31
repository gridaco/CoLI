import { ColiBuilder, ColiHierarchyBuilder } from "../../builder/builder";
import { FunctionDeclaration } from "../../declarations/function";
import { JSXElement, JSXIdentifier } from "../../jsx";
import { JSXClosingElement } from "../../jsx/jsx-closing-element";
import { JSXSelfClosingElement } from "../../jsx/jsx-self-closing-element";
import { JSXOpeningElement } from "../../jsx/jsx-opening-element";
import { JSXAtrributes } from "../../jsx/jsx-attributes";

export class JSX extends ColiHierarchyBuilder {
  static anonymous(
    identifer: _HandyJsxIdentifier,
    options?: {
      attributes?: JSXAtrributes;
      selfClosing?: boolean;
    }
  ) {
    const _id = _handyJsxIdentifierToJSXIdentifier(identifer);

    if (options?.selfClosing) {
      return new JSXSelfClosingElement(_id, {
        atrributes: options?.attributes,
      });
    }
    return new JSXElement({
      openingElement: new JSXOpeningElement(_id, {
        atrributes: options?.attributes,
      }),
      closingElement: new JSXClosingElement(_id),
    });
  }

  static fromFunction<F extends FunctionDeclaration>(_function: F, args?: {}) {}

  static fromClass<C>() {}

  static fragment() {}

  __finalize() {
    throw new Error("Method not implemented.");
  }

  static identifier(name: string): JSXIdentifier {
    return new JSXIdentifier(name);
  }
}

type _HandyJsxIdentifier = string | JSXIdentifier;
function _handyJsxIdentifierToJSXIdentifier(
  identifier: _HandyJsxIdentifier
): JSXIdentifier {
  if (typeof identifier === "string") {
    return new JSXIdentifier(identifier);
  } else if (identifier instanceof JSXIdentifier) {
    return identifier;
  } else {
    throw `${JSON.stringify(
      identifier
    )} cannot be accepted as HandyJsxIdentifier`;
  }
}
