import type { ColiObject } from "@coli.codes/core";
import f, { FormatterTokenLike, FormattingToken } from "../tokens";

type Acceptable = ColiObject | FormattingToken | FormatterTokenLike;
/**
 * make indents on each line.
 *
 * ```
 * // usage ->
 * import { indent } from "@coli.codes/export-string-core";
 * indent.onEachLine(txt)
 * ```
 * @param obj
 * @param indent
 * @returns
 */
export function onEach(
  obj: Acceptable | Acceptable[],
  token: Acceptable | Acceptable[]
): any[] {
  if (!obj) {
    return;
  }
  const lines = Array.isArray(obj) ? obj : [obj];
  return lines.map((l) => [token, l]);
}
