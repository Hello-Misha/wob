import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
import { fetcher } from "../../services/fetcher";
import Head from "next/head";

import NewsPageComponent from "../../components/News/NewsPageComponent";

function NewsPage({ article }) {
  if (!article) {
    // Handle the case when article is undefined
    // For example, you can return a loading state or an error message.
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{article.attributes.metaTitle}</title>
        <meta
          property="og:description"
          content={article.attributes.metaDescription}
        />
      </Head>
      {console.log(article)}
      HELLO WORLD
      <NewsPageComponent article={article} />
    </>
  );
}
// getServerSideProps
// getStaticProps
export async function getStaticProps({ params, locale }) {
  const { slug } = params;
  const articlesResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*&locale=${locale}`
  );
  const articlesResponseSlug = articlesResponse.data.find(
    (obj) => obj.attributes.slug === slug
  );
  // console.log(articlesResponseSlug.attributes);

  return {
    props: {
      article: articlesResponseSlug,

      ...(await serverSideTranslations(locale, ["news", "common", "meta"])),
    },
  };
}
export const getStaticPaths = async () => {
  // Fetch all articles in all locales
  const articlesResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/articles?populate=*`
  );

  // Generate dynamic paths for each article
  const paths = articlesResponse.data.map((article) => ({
    params: { slug: article.attributes.slug },
    locale: article.locales, // Use the string locale directly
  }));

  return {
    paths,
    fallback: true,
  };
};

export default NewsPage;
