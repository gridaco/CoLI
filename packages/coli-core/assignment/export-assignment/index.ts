import { Identifier } from "../../ast";
import { _ASSIGNMENT_EXPORT } from "../../_internal";
import { Assignment } from "../assignment.base";
export class ExportAssignment extends Assignment {
  constructor(readonly identifier: Identifier) {
    super(_ASSIGNMENT_EXPORT);
  }
}
