import { ColiObjectType } from "coli/lib/_abstract";
import {
  _DECLARATION_IMPORT,
  _DECLARATION_VARIABLE,
} from "coli/lib/_internal/constants/declarations-name";
import { _EXPRESSION_COMMENT } from "coli/lib/_internal/constants/expressions-name";
import { StringfyComment, StringfyVariable } from "./coli-stringfy";

type StringfyLanguage = "typescript" | "python" | "dart";

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
    case _DECLARATION_VARIABLE:
      return StringfyVariable.Typescript(coli);
  }
}

function stringfyColiToPython(coli: any) {
  switch (coli.type) {
    case _EXPRESSION_COMMENT:
      return StringfyComment.Python(coli);
    case _DECLARATION_VARIABLE:
      return StringfyVariable.Typescript(coli);
  }
}

function stringfyColiToDart(coli: any) {
  switch (coli.type) {
    case _EXPRESSION_COMMENT:
      return StringfyComment.Dart(coli);
    case _DECLARATION_VARIABLE:
      return StringfyVariable.Typescript(coli);
  }
}
