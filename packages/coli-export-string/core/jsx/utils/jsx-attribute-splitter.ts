import { JSXAtrributes } from "coli";

export function get_jsx_attribute_join_with_by_attributes(
  atrributes: JSXAtrributes
) {
  return _get_jsx_attribute_join_with_by_attribute_count(atrributes.length);
}
function _get_jsx_attribute_join_with_by_attribute_count(
  count: number
): "" | " " | "\n  " {
  const indent = "  ";
  if (count == 0) {
    return "";
  } else if (count > 0 && count < 3) {
    return " ";
  } else {
    return `\n${indent}`;
  }
}
