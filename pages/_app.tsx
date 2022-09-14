import "antd/dist/antd.css";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import LayoutLanding from "../components/layout";
import "../styles/app.scss";
import "../public/styles/mixin.scss";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sparkminds NFT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutLanding>
        <Component {...pageProps} />
      </LayoutLanding>
    </>
  );
}

export default appWithTranslation(MyApp);
