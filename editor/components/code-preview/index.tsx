import React from "react";
import styled from "@emotion/styled";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { useRecoilValue } from "recoil";
import { stringfy, StringfyLanguage } from "@coli.codes/export-string";
import { currentColiEditorOption } from "../../states/option.state";

// const valueToInterfaceData = (data: object) => {
//   let code = [];

//   Object.keys(data).map((i) => {
//     switch (typeof data[i]) {
//       case "string":
//         code.push(`${i} : "${data[i]}"`);
//         break;
//       case "object":
//         let objectCodes = {};
//         objectCodes[i] = [];
//         if (data[i] instanceof Array) {
//           data[i].map((_i) => {
//             let tempArray = [];
//             const { type, ...result } = _i;

//             Object.keys(result).map((key) => {
//               tempArray.push(`${key} : ${JSON.stringify(_i[key])}`);
//             });

//             objectCodes[i].push(
//               `  new ${_i.type}({\n\t\t${tempArray.join(",\n\t\t")}\n\t  })`
//             );
//           });
//           code.push(
//             `${i} : [\n\t${Object.values(objectCodes[i]).join(",\n\t")}\n\t]`
//           );
//         }
//         break;
//       default:
//         break;
//     }
//   });

//   return code.join(",\n  ");
// };

// const codePreviewCommentInterface = (params: {
//   interface: any;
//   value: object;
//   lauangue: StringfyLanguage;
// }) => {
//   let comments = "";
//   if (params.lauangue === "typescript") {
//     comments = `/***
// new ${params.interface.name}({
//   ${valueToInterfaceData(params.value)}
// })
// */`;
//   } else if (params.lauangue === "python") {
//     comments = `'''
// new ${params.interface.name}({
//   ${valueToInterfaceData(params.value)}
// })
// '''`;
//   } else if (params.lauangue === "dart") {
//     comments = `/**
// new ${params.interface.name}({
//   ${valueToInterfaceData(params.value)}
// })
// */`;
//   }

//   return comments;
// };

export function CodePreview(props: {
  value: any;
  customValue?: any;
  interface: any;
  codeHandler: (args: {
    class: any;
    value: object;
    language: StringfyLanguage;
  }) => void;
}) {
  const { language } = useRecoilValue(currentColiEditorOption);

  return (
    <Wrapper showLineNumbers language={language} wrapLines>
      {`
${
  props.customValue
    ? stringfy(new props.interface(...props.customValue), {
        language: language,
      })
    : stringfy(new props.interface(props.value), {
        language: language,
      })
}

${props.codeHandler({ class: props.interface, value: props.value, language })}
    `}
    </Wrapper>
  );
}

const Wrapper = styled(SyntaxHighlighter)`
  flex: 2;

  font-size: 0.9em !important;
  margin: 0em !important;
  padding: 1em 0em !important;
`;
