import { Identifier } from "@coli.codes/core";

export type JSXIdentifierAcceptedInputType = Html5IdentifierNames | string;

export class JSXIdentifier extends Identifier {
  constructor(name: JSXIdentifierAcceptedInputType) {
    super(name);
  }
}
export const HTML5IDENTIFIERNAMES = [
  "a",
  "abbr",
  "address",
  "applet",
  "area",
  "article",
  "aside",
  "audio",
  "base",
  "bdo",
  "bgsound",
  "blink",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "center",
  "col",
  "colgroup",
  "command",
  "comment",
  "datalist",
  "dd",
  "del",
  "details",
  "dir",
  "div",
  "dl",
  "dt",
  "embed",
  "fieldset",
  "figure",
  "b",
  "big",
  "i",
  "small",
  "tt",
  "font",
  "footer",
  "form",
  "frame",
  "frameset",
  "head",
  "header",
  "hgroup",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "html",
  "isindex",
  "iframe",
  "ilayer",
  "img",
  "input",
  "ins",
  "keygen",
  "label",
  "layer",
  "legend",
  "li",
  "link",
  "map",
  "mark",
  "marquee",
  "menu",
  "meta",
  "meter",
  "multicol",
  "nav",
  "nobr",
  "noembed",
  "noframes",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "cite",
  "code",
  "dfn",
  "em",
  "kbd",
  "samp",
  "strong",
  "var",
  "plaintext",
  "pre",
  "progress",
  "q",
  "ruby",
  "script",
  "section",
  "select",
  "spacer",
  "span",
  "s",
  "strike",
  "style",
  "sub",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "u",
  "ul",
  "video",
  "wbr",
  "wbr",
];
export type Html5IdentifierNames =
  | "a"
  | "abbr"
  | "address"
  | "applet"
  | "area"
  | "article"
  | "aside"
  | "audio"
  | "base"
  | "bdo"
  | "bgsound"
  | "blink"
  | "blockquote"
  | "body"
  | "br"
  | "button"
  | "canvas"
  | "caption"
  | "center"
  | "col"
  | "colgroup"
  | "command"
  | "comment"
  | "datalist"
  | "dd"
  | "del"
  | "details"
  | "dir"
  | "div"
  | "dl"
  | "dt"
  | "embed"
  | "fieldset"
  | "figure"
  | "b"
  | "big"
  | "i"
  | "small"
  | "tt"
  | "font"
  | "footer"
  | "form"
  | "frame"
  | "frameset"
  | "head"
  | "header"
  | "hgroup"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "hr"
  | "html"
  | "isindex"
  | "iframe"
  | "ilayer"
  | "img"
  | "input"
  | "ins"
  | "keygen"
  | "label"
  | "layer"
  | "legend"
  | "li"
  | "link"
  | "map"
  | "mark"
  | "marquee"
  | "menu"
  | "meta"
  | "meter"
  | "multicol"
  | "nav"
  | "nobr"
  | "noembed"
  | "noframes"
  | "noscript"
  | "object"
  | "ol"
  | "optgroup"
  | "option"
  | "output"
  | "p"
  | "param"
  | "cite"
  | "code"
  | "dfn"
  | "em"
  | "kbd"
  | "samp"
  | "strong"
  | "var"
  | "plaintext"
  | "pre"
  | "progress"
  | "q"
  | "ruby"
  | "script"
  | "section"
  | "select"
  | "spacer"
  | "span"
  | "s"
  | "strike"
  | "style"
  | "sub"
  | "sup"
  | "table"
  | "tbody"
  | "td"
  | "textarea"
  | "tfoot"
  | "th"
  | "thead"
  | "time"
  | "title"
  | "tr"
  | "u"
  | "ul"
  | "video"
  | "wbr"
  | "wbr";
