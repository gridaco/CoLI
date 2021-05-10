import { ColiExpressionType, ColiObject } from "../_abstract";

export class Expression extends ColiObject {
  constructor(readonly __type: ColiExpressionType) {
    super(__type);
  }
}
