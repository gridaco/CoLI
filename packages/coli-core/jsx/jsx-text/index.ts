import { Literal } from "../../ast";
import { ColiObject } from "../../_abstract";
import { _JSX_TEXT } from "../../_internal/node-name";

export class JSXText extends ColiObject implements Literal {
  constructor(readonly value: string) {
    super(_JSX_TEXT);
    this.raw = value;
  }
  raw: string;
}
