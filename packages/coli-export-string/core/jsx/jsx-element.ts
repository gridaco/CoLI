import { JSXElement } from "coli";
import { stringfy, StringfyLanguage } from "../..";
import { indent } from "@coli.codes/export-string-core";
import { strfy_jsx_opening_element } from "..";
export function strfy_jsx_element(c: JSXElement, l: StringfyLanguage): string {
  // const ast = formatters.astfmt_jsx_element(c);
  // return stringfy_tokenformatted(ast);
  const { openingElement, closingElement, children } = c;

  const _open = strfy_jsx_opening_element(openingElement, l);
  const _children =
    children &&
    indent.onEachLine(
      stringfy(children, {
        language: l,
        joinWith: "\n",
      })
    );
  const _close = stringfy(closingElement, { language: l });
  if (_children) {
    return `${_open}\n${_children}\n${_close}`;
  } else {
    return `${_open}${_close}`;
  }
}
