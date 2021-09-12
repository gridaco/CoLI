import { ColiObject } from "coli";
import f from "../tokens";
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
export function onEachLine(obj: ColiObject | ColiObject[]) {
  const lines = Array.isArray(obj) ? obj : [obj];
  return lines.map((l) => [f("\t"), obj]);
}
