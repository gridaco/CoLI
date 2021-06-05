import { Properties, PropertiesHyphen } from "csstype";

export type { PropertiesHyphen as CSSProperties } from "csstype";

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

export function buildCssStandard(css: PropertiesHyphen) {
  const propertyStrs = [];
  for (const k of Object.keys(css)) {
    const value = css[k];
    const propertyStr = `${k}: ${value};`;
    propertyStrs.push(propertyStr);
  }
  const bodyStr = propertyStrs.join("\n");
  return `\n${bodyStr}\n`;
}
