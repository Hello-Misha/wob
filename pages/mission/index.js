import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Head from "next/head";

import Mission from "../../components/views/Mission";

function MissionPage() {
  const { t } = useTranslation("meta");
  return (
    <>
      <Head>
        <title>{t("mission.title")}</title>
        <meta property="og:description" content={t(`mission.description`)} />
      </Head>
      <Mission />
    </>
  );
}

export default MissionPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["mission", "common", "meta"])),
    },
  };
}
