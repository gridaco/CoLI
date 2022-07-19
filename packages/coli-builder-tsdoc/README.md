# CoLI TSDoc

`@coli.codes/tsdoc` is a package for writing tsdoc programmatically. If you are looking for tsdoc parser, please refer to [`@microsoft/tsdoc`](https://tsdoc.org/pages/packages/tsdoc/)

## Usage

```bash
yarn add @coli.codes/tsdoc
```

```ts
import d from "@coli.codes/tsdoc";

const code = `import Widget from "{package-name}"; ....`;

d.blok(
  d.list(
    d.li(d.link("Open in Grida", "https://grida.co/:project/:widget/props")),
    d.li(d.link("Open in Figma", "https://www.figma.com/file/...")),
    d.li(d.link("Learn more", "https://grida.co/docs/widget-props"))
  ),
  d.br(),
  d.example(d.code("tsx", code)),
  d.block(d.hr(), d.text("meta infos:"), d.hr()),
  d.block(
    d.hr(),
    d.text("preview"),
    d.br(),
    d.image("preview", "cdn.grida.co/widgets/{widget-name}/preview.png"),
    d.hr()
  )
);
```

outputs..

````ts
/**
 * - [Open in Grida](https://grida.co/:project/:widget/props)
 * - [Open in Figma](https://www.figma.com/file/{file-id}/{file-name})
 * - [Learn more](https://grida.co/docs/widget-props)
 *
 * @example
 * ```tsx
 * import Widget from "{package-name}";
 *
 * function (){
 *  return <Widget
 *    onClick={(e?) => {}}
 *    title="..."
 *    description="..."
 *  />;
 * }
 * ```
 *
 * ---
 * meta infos:
 * ---
 *
 * ---
 * preview
 *
 * ![preview](cdn.grida.co/widgets/{widget-name}/preview.png)
 * ---
 */
function _() {}
````

## References

- [tsdoc playground](https://microsoft.github.io/tsdoc/)
