import { ColiBuilder, FunctionDeclaration, _abstract } from "@coli.codes/core";
import {
  JSXChildLike,
  JSXElement,
  JSXExpression,
  JSXIdentifier,
  JSXElementLike,
  JSXClosingElement,
  JSXSelfClosingElement,
  JSXOpeningElement,
  JSXAtrributes,
  JSXText,
  JSXIdentifierAcceptedInputType,
} from "@coli.codes/jsx-core";
import { ColiObjectLike } from "../dynamic-builder-handler";

export class JSX extends ColiBuilder<JSXElementLike> {
  children: Array<HandyJSXChildLike>;
  attributes: JSXAtrributes;

  constructor(
    readonly identifer: _HandyJsxIdentifier,
    params?: {
      attributes?: JSXAtrributes;
      children?: Array<HandyJSXChildLike>;
    }
  ) {
    super();

    this.children = params?.children;
    this.attributes = params?.attributes;
  }

  static tag(
    identifer: _HandyJsxIdentifier,
    params?: {
      attributes?: JSXAtrributes;
      selfClosing?: boolean;
      children?: Array<HandyJSXChildLike>;
    }
  ) {
    return new JSX(identifer, {
      attributes: params?.attributes,
      children: params?.children,
    });
  }

  copyWith(p: {
    identifier?: _HandyJsxIdentifier;
    params?: {
      attributes?: JSXAtrributes;
      children?: Array<HandyJSXChildLike>;
    };
  }): JSX {
    return new JSX(p.identifier ?? this.identifer, {
      attributes: p.params?.attributes ?? this.attributes,
      children: p.params?.children ?? this.children,
    });
  }

  static text(text: string): JSXText {
    return new JSXText(text);
  }

  static exp(expression: _abstract.ColiObject): JSXExpression {
    return new JSXExpression(expression);
  }

  // region native tags
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
  static h1(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("h1")(any);
  }
  static h2(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("h2")(any);
  }
  static h3(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("h3")(any);
  }
  static h4(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("h4")(any);
  }
  static h5(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("h5")(any);
  }
  static h6(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("h6")(any);
  }
  static p(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("p")(any);
  }
  static div(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("div")(any);
  }
  static span(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("span")(any);
  }
  static a(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("a")(any);
  }
  static li(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("li")(any);
  }
  static ol(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("ol")(any);
  }
  static ul(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("ul")(any);
  }
  static i(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("i")(any);
  }
  static iframe(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("iframe")(any);
  }
  static button(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("button")(any);
  }
  static form(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("form")(any);
  }
  static input(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("input")(any);
  }
  static select(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("select")(any);
  }
  static image(any?: NativeConstructor): JSX {
    return makeNativeTagMaker("image")(any);
  }
  // endregion native tags

  static fromFunction<F extends FunctionDeclaration>(_function: F, args?: {}) {}

  static fromClass<C>() {}

  static fragment() {}

  __finalize() {
    const _id = _handyJsxIdentifierToJSXIdentifier(this.identifer);
    if (this.children?.length > 0) {
      return new JSXElement({
        openingElement: new JSXOpeningElement(_id, {
          atrributes: this.attributes,
        }),
        closingElement: new JSXClosingElement(_id),
        children: this.children.map((i) => handyJSXChildLikeToJSXChildLike(i)),
      });
    }

    // if (options?.selfClosing) {
    return new JSXSelfClosingElement(_id, {
      atrributes: this.attributes,
    });
    // }
  }

  static identifier(name: JSXIdentifierAcceptedInputType): JSXIdentifier {
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

function makeNativeTagMaker(tag: string): (p?: NativeConstructor) => JSX {
  return (p: NativeConstructor) => {
    let altChildren: HandyJSXChildLike[];
    if (p) {
      if ("child" in p) {
        altChildren = [p.child];
      } else if ("children" in p) {
        altChildren = p.children;
      }
    }

    return new JSX(tag, {
      attributes: p?.attributes,
      children: altChildren,
    });
  };
}

type NativeMultiChildConstructor = {
  children?: Array<HandyJSXChildLike>;
  attributes?: JSXAtrributes;
};

type NativeSingleChildConstructor = {
  child: HandyJSXChildLike;
  attributes?: JSXAtrributes;
};

type NativeConstructor =
  | NativeSingleChildConstructor
  | NativeMultiChildConstructor;

type HandyJSXChildLike = ColiObjectLike<JSXChildLike>; //

function handyJSXChildLikeToJSXChildLike(
  like: HandyJSXChildLike
): JSXChildLike {
  if (like instanceof JSX) {
    return like.__finalize();
  }
  return like as JSXChildLike;
}
