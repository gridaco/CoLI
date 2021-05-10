import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import DeclartionTitle from "./common/title";
import { useSetRecoilState, useRecoilValue } from "recoil";
import AutoGrowInput from "../auto-grow-input";
import {
  currentDeclarationAtom,
  importDeclarationAtom,
} from "../../states/declaration.state";
import CodeBlock from "../code-block";
import {
  ImportDeclaration as ImportClass,
  ImportDefaultSpecifier,
  ImportSpecifier,
  CommentExpression,
} from "coli";
import { CodePreview } from "../code-preview";
import { stringfy, StringfyLanguage } from "@coli.codes/export-string";
import { currentColiEditorOption } from "../../states/option.state";

export interface ImportDeclaration {
  specifiers?: Array<ImportDefaultSpecifier | ImportSpecifier>;
  source: string;
}

const fields = [
  {
    label: "default import",
    lookup: "ImportDefaultSpecifier",
  },
  {
    label: "import named",
    lookup: "ImportSpecifier",
  },
  {
    label: "from",
    lookup: "source",
  },
];

const returnExampleImportCode = (args: {
  class: ImportClass | any;
  value: ImportDeclaration;
  language: StringfyLanguage;
}) => {
  const { class: variableClass, value, language } = args;
  let code = "";
  code += `new ${variableClass.name}(\n"${JSON.stringify(value)}\n)`;
  const comment = new CommentExpression({ style: "multi-line", content: code });
  return stringfy(comment, { language });
};

function ImportDeclaration(props: { id: number; data: ImportDeclaration }) {
  const { data, id } = props;
  const setGlobalImportDeclarationValue = useSetRecoilState(
    importDeclarationAtom
  );
  const { language } = useRecoilValue(currentColiEditorOption);
  const [declarationValue, setDeclarationValue] = useState<ImportDeclaration>({
    specifiers: [],
    source: "",
  });

  useEffect(() => {
    setDeclarationValue(data);
  }, [data]);

  useEffect(() => {
    // TODO CHANGE PUSH CURRENT DATA ( Declaration Value )
    // setDeclaration(data);
  }, [declarationValue]);

  const mappingTextField = (fleid?: string) => {
    const MappingOneArray = Array(1).fill(null);
    if (fleid === "ImportDefaultSpecifier") {
      return MappingOneArray;
    } else if (fleid === "source") {
      return MappingOneArray;
    } else if (fleid === "ImportSpecifier") {
      const list = data.specifiers.reduce((acc, i) => {
        if (i.type != "ImportDefaultSpecifier") {
          acc.push(i);
        }
        return acc;
      }, []);

      if (list.length === 0) {
        return MappingOneArray;
      }
      return list;
    } else {
      return [];
    }
  };

  const onChangeDeclarationValue = (v: string, n: string, k?: number) => {
    const prevDefaultData =
      data.specifiers[
        data.specifiers
          .map((i) => i.type === "ImportDefaultSpecifier")
          .indexOf(true)
      ];
    const prevSpecifierData = data.specifiers.filter(
      (data) => data.type != "ImportDefaultSpecifier"
    );

    if (n === "ImportDefaultSpecifier") {
      setDeclarationValue((d) => ({
        ...d,
        specifiers: [
          new ImportDefaultSpecifier({
            local: v || prevDefaultData.local.name,
          }),
          ...(prevSpecifierData as []),
        ],
      }));
    } else if (n === "ImportSpecifier") {
      const [prev, next] = v.split(" as ");
      setDeclarationValue((d) => {
        const specifiers = d.specifiers.filter(
          (i) => i instanceof ImportSpecifier
        );
        specifiers[k] = new ImportSpecifier({
          import: prev,
          local: next || prev,
        });
        return {
          ...d,
          specifiers: [prevDefaultData, ...specifiers],
        };
      });
    } else if (n === "source") {
      setDeclarationValue((d) => ({ ...d, source: v }));
    }
  };

  const getTextFieldPlacholder = (lookup: string, idx: number) => {
    const defaultData =
      data.specifiers[
        data.specifiers
          .map((i) => i.type === "ImportDefaultSpecifier")
          .indexOf(true)
      ];
    const specifierData = data.specifiers.filter(
      (data) => data instanceof ImportSpecifier
    );

    if (lookup === "source") {
      return data[lookup];
    } else if (lookup === "ImportSpecifier") {
      // TODO CLEAN UP
      let placeholder: any = specifierData[idx] as ImportSpecifier;
      if (
        placeholder?.imported.name == null ||
        placeholder?.local.name == null
      ) {
        return null;
      }
      if (placeholder?.imported.name != placeholder?.local.name) {
        placeholder = `${placeholder?.imported.name} as ${placeholder?.local.name}`;
      } else if (placeholder?.imported.name === placeholder?.local.name) {
        placeholder = `${placeholder?.local.name}`;
      }
      return placeholder;
    } else if (lookup === "ImportDefaultSpecifier") {
      return defaultData != null ? defaultData.local.name : null;
    }
  };

  return (
    <Positioner>
      <Wrapper>
        <DeclartionTitle lable="IMPORT DECLARTIONS" />
        <CodeBlock>
          {stringfy(new ImportClass(declarationValue), {
            language,
          })}
        </CodeBlock>
        <Body>
          {fields.map((i, _) => (
            <div className="coli-values" key={_}>
              <label>{i.label}</label>
              {mappingTextField(i.lookup).map((_, ix) => (
                <AutoGrowInput
                  placeholder={getTextFieldPlacholder(i.lookup, ix)}
                  onChange={onChangeDeclarationValue}
                  name={i.lookup}
                  ix={ix}
                />
              ))}
            </div>
          ))}
        </Body>
      </Wrapper>
      <CodePreview
        value={declarationValue}
        interface={ImportClass}
        codeHandler={returnExampleImportCode}
      />
    </Positioner>
  );
}

export default ImportDeclaration;

const Positioner = styled.div`
  display: flex;
  margin-top: 32px;
  padding: 17px 0px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;

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
  }
`;
