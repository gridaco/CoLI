import { Type, Types } from "../type";
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
    this.optional = args?.optional;
    this.typeAnnotation = args?.typeAnnotation;
  }
}
