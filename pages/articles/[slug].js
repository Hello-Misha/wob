import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetcher } from "../../services/fetcher";
import Head from "next/head";

import NewsPageComponent from "../../components/News/NewsPageComponent";

function NewsPage({ article }) {
  return (
    <>
      <Head>
        <title>{article.attributes.metaTitle}</title>
        <meta
          property="og:description"
          content={article.attributes.metaDescription}
        />
      </Head>
      <NewsPageComponent article={article} />
    </>
  );
}

export async function getServerSideProps({ params, locale }) {
  const { slug } = params;
  const articlesResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*&locale=${locale}`
  );
  const articlesResponseSlug = articlesResponse.data.find(
    (obj) => obj.attributes.slug === slug
  );

  return {
    props: {
      article: articlesResponseSlug,

      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}

export default NewsPage;
