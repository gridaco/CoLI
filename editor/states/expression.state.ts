import { atom, selector, ReadOnlySelectorOptions } from "recoil";

export const commentExpressionAtom = atom({
  key: "comment-expression-values",
  default: [],
});
