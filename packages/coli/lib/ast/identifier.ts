import { Type, Types } from "../builders/type";
import { ColiObject } from "../_abstract";
import { _NODE_IDENTIFIER } from "../_internal/node-name";

export interface Identifier {
  readonly name: string;
  optional?: boolean;
  typeAnnotation?: Type;
}

export class Identifier extends ColiObject {
  constructor(
    readonly name: string,
    args?: {
      optional?: boolean;
      typeAnnotation?: Type;
    }
  ) {
    super(_NODE_IDENTIFIER);
    const { optional, typeAnnotation } = args;
    this.optional = optional;
    this.typeAnnotation = typeAnnotation;
  }
}
