import { atom, selector, ReadOnlySelectorOptions } from "recoil";
import { StringfyLanguage } from "../../packages/export-string";

export const currentColiEditorOption = atom<{
  language: StringfyLanguage;
  previewStatus: "stop" | "play";
}>({
  key: `editor-option`,
  default: {
    language: "typescript",
    previewStatus: "stop",
  },
});
