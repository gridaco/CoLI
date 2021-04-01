import {
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "coli/lib/declarations/import";
import { stringfy, StringfyLanguage } from "..";
import { convertValue } from "../utils/convert-value";

const inBraket = /\{(.*?)\}/g;

/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function coliImportStringfy(
  c: ImportDeclaration,
  l: StringfyLanguage
): string {
  const { source, specifiers } = c;
  let code = "import ";

  // TODO FIX THAT. NO {}, {} | YES { , , }
  code += `${stringfy(specifiers, { language: l, arrayDivison: ", " })}`;
  // const importSpecifiers = [];
  // const stringfySpecifiers = stringfy(specifiers, {
  //   language: l,
  //   arrayDivison: ", ",
  // });
  // const baseImportSpecifiers = stringfySpecifiers.match(inBraket).map((i) => {
  //   return i.replace("{", "").replace("}", "");
  // });

  // if (!stringfySpecifiers.split(",")[0].includes("{")) {
  //   importSpecifiers.push(stringfySpecifiers.split(",")[0]);
  // }

  // if (baseImportSpecifiers.length != 0) {
  //   importSpecifiers.push(`{ ${baseImportSpecifiers.join(",")} }`);
  // }

  // code += `${importSpecifiers.join(",")}`;

  code += ` from ${convertValue(source, l)}`;

  return code;
}
