import { ColiBuilder } from "../../builder";

export class Repository extends ColiBuilder {
  git: string;

  finalize() {
    throw "not implemented";
  }
}
