/**
 * https://json-schema.org/draft/2020-12/json-schema-core.html
 */
export const Keywords = {
  $id: "$id",
  $schema: "$schema",
  $ref: "$ref",
  title: "title",
  type: "type",
  description: "description",
  properties: "properties",
  required: "required",
  // numeric validation - https://json-schema.org/draft/2020-12/json-schema-validation.html#rfc.section.6.2
  multipleOf: "multipleOf",
  maximum: "maximum",
  exclusiveMaximum: "exclusiveMaximum",
  minimum: "minimum",
  exclusiveMinimum: "exclusiveMinimum",
  // string validation - https://json-schema.org/draft/2020-12/json-schema-validation.html#rfc.section.6.3
  maxLength: "maxLength",
  minLength: "minLength",
  // array validation
  maxItems: "maxItems",
  minItems: "minItems",
  uniqueItems: "uniqueItems",
  maxContains: "maxContains",
  minContains: "minContains",
  //
};

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

interface IProperty {
  name: string;
  description?: string;
  type: string;
}

class Property implements IProperty {
  name: string;
  description?: string;
  type: string;

  constructor(p: IProperty) {
    this.name = p.name;
    this.description = p.description;
    this.type = p.type;
  }
}

function property(p: IProperty): Property {
  return new Property(p);
}

function str_property(p: IProperty) {
  return `"${p.name}": {
      ${str_kvlines(
        str_kvline("type", p.type),
        str_kvline("description", p.description)
      )}
}
`;
}

/**
 * preserveInput (true by default)
 * when true,
 * ```json

    "name": {
        "type": "string",
        "description": "indicates the name"
    }

 * ```
 * 
 * when false,
 * ```json
{
    "name": {
        "type": "string",
        "description": "indicates the name"
    }
}
 * ```
 * @param t 
 * @param options 
 * @returns 
 */
function format(
  t: object | string,
  options?: {
    space?: number;
    preserveInput?: boolean;
  }
): string {
  let obj = t;
  let modified = false;
  if (typeof t == "string") {
    try {
      obj = JSON.parse(t);
    } catch (_) {
      // almost unexpected token error, which is mostly caused by no opening braket "{"
      const wrapped = `{${t}}`;
      obj = JSON.parse(wrapped);
      modified = true;
    }
  }
  const formatted = JSON.stringify(obj, null, options?.space ?? 4);
  let final = formatted;
  if ((modified && options?.preserveInput) ?? true) {
    // opening and closing {} was added we need to remove them
    final = final.substr(1, formatted.length - 2); // -2 represents (len - last - onemore)
  }

  return final;
}

console.log(
  format(
    str_property({
      name: "name",
      type: "string",
      description: "indicates the name",
    })
  )
);

/**
 * builds simple key value property declaration line string
 * e.g. k: "awesome" value: "bridged.xyz" -> `"awesome": "bridged.xyz"`
 * @param k
 * @param v
 * @returns
 */
function str_kvline(k: string, v: string): string {
  if (v == undefined) {
    return "";
  }
  return `"${k}": "${v}"`;
}

function str_kvlines(...lines: string[]): string {
  return lines.join(",\n");
}
