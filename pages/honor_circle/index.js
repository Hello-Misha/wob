import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Head from "next/head";

import HonorCircle from "../../components/views/HonorCircle";

function MissionPage() {
  const { t } = useTranslation("meta");
  return (
    <>
      <Head>
        <title>{t("hc.title")}</title>
        <meta property="og:description" content={t(`hc.description`)} />
      </Head>
      <HonorCircle />
    </>
  );
}

export default MissionPage;

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
