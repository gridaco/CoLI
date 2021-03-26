import { Type, Types } from "../builders/type";

export interface Identifier {
  readonly name: string;
  optional?: boolean;
  typeAnnotation?: Type;
}

export class Identifier {
  constructor(
    readonly name: string,
    args?: {
      optional?: boolean;
      typeAnnotation?: Type;
    }
  ) {
    const { optional, typeAnnotation } = args;
    this.optional = optional;
    this.typeAnnotation = typeAnnotation;
  }
}
