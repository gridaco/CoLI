import { ColiObject, ColiTypelikeType } from "../_abstract";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";

export abstract class _BaseType extends ColiObject {
  constructor(readonly __type: ColiTypelikeType) {
    super(__type);
  }
}
