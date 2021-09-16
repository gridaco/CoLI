import { JSXElement } from "coli";
import { stringfy, stringfy_tokenformatted, StringfyLanguage } from "../..";
import { indent, KeywordAndTokenStatic } from "@coli.codes/export-string-core";
import { formatters } from "@coli.codes/ast-formatter";
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
        joinWith: KeywordAndTokenStatic.BreakLineToken,
      })
    );
  const _close = stringfy(closingElement, { language: l });
  if (_children) {
    return `${_open}
  ${_children}
  ${_close}`;
  } else {
    return `${_open}${_close}`;
  }
}
