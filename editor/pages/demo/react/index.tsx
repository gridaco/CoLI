import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getParameters } from "codesandbox/lib/api/define";
import useAsyncEffect from "../../../utils/use-async-effect";
import axios from "axios";
function CoLiReactDemoPage() {
  const [iframeUrl, setIframeUrl] = useState("");

  useAsyncEffect(async () => {
    const parameters = getParameters({
      files: {
        "index.js": {
          content: "console.log('Hello ColI')",
          isBinary: true,
        },
      },
    });

    const {
      data: { sandbox_id },
    } = await axios.post(
      // api docs https://codesandbox.io/docs/api
      `https://codesandbox.io/api/v1/sandboxes/define?json=1&parameters=${parameters}`
    );

    setIframeUrl(
      // embed options https://codesandbox.io/docs/embedding
      `https://codesandbox.io/embed/${sandbox_id}?editorsize=0&hidenavigation=1&codemirror=1&theme=light&previewwindow=browser&view=preview&expanddevtools=1`
    );
  }, []);

  return (
    <Wrapper>
      <div style={{ flex: 1 }} />
      <iframe
        src={iframeUrl}
        style={{ flex: 1, height: "90vh", border: "none" }}
      />
    </Wrapper>
  );
}

export default CoLiReactDemoPage;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  .declarations-view {
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
