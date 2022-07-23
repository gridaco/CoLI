import { onEachLine } from "./on-each-line";

/**
 * indents an input. add a tab to each line
 * @param args
 */
export function indents(...args) {
  return onEachLine(args, "\t");
}
