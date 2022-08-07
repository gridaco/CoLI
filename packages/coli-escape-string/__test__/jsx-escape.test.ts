import { escapeJsxStringV2 as e } from "../escape-jsx-string-v2";

// test("escape bracket in jsx with bracket", () => {
//   expect(
//     e(`import { Home } from "./grida/home";`, {
//       use: "brace",
//     })
//   ).toBe(`import {"{"} Home {"}"} from "./grida/home";`);
// });

// test("escape simple bracets in jsx with bracket", () => {
//   expect(
//     e(`{{`, {
//       use: "brace",
//     })
//   ).toBe(`import {"{"} Home {"}"} from "./grida/home";`);
// });

// test("escape complex bracets in jsx with bracket", () => {
//   expect(
//     e(`{}{{ { {  {  }}} } }}} } }} {  }} {{ { {}  { }}}}`, {
//       use: "brace",
//     })
//   ).toBe(`import {"{"} Home {"}"} from "./grida/home";`);
// });

// test("escape bracket in jsx special char", () => {
//   expect(
//     e(`import { Home } from "./grida/home";`, {
//       use: "entity",
//     })
//   ).toBe(`import {"{"} Home {"}"} from "./grida/home";`);
// });

test("format jsx text content with line break", () => {
  expect(
    e(`\n\n\nline1\nline2\nline3\n\n\n\n`, {
      use: "entity",
    })
  ).toBe(
    `<br/>\n<br/>\n<br/>\nline1<br/>\nline2<br/>\nline3<br/>\n<br/>\n<br/>\n<br/>\n`
  );
});
