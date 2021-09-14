import { TaggedTemplateExpression } from "coli";
import { stringfy_tokenformatted, StringfyLanguage } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_tagged_template_expression(
  c: TaggedTemplateExpression,
  l: StringfyLanguage
): string {
  const ast = formatters.astfmt_tagged_template_expression(c);
  return stringfy_tokenformatted(ast);

  // const { tag, template } = c;
  // let code = stringfy(tag, { language: l });
  // code += stringfy(template, { language: l });

  // return code;
}
