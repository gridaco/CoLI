import {
  JSXElement,
  JSXOpeningElement,
  JSXClosingElement,
  JSXIdentifier,
} from "coli";
import { astfmt_jsx_element } from "../formatters";

test("jsx element ast format", () => {
  const children = (n) =>
    new JSXElement({
      openingElement: new JSXOpeningElement(new JSXIdentifier("c" + n)),
      children: [],
      closingElement: new JSXClosingElement(new JSXIdentifier("c" + n)),
    });

  const jsx = new JSXElement({
    openingElement: new JSXOpeningElement(new JSXIdentifier("tag")),
    children: [children(1), children(2), children(3)],
    closingElement: new JSXClosingElement(new JSXIdentifier("tag")),
  });

  const ast = astfmt_jsx_element(jsx);

  expect(ast).toBe([]);
});
