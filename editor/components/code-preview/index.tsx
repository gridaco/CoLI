import React from "react";
import styled from "@emotion/styled";

export function CodePreview() {
  return (
    <Wrapper>
      <pre>new Function (test).lll</pre>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  background-color: #424242;

  pre {
    color: #fff;
    margin: 20px;
  }
`;
