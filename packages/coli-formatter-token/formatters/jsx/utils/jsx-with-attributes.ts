import { Identifier, JSXAttributes } from "coli";
import { SyntaxKind } from "@coli.codes/core-syntax-kind";
import { get_jsx_attribute_join_with_by_attributes } from "./jsx-attribute-splitter";
import { inject } from "../../..";
import f from "../../../tokens";

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
  const join_attributes_with = get_jsx_attribute_join_with_by_attributes(
    attributes
  );
  let closing_after_new_line =
    join_attributes_with == ["\n", "\t"] ? f("\n") : f("");
  return [
    open_token,
    name,
    f(" "),
    inject.insertBetween(attributes, join_attributes_with),
    closing_after_new_line,
    close_token,
  ];
}
