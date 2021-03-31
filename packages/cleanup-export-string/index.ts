import { ColiInterpretable, ColiObject } from "coli/lib/_abstract";
import { NoTokenInterpreterFoundError } from "./errors";
import * as COLI from "coli/lib/_internal/node-name";
import * as CORE from "./core";
import { CommentExpression } from "coli/lib/expressions/comment";

/*@internal*/
export type StringfyLanguage =
  | "typescript"
  | "tsx"
  | "javascript"
  | "jsx"
  | "html"
  | "python"
  | "dart";

interface StringfyOptions {
  language: StringfyLanguage;
}

type useStrinfyFunction = (
  c: ColiObject,
  l: StringfyOptions["language"]
) => string;

export function stringfy(
  coli: ColiInterpretable,
  stringfyOptions: StringfyOptions
): string {
  const { language } = stringfyOptions;

  if (Array.isArray(coli)) {
    const stringfyCode = coli.map((c) => stringfy(c, { language })).join("\n");
    return stringfyCode;
  }

  if (coli instanceof ColiObject) {
    return createSourceCode(coli, language);
  }
}

/*@internal*/
export function createSourceCode(
  coli: ColiObject,
  stringfyLanguage: StringfyLanguage
) {
  const { __type: nodeName } = coli;
  let useStringfyFunction: useStrinfyFunction = null;

  switch (nodeName) {
    case COLI._DECLARATION_FUNCTION:
      useStringfyFunction = CORE.coliFunctionStringfy;
      break;
    case COLI._EXPRESSION_COMMENT:
      useStringfyFunction = CORE.coliCommentStringfy;
      break;
    case COLI._STATEMENT_VARIABLE:
      useStringfyFunction = CORE.coliVariableStringfy;
      break;
  }

  if (useStringfyFunction) {
    return useStringfyFunction(coli, stringfyLanguage);
  }
  throw new NoTokenInterpreterFoundError(nodeName, coli);
}
