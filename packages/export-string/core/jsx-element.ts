import { JSXElement } from "coli/lib/jsx";
import { StringfyLanguage } from "..";

export function coliJSXElementStringfy(
  c: JSXElement,
  l: StringfyLanguage
): string {
  const {
    openingElement: {
      name: { name: openingElementName },
    },
    closingElement: {
      name: { name: closingElementName },
    },
    children,
  } = c;
  let code = "";

  code += `<${openingElementName}>\n`;
  if (Array.isArray(children)) {
    code += mappingArrayField(children).join("");
  }
  code += `</${closingElementName}>`;

  return code;
}

function mappingArrayField(target): Array<string> {
  return target.map((i) => {
    if (i instanceof JSXElement) {
      const {
        openingElement: {
          name: { name: openingElementName },
        },
        closingElement: {
          name: { name: closingElementName },
        },
        children,
      } = i;
      if (Array.isArray(children)) {
        return `<${openingElementName}>\n${mappingArrayField(
          children
        )}</${closingElementName}>\n`;
      }
      return `<${openingElementName}></${closingElementName}>\n`;
    }
  });
}

/**
 * 
 *  return [
          
          openingElementName,
          ...mappingArrayField(children),
          closingElementName,
        ];
 */
