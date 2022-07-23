import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { NumberKeyword } from "coli";
import { StringfyOptions } from "..";

export function strfy_number_keyword(
  c: NumberKeyword,
  l: StringfyOptions
): string {
  return KeywordAndTokenStatic.NumberKeyword;
}
