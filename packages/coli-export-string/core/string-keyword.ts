import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { StringKeyword } from "coli";
import type { StringfyOptions } from "..";

export function strfy_string_keyword(
  c: StringKeyword,
  l: StringfyOptions
): string {
  return KeywordAndTokenStatic.StringKeyword;
}
