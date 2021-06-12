import { ExportAssignment } from "@coli.codes/core/assignment/export-assignment";
import { stringfy, StringfyLanguage } from "..";
import { FILALIZED_END_OF_LINE_TOKEN_VALUE } from "../eo";

export function coliExportAssignmentStringfy(
  c: ExportAssignment,
  l: StringfyLanguage
) {
  const identifier = c.identifier;
  const _identifier = stringfy(identifier, {
    language: l,
  });

  let line = `export default ${_identifier}`;
  line += FILALIZED_END_OF_LINE_TOKEN_VALUE;

  return line;
}
