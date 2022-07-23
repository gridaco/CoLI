import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { BooleanKeyword } from "coli";
import { StringfyOptions } from "..";

export function strfy_boolean_keyword(
  c: BooleanKeyword,
  l: StringfyOptions
): string {
  return KeywordAndTokenStatic.BooleanKeyword;
}
