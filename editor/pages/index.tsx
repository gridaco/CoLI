import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { CodePreview } from "../components/code-preview";
import FunctionDeclaration from "../components/declarations/function";
import { useDeclarationState } from "../context/DeclarationContext";

function MainPage() {
  const state = useDeclarationState()
  return (
    <Wrapper>
      {state[0].declarationList.map((i, ix) => (
        <div style={{ display: "inline-flex"}}>
          <FunctionDeclaration id={i.id} />
          <CodePreview />
        </div>
      ))}
    </Wrapper>
  );
}

export default MainPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
