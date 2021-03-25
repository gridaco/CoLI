import { ColiBuilder } from "../../builder";
import { ImportDeclaration } from "../../declarations/import";

export class Import extends ColiBuilder {
  static declareFrom(params: { source: string }): ImportDeclaration {
    return new ImportDeclaration({
      source: "",
    });
  }
}
