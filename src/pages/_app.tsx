import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from "recoil";
import type { AppProps } from 'next/app';
import { theme } from '../chakra/theme';
import Layout from '../components/Layout/Layout';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <RecoilRoot>
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  </RecoilRoot>
  )

export default MyApp
