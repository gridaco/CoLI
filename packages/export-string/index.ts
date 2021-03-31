import { CommentExpression } from "coli/lib/expressions/comment";
import { ColiObject } from "coli/lib/_abstract";
import {
  _DECLARATION_FUNCTION,
  _DECLARATION_IMPORT,
  _STATEMENT_VARIABLE,
  _EXPRESSION_COMMENT,
} from "coli/lib/_internal/node-name";
import {
  StringfyComment,
  StringfyFunction,
  StringfyImport,
  StringfyVariable,
} from "./coli-stringfy";

export type StringfyLanguage = "typescript" | "python" | "dart";

export function stringfy(
  coli: any,
  options: { language: StringfyLanguage }
): string {
  if (options.language === "typescript") {
    return stringfyColiToTypescript(coli);
  } else if (options.language === "python") {
    return stringfyColiToPython(coli);
  } else if (options.language === "dart") {
    return stringfyColiToDart(coli);
  }
}

function stringfyColiToTypescript(coli: ColiObject) {
  switch (coli.__type) {
    case _EXPRESSION_COMMENT:
      return StringfyComment.Typescript(coli as any);
    case _STATEMENT_VARIABLE:
      return StringfyVariable.Typescript(coli as any);
    case _DECLARATION_FUNCTION:
      return StringfyFunction.Typescript(coli as any);
    case _DECLARATION_IMPORT:
      return StringfyImport.Typescript(coli as any);
  }
}

function stringfyColiToPython(coli: ColiObject) {
  switch (coli.__type) {
    case _EXPRESSION_COMMENT:
      return StringfyComment.Python(coli as any);
    case _STATEMENT_VARIABLE:
      return StringfyVariable.Python(coli as any);
    case _DECLARATION_IMPORT:
      return StringfyImport.Python(coli as any);
  }
}

function stringfyColiToDart(coli: ColiObject) {
  switch (coli.__type) {
    case _EXPRESSION_COMMENT:
      return StringfyComment.Dart(coli as any);
    case _STATEMENT_VARIABLE:
      return StringfyVariable.Dart(coli as any);
    case _DECLARATION_IMPORT:
      return StringfyImport.Dart(coli as any);
  }
}
