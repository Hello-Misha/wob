import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Head from "next/head";

// import Home from "@/components/Home/Home";

function HomePage() {
  const { t } = useTranslation("common");
  return (
    <>
      <Head>
        {/* <title>{t("homePage.title")}</title>
        <meta property="og:description" content={t(`homePage.description`)} /> */}
      </Head>
      <h1>{t("test")}</h1>
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
