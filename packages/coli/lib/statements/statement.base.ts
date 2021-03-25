import { ColiObject, ColiStatementType } from "../_abstract";

export abstract class Statement extends ColiObject {
  constructor(readonly type: ColiStatementType) {
    super(type);
  }
}
