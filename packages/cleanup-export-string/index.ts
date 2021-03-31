import { ColiInterpretable, ColiObject } from "coli/lib/_abstract";
import { NoTokenInterpreterFoundError } from "./errors";
import * as COLI from "coli/lib/_internal/node-name";
import * as CORE from "./core";

type StringfyLanguage =
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
    return createSourceCode(coli);
  }
}

/*@internal*/
export function createSourceCode(coli: ColiObject) {
  const { __type: nodeName } = coli;

  switch (nodeName) {
    case COLI._DECLARATION_FUNCTION:
      return CORE.coliFunctionStringfy();
    case COLI._EXPRESSION_COMMENT:
      return CORE.coliCommentStringfy();
    case COLI._STATEMENT_VARIABLE:
      return CORE.coliVariableStringfy();
  }
  throw new NoTokenInterpreterFoundError(nodeName, coli);
}
