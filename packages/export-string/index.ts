import { ColiBlock } from "coli/lib/builder/block";
import { CommentExpression } from "coli/lib/expressions/comment";
import { ColiInterpretable, ColiObject } from "coli/lib/_abstract";
import {
  _DECLARATION_FUNCTION,
  _DECLARATION_IMPORT,
  _STATEMENT_VARIABLE,
  _EXPRESSION_COMMENT,
  _DECLARATION_VARIABLE,
} from "coli/lib/_internal/node-name";
import {
  StringfyComment,
  StringfyFunction,
  StringfyImport,
  StringfyVariable,
} from "./coli-stringfy";
import { NoTokenInterpreterFoundError } from "./errors";

export type StringfyLanguage =
  | "typescript"
  | "tsx"
  | "javascript"
  | "jsx"
  | "html"
  | "python"
  | "dart";

const NO_INTERPRETER_ERROR = new Error(
  "no coli interpreter found for givven input"
);

export function stringfy(
  coli: ColiInterpretable,
  options: { language: StringfyLanguage }
): string {
  if (Array.isArray(coli)) {
    let string = "";
    coli.map((c) => {
      string += stringfy(c, options);
      string += "\n";
    });
    return string;
  }

  if (coli instanceof ColiObject) {
    if (options.language === "typescript" || options.language === "tsx") {
      return stringfyColiToTypescript(coli);
    } else if (options.language === "python") {
      return stringfyColiToPython(coli);
    } else if (options.language === "dart") {
      return stringfyColiToDart(coli);
    } else {
      new Error(
        `Unsupported language exception. ${options.language} is not yet supported by coli:stringfy`
      );
    }
  }

  return JSON.stringify(coli);
}

function stringfyColiToTypescript(coli: ColiObject) {
  switch (coli.__type) {
    case _EXPRESSION_COMMENT:
      return StringfyComment.Typescript(coli as any);
    case _DECLARATION_VARIABLE:
      return StringfyVariable.Typescript(coli as any);
    case _STATEMENT_VARIABLE:
      throw "not implemented";
    case _DECLARATION_FUNCTION:
      return StringfyFunction.Typescript(coli as any);
    case _DECLARATION_IMPORT:
      return StringfyImport.Typescript(coli as any);
  }
  return JSON.stringify(coli);
  // throw new NoTokenInterpreterFoundError(coli.__type, coli);
}

function stringfyColiToPython(coli: ColiObject) {
  switch (coli.__type) {
    case _EXPRESSION_COMMENT:
      return StringfyComment.Python(coli as any);
    case _DECLARATION_VARIABLE:
      return StringfyVariable.Python(coli as any);
    case _STATEMENT_VARIABLE:
      throw "not implemented";
    case _DECLARATION_IMPORT:
      return StringfyImport.Python(coli as any);
  }
  return JSON.stringify(coli);
  // throw new NoTokenInterpreterFoundError(coli.__type, coli);
}

function stringfyColiToDart(coli: ColiObject) {
  switch (coli.__type) {
    case _EXPRESSION_COMMENT:
      return StringfyComment.Dart(coli as any);
    case _DECLARATION_VARIABLE:
      return StringfyVariable.Dart(coli as any);
    case _STATEMENT_VARIABLE:
      throw "not implemented";
    case _DECLARATION_IMPORT:
      return StringfyImport.Dart(coli as any);
  }
  return JSON.stringify(coli);
  // throw new NoTokenInterpreterFoundError(coli.__type, coli);
}
