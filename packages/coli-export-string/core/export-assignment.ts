import { ExportAssignment } from "@coli.codes/core/assignment/export-assignment";
import { stringfy, StringfyLanguage } from "..";

export function coliExportAssignmentStringfy(
  c: ExportAssignment,
  l: StringfyLanguage
) {
  const identifier = c.identifier;
  const _identifier = stringfy(identifier, {
    language: l,
  });

  return `export default ${_identifier}`;
}
