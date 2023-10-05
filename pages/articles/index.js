import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { fetcher } from "../../services/fetcher";
import Head from "next/head";

import NewsOverview from "../../components/News/NewsOverviewComponent";

function NewsOverviewPage({ articles }) {
  const { t } = useTranslation("meta");
  return (
    <>
      <Head>
        <title>{t("news.title")}</title>
        <meta property="og:description" content={t("news.description")} />
      </Head>
      <NewsOverview articles={articles} />
    </>
  );
}

export default NewsOverviewPage;

export async function getStaticProps({ locale }) {
  const articlesResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*&locale=${locale}`
  );
  console.log(
    articlesResponse.data.find((obj) => obj.attributes.slug === "test")
  );
  return {
    props: {
      articles: articlesResponse,
      ...(await serverSideTranslations(locale, ["news", "common", "meta"])),
    },
  };
}
