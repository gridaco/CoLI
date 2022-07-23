import { JSXElement } from "coli";
import { format, inject } from "../..";
import f from "../../tokens";

export function astfmt_jsx_element(c: JSXElement) {
  const { openingElement, closingElement, children } = c;
  const _children =
    children &&
    Array.isArray(children) &&
    inject.onEach(inject.insertBetween(format(children), f("\n")), "\t");
  if (_children) {
    return [openingElement, ..._children, closingElement];
  } else {
    return [openingElement, closingElement];
  }
}
