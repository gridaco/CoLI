import {
  ColiObject,
  _internal,
  _abstract,
  Snippet,
  ColiObjectType,
} from "coli";
import { SyntaxKind } from "@coli.codes/core/_internal";
import * as strfy from "./core";
import {
  FormattingToken,
  FormatterTokenLike,
  format as _astfmt,
} from "@coli.codes/ast-formatter";
import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { COLI_WILDCARD_KEY } from "@coli.codes/core/_wildcard";

/*@internal*/
export type StringfyLanguage =
  | "typescript"
  | "tsx"
  | "javascript"
  | "jsx"
  | "html"
  | "python"
  | "dart";

export type FormatterIndent =
  /**
   * use \t tab - "\t"
   */
  | "\t"
  /**
   * use 2 spaces - "  "
   * @default
   */
  | 2
  /**
   * use 4 spaces - "    "
   */
  | 4;

interface ColiFormatterConfig {
  use: "pritter";
  parser: "typescript";
  indent?: FormatterIndent;

  /**
   * configures weather if throws error that occured while formatting.
   * does not throw error by default. returns a unformatted string instead
   */
  throw?: boolean;
}

interface StringfyOptions {
  language: StringfyLanguage;
  joinWith?: string;
  formatter?: StringFormatter;
  formattingOptions?: ColiFormatterConfig;
}

type Stringfyer = (
  c: ColiObject | any,
  l: StringfyOptions["language"],
  d?: number
) => string;

export function stringfy(
  coli: _abstract.ColiInterpretable,
  stringfyOptions?: StringfyOptions,
  depth?: number
): string {
  if (coli === undefined) {
    return "";
  }

  // if depth not specified, set it to root - 0
  depth = depth ?? 0;
  const { language, joinWith = "" } = stringfyOptions ?? {
    language: "typescript",
    joinWith: "",
  };

  let final: string;
  if (Array.isArray(coli)) {
    const stringfyCode = coli
      .map((c) => stringfy(c, { language }, depth + 1))
      .join(joinWith);
    final = stringfyCode;
    return final;
  }

  if (coli instanceof _abstract.ColiObject) {
    final = createSourceCode(coli, language, depth + 1);
  }

  // finally finalize the "final" string with formatter if requested.
  if (depth == 0) {
    if (stringfyOptions?.formatter) {
      final = format(
        final,
        stringfyOptions.formatter,
        stringfyOptions.formattingOptions
      );
    }
  }

  /**
   * return guard. if undefined, return empty string otherwise, the code will be built like `let this_variable_actually_has_no_type_set: undefined;`
   */
  if (final === undefined) {
    return "";
  }

  return final;
}

export function stringfy_tokenformatted(
  tokens: FormatterTokenLike | any
): string {
  if (Array.isArray(tokens)) {
    return tokens.map((t) => stringfy_tokenformatted(t)).join("");
  }

  switch (typeof tokens) {
    case "string":
      return tokens;
    case "number":
      return tokens.toString();
  }
  if (tokens instanceof FormattingToken) {
    const _maybe_static_token =
      KeywordAndTokenStatic[tokens.kind as KeywordAndTokenStatic];
    if (_maybe_static_token) {
      return _maybe_static_token;
    } else {
      if (typeof tokens.kind == "string") {
        switch (tokens.kind) {
          case "\t":
            return "\t"; // customize tab
        }
        return tokens.kind;
      }
    }
  }
  if (tokens instanceof ColiObject) {
    return stringfy(tokens, { language: "typescript" });
  }
  return "";
}

export type StringFormatter = (source: string) => string;
export function format(
  source: string,
  formatter: StringFormatter,
  opt?: ColiFormatterConfig
): string {
  try {
    return formatter(source);
  } catch (_) {
    if (opt.throw) {
      throw _;
    }
    console.error("the input source code was not able to format", _);
  }
  return source;
}

function _get_dedicated_strfier(colitype: ColiObjectType): Stringfyer {
  switch (colitype) {
    case COLI_WILDCARD_KEY:
      return (c: Snippet, ...args) => c._defaultSnippet;
    /** Declarations */
    case _internal._DECLARATION_FUNCTION:
      return strfy.strfy_function_declaration;
    case _internal._DECLARATION_IMPORT:
      return strfy.strfy_import_declaration;
    case _internal._DECLARATION_VARIABLE:
      return strfy.strfy_variable_declaration;
    case _internal._DECLARATION_TYPE_ALIAS:
      throw new Error("DeclarationTypeAlias not implemented");
      break;
    /** Statements */
    case _internal._STATEMENT_VARIABLE:
      throw new Error("VariableStatement not implemented");
      break;
    case _internal._STATEMENT_EXPRESSION:
      return strfy.strfy_expression_statement;
    case _internal._STATEMENT_BLOCK:
      return strfy.strfy_block;
    case _internal._STATEMENT_RETURN:
      return strfy.strfy_return_statement;
    /** Expressions */
    case _internal._EXPRESSION_TAGGED_TEMPLATE:
      return strfy.strfy_tagged_template_expression;
    case _internal._EXPRESSION_PROPERTY_ACCESS:
      return strfy.strfy_property_access_expression;
    case _internal._EXPRESSION_JSX:
      return strfy.strfy_jsx_expression;
    case _internal._EXPRESSION_CALL:
      return strfy.strfy_call_expression;
    /** Nodes */
    case _internal._NODE_IDENTIFIER:
      return strfy.strfy_identifier;
    /** LITERALS */
    case _internal._LITERAL_TEMPLATE:
    case _internal._LITERAL_STRING:
    case _internal._LITERAL_NUMERIC:
    case _internal._LITERAL_BIGINT:
      return strfy.strfy_literal;

    /** JSX */
    case _internal._ELEMENT_JSX:
      return strfy.strfy_jsx_element;
    case _internal._JSX_ATTRIBUTE:
      return strfy.strfy_jsx_attribute;
    case _internal._ELEMENT_JSX_CLOSING:
      return strfy.strfy_jsx_closing_element;
    case _internal._ELEMENT_JSX_OPENING:
      return strfy.strfy_jsx_opening_element;
    case _internal._ELEMENT_JSX_SELF_CLOSING:
      return strfy.strfy_jsx_self_closing_element;
    case _internal._EXPRESSION_JSX:
      return strfy.strfy_jsx_expression;
    case _internal._JSX_TEXT:
      return strfy.strfy_jsx_text;
    /** Specifiers */
    case _internal._SPECIFIER_IMPORT:
      return strfy.strfy_import_specifier;
    case _internal._SPECIFIER_DEFAULT_IMPORT:
      return strfy.strfy_import_default_specifier;
    case _internal._ASSIGNMENT_EXPORT:
      return strfy.strfy_export_assignment;
    case _internal._DECLARATION_INTERFACE:
      return strfy.strfy_interface_declaration;
    case _internal._SIGNATURE_PROPERTY:
      return strfy.strfy_property_signature;
    case _internal._EXPRESSION_LITERAL_OBJECT:
      return strfy.strfy_object_literal_expression;
    case _internal._ASSIGNMENT_PROPERTY:
      return strfy.strfy_property_assignment;
    case _internal._TYPE_REFERENCE:
      return strfy.strfy_type_reference;
    case _internal._TYPE_LITERAL:
      return strfy.strfy_literal_type;
    case _internal._TYPE_UNION:
      return strfy.strfy_union_type;
    case SyntaxKind.SingleLineCommentTrivia:
    case SyntaxKind.MultiLineCommentTrivia:
      return strfy.strfy_comment_expression;

    // region literal keywords
    case SyntaxKind.BooleanKeyword:
    case SyntaxKind.NumberKeyword:
    case SyntaxKind.StringKeyword:
    case SyntaxKind.TrueKeyword:
    case SyntaxKind.FalseKeyword:
    default:
      return () => KeywordAndTokenStatic[colitype] ?? "";
    // endregion keywords
  }
}

/*@internal*/
function createSourceCode(
  coli: ColiObject | any,
  stringfyLanguage: StringfyLanguage,
  depth: number
) {
  const { __type: colitype } = coli;

  // TODO: add leading / trailing comment support

  const useStringfyFunction = _get_dedicated_strfier(colitype);
  if (useStringfyFunction) {
    try {
      return useStringfyFunction(coli, stringfyLanguage, depth);
    } catch (_) {
      const message = `givven object cannot be stringfied. with ${
        useStringfyFunction.name
      }:: ${JSON.stringify(coli)}`;
      console.error({ message, _, d: { useStringfyFunction } });
      return "// error";
      throw new Error(message);
    }
  }

  /** @TEST */
  return JSON.stringify(coli);
  // throw new NoTokenInterpreterFoundError(nodeName, coli);
}
