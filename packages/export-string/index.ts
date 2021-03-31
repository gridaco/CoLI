import { ColiObjectType } from "coli/lib/_abstract";
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

export interface Coli {
  type: ColiObjectType;
  [x: string]: any;
}

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

function stringfyColiToTypescript(coli: any) {
  switch (coli.type) {
    case _EXPRESSION_COMMENT:
      return StringfyComment.Typescript(coli);
    case _STATEMENT_VARIABLE:
      return StringfyVariable.Typescript(coli);
    case _DECLARATION_FUNCTION:
      return StringfyFunction.Typescript(coli);
    case _DECLARATION_IMPORT:
      return StringfyImport.Typescript(coli);
  }
}

function stringfyColiToPython(coli: any) {
  switch (coli.type) {
    case _EXPRESSION_COMMENT:
      return StringfyComment.Python(coli);
    case _STATEMENT_VARIABLE:
      return StringfyVariable.Python(coli);
    case _DECLARATION_IMPORT:
      return StringfyImport.Python(coli);
  }
}

function stringfyColiToDart(coli: any) {
  switch (coli.type) {
    case _EXPRESSION_COMMENT:
      return StringfyComment.Dart(coli);
    case _STATEMENT_VARIABLE:
      return StringfyVariable.Dart(coli);
    case _DECLARATION_IMPORT:
      return StringfyImport.Dart(coli);
  }
}
