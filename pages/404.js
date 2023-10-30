import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Head from "next/head";

import { useEffect } from "react";
import { useRouter } from "next/router";

function Error() {
  const { t } = useTranslation("meta");

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, [router]);
  return (
    <>
      <Head>
        <title>{t("err.title")}</title>
        <meta property="og:description" content={t("err.description")} />
      </Head>
      <main>
        <div className="h-screen my-5">
          <h1 className="h1-title lipstick my-5">404</h1>
          <h1 className="h1-title lipstick my-5">Someting is going wrong...</h1>
        </div>
      </main>
    </>
  );
}

export default Error;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "meta"])),
    },
  };
}
