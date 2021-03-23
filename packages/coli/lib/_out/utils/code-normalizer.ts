export function removeLastSemicolon(code: string) {
  // whatever ends with (;)n
  // );;;;; -> )
  // ); -> )
  // aaa;;;;; -> aaa
  code = code.replace(/(;*);$/, "");
  return code;
}

export function endsWithSemicolon(code: string): boolean {
  return code.endsWith(";");
}

/**
 * replaces double comma with single comma to a givven code as string
 * @param code
 * @returns
 */
export function normalizeDuplicatedCommas(code: string) {
  return code.replace(",,", ",");
}
