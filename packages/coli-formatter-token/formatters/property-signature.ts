import { PropertySignature } from "coli";
import f from "../tokens";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { inject } from "..";

export function astfmt_property_signature(c: PropertySignature) {
  const _questiontoken = c.questionToken ? f(SyntaxKind.QuestionToken) : f("");
  const typedef = c.type ? [f(SyntaxKind.ColonToken), f(" "), c.type] : f("");
  return [c.name, _questiontoken, typedef];
}
