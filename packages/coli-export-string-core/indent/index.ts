export * as tokens from "./token";

/**
 * make indents on each line.
 *
 * ```
 * // usage ->
 * import { indent } from "@coli.codes/export-string-core";
 * indent.onEachLine(txt)
 * ```
 * @param txt
 * @param indent
 * @returns
 */
export function onEachLine(txt: string | string[], indent: string = "  ") {
  const lines = Array.isArray(txt) ? txt : txt.split("\n");
  return lines.map((l) => `${indent}${l}`).join("\n");
}
