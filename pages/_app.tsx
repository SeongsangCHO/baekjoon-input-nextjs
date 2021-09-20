import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme, lightTheme } from "styles/theme";
import Head from "next/head";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [mode, setMode] = useState(false);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mode ? lightTheme : theme}>
        <Head>
          <title>BI</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} mode={mode} setMode={setMode} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
