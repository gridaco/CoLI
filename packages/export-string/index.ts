import { ColiInterpretable, ColiObject } from "coli/lib/_abstract";
import * as COLI from "coli/lib/_internal/node-name";
import * as CORE from "./core";
import parserTypeScript from "prettier/parser-typescript";
import prettier from "prettier/standalone";

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
}

interface StringfyOptions {
  language: StringfyLanguage;
  arrayDivison?: string;
  formatter?: ColiFormatterConfig;
}

type useStrinfyFunction = (
  c: ColiObject | any,
  l: StringfyOptions["language"],
  d?: number
) => string;

export function stringfy(
  coli: ColiInterpretable,
  stringfyOptions: StringfyOptions,
  depth?: number
): string {
  // if depth not specified, set it to root - 0
  depth = depth ?? 0;
  const { language, arrayDivison = "" } = stringfyOptions;

  let final: string;
  if (Array.isArray(coli)) {
    const stringfyCode = coli
      .map((c) => stringfy(c, { language }, depth + 1))
      .join(arrayDivison);
    final = stringfyCode;
  }

  if (coli instanceof ColiObject) {
    final = createSourceCode(coli, language, depth + 1);
  }

  if (depth == 0) {
    if (stringfyOptions.formatter) {
      final = format(final, stringfyOptions.formatter);
    }
  }

  return final;
}

function format(source: string, opt: ColiFormatterConfig): string {
  return prettier.format(source, {
    parser: "typescript",
    plugins: [parserTypeScript],
  });
}

/*@internal*/
export function createSourceCode(
  coli: ColiObject | any,
  stringfyLanguage: StringfyLanguage,
  depth: number
) {
  const { __type: nodeName } = coli;
  let useStringfyFunction: useStrinfyFunction = null;

  switch (nodeName) {
    /** Declarations */
    case COLI._DECLARATION_FUNCTION:
      useStringfyFunction = CORE.coliFunctionStringfy;
      break;
    case COLI._DECLARATION_IMPORT:
      useStringfyFunction = CORE.coliImportStringfy;
      break;
    case COLI._DECLARATION_VARIABLE:
    /** Statements */
    case COLI._STATEMENT_VARIABLE:
      useStringfyFunction = CORE.coliVariableStringfy;
      break;
    case COLI._STATEMENT_BLOCK:
      useStringfyFunction = CORE.coliBlockStringfy;
      break;
    case COLI._STATEMENT_RETURN:
      useStringfyFunction = CORE.coliReturnStringfy;
      break;
    /** Expressions */
    case COLI._EXPRESSION_COMMENT:
      useStringfyFunction = CORE.coliCommentStringfy;
      break;
    case COLI._EXPRESSION_TAGGED_TEMPLATE:
      useStringfyFunction = CORE.coliTaggedTemplateStringfy;
      break;
    case COLI._EXPRESSION_PROPERTY_ACCESS:
      useStringfyFunction = CORE.coliPropertyAccessStringfy;
      break;
    case COLI._EXPRESSION_JSX:
      useStringfyFunction = CORE.coliJSXExpressionStringfy;
      break;
    /** Nodes */
    case COLI._ELEMENT_JSX:
      useStringfyFunction = CORE.coliJSXElementStringfy;
      break;
    case COLI._JSX_ATTRIBUTE:
      useStringfyFunction = CORE.coliJSXAtrributeStringfy;
      break;
    case COLI._NODE_IDENTIFIER:
      useStringfyFunction = CORE.coliIdentifierStringfy;
      break;
    case COLI._NODE_LITERAL:
      useStringfyFunction = CORE.coliLiteralStringfy;
      break;
    /** JSX */
    case COLI._ELEMENT_JSX_CLOSING:
      useStringfyFunction = CORE.coliJSXClosingElementStringfy;
      break;
    case COLI._ELEMENT_JSX_OPENING:
      useStringfyFunction = CORE.coliJSXOpeningElementStringfy;
      break;
    case COLI._ELEMENT_JSX_SELF_CLOSING:
      useStringfyFunction = CORE.coliJSXSelfClosingElementStringfy;
      break;
    case COLI._EXPRESSION_JSX:
      useStringfyFunction = CORE.coliJSXExpressionStringfy;
    /** Specifiers */
    case COLI._SPECIFIER_IMPORT:
      useStringfyFunction = CORE.coliSpecifierImportStringfy;
      break;
    case COLI._SPECIFIER_DEFAULT_IMPORT:
      useStringfyFunction = CORE.coliDefaultImportStringfy;
      break;
  }

  if (useStringfyFunction) {
    try {
      return useStringfyFunction(coli, stringfyLanguage, depth);
    } catch (_) {
      throw new Error(
        `givven object cannot be stringfied. :: ${JSON.stringify(coli)}`
      );
    }
  }

  /** @TEST */
  return JSON.stringify(coli);
  // throw new NoTokenInterpreterFoundError(nodeName, coli);
}
