import React from 'react'
import styled from "@emotion/styled";

function CodeViewHeader() {
  return (
    <Wrapper>
      
    </Wrapper>
  )
}

export default CodeViewHeader

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
