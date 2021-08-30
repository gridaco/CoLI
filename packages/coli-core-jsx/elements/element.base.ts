import { ColiJsxElementType, ColiObject } from "@coli.codes/core/_abstract";

export class JsxBaseElement extends ColiObject {
  constructor(readonly __type: ColiJsxElementType) {
    super(__type);
  }
}
