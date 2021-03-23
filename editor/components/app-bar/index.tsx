import React from "react";
import styled from "@emotion/styled";

function AppBar() {
  return (
    <Wrapper>
      <IconImage src="/assets/icons/menu.svg" />
    </Wrapper>
  );
}

export default AppBar;

const Wrapper = styled.div`
  height: 30px;
  padding: 3px 6px;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
