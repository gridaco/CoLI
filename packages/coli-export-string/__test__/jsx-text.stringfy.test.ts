import { JSX, JSXText } from "coli";
import { stringfy } from "../lib";

test("jsx with escaping text", () => {
  const obj = JSX.div({
    child: JSX.text("This is a\nnew line"),
  }).make();
  const str = stringfy(obj);
  console.log(obj);
  console.log("str", str);
  expect(str).toBe(`<div>
\tThis is a<br/>
new line
</div>`);
});

// test("jsxtext", () => {
//   expect(stringfy(new JSXText("This is a\nnew line"))).toBe(
//     //
//     `This is a<br/>
// new line`
//   );
// });
