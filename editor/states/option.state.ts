import { atom, selector, ReadOnlySelectorOptions } from "recoil";

export const currentColiEditorOption = atom({
  key: `editor-option`,
  default: {
    lauangue: "typescript",
  },
});
