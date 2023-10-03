import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { fetcher } from "../../services/fetcher";
import Head from "next/head";

import NewsPageComponent from "../../components/News/NewsPageComponent";

function NewsPage({ article }) {
  const { t } = useTranslation("news");

  return (
    <>
      <Head>
        <title>{t("news.title")}</title>
        <meta property="og:description" content={t("news.description")} />
      </Head>
      <NewsPageComponent article={article} />
    </>
  );
}

export async function getServerSideProps({ params, locale }) {
  const { slug } = params;
  const articlesResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?populate=*&locale=${locale}`
  );
  const articlesResponseSlug = articlesResponse.data.find(
    (obj) => obj.attributes.slug === slug
  );

  return {
    props: {
      article: articlesResponseSlug,

      ...(await serverSideTranslations(locale, ["news", "common", "meta"])),
    },
  };
}

export default NewsPage;
