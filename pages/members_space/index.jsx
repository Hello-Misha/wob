import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { fetcher } from "../../services/fetcher";
import Head from "next/head";
import { useFetchUser } from "../../services/authContext";

import Unauthorized from "components/Auth/Unauthorized";
import MembersSpace from "components/MembersSpace/MembersSpace";

import {
  getTokenFromLocalCookie,
  getTokenFromServerCookie,
} from "services/auth";

function MembersSpacePage() {
  const { t } = useTranslation("meta");

  const { user, loading } = useFetchUser();
  return (
    <>
      <Head>
        <title>{t("members_space.title")}</title>
        <meta
          property="og:description"
          content={t("members_space.description")}
        />
      </Head>
      {user ? <MembersSpace /> : <Unauthorized />}
    </>
  );
}

export default MembersSpacePage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "honorCircle",
        "common",
        "meta",
      ])),
    },
  };
}
