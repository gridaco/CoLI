import Postprocessing from "../index";

test("replacer test", () => {
  const replacer = Postprocessing.create();

  replacer.reserve("");

  expect("").toBe("");
});
