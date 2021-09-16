import { FormatterTokenLike } from "..";
import { countLines } from "./count-lines";
import f from "../tokens";

export function extraTralingSpaceByBlockSize(block: FormatterTokenLike) {
  const lines = countLines(block);

  if (lines > 2) {
    return [...block, [f("\n")]];
  }
  if (lines > 20) {
    return [...block, [f("\n"), f("\n"), f("\n")]];
  }

  return [block];
}
