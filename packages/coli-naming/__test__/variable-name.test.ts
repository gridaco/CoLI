import { NameCases, nameVariable } from "..";

test("component variable name -- pascal", () => {
  expect(
    nameVariable("Component one", {
      case: NameCases.pascal,
    }).name
  ).toBe("ComponentOne");
});

test("secret variable name -- upper snake", () => {
  expect(
    nameVariable("base api secret key", {
      case: NameCases.upper_snake,
    }).name
  ).toBe("BASE_API_SECRET_KEY");
});

test("member variable name -- _member", () => {
  expect(
    nameVariable("member variable", {
      case: NameCases._camel,
    }).name
  ).toBe("_memberVariable");
});

test("numberic start variable name -- 21st Century Fox", () => {
  expect(
    nameVariable("21st Century Fox", {
      case: NameCases.flat,
    }).object
  ).toStrictEqual({
    _camel: "_21StCenturyFox",
    _pascal: "_21StCenturyFox",
    _snake: "_21_st_century_fox",
    _upper_snake: "_21_ST_CENTURY_FOX",
    camel: "_21StCenturyFox",
    flat: "_21stcenturyfox",
    kebab: "21-st-century-fox",
    pascal: "_21StCenturyFox",
    snake: "_21_st_century_fox",
    upper: "_21STCENTURYFOX",
    upper_snake: "_21_ST_CENTURY_FOX",
  });
});
