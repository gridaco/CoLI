import { ColiExpressionType, ColiObject } from "../_abstract";

export class Expression extends ColiObject {
  constructor(readonly type: ColiExpressionType) {
    super(type);
  }
}
