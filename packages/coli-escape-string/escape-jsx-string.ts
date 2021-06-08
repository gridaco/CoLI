const _JSX_SPECIALS = ["{", "}", "<", ">"];
/**
 * handling cases
 * @param text
 */
export function escapeJsxString(text: string): string {
  const containsSpecial = _JSX_SPECIALS.some((char) => {
    return text.includes(char);
  });

  // if special chars are contained, we have to put it in `{ "<content>" }`
  if (containsSpecial) {
    // replace " with \"
    text = text.split('"').join('\\"');
    return `{"${text}"}`;
  }

  return text;
}
