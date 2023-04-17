//  Internal Dependencies
import Layout from "@/components/Layout/Layout";

//  Stylesheet
import "../styles/globals.css";

//  Types & Interfaces
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
