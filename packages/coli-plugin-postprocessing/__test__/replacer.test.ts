import Postprocessing from "../index";

test("replacer", () => {
  const replacer = Postprocessing.create();

  const srckey = replacer.reserve("src", "https://example.com/image.png");
  const placeholder = `<image src="${srckey}"/>`;

  // placeholder
  expect(placeholder).toBe(`<image src="${Postprocessing.hash("src")}"/>`);

  // replace with default value (no resolving)
  expect(replacer.replace(placeholder)).toBe(
    `<image src="https://example.com/image.png"/>`
  );

  // after resolve
  replacer.resolve("src", "https://cdn.mysite.com/images/1.png");
  expect(replacer.replace(placeholder)).toBe(
    `<image src="https://cdn.mysite.com/images/1.png"/>`
  );
});
