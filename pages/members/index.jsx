import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { fetcher } from "../../services/fetcher";
import Head from "next/head";

import MembersOverview from "../../components/Members/MembersOverview";

function NewsOverviewPage({ members }) {
  const { t } = useTranslation("meta");
  return (
    <>
      <Head>
        <title>{t("news.title")}</title>
        <meta property="og:description" content={t("news.description")} />
      </Head>
      <MembersOverview members={members} />
      {console.log(members)}
    </>
  );
}

export default NewsOverviewPage;

export async function getStaticProps({ locale }) {
  const membersResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/members?populate=*&locale=${locale}`
  );
  console.log(membersResponse);
  return {
    props: {
      members: membersResponse,
      ...(await serverSideTranslations(locale, ["home", "common", "meta"])),
    },
  };
}
