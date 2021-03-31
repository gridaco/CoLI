/**
 * stringfy value in ecma script syntax
 * @param value
 * @returns
 */
export function convertEsValue(value: any): string {
  if (value === null) {
    return "";
  }
  if (value instanceof RegExp) {
    // regex type is not part of typeof operator, we need to handle it separately.
    return `${value}`;
  }
  switch (typeof value) {
    case "string":
      return `"${value}"`;
    case "number":
      return `${value}`;
    case "object":
      return `${JSON.stringify(value)}`;
    case "undefined":
      return "undefined";
    default:
      return `${value}`;
  }
}
