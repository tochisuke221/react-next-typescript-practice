import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from '../../theme';
debugger
const MyApp = ({ Component, pageProps }: AppProps) => {
  debugger

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
