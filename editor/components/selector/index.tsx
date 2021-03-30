import React, { useState } from "react";
import styled from "@emotion/styled";

export default function Selector(props: {
  value: any;
  options: Array<{ label: string; value: any }>;
  onChange: (v: any) => void;
}) {
  return (
    <Wrapper
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    >
      {props.options.map((i, _) => (
        <option value={i.value}>{i.label}</option>
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

  color: #6b6b6b;
`;
