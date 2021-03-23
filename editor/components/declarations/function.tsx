import React, { useState } from "react";
import styled from "@emotion/styled";
import DeclartionTitle from "./common/title";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ImportDeclaration } from "../../class/import";

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
  const [declarationValue, setDeclarationValue] = useState([
    {
      label: "import default",
      holder: "default",
      width: 45,
      value: Array(1).fill(""),
    },
    {
      label: "import named",
      holder: "none",
      width: 40,
      value: Array(5).fill(""),
    },
    {
      label: "from",
      holder: "module",
      width: 45,
      value: Array(1).fill(""),
    },
  ]);

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
        e.target.style.width = inputWidth + "px";
      } else {
        e.target.style.width = limit + "px";
      }
    }
  };

  const onChangeDeclarationValue = (e, ix, inputIndex) => {
    setDeclarationValue((prev) => {
      const data = prev.map((i, idx) => {
        if (idx === ix && inputIndex === 0) {
          i.value[0] = e.target.value;
        }

        if (ix === 1 && idx === ix) {
          i.value[inputIndex] = e.target.value;
        }
        return i;
      });

      return [...data];
    });
  };

  console.log(declarationValue[1]);

  return (
    <Wrapper>
      <DeclartionTitle lable="IMPORT DECLARTIONS" />
      <SyntaxHighlighter language="javascript">
        {new ImportDeclaration({
          importDefault: declarationValue[0].value,
          _import: [
            declarationValue[1].value.map((i) => {
              if (i.includes("as")) {
                const splitItem = i.split(" as ");
                return { name: splitItem[0], as: splitItem[1] };
              } else {
                return i;
              }
            }),
          ],
          from: declarationValue[2].value,
        }).call()}
      </SyntaxHighlighter>
      <Body>
        {declarationValue.map((i, ix) => (
          <div className="coli-values">
            <label>{i.label}</label>
            {i.value.map((_, idx) => (
              <input
                onChange={(e) => onChangeDeclarationValue(e, ix, idx)}
                placeholder={i.holder}
                onKeyDown={(e) => keydownResponsiveInputSize(e, i.width)}
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
    font-size: 0.8em !important;
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
