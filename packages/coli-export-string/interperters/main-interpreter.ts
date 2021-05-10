import { Snippet, _abstract } from "coli";
import { StringfyLanguage } from "..";
import { ESInterpreter } from "./es-interpreter";
type Keyword = string;
type KindInterpreter<T extends _abstract.ColiObject | string = string> =
  | ((coli: T, language?: StringfyLanguage) => string)
  | Keyword;

export interface LanguageInterpreterMap {
  FunctionKeyword: KindInterpreter;
  SingleCommentKeyword: KindInterpreter;
  MultiCommentKeyword: KindInterpreter;
  __WIDLCARD__: KindInterpreter<Snippet | any>;
}

export function languageInterpreter(
  l: StringfyLanguage
): LanguageInterpreterMap {
  switch (l) {
    case "typescript":
    case "tsx":
      return ESInterpreter;
  }
}
