import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { getParameters } from "codesandbox/lib/api/define";
import axios from "axios";
import useAsyncEffect from "../../utils/use-async-effect";
import { useRecoilValue } from "recoil";
import { currentColiEditorOption } from "../../states/option.state";
function CodeSandBoxView(props : {
  source : string
}) {
  const [iframeUrl, setIframeUrl] = useState("");
  const { previewStatus } = useRecoilValue(currentColiEditorOption);
  useAsyncEffect(async () => {
    const parameters = getParameters({
      files: {
        "index.js": {
          content: props.source,
          isBinary: true,
        }
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
    previewStatus === "play" && (
      <Wrapper>
        <iframe src={iframeUrl} />
      </Wrapper>
    )
  );
}

export default CodeSandBoxView;

const Wrapper = styled.div`
  iframe {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    border: none;
  }
`;
