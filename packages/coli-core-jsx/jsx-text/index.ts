import { Literal } from "@coli.codes/core";
import { ColiObject } from "@coli.codes/core/_abstract";
import { _JSX_TEXT } from "@coli.codes/core/_internal/node-name";

export class JSXText extends ColiObject implements Literal {
  constructor(readonly value: string) {
    super(_JSX_TEXT);
    this.raw = value;
  }
  raw: string;
}
