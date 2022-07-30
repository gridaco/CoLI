import { PropertiesHyphen } from "csstype";
import type { ElementCssStyleData } from "./css-style-declaration";
import { isSimplePseudos } from "./simple-pseudos";

type CSSBodyStr = string;

/**
 *
 * @param css
 */
export function buildCSSStyleData(css: ElementCssStyleData): {
  main: CSSBodyStr;
  pseudo: {
    [key: string]: CSSBodyStr;
  };
} {
  // extract the SimplePseudos from css object.
  const simplePseudos: string[] = Object.keys(css).filter(isSimplePseudos);

  // remove the SimplePseudos from css object.
  const cssWithoutSimplePseudos = Object.keys(css).reduce((acc, key) => {
    // if key included in simplePseudos, skip it.
    if (!simplePseudos.includes(key)) {
      return {
        ...acc,
        [key]: css[key],
      };
    }
    return acc;
  }, {} as PropertiesHyphen);

  // make non-simple pseudo css object.
  const nonpseudo = buildCSSBody(cssWithoutSimplePseudos);

  // make a pseudo objects
  const pseudo: {
    [key: string]: CSSBodyStr;
  } = simplePseudos.reduce((acc, key) => {
    return {
      ...acc,
      [key]: buildCSSBody(css[key]),
    };
  }, {});

  return {
    main: nonpseudo,
    pseudo: pseudo,
  };
}

/**
 * {key: value} => key: value
 * @param properties
 * @returns
 */
export function buildCSSBody(properties: PropertiesHyphen): CSSBodyStr {
  if (!properties) {
    return "";
  }

  const propertyStrs = [];
  for (const k of Object.keys(properties)) {
    const value = properties[k];
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
