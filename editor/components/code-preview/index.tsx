import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { constSelector, useRecoilValue } from "recoil";
import { stringfy, StringfyLanguage } from "../../../packages/export-string";
import { currentColiEditorOption } from "../../states/option.state";

export function CodePreview(props: { value: object; interface: any }) {
  const editorOption = useRecoilValue(currentColiEditorOption);

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
${stringfy(new props.interface(props.value), {
  language: editorOption.lauangue as StringfyLanguage,
})}

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
