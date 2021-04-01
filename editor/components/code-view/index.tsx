import React from 'react'
import styled from "@emotion/styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { format } from '@coli/export-string';
function CodeView(props : {
  id : number
}) {
  return (
    <Wrapper showLineNumbers language="typescript" wrapLines>
{`
  ${format('console.log(123)')}
`}
    </Wrapper>
  )
}

export default CodeView

const Wrapper = styled(SyntaxHighlighter)`
  margin-top: 50px !important;
  flex: 2;

  font-size: 0.9em !important;
  padding: 1em 0em !important;
`;
