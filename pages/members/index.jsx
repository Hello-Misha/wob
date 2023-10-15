import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { fetcher } from "../../services/fetcher";
import Head from "next/head";
import { useFetchUser } from "../../services/authContext";

import MembersOverview from "../../components/Members/MembersOverview";

import {
  getTokenFromLocalCookie,
  getTokenFromServerCookie,
} from "../../services/auth";

function NewsOverviewPage({ members }) {
  const { t } = useTranslation("meta");

  const { user, loading } = useFetchUser();
  return (
    <>
      <Head>
        <title>{t("news.title")}</title>
        <meta property="og:description" content={t("news.description")} />
      </Head>
      {user && <MembersOverview members={members} />}
      {console.log(user)}
      {console.log(members)}
    </>
  );
}

export default NewsOverviewPage;

export async function getServerSideProps({ req, locale }) {
  const jwt =
    typeof window !== "undefined"
      ? getTokenFromLocalCookie()
      : getTokenFromServerCookie(req);

  const membersResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/members?populate=*&locale=${locale}`,
    jwt
      ? {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      : ""
  );

  return {
    props: {
      members: membersResponse,
      ...(await serverSideTranslations(locale, ["home", "common", "meta"])),
    },
  };
}