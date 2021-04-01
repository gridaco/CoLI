import React, { useState } from "react";
import styled from "@emotion/styled";

function EditorViewHeader() {
  const [currentViewType, setCurrentViewType] = useState<"block" | "grid">(
    "block"
  );
  return (
    <Wrapper>
      <span
        style={currentViewType != "block" ? { color: "#C7C7C7" } : null}
        onClick={() => setCurrentViewType("block")}
      >
        Block
      </span>
      <span
        style={currentViewType != "grid" ? { color: "#C7C7C7" } : null}
        onClick={() => setCurrentViewType("grid")}
      >
        Grid
      </span>
    </Wrapper>
  );
}

export default EditorViewHeader;

const Wrapper = styled.div`
  margin-bottom: 100px;

  span {
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;

    &:last-of-type {
      margin-left: 17px;
    }
  }
`;
