import { ColiBuilder } from "@coli.codes/core";
import {
  ImportDeclaration,
  ImportDefaultSpecifier,
  ImportSpecifier,
} from "@coli.codes/core";

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

  __finalize() {
    throw "not implemented";
  }
}
