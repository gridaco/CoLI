import { JSX } from "@coli.codes/builder";
import { stringfy } from "../lib";

test("jsx-body-with-children", () => {
  expect(
    stringfy(
      JSX.fragment({
        children: [JSX.text("This is a JSX element"), JSX.div()],
      }).make()
    )
  ).toBe("<>\n\tThis is a JSX element\n\t<div/>\n</>");
});

test("jsx-body-with-child", () => {
  expect(
    stringfy(
      JSX.fragment({
        child: JSX.text("This is a JSX element"),
      }).make()
    )
  ).toBe("<>\n\tThis is a JSX element\n</>");
});

test("jsx-body-complex", () => {
  expect(
    stringfy(
      JSX.fragment({
        child: JSX.fragment({
          child: JSX.fragment({
            child: JSX.fragment({
              child: JSX.fragment({
                children: [JSX.text("line 1"), JSX.text("line 2")],
              }),
            }),
          }),
        }),
      }).make()
    )
  ).toBe(
    "<>\n\t<>\n\t\t<>\n\t\t\t<>\n\t\t\t\t<>\n\t\t\t\t\tline 1\n\t\t\t\t\tline 2\n\t\t\t\t</>\n\t\t\t</>\n\t\t</>\n\t</>\n</>"
  );
});
