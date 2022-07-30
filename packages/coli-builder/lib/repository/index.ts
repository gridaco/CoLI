import { ColiBuilder } from "@coli.codes/core";

export class Repository extends ColiBuilder {
  git: string;

  __finalize() {
    throw "not implemented";
  }
}
