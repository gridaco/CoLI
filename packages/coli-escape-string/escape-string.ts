import { escapeDartString } from "./escape-dart-string";
import { escapeJsxString } from "./escape-jsx-string";

type EscapeTargetLanguage = "dart" | "es" | "jsx";

export function escapeString(text: string, lang: EscapeTargetLanguage) {
  switch (lang) {
    case "dart":
      return escapeDartString(text);
      break;

    case "jsx":
      return escapeJsxString(text);

    default:
      throw `lang ${lang} is not yet supported for escape string.`;
      break;
  }
}
