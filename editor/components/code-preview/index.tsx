import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useDeclarationContext } from "../../context/DeclarationContext";
import { ImportDeclaration } from "../../class/import";

export function CodePreview() {
  const { declarationList } = useDeclarationContext();
  const [code, setCode] = useState("");

  useEffect(() => {
    const { value } = declarationList[0];

    setCode(new ImportDeclaration(value).call());
  }, [declarationList]);

  return (
    <Wrapper showLineNumbers language="typescript">
      {`
${code}
/**
new ImportDeclaration(
  ${JSON.stringify(declarationList[0].value)}
)
*/
    `}
    </Wrapper>
  );
}

const Wrapper = styled(SyntaxHighlighter)`
  flex: 1.5;

  font-size: 0.9em !important;
  margin: 0em !important;
  padding: 1em 0em !important;
`;
