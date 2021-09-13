import { TaggedTemplateExpression } from "coli";
import { stringfy, StringfyLanguage } from "..";

export function strfy_tagged_template_expression(
  c: TaggedTemplateExpression,
  l: StringfyLanguage
): string {
  const { tag, template } = c;
  let code = stringfy(tag, { language: l });
  code += stringfy(template, { language: l });

  return code;
}
