import React from "react";
import styled from "@emotion/styled";
import CommentExpression, {
  CommentExpression as CommentExpressionInterface,
} from "../../../components/expressions/comment";

const importDefaultData: {
  example: string;
  declarations: CommentExpressionInterface[];
} = {
  example: `// hello coli editor`,
  declarations: [
    {
      style: "single-line",
      content: "single-line comment demo",
    },
    {
      style: "multi-line",
      content: "multi-line comment demo \\n\n _markdown_ **also** `supported`",
    },
  ],
};

function CoLiCommentDemoPage() {
  return (
    <Wrapper>
      <div className="expressions-view">
        {importDefaultData.declarations.map((i, ix) => (
          <CommentExpression id={ix} data={i} key={ix} />
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
