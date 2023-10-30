import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { fetcher } from "services/fetcher";
import Head from "next/head";

import Home from "components/views/Home";

function HomePage({ articles }) {
  const { t } = useTranslation("meta");
  return (
    <>
      <Head>
        <title>{t("home.title")}</title>
        <meta property="og:description" content={t(`home.description`)} />
      </Head>
      <Home articles={articles} />
    </>
  );
}

export default HomePage;

export async function getStaticProps({ locale }) {
  const articlesResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*&locale=${locale}`
  );

  return {
    props: {
      articles: articlesResponse,
      ...(await serverSideTranslations(locale, ["home", "common", "meta"])),
    },
  };
}
