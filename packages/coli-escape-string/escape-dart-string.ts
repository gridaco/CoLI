export function escapeDartString(text: string): string {
  // \ -> \\
  text = text.split("\\").join("\\\\");

  // \n -> \\n
  text = text.split("\n").join("\\n");

  // \r -> \\n
  text = text.split("\r").join("\\r");

  // \t -> \\t
  text = text.split("\t").join("\\t");

  // $ -> \$''"
  text = text.split("$").join("\\$");

  // " -> \"
  text = text.split('"').join('\\"');

  // ' -> \'
  text = text.split("'").join("\\'");

  return text;
}
