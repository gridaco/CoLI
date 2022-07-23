import TsDoc from "../index";

const code = `import Widget from "{package-name}"; ....`;

const d = new TsDoc();

const docstring = d
  .blok(
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
  )
  .toString();
