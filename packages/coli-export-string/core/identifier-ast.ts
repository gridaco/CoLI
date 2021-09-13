import { KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { Identifier } from "coli";
import { StringfyLanguage } from "..";

/*@internal*/
function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export function strfy_identifier(c: Identifier, l: StringfyLanguage): string {
  const { name, typeAnnotation } = c;
  let code = `${name}`;

  if (typeAnnotation) {
    if (isJson(typeAnnotation.keyword)) {
      // If type is defined as object, delete "
      code += `${KeywordAndTokenStatic.BreakSpaceToken}${
        KeywordAndTokenStatic.ColonToken
      }${KeywordAndTokenStatic.BreakSpaceToken}${typeAnnotation.keyword.replace(
        /"/gi,
        ""
      )}`;
    } else {
      code += `${KeywordAndTokenStatic.BreakSpaceToken}${KeywordAndTokenStatic.ColonToken}${KeywordAndTokenStatic.BreakSpaceToken}${typeAnnotation.keyword}`;
    }
  }

  return code;
}
