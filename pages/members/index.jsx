import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { fetcher } from "../../services/fetcher";
import Head from "next/head";
import { useFetchUser } from "../../services/authContext";

import MembersOverview from "../../components/Members/MembersOverview";
import Unauthorized from "../../components/Auth/Unauthorized";

import {
  getTokenFromLocalCookie,
  getTokenFromServerCookie,
} from "../../services/auth";

function MembersPage({ members }) {
  const { t } = useTranslation("meta");

  const { user, loading } = useFetchUser();
  return (
    <>
      <Head>
        <title>{t("members.title")}</title>
        <meta property="og:description" content={t("members.description")} />
      </Head>

      {user ? <MembersOverview members={members} /> : <Unauthorized />}
    </>
  );
}

export default MembersPage;

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
      ...(await serverSideTranslations(locale, [
        "members_space",
        "common",
        "meta",
      ])),
    },
  };
}
