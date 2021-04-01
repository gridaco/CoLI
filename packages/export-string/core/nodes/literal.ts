import { Literal } from "coli/lib/ast";
import { StringfyLanguage } from "../..";
import { converValue } from "../../utils/convert-value";

export function coliLiteralStringfy(c: Literal, l: StringfyLanguage): string {
  const { value } = c;
  let code = `${converValue(value, l)}`;
  return code;
}
