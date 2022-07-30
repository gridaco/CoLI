import type { StringKeyword } from "@coli.codes/core";
import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import type { StringfyOptions } from "..";

export function strfy_string_keyword(
  c: StringKeyword,
  l: StringfyOptions
): string {
  return KeywordAndTokenStatic.StringKeyword;
}
