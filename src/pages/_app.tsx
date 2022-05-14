import '../styles/globals.css';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from "recoil";
import Layout from '../components/Layout/Layout';

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat, sans-serif;',
    body: 'Montserrat, sans-serif;',
  },
})

const MyApp = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </RecoilRoot>
)

export default MyApp
