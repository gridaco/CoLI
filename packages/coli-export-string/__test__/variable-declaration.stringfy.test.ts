import {
  VariableDeclaration,
  Identifier,
  TypeReference,
  StringLiteral,
} from "coli";
import { stringfy } from "../stringfy";

test("variable declaration with type reference", () => {
  const interfaceId = new Identifier("Props");

  const vardec = new VariableDeclaration("data", {
    kind: "const",
    type: new TypeReference({ typeName: interfaceId }),
    initializer: new StringLiteral("data"),
  });

  const src = stringfy(vardec, {
    language: "typescript",
  });

  expect(src).toBe(`const data: Props = "data";\n`);
});
