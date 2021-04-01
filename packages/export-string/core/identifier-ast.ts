import { Identifier } from "coli/lib/ast";
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

export function coliIdentifierStringfy(
  c: Identifier,
  l: StringfyLanguage
): string {
  const { name, typeAnnotation } = c;
  let code = `${name}`;

  if (typeAnnotation) {
    if (isJson(typeAnnotation.keyword)) {
      // If type is defined as object, delete "
      code += ` : ${typeAnnotation.keyword.replace(/"/gi, "")}`;
    } else {
      code += ` : ${typeAnnotation.keyword}`;
    }
  }

  return code;
}
