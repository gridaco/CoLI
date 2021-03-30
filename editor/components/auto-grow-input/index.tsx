import styled from "@emotion/styled";
import React from "react";

function AutoGrowInput(props: {
  placeholder: string;
  onChange: (v: string, n: string, k?: any) => void;
  name: string;
  ix?: number;
}) {
  return (
    <Wrapper>
      <input
        name={props.name}
        onChange={(e) => props.onChange(e.target.value, e.target.name, props.ix)}
        size={props.placeholder?.length | 4}
        onInput={(e: any) =>
          (e.target.parentNode.dataset.value = e.target.value)
        }
        placeholder={props.placeholder ? props.placeholder : "none"}
      />
    </Wrapper>
  );
}

export default AutoGrowInput;

const Wrapper = styled.div`
  display: inline-grid;
  background-color: #fbfbfb;
  border-radius: 4px;
  margin-left: 7px;

  &::after,
  input {
    width: auto;
    min-width: 1em;
    grid-area: 1 / 2;
    padding: 3px 7px;
    font-size: 12px;
    appearance: none;
    background: none;
    border: none;
    color: #6b6b6b;
    outline: none;

    &::placeholder {
      color: #d2d2d2;
    }
  }

  &::after {
    content: attr(data-value) " ";
    visibility: hidden;
    white-space: pre-wrap;
  }
`;
