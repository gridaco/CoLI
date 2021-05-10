import { ColiElementType, ColiObject } from "../_abstract";

export class Element extends ColiObject {
  constructor(readonly __type: ColiElementType) {
    super(__type);
  }
}
