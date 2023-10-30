import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

import Head from "next/head";

import Contacts from "../../components/views/Contacts";

function MissionPage() {
  const { t } = useTranslation("meta");
  return (
    <>
      <Head>
        <title>{t("contacts.title")}</title>
        <meta property="og:description" content={t(`contacts.description`)} />
      </Head>
      <Contacts />
    </>
  );
}

export default MissionPage;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["contacts", "common", "meta"])),
    },
  };
}
