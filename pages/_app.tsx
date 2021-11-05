// next
import type { AppProps } from 'next/app';

// react
import React from 'react';

// styled components
import { ThemeProvider } from 'styled-components';

// components
import Layout from '../components/Layout';

// styles
import GlobalStyle from '../styles/GlobalStyle';
import theme from '../styles/theme';

const MyApp = ({ Component, pageProps }: AppProps) => (
	<ThemeProvider theme={theme}>
		<Layout>
			<GlobalStyle />
			<Component {...pageProps} />
		</Layout>
	</ThemeProvider>
);

export default MyApp;
