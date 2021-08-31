import { ImportDeclaration } from "coli";
import { stringfy, StringfyLanguage } from "..";
import { eo } from "@coli.codes/export-string-core";
import { convertValue } from "../utils/convert-value";

/// _import string builder is dirty. this is because import declaratation definition does not follows. ts, but es typings.
/// this is an exception allowed by authors.

/**
 * @todo transpile lauganage
 * @todo value stringfy
 */
export function coliImportStringfy(
  c: ImportDeclaration,
  l: StringfyLanguage
): string {
  let code = "import ";

  // optional default import if default import provided.
  if (c.defaultImport) {
    code += `${stringfy(c.defaultImport, { language: l })}`;
  }

  // if one or more than named import is specified.
  if (c.imports.length > 0) {
    //
    if (c.defaultImport) {
      code += ", ";
    }
    code += `{ `;
    code += stringfy(c.imports, { language: l, joinWith: ", " });
    code += " }";
  }

  // make source
  code += ` from ${convertValue(c.source, l)}`;

  code += eo.FILALIZED_END_OF_LINE_TOKEN_VALUE;

  return code;
}
