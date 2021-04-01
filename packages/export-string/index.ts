import { ColiInterpretable, ColiObject } from "coli/lib/_abstract";
import { NoTokenInterpreterFoundError } from "./errors";
import * as COLI from "coli/lib/_internal/node-name";
import * as CORE from "./core";
import { CommentExpression } from "coli/lib/expressions/comment";
import { Block, Types } from "coli/lib";
import { Identifier, Literal } from "coli/lib/ast";
import { FunctionDeclaration } from "coli/lib/declarations/function";
import { VariableDeclaration } from "coli/lib/declarations/variable";

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
  arrayDivison?: string;
}

type useStrinfyFunction = (
  c: ColiObject,
  l: StringfyOptions["language"]
) => string;

export function stringfy(
  coli: ColiInterpretable,
  stringfyOptions: StringfyOptions
): string {
  const { language, arrayDivison = "" } = stringfyOptions;

  if (Array.isArray(coli)) {
    const stringfyCode = coli
      .map((c) => stringfy(c, { language }))
      .join(arrayDivison);
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
    /** Expressions */
    case COLI._EXPRESSION_COMMENT:
      useStringfyFunction = CORE.coliCommentStringfy;
      break;
    /** Nodes */
    case COLI._ELEMENT_JSX:
      useStringfyFunction = CORE.coliJSXElementStringfy;
      break;
    case COLI._NODE_IDENTIFIER:
      useStringfyFunction = CORE.coliIdentifierStringfy;
      break;
    case COLI._NODE_LITERAL:
      useStringfyFunction = CORE.coliLiteralStringfy;
      break;
  }

  if (useStringfyFunction) {
    return useStringfyFunction(coli, stringfyLanguage);
  }

  /** @TEST */
  return JSON.stringify(coli);
  // throw new NoTokenInterpreterFoundError(nodeName, coli);
}

const messageValue = new Literal("hello world");
const messageVariable = new VariableDeclaration("message", {
  kind: "const",
  initializer: messageValue,
});

// >> const message = "hello world"
console.log(
  stringfy(messageVariable, {
    language: "typescript",
  })
);
