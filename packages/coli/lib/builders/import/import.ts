import { ColiBuilder } from "../../builder/builder";
import { ImportDeclaration } from "../../declarations/import";

export class Import extends ColiBuilder {
  declare(source: string): ImportDeclaration {
    return new ImportDeclaration({
      source: source,
    });
  }
}
