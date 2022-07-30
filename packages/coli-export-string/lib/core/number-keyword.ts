import type { NumberKeyword } from "@coli.codes/core";
import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { StringfyOptions } from "..";

export function strfy_number_keyword(
  c: NumberKeyword,
  l: StringfyOptions
): string {
  return KeywordAndTokenStatic.NumberKeyword;
}
