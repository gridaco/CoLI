import { ColiObject, ColiStatementType } from "../_abstract";

export abstract class Statement extends ColiObject {
  constructor(readonly __type: ColiStatementType) {
    super(__type);
  }
}
