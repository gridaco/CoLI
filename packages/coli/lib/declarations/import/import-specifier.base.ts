import { AstSpefifier } from "../../ast";

export abstract class BaseImportSpecifier extends AstSpefifier {
  local: {
    name: string;
  };
}
