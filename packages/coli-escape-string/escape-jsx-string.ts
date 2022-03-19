const _JSX_SPECIALS = ["{", "}", "<", ">"];
/**
 * handling cases
 * @param text
 */
export function escapeJsxString(text?: string): string {
  if (!text) {
    return "";
  }

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

/**
 * adds {"\n"} or <br/> to each line break
 *
 * - (replace `\n` with `{"\\n"}`)
 * - (replace `\n` with `<br/>`)
 * @param lines
 * @returns
 */
function formatLines(lines: string, use: "<br/>" | "{\\n}" = "<br/>") {
  return (
    lines
      //
      .split("\n")
      //
      .join(`${use}\n`)
  );
}
