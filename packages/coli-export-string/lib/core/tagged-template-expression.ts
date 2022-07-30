import type { TaggedTemplateExpression } from "@coli.codes/core";
import { stringfy_tokenformatted, StringfyOptions } from "..";
import { formatters } from "@coli.codes/ast-formatter";

export function strfy_tagged_template_expression(
  c: TaggedTemplateExpression,
  l: StringfyOptions
): string {
  const ast = formatters.astfmt_tagged_template_expression(c);
  return stringfy_tokenformatted(ast, l);

  // const { tag, template } = c;
  // let code = stringfy(tag, { language: l });
  // code += stringfy(template, { language: l });

  // return code;
}
