import { ColiBuilder } from "../../builder";

export class Repository extends ColiBuilder {
  git: string;

  __finalize() {
    throw "not implemented";
  }
}
