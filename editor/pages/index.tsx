import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { CodePreview } from "../components/code-preview";
import FunctionDeclaration from "../components/declarations/function";

function MainPage() {
  const [declarations, setDeclarations] = useState([1]);

  return (
    <Wrapper>
      {declarations.map((i) => (
        <div style={{ display: "inline-flex"}}>
          <FunctionDeclaration />
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
