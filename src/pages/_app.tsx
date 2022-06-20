import { Head, NextScript } from "next/document";
import { GlobalStyles } from "../styles/global";

interface AppProps {
  Component: any;
  pageProps: any;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}