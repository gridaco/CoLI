import React, { useState } from "react";
import styled from "@emotion/styled";
import CodeHighLighter from "../code-highlighter";

function CodeBlock() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <Wrapper>
      <Toolkit t={isExpanded ? 32 : 8}>
        <img
          src="/assets/icons/expand.svg"
          onClick={() => setIsExpanded(!isExpanded)}
          style={!isExpanded ? { transform: "rotate(180deg)" } : null}
        />
        <img src="/assets/icons/drag-indicator.svg" />
      </Toolkit>
      {isExpanded && <label>INTERFACE NAME & TYPE</label>}
      <CodeHighLighter>TEST CODE</CodeHighLighter>
    </Wrapper>
  );
}

export default CodeBlock;

const Wrapper = styled.div`
  position: relative;
  min-height: 100px;
  margin-top: 50px;

  label {
    color: #9d9d9d;
    font-size: 12px;
  }
`;

const Toolkit = styled.div<{ t: number }>`
  position: absolute;
  left: -60px;
  top: ${(p) => p.t}px;

  img {
    cursor: pointer;
    transition: all 0.3s ease-out;
  }
`;
