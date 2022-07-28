import React from "react";
import styled from "@emotion/styled";
import CommentExpression, {
  CommentExpression as CommentExpressionInterface,
} from "../../../components/expressions/comment";
import { SyntaxKind } from "coli";

const importDefaultData: {
  example: string;
  declarations: CommentExpressionInterface[];
} = {
  example: `// hello coli editor`,
  declarations: [
    {
      style: SyntaxKind.SingleLineCommentTrivia,
      content: "single-line comment demo",
    },
    {
      style: SyntaxKind.MultiLineCommentTrivia,
      content: "multi-line comment demo\n_markdown_ **also** `supported`",
    },
  ],
};

function CoLiCommentDemoPage() {
  return (
    <Wrapper>
      <div className="expressions-view">
        {importDefaultData.declarations.map((i, ix) => (
          <CommentExpression data={i} key={ix} />
        ))}
      </div>
    </Wrapper>
  );
}

export default CoLiCommentDemoPage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .expressions-view {
    width: calc(100% - 175px);
    margin-top: 35px;
    margin-left: 175px;
    flex: 1;

    pre {
      font-size: 12px !important;
      padding-left: 0px !important;
    }
  }
`;
