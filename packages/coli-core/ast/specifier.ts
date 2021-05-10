import { ColiObject, ColiSpecifierType } from "../_abstract";

export abstract class AstSpefifier extends ColiObject {
  constructor(readonly type: ColiSpecifierType) {
    super(type);
  }
}
