import { Identifier, JSXAtrributes, stringfy } from "coli";
import { get_jsx_attribute_join_with_by_attributes } from "./jsx-attribute-splitter";

export function strfy_jsx_with_atrributes({
  name,
  open_token,
  close_token,
  attributes,
}: {
  name: Identifier;
  open_token: "<";
  close_token: ">" | "/>";
  attributes: JSXAtrributes;
}) {
  const join_attributes_with = get_jsx_attribute_join_with_by_attributes(
    attributes
  );
  let closing_after_new_line = "";
  if (join_attributes_with == "\n  ") {
    closing_after_new_line = "\n";
  }
  return `${open_token}${stringfy(name, { language: "tsx" })} ${stringfy(
    attributes,
    {
      language: "tsx",
      joinWith: join_attributes_with,
    }
  )}${closing_after_new_line}${close_token}`;
}
