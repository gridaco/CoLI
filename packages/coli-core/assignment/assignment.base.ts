import { ColiAssignmentType, ColiObject } from "../_abstract";

export abstract class Assignment extends ColiObject {
  constructor(readonly __type: ColiAssignmentType) {
    super(__type);
  }
}
