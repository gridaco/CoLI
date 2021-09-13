import { Identifier } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

/*@internal*/
function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

export function astfmt_identifier(c: Identifier) {
  const { name, typeAnnotation } = c;

  if (typeAnnotation) {
    if (isJson(typeAnnotation.keyword)) {
      // If type is defined as object, delete -"-
      return [
        name,
        f(" "),
        f(SyntaxKind.ColonToken),
        f(" "),
        typeAnnotation.keyword.replace(/"/gi, ""),
      ];
    } else {
      return [
        name,
        f(" "),
        f(SyntaxKind.ColonToken),
        f(" "),
        typeAnnotation.keyword,
      ];
    }
  } else {
    return name;
  }
}
