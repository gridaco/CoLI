import { atom, selector, ReadOnlySelectorOptions } from "recoil";

export const variableStatementAtom = atom({
  key: "variable-statement-values",
  default: [],
});
