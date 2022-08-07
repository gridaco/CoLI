import type { JSXText } from "@coli.codes/jsx-core";
import { escapeJsxString } from "@coli.codes/escape-string";
export function astfmt_jsx_text(c: JSXText) {
  const { value } = c;
  const _escaped = escapeJsxString(value);
  return _escaped;
}
