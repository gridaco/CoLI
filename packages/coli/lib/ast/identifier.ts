export interface Identifier {
  readonly name: string;
  optional?: boolean;
  typeAnnotation?: any;
}

export class Identifier {
  constructor(
    readonly name: string,
    args?: {
      optional?: boolean;
      typeAnnotation?: any;
    }
  ) {
    const { optional, typeAnnotation } = args;
    this.optional = optional;
    this.typeAnnotation = args;
  }
}
