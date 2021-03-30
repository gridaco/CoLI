export function convertValue(value: any) {
  switch (typeof value) {
    case "string":
      return `"${value}"`;
    case "number":
      return `${value}`;
    case "object":
      return `${JSON.stringify(value)}`;
    default:
      return `${value}`;
  }
}
