import { VariableDeclaration } from "coli";
import { Identifier, TypeReference } from "../../coli-core";
import { StringLiteral } from "../../coli-core/ast";
import { stringfy } from "../stringfy";

test("", () => {
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
