import type { TypeLike } from "..";
import { ColiObject } from "../_abstract";
import { _NODE_IDENTIFIER } from "../_internal/node-name";

export interface Identifier {
  name: string;
  optional?: boolean;
  typeAnnotation?: TypeLike;
}

export class Identifier extends ColiObject {
  name: string;
  constructor(
    name: string,
    args?: {
      optional?: boolean;
      typeAnnotation?: TypeLike;
    }
  ) {
    super(_NODE_IDENTIFIER);
    this.name = name;
    this.optional = args?.optional;
    this.typeAnnotation = args?.typeAnnotation;
  }

  /**
   * renames the existing this. - does not destroy the id.
   * @param name
   */
  rename(name: string): this {
    this.name = name;
    return this;
  }

  toString(): string {
    return this.name;
  }
}
