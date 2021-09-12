import { JSXElement } from "coli";
import { indent } from "../..";
import { insertBetween } from "../../utils";
import f from "../../tokens";

export function astfmt_jsx_element(c: JSXElement) {
  const { openingElement, closingElement, children } = c;

  const _children =
    children &&
    Array.isArray(children) &&
    indent.onEachLine(insertBetween(children, f("\n")));
  if (_children) {
    return [openingElement, ..._children, closingElement];
  } else {
    return [openingElement, closingElement];
  }
}
