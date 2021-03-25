import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export function CodePreview(props: { value: object; interface: any }) {
  console.log();
  return (
    <Wrapper showLineNumbers language="typescript" wrapLines>
      {`
  ${new props.interface(props.value).call()}

    new ${props.interface.name}(${JSON.stringify(props.value)})
    `}
    </Wrapper>
  );
}

const Wrapper = styled(SyntaxHighlighter)`
  flex: 2;

  font-size: 0.9em !important;
  margin: 0em !important;
  padding: 1em 0em !important;
`;
