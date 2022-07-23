import { JSXElement } from "coli";
import { format, inject } from "../..";
import { insertBetween } from "../../utils";
import f from "../../tokens";

export function astfmt_jsx_element(c: JSXElement) {
  const { openingElement, closingElement, children } = c;
  if (children) {
    return [
      //
      openingElement,
      inject.indents([
        //
        "\n",
        insertBetween(format(children), f("\n")),
      ]),
      "\n",
      closingElement,
    ];
  } else {
    return [openingElement, closingElement];
  }
}
