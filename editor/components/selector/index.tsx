import React from "react";
import styled from "@emotion/styled";

export default function Selector(props: { options: Array<string> }) {
  return (
    <Wrapper>
      {props.options.map((i, _) => (
        <option value={i}>{i}</option>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.select`
  display: inline-grid;
  background-color: #fbfbfb;
  border-radius: 4px;
  outline: none;
  border: none;
  margin-left: 7px;
  padding: 1px 2px;
`;
