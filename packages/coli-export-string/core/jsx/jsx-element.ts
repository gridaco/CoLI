import { JSXElement } from "coli";
import { stringfy, StringfyLanguage } from "../..";
import { indent, KeywordAndTokenStatic } from "@coli.codes/export-string-core";
export function coliJSXElementStringfy(
  c: JSXElement,
  l: StringfyLanguage
): string {
  const { openingElement, closingElement, children } = c;

  const _open = stringfy(openingElement, { language: l });
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
