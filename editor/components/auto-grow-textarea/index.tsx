import styled from "@emotion/styled";
import React from "react";

export default function AutoGrowTextArea(props: {
  placeholder: string;
  onChange: (v: string, n: string, k?: number) => void;
  name?: string;
  ix?: number;
  value: any;
}) {

  return (
    <Wrapper>
      <textarea
        name={props.name || ""}
        onChange={(e) =>
          props.onChange(e.target.value, e.target.name, props.ix)
        }
        onInput={(e: any) =>
          (e.target.parentNode.dataset.value = e.target.value)
        }
        placeholder={props.placeholder ? props.placeholder : "none"}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-grid;
  width: 90%;
  height: auto;
  background-color: #fbfbfb;
  border-radius: 4px;
  margin-top: 16px;
  align-items: center;

  &::after,
  textarea {
  height: 100%;
    width: auto;
    min-width: 1em;
    grid-area: 1 / 1;
    padding: 3px 7px;
    font-size: 12px;
    appearance: none;
    background: none;
    border: none;
    color: #6b6b6b;
    outline: none;
    resize: none;
    white-space: pre-wrap;
    overflow: hidden;

    &::placeholder {
      color: #6b6b6b;
    }
  }

  &::after {
    content: attr(data-value) " ";
    visibility: hidden;
    white-space: pre-wrap;
  }
`;
