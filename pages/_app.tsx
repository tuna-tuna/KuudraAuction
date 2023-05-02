import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider, ThemeConfig, extendTheme } from '@chakra-ui/react';

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false
  }
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={extendTheme(theme)}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
