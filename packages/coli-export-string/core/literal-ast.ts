import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { Literal, TemplateLiteral } from "coli";
import { StringfyLanguage } from "..";
import { convertValue } from "../utils/convert-value";

export function coliLiteralStringfy(c: Literal, l: StringfyLanguage): string {
  const { value } = c;
  const isTemplateLiteral = c instanceof TemplateLiteral;
  if (!isTemplateLiteral) {
    return `${convertValue(value, l)}`;
  } else if (isTemplateLiteral) {
    return `${KeywordAndTokenStatic.BacktickToken}${value}${KeywordAndTokenStatic.BacktickToken}`;
  }
}
