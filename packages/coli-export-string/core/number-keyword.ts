import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { NumberKeyword } from "coli";
import { StringfyLanguage } from "..";

export function strfy_number_keyword(
  c: NumberKeyword,
  l: StringfyLanguage
): string {
  return KeywordAndTokenStatic.NumberKeyword;
}
