import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from '../styles/global';
import light from '../styles/themes/light';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
