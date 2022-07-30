import { ColiObject, _abstract } from "@coli.codes/core";

export class JsxBaseElement extends ColiObject {
  constructor(readonly __type: _abstract.ColiJsxElementType) {
    super(__type);
  }
}
