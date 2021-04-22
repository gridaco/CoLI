/**
 * https://json-schema.org/draft/2020-12/json-schema-core.html
 */
export const Keywords = {
  $id: "$id",
  $schema: "$schema",
  $ref: "$ref",
  title: "title",
  type: "type",
  enum: "enum",
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
