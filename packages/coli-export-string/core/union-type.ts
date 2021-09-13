import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { UnionType } from "coli";
import { stringfy, StringfyLanguage } from "..";

export function strfy_union_type(c: UnionType, l: StringfyLanguage): string {
  return c.types
    .map((t) => stringfy(t, { language: l }))
    .join(
      `${KeywordAndTokenStatic.BreakSpaceToken}${KeywordAndTokenStatic.BarToken}${KeywordAndTokenStatic.BreakSpaceToken}`
    );
}
