import React from "react";
import styled from "@emotion/styled";
import EditorViewHeader from "../components/header/editor-view-header";
import CodeViewHeader from "../components/header/code-view-header";
import CodeHighLighter from "../components/code-highlighter";
import CodeBlock from "../components/code-block";
import CodeView from "../components/code-view";

function EditorTemplate(props: {
  example: string;
  children: React.ReactNode;
  editorNode: Array<any>;
}) {
  return (
    <Wrapper>
      <EditorArea>
        <EditorViewHeader />
        <CodeHighLighter>{props.example}</CodeHighLighter>
        {props.children}
      </EditorArea>
      <CodeArea>
        <CodeViewHeader />
        <Blank h={42} />
        {props.editorNode.map((_, ix) => (
          <CodeView id={ix} />
        ))}
      </CodeArea>
    </Wrapper>
  );
}

export default EditorTemplate;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const EditorArea = styled.div`
  flex: 1;
  padding-top: 35px;
  padding-left: 10em;
`;

const CodeArea = styled.div`
  background-color: #fbfbfb;
  flex: 1;
  padding-top: 35px;
  padding-right: 10em;
`;

const Blank = styled.div<{ h: number }>`
  height: ${(p) => p.h}px;
  width: 1px;
`;
