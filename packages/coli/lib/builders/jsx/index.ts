import { ColiBuilder, ColiHierarchyBuilder } from "../../builder/builder";
import { FunctionDeclaration } from "../../declarations/function";
import { JSXElement, JSXExpression, JSXIdentifier } from "../../jsx";
import { JSXClosingElement } from "../../jsx/jsx-closing-element";
import { JSXSelfClosingElement } from "../../jsx/jsx-self-closing-element";
import { JSXOpeningElement } from "../../jsx/jsx-opening-element";
import { JSXAtrributes } from "../../jsx/jsx-attributes";
import { JSXText } from "../../jsx/jsx-text";
import { ColiObject } from "../../_abstract";

type builder = (...any: constructor[]) => builder;
type constructor = any | undefined;

export class JSX extends ColiHierarchyBuilder {
  static tag(
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

  static text(text: string): JSXText {
    return new JSXText(text);
  }

  static exp(expression: ColiObject): JSXExpression {
    return new JSXExpression(expression);
  }

  // region native tags
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
  static h1(any?: constructor): builder {
    return;
  }
  static h2(any?: constructor): builder {
    return;
  }
  static h3(any?: constructor): builder {
    return;
  }
  static h4(any?: constructor): builder {
    return;
  }
  static h5(any?: constructor): builder {
    return;
  }
  static h6(any?: constructor): builder {
    return;
  }
  static p(any?: constructor): builder {
    return;
  }
  static div(any?: constructor): builder {
    return;
  }
  static span(any?: constructor): builder {
    return;
  }
  static a(any?: constructor): builder {
    return;
  }
  static li(any?: constructor): builder {
    return;
  }
  static ol(any?: constructor): builder {
    return;
  }
  static ul(any?: constructor): builder {
    return;
  }
  static i(any?: constructor): builder {
    return;
  }
  static iframe(any?: constructor): builder {
    return;
  }
  static button(any?: constructor): builder {
    return;
  }
  static form(any?: constructor): builder {
    return;
  }
  static input(any?: constructor): builder {
    return;
  }
  static select(any?: constructor): builder {
    return;
  }
  // endregion native tags

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
