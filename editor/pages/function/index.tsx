import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { CodePreview } from "../../components/code-preview";
import FunctionDeclaration from "../../components/declarations/function";
import { useDeclarationState } from "../../context/DeclarationContext";
import { useRecoilState } from 'recoil';
import { currentDeclarationAtom } from "../../states/declaration.state";

function CoLiFunctionDemoPage() {
  // const [declaration, setDeclaration] = useRecoilState({
  //   key : "function-declaration",
  //   // get: ({ get }) => {}
  // })

  useEffect(() => {
  }, [])

  return (
    <Wrapper>
      <div style={{ display: "inline-flex" }}>
        <FunctionDeclaration />
        <CodePreview />
      </div>
    </Wrapper>
  );
}

export default CoLiFunctionDemoPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
