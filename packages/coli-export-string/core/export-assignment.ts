import { ExportAssignment } from "@coli.codes/core/assignment/export-assignment";
import { stringfy, StringfyLanguage } from "..";
import { eo, KeywordAndTokenStatic } from "@coli.codes/export-string-core";

export function coliExportAssignmentStringfy(
  c: ExportAssignment,
  l: StringfyLanguage
) {
  const identifier = c.identifier;
  const _identifier = stringfy(identifier, {
    language: l,
  });

  let line = `${KeywordAndTokenStatic.ExportKeyword} ${KeywordAndTokenStatic.DefaultKeyword} ${_identifier}`;
  line += eo.FILALIZED_END_OF_LINE_TOKEN_VALUE;

  return line;
}
