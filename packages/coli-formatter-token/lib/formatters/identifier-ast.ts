import { Identifier, Type } from "@coli.codes/core";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";

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
  const { name, typeAnnotation, optional } = c;

  if (typeAnnotation) {
    if (typeAnnotation instanceof Type) {
      if (isJson(typeAnnotation.keyword)) {
        // If type is defined as object, delete -"-
        return [
          name,
          optional ? f(SyntaxKind.QuestionToken) : f(""),
          f(SyntaxKind.ColonToken),
          f(" "),
          typeAnnotation.keyword.replace(/"/gi, ""),
        ];
      } else {
        return [
          name,
          optional ? f(SyntaxKind.QuestionToken) : f(""),
          f(SyntaxKind.ColonToken),
          f(" "),
          typeAnnotation.keyword,
        ];
      }
    }
    return [
      name,
      optional ? f(SyntaxKind.QuestionToken) : f(""),
      f(SyntaxKind.ColonToken),
      f(" "),
      typeAnnotation,
    ];
  } else {
    return name;
  }
}
