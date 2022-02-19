import { Properties, PropertiesHyphen, Property } from "csstype";

export type { PropertiesHyphen as CSSProperties } from "csstype";
export type { Property as CSSProperty } from "csstype";

export function buildCssJsx(css: Properties) {
  const propertyStrs = [];
  for (const k of Object.keys(css)) {
    const value = css[k];
    const propertyStr = `${k}: "${value}"`;
    propertyStrs.push(propertyStr);
  }
  const bodyStr = propertyStrs.join(",\n\t");
  return `{
\t${bodyStr}
}`;
}

export function buildCssStandard(css: PropertiesHyphen): string {
  if (!css) {
    return "";
  }

  const propertyStrs = [];
  for (const k of Object.keys(css)) {
    const value = css[k];
    if (value !== undefined && value !== null) {
      const propertyStr = `${kebabize(k)}: ${value};`;
      propertyStrs.push(propertyStr);
    }
  }
  const bodyStr = propertyStrs.join("\n");
  return `\n${bodyStr}\n`;
}

/**
 * converts camelCase to kebab-case
 * @param str
 * @returns
 */
const kebabize = (str) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? "-" : "") + $.toLowerCase()
  );
