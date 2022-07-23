import { ExportAssignment } from "@coli.codes/core/assignment/export-assignment";
import { stringfy_tokenformatted, StringfyOptions } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_export_assignment(
  c: ExportAssignment,
  l: StringfyOptions
) {
  const ast = formatters.astfmt_export_assignment(c);
  return stringfy_tokenformatted(ast, l);
}
