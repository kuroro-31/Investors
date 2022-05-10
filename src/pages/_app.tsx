import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../chakra/theme';
import Layout from '../components/Layout/Layout';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
  )
}

export default MyApp
