import { ColiBuilder } from "../../builder";
import {
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "../../declarations/import";

export class ImportFrom extends ColiBuilder {
  static declare(params: {
    from: string;
    default?: ImportDefaultSpecifier;
    imports?: ImportSpecifier;
  }): ImportDeclaration {
    return new ImportDeclaration({
      source: params.from,
    });
  }
}
