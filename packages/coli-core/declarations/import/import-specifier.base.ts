import { AstSpefifier } from "../../ast";

export abstract class BaseImportSpecifier extends AstSpefifier {
  constructor(readonly type) {
    super(type);
  }
  local: {
    name: string;
  };
}
