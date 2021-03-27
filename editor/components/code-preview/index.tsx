import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { constSelector } from "recoil";

export function CodePreview(props: { value: object; interface: any }) {

  const valueToInterfaceData = (data: object) => {
    let code = [];

    Object.keys(data).map((i) => {
      switch (typeof data[i]) {
        case "string":
          code.push(`  ${i} : "${data[i]}"`);
          break;
        case "object":
          //TODO Change [object object] -> real code
          code.push(`  ${i} : ${data[i]}`);
          break;
        default:
          break;
      }
    });
    return code.join(",\n");
  };

  return (
    <Wrapper showLineNumbers language="typescript" wrapLines>
      {`
${new props.interface(props.value).exportAs()}

/**
new ${props.interface.name}({
${valueToInterfaceData(props.value)}
})
*/
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
