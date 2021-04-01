import { TaggedTemplateExpression } from "coli/lib/expressions/tagged-template-expression";
import { stringfy, StringfyLanguage } from "..";

export function coliTaggedTemplateStringfy(
  c: TaggedTemplateExpression,
  l: StringfyLanguage
): string {
  const { tag, template } = c;
  let code = stringfy(tag, { language: l });
  code += stringfy(template, { language: l });

  return code;
}
