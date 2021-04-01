import { Identifier } from "coli/lib/ast";
import { StringfyLanguage } from "../..";

export function coliIdentifierStringfy(
  c: Identifier,
  l: StringfyLanguage
): string {
  const { name, typeAnnotation } = c;
  let code = `${name}`;

  if (typeAnnotation) {
    code += ` : ${typeAnnotation.keyword}`;
  }

  return code;
}
