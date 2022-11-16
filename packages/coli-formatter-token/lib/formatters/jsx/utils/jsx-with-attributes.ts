import type { Identifier } from "@coli.codes/core";
import type { JSXAttributes } from "@coli.codes/jsx-core";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { get_jsx_attribute_join_with_by_attributes } from "./jsx-attribute-splitter";
import { format, inject } from "../../..";
import f from "../../../tokens";

const __indent_after_newline__symbol = JSON.stringify(["\n", "\t"]);

export function astfmt_jsx_with_attributes({
  name,
  open_token,
  close_token,
  attributes,
}: {
  name: Identifier;
  open_token: SyntaxKind.LessThanToken;
  close_token: SyntaxKind.GreaterThanToken | "/>"; // SyntaxKind.SlashGreaterThanToken;
  attributes: JSXAttributes;
}) {
  const openning = f(open_token);
  const closing = close_token == "/>" ? "/>" : f(close_token);

  if (attributes?.length > 0) {
    const join_attributes_with =
      get_jsx_attribute_join_with_by_attributes(attributes);

    let closing_after_new_line =
      JSON.stringify(join_attributes_with) == __indent_after_newline__symbol
        ? f("\n")
        : f("");

    return [
      openning,
      format(name),
      f(" "),
      inject.insertBetween(format(attributes), join_attributes_with),
      closing_after_new_line,
      closing,
    ];
  } else {
    return [openning, format(name), closing];
  }
}
