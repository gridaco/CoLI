import AppBar from "../components/app-bar/index";
import { Global, css } from "@emotion/react";
import React from "react";
import Head from "next/head";
import {
  DeclarationProvider,
  useDeclarationState,
} from "../context/DeclarationContext";

function MyApp({ Component, pageProps }) {
  const declarationState = useDeclarationState();

  return (
    <React.Fragment>
      <DeclarationProvider value={declarationState}>
        <Global
          styles={css`
            body {
              margin: 0px;
              font-family: "Roboto", sans-serif;
            }
          `}
        />
        <Head>
          <SeoMeta />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <div>
          <AppBar />
          <Component {...pageProps} />
        </div>
      </DeclarationProvider>
    </React.Fragment>
  );
}

function SeoMeta() {
  return (
    <>
      <meta property="title" content="CoLI Designer" />
      <meta
        property="description"
        content="Code builder for coders. replace your developers with CoLI"
      />
    </>
  );
}

export default MyApp;
