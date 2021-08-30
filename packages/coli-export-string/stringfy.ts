import { _abstract, _internal } from "coli";
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
  arrayDivison?: string;
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
  const { language, arrayDivison = "" } = stringfyOptions;

  let final: string;
  if (Array.isArray(coli)) {
    const stringfyCode = coli
      .map((c) => stringfy(c, { language }, depth + 1))
      .join(arrayDivison);
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

/*@internal*/
export function createSourceCode(
  coli: _abstract.ColiObject | any,
  stringfyLanguage: StringfyLanguage,
  depth: number
) {
  const { __type: colitype } = coli;

  let useStringfyFunction: useStrinfyFunction = null;

  switch (colitype) {
    /** Declarations */
    case _internal._DECLARATION_FUNCTION:
      useStringfyFunction = CORE.coliFunctionStringfy;
      break;
    case _internal._DECLARATION_IMPORT:
      useStringfyFunction = CORE.coliImportStringfy;
      break;
    case _internal._DECLARATION_VARIABLE:
    /** Statements */
    case _internal._STATEMENT_VARIABLE:
      useStringfyFunction = CORE.coliVariableStringfy;
      break;
    case _internal._STATEMENT_BLOCK:
      useStringfyFunction = CORE.coliBlockStringfy;
      break;
    case _internal._STATEMENT_RETURN:
      useStringfyFunction = CORE.coliReturnStringfy;
      break;
    /** Expressions */
    case _internal._EXPRESSION_COMMENT:
      useStringfyFunction = CORE.coliCommentStringfy;
      break;
    case _internal._EXPRESSION_TAGGED_TEMPLATE:
      useStringfyFunction = CORE.coliTaggedTemplateStringfy;
      break;
    case _internal._EXPRESSION_PROPERTY_ACCESS:
      useStringfyFunction = CORE.coliPropertyAccessStringfy;
      break;
    case _internal._EXPRESSION_JSX:
      useStringfyFunction = CORE.coliJSXExpressionStringfy;
      break;
    /** Nodes */
    case _internal._NODE_IDENTIFIER:
      useStringfyFunction = CORE.coliIdentifierStringfy;
      break;
    case _internal._NODE_LITERAL:
      useStringfyFunction = CORE.coliLiteralStringfy;
      break;
    /** JSX */
    case _internal._ELEMENT_JSX:
      useStringfyFunction = CORE.coliJSXElementStringfy;
      break;
    case _internal._JSX_ATTRIBUTE:
      useStringfyFunction = CORE.coliJSXAtrributeStringfy;
      break;
    case _internal._ELEMENT_JSX_CLOSING:
      useStringfyFunction = CORE.coliJSXClosingElementStringfy;
      break;
    case _internal._ELEMENT_JSX_OPENING:
      useStringfyFunction = CORE.coliJSXOpeningElementStringfy;
      break;
    case _internal._ELEMENT_JSX_SELF_CLOSING:
      useStringfyFunction = CORE.coliJSXSelfClosingElementStringfy;
      break;
    case _internal._EXPRESSION_JSX:
      useStringfyFunction = CORE.coliJSXExpressionStringfy;
      break;
    case _internal._JSX_TEXT:
      useStringfyFunction = CORE.coliJSXTextStringfy;
      break;
    /** Specifiers */
    case _internal._SPECIFIER_IMPORT:
      useStringfyFunction = CORE.coliSpecifierImportStringfy;
      break;
    case _internal._SPECIFIER_DEFAULT_IMPORT:
      useStringfyFunction = CORE.coliDefaultImportStringfy;
      break;
    case _internal._ASSIGNMENT_EXPORT:
      useStringfyFunction = CORE.coliExportAssignmentStringfy;
      break;
    case _internal._DECLARATION_INTERFACE:
      useStringfyFunction = CORE._strfy_interface_declaration;
      break;
    case _internal._SIGNATURE_PROPERTY:
      useStringfyFunction = CORE._strfy_property_signature;
      break;
  }

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
