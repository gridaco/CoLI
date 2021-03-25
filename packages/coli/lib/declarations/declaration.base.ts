import { ColiDeclarationType, ColiObject } from "../_abstract";

export abstract class Declaration extends ColiObject {
  constructor(readonly type: ColiDeclarationType) {
    super(type);
  }
}
