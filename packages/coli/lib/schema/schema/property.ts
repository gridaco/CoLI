// single property definition
/**
 * ```ts
const singlePropertySchemaExample = {
  name: {
    type: "string",
    description: "indicates the name of the object",
  },
};
 * ```
 */
export interface IProperty {
  name: string;
  description?: string;
  type: string;
}

export class Property implements IProperty {
  name: string;
  description?: string;
  type: string;

  constructor(p: IProperty) {
    this.name = p.name;
    this.description = p.description;
    this.type = p.type;
  }
}

export function property(p: IProperty): Property {
  return new Property(p);
}
