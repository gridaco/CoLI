import { Snippet } from "coli";
import { stringfy, StringfyLanguage } from "..";
import { LanguageInterpreterMap } from "./main-interpreter";

export const ESInterpreter: LanguageInterpreterMap = {
  FunctionKeyword: "function",
  SingleCommentKeyword: "//",
  /**
   * @description This Keyword is [leading, line, trailing] use String.prototype.split
   * @description Do Not Remove white space
   *
   * @example const [leading, line, trailing] = MultiCommentKeyword.split(" ")
   */
  MultiCommentKeyword: "/** * **/",
  __WIDLCARD__: (_: Snippet | any, language: StringfyLanguage) => {
    if (_ instanceof Snippet) {
      return _._defaultSnippet;
    }
    return stringfy(_, { language });
  },
};
