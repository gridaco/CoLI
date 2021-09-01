/**
 * replaces double comma with single comma to a givven code as string
 * @param code
 * @returns
 */
export function normalizeDuplicatedCommas(code: string) {
  return code.replace(",,", ",");
}
