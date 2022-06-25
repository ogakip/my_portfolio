import { GlobalStyles } from "../styles/global";
import Head from "next/head"

interface AppProps {
  Component: any;
  pageProps: any;
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}