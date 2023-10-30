import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
import { fetcher } from "../../services/fetcher";
import Head from "next/head";
import { useFetchUser } from "../../services/authContext";
import Member from "../../components/Members/MemberPage";
import Unauthorized from "../../components/Auth/Unauthorized";

function MemberPage({ member }) {
  const { user, loading } = useFetchUser();
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

      {user ? <Member member={member} /> : <Unauthorized />}
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

export default MemberPage;
