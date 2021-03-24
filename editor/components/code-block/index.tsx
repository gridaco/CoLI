import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

/**
 *
 * @param children code Script,
 * @param language code language, default is "javascript"
 * @returns
 */
function CodeBlock(props: { children: React.ReactNode; language?: string }) {
  const { children, language = "javascript" } = props;
  return <SyntaxHighlighter language={language}>{children}</SyntaxHighlighter>;
}

export default CodeBlock;
