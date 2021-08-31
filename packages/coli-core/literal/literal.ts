import { ColiObject, ColiLiteralType } from "../_abstract";

/* @internal */ type LiteralValueAcceptableType =
  | string
  | boolean
  | null
  | number
  | RegExp;

export class Literal extends ColiObject {
  constructor(
    kind: ColiLiteralType,
    readonly value: LiteralValueAcceptableType
  ) {
    super(kind);
  }
}
