import { Properties, PropertiesHyphen } from "csstype";
import { buildCssStandard } from "..";

const hypencss: PropertiesHyphen = {
  color: "white",
  "-webkit-align-content": "baseline",
};

const csstest: Properties = {
  color: "white",
  WebkitAlignContent: "baseline",
};

test("build hypen css", () => {
  expect(buildCssStandard(hypencss)).toBe(
    `"color": "white",\n"-webkit-align-content": "baseline"`
  );
});
