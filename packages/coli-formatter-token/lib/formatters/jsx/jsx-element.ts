import type { JSXChildLike, JSXElement } from "@coli.codes/jsx-core";
import { format, inject } from "../..";
import { insertBetween } from "../../utils";
import f from "../../tokens";

export function astfmt_jsx_element(c: JSXElement) {
  const { openingElement, closingElement, children } = c;
  const _children: JSXChildLike[] =
    children && Array.isArray(children)
      ? children
      : ([children] as JSXChildLike[]);
  if (_children) {
    return [
      //
      openingElement,
      inject.indents([
        //
        "\n",
        insertBetween(format(_children), f("\n")),
      ]),
      "\n",
      closingElement,
    ];
  } else {
    return [openingElement, closingElement];
  }
}
