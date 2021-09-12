import { TaggedTemplateExpression } from "coli";

export function astfmt_tagged_template_expression(c: TaggedTemplateExpression) {
  const { tag, template } = c;
  return [tag, template];
}
