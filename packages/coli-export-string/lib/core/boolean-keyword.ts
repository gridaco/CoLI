import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import type { BooleanKeyword } from "@coli.codes/core";
import { StringfyOptions } from "..";

export function strfy_boolean_keyword(
  c: BooleanKeyword,
  l: StringfyOptions
): string {
  return KeywordAndTokenStatic.BooleanKeyword;
}
