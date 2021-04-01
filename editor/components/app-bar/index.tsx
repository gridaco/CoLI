import React from "react";
import styled from "@emotion/styled";

function AppBar() {
  return (
    <Wrapper>
      <img src="/assets/icons/menu.svg" />
      <img className="coli-logo" src="/assets/images/coli-shape.png" />
    </Wrapper>
  );
}

export default AppBar;

const Wrapper = styled.div`
  padding: 8px 3px;
  display: flex;
  align-items: center;
  
  .coli-logo {
    width: 30px;
    margin-left: calc(10em - 27px);
  }
`;
