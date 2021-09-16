import { TaggedTemplateExpression } from "coli";
import { format } from "../format";

export function astfmt_tagged_template_expression(c: TaggedTemplateExpression) {
  const { tag, template } = c;
  return [format(tag), format(template)];
}
