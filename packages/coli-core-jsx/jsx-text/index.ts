import { ColiObject, Literal, _internal } from "@coli.codes/core";

export class JSXText extends ColiObject implements Literal {
  constructor(readonly value: string) {
    super(_internal._JSX_TEXT);
    this.raw = value;
  }
  raw: string;
}
