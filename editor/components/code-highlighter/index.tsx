import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styled from "@emotion/styled";

/**
 *
 * @param children code Script,
 * @param language code language, default is "javascript"
 * @returns
 */
function CodeBlock(props: { children: React.ReactNode; language?: string }) {
  const { children, language = "javascript" } = props;
  return <Highligther language={language}>{children}</Highligther>;
}

export default CodeBlock;

const Highligther = styled(SyntaxHighlighter)`
  background-color: #fff !important;
  font-size: 12px !important;
`;
