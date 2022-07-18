import {
  ColiBuilder,
  ColiObject,
  FunctionDeclaration,
  StringLiteral,
  TemplateLiteral,
  _abstract,
} from "@coli.codes/core";
import {
  JSXChildLike,
  JSXElement,
  JSXExpression,
  JSXIdentifier,
  JSXElementLike,
  JSXClosingElement,
  JSXSelfClosingElement,
  JSXOpeningElement,
  JSXAttributes,
  JSXText,
  JSXIdentifierAcceptedInputType,
} from "@coli.codes/jsx-core";
import { ColiObjectLike } from "../dynamic-builder-handler";

export class JSX extends ColiBuilder<JSXElementLike> {
  children: Array<HandyJSXChildLike>;
  attributes: JSXAttributes;

  constructor(
    readonly identifer: _HandyJsxIdentifier,
    params?: {
      attributes?: JSXAttributes;
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
      attributes?: JSXAttributes;
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
      attributes?: JSXAttributes;
      children?: Array<HandyJSXChildLike>;
    };
  }): JSX {
    return new JSX(p.identifier ?? this.identifer, {
      attributes: p.params?.attributes ?? this.attributes,
      children: p.params?.children ?? this.children,
    });
  }

  static text(
    text: string,
    mode?: "literal" | "plain" | "exp" | "template-literal"
  ): _abstract.ColiObject {
    switch (mode) {
      case "literal":
        return new StringLiteral(text);
      case "plain":
        return new JSXText(text);
      case "exp":
        return JSX.exp(new StringLiteral(text));
      case "template-literal":
        const t = new TemplateLiteral(text);
        return JSX.exp(t);

      case null:
      case undefined:
      default:
        return new JSXText(text);
    }
  }

  static number(n: number): JSXExpression {
    return new JSXExpression(n as any);
  }

  static exp(expression?: _abstract.ColiObject): JSXExpression {
    return new JSXExpression(expression);
  }

  // region native tags
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
  static html(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("html")(any);
  }
  static head(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("head")(any);
  }
  static style(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("style")(any);
  }
  static body(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("body")(any);
  }
  static h1(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("h1")(any);
  }
  static h2(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("h2")(any);
  }
  static h3(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("h3")(any);
  }
  static h4(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("h4")(any);
  }
  static h5(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("h5")(any);
  }
  static h6(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("h6")(any);
  }
  static p(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("p")(any);
  }
  static div(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("div")(any);
  }
  static span(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("span")(any);
  }
  static a(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("a")(any);
  }
  static li(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("li")(any);
  }
  static ol(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("ol")(any);
  }
  static ul(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("ul")(any);
  }
  static i(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("i")(any);
  }
  static iframe(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("iframe")(any);
  }
  static button(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("button")(any);
  }
  static form(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("form")(any);
  }
  static input(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("input")(any);
  }
  static select(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("select")(any);
  }
  static image(any?: NativeConstructor): JSX {
    return _native_tag_maker_func("image")(any);
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
          attributes: this.attributes,
        }),
        closingElement: new JSXClosingElement(_id),
        children: this.children.map((i) => handyJSXChildLikeToJSXChildLike(i)),
      });
    }

    // if (options?.selfClosing) {
    return new JSXSelfClosingElement(_id, {
      attributes: this.attributes,
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

function _native_tag_maker_func(tag: string): (p?: NativeConstructor) => JSX {
  return (p: NativeConstructor) => {
    if (p instanceof ColiObject || p instanceof JSX) {
      return new JSX(tag, {
        children: [p as any],
      });
    } else if ("child" in p || "children" in p) {
      let _children: HandyJSXChildLike[];
      if (p) {
        if ("child" in p) {
          _children = [p.child];
        } else if ("children" in p) {
          _children = p.children;
        }
      }

      return new JSX(tag, {
        attributes: (
          p as NativeMultiChildConstructor | NativeSingleChildConstructor
        )?.attributes,
        children: _children,
      });
    }
  };
}

type NativeMultiChildConstructor = {
  children?: Array<HandyJSXChildLike>;
  attributes?: JSXAttributes;
};

type NativeSingleChildConstructor = {
  child: HandyJSXChildLike;
  attributes?: JSXAttributes;
};

type NativeConstructor =
  | NativeSingleChildConstructor
  | NativeMultiChildConstructor
  | HandyJSXChildLike;

type HandyJSXChildLike = ColiObjectLike<JSXChildLike>; //

function handyJSXChildLikeToJSXChildLike(
  like: HandyJSXChildLike
): JSXChildLike {
  if (like instanceof ColiBuilder) {
    return like.make();
  }
  return like as JSXChildLike;
}
