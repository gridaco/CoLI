import React from "react";
import styled from "@emotion/styled";
import DeclartionTitle from "./common/title";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const valueList = [
  {
    label: "import default",
    max: Array(1).fill(null),
    holder: "default",
    width: 45
  },
  {
    label: "import named",
    max: Array(5).fill(null),
    holder: "none",
    width: 30
  },
  {
    label: "from",
    max: Array(1).fill(null),
    holder: "module",
    width: 45
  },
];

/**
 *
 * @interface
 * name : string
 * params : object
 * returnType: Type;
 * content: string
 *
 */
function FunctionDeclaration() {
  const keydownResponsiveInputSize = (e: any, limit) => {
    var value = e.target.value;
    const div = document.createElement("div");
    div.innerText = value;
    div.id = "virtual_dom";

    document.querySelector(".coli-values")?.append(div);

    var inputWidth = document.querySelector("#virtual_dom")?.clientWidth;

    if (inputWidth != undefined) {
      document.querySelector("#virtual_dom")?.remove();
      if (inputWidth > limit) {
        console.log(inputWidth);
        e.target.style.width = inputWidth + "px";
      } else {
        e.target.style.width = limit + "px";
      }
    }
  };

  return (
    <Wrapper>
      <DeclartionTitle lable="IMPORT DECLARTIONS" />
      <SyntaxHighlighter language="javascript">
        {`import default, { default as styled, p1 as p1, p2 as p2 } from 'module' `}
      </SyntaxHighlighter>
      <Body>
        {valueList.map((i) => (
          <div className="coli-values">
            <label>{i.label}</label>
            {i.max.map((_) => (
              <input
                placeholder={i.holder}
                onKeyDown={e => keydownResponsiveInputSize(e, i.width)}
                style={{ width: i.width }}
              />
            ))}
          </div>
        ))}
      </Body>
    </Wrapper>
  );
}

export default FunctionDeclaration;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  padding-left: 40px;

  pre {
    width: 70%;
  }
`;

const Body = styled.div`
  margin-top: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;

  .coli-values {
    margin: 10px 0px;
    display: flex;
    align-items: center;

    label {
      flex: 1;
      font-size: 14px;
      color: #959595;
    }

    input {
      background-color: #fbfbfb;
      border-radius: 4px;
      border: none;
      outline: none;
      padding: 3px 7px;
      margin-right: 4px;

      color: #6b6b6b;

      &::placeholder {
        color: #d2d2d2;
      }
    }
  }
`;
