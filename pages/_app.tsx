/* eslint-disable react/jsx-props-no-spreading */

import type { AppProps } from "next/app";

// styled components
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

// components
import Layout from "../components/Layout/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
);

export default MyApp;
