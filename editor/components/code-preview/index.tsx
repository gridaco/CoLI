import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useDeclarationState } from "../../context/DeclarationContext";
import { ImportDeclaration } from "../../class/import";

export function CodePreview() {
  const state = useDeclarationState()
  const [code, setCode] = useState("");

  useEffect(() => {
    const { value } = state[0].declarationList[0];
    setCode(
      new ImportDeclaration(value).call()
    );
  }, []);

  return (
    <Wrapper showLineNumbers language="typescript">
      {`
${code}

// new ImportDeclaration({
//    importDefault: “styled”,
//    from: “@emotion/styled”
// })
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
