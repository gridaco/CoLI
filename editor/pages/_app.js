import AppBar from "../components/app-bar/index";
import { Global, css } from "@emotion/react";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Global
        styles={css`
          body {
            margin: 0px;
          }
        `}
      />
      <div>
        <AppBar />
        <Component {...pageProps} />
      </div>
    </React.Fragment>
  );
}

export default MyApp;
