import { _abstract, _internal } from "coli";
import { SyntaxKind } from "@coli.codes/core/_internal";
import * as CORE from "./core";

/*@internal*/
export type StringfyLanguage =
  | "typescript"
  | "tsx"
  | "javascript"
  | "jsx"
  | "html"
  | "python"
  | "dart";

interface ColiFormatterConfig {
  use: "pritter";
  parser: "typescript";

  /**
   * configures weather if throws error that occured while formatting.
   * does not throw error by default. returns a unformatted string instead
   */
  throw?: boolean;
}

interface StringfyOptions {
  language: StringfyLanguage;
  joinWith?: string;
  formatter?: Formatter;
  formattingOptions?: ColiFormatterConfig;
}

type useStrinfyFunction = (
  c: _abstract.ColiObject | any,
  l: StringfyOptions["language"],
  d?: number
) => string;

export function stringfy(
  coli: _abstract.ColiInterpretable,
  stringfyOptions: StringfyOptions,
  depth?: number
): string {
  if (coli === undefined) {
    return "";
  }

  // if depth not specified, set it to root - 0
  depth = depth ?? 0;
  const { language, joinWith = "" } = stringfyOptions;

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
    if (stringfyOptions.formatter) {
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

type Formatter = (source: string) => string;
export function format(
  source: string,
  formatter: Formatter,
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

function _get_dedicated_strfier(colitype): useStrinfyFunction {
  switch (colitype) {
    /** Declarations */
    case _internal._DECLARATION_FUNCTION:
      return CORE.coliFunctionStringfy;

    case _internal._DECLARATION_IMPORT:
      return CORE.coliImportStringfy;
    case _internal._DECLARATION_VARIABLE:
      return CORE.coliVariableStringfy;
    case _internal._DECLARATION_TYPE_ALIAS:
      // TODO:
      break;
    /** Statements */
    case _internal._STATEMENT_VARIABLE:
      // TODO:
      break;
    case _internal._STATEMENT_BLOCK:
      return CORE.coliBlockStringfy;
    case _internal._STATEMENT_RETURN:
      return CORE.coliReturnStringfy;
    /** Expressions */
    case _internal._EXPRESSION_COMMENT:
      return CORE.coliCommentStringfy;
    case _internal._EXPRESSION_TAGGED_TEMPLATE:
      return CORE.coliTaggedTemplateStringfy;
    case _internal._EXPRESSION_PROPERTY_ACCESS:
      return CORE.coliPropertyAccessStringfy;
    case _internal._EXPRESSION_JSX:
      return CORE.coliJSXExpressionStringfy;
    /** Nodes */
    case _internal._NODE_IDENTIFIER:
      return CORE.coliIdentifierStringfy;
    /** LITERALS */
    case _internal._LITERAL_TEMPLATE:
    case _internal._LITERAL_STRING:
    case _internal._LITERAL_NUMERIC:
    case _internal._LITERAL_BIGINT:
      return CORE.coliLiteralStringfy;

    /** JSX */
    case _internal._ELEMENT_JSX:
      return CORE.coliJSXElementStringfy;
    case _internal._JSX_ATTRIBUTE:
      return CORE.coliJSXAtrributeStringfy;
    case _internal._ELEMENT_JSX_CLOSING:
      return CORE.coliJSXClosingElementStringfy;
    case _internal._ELEMENT_JSX_OPENING:
      return CORE.coliJSXOpeningElementStringfy;
    case _internal._ELEMENT_JSX_SELF_CLOSING:
      return CORE.coliJSXSelfClosingElementStringfy;
    case _internal._EXPRESSION_JSX:
      return CORE.coliJSXExpressionStringfy;
    case _internal._JSX_TEXT:
      return CORE.coliJSXTextStringfy;
    /** Specifiers */
    case _internal._SPECIFIER_IMPORT:
      return CORE.coliSpecifierImportStringfy;
    case _internal._SPECIFIER_DEFAULT_IMPORT:
      return CORE.coliDefaultImportStringfy;
    case _internal._ASSIGNMENT_EXPORT:
      return CORE.coliExportAssignmentStringfy;
    case _internal._DECLARATION_INTERFACE:
      return CORE._strfy_interface_declaration;
    case _internal._SIGNATURE_PROPERTY:
      return CORE._strfy_property_signature;
    case _internal._EXPRESSION_LITERAL_OBJECT:
      return CORE._strfy_object_literal_expression;
    case _internal._ASSIGNMENT_PROPERTY:
      return CORE._strfy_property_assignment;
    case _internal._TYPE_REFERENCE:
      return CORE._strfy_type_reference;
    case _internal._TYPE_LITERAL:
      return CORE._strfy_literal_type;
    case _internal._TYPE_UNION:
      return CORE._strfy_union_type;
    // region keywords
    case SyntaxKind.BooleanKeyword:
      return CORE._strfy_boolean_keyword;
    case SyntaxKind.NumberKeyword:
      return CORE._strfy_number_keyword;
    case SyntaxKind.StringKeyword:
      return CORE._strfy_string_keyword;
    case SyntaxKind.TrueKeyword:
      return CORE._strfy_string_keyword;
    case SyntaxKind.FalseKeyword:
      return CORE._strfy_string_keyword;
    // endregion keywords
  }
}

/*@internal*/
function createSourceCode(
  coli: _abstract.ColiObject | any,
  stringfyLanguage: StringfyLanguage,
  depth: number
) {
  const { __type: colitype } = coli;

  const useStringfyFunction = _get_dedicated_strfier(colitype);
  if (useStringfyFunction) {
    try {
      return useStringfyFunction(coli, stringfyLanguage, depth);
    } catch (_) {
      const message = `givven object cannot be stringfied. with ${
        useStringfyFunction.name
      }:: ${JSON.stringify(coli)}`;
      console.error(message, _);
      return "error";
      throw new Error(message);
    }
  }

  /** @TEST */
  return JSON.stringify(coli);
  // throw new NoTokenInterpreterFoundError(nodeName, coli);
}
