const _JSX_SPECIALS = ["{", "}", "<", ">"];
/**
 * handling cases
 * @param text
 */
export function escapeJsxString(text: string): string {
  // 0. handle special characters
  const containsSpecial = _JSX_SPECIALS.some((char) => {
    return text.includes(char);
  });

  // 1. lines_formatted
  text = formatLines(text);

  // if special chars are contained, we have to put it in `{ "<content>" }`
  if (containsSpecial) {
    // replace " with \"
    text = text.split('"').join('\\"');
    return `{"${text}"}`;
  }

  return text;
}

function formatLines(lines: string) {
  return lines
    .split("\n")
    .map((line) => {
      return `${line}{"\\n"}`;
    })
    .join("\n");
}
