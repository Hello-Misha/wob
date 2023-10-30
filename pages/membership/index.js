import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Head from "next/head";

import Membership from "../../components/views/Membership";

function MissionPage() {
  const { t } = useTranslation("meta");
  return (
    <>
      <Head>
        <title>{t("membership.title")}</title>
        <meta property="og:description" content={t(`membership.description`)} />
      </Head>
      <Membership />
    </>
  );
}

export default MissionPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "membership",
        "common",
        "meta",
      ])),
    },
  };
}
