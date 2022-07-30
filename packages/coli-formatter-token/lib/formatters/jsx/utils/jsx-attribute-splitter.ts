import type { JSXAttributes } from "@coli.codes/jsx-core";
import { FormatterTokenLike } from "../../../tokens";

export function get_jsx_attribute_join_with_by_attributes(
  attributes?: JSXAttributes
) {
  return _get_jsx_attribute_join_with_by_attribute_count(
    attributes?.length ?? 0
  );
}

function _get_jsx_attribute_join_with_by_attribute_count(
  count: number
): FormatterTokenLike {
  if (count == 0) {
    return "";
  } else if (count > 0 && count < 3) {
    return " ";
  } else {
    return ["\n", "\t"];
  }
}
