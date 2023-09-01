import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Head from "next/head";

import Home from "../components/views/Home";
// import Home from "@/components/Home/Home";

function HomePage() {
  return (
    <>
      <Head>
        {/* <title>{t("homePage.title")}</title>
        <meta property="og:description" content={t(`homePage.description`)} /> */}
      </Head>
      <Home />
    </>
  );
}

export default HomePage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
