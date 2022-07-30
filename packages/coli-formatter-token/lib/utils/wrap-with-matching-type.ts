import { wrapWithDoubleQuote } from "./wrap-with-double-quote";

export function wrapWithMatchingType(v: any) {
  switch (typeof v) {
    case "string":
      return wrapWithDoubleQuote(v);
  }
  return v;
}
