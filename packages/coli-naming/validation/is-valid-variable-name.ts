/**
 * validate if valid variable name with try of function instanciation and triming
 * @todo - add regex validation
 * @param name
 * @returns
 */
export function isValidVariableName(name: string): boolean {
  if (typeof name !== "string") {
    return false;
  }

  if (name.trim() !== name) {
    return false;
  }

  try {
    // try to make new js function with this name.
    new Function(name, "var " + name);
  } catch (_) {
    return false;
  }

  // otherwise, return true.
  return true;
}
