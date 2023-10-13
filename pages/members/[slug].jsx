import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
import { fetcher } from "../../services/fetcher";
import Head from "next/head";

import Member from "../../components/Members/MemberPage";

function NewsPage({ member }) {
  if (!member) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{member.attributes.metaTitle}</title>
        <meta
          property="og:description"
          content={member.attributes.metaDescription}
        />
      </Head>

      <Member member={member} />
    </>
  );
}
export async function getStaticProps({ params, locale }) {
  const { slug } = params;
  const membersResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/members?populate=*&locale=${locale}`
  );
  const membersResponseSlug = membersResponse.data.find(
    (obj) => obj.attributes.slug === slug
  );

  return {
    props: {
      member: membersResponseSlug,

      ...(await serverSideTranslations(locale, ["news", "common", "meta"])),
    },
  };
}
export const getStaticPaths = async () => {
  const membersResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/members?populate=*`
  );

  const paths = membersResponse.data.map((member) => ({
    params: { slug: member.attributes.slug },
    locale: member.locales, // Use the string locale directly
  }));

  return {
    paths,
    fallback: true,
  };
};

export default NewsPage;
