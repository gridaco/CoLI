import { Properties, PropertiesHyphen } from "csstype";
import { buildCSSBody } from "../lib";

const hypencss: PropertiesHyphen = {
  color: "white",
  "-webkit-align-content": "baseline",
};

const csstest: Properties = {
  color: "white",
  WebkitAlignContent: "baseline",
};

test("build hypen css", () => {
  expect(buildCSSBody(hypencss)).toBe(
    `"color": "white",\n"-webkit-align-content": "baseline"`
  );
});
