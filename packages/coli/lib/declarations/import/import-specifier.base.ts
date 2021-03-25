import { AstSpefifier } from "../../ast";

export abstract class BaseImportSpecifier extends AstSpefifier {
  constructor(readonly type: string) {
    super(type);
  }
  local: {
    name: string;
  };
}
