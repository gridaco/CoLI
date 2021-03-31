import { ColiObject } from "../_abstract";
import { _NODE_LITERAL } from "../_internal/node-name";

/* @internal */ type LiteralValueAcceptableType =
  | string
  | boolean
  | null
  | number
  | RegExp;

export interface Literal {
  readonly value: LiteralValueAcceptableType;
  raw: string;
}

export class Literal extends ColiObject {
  constructor(readonly value: LiteralValueAcceptableType) {
    super(_NODE_LITERAL);
  }
}
