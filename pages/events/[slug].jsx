import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { useTranslation } from "next-i18next";
import { fetcher } from "../../services/fetcher";
import Head from "next/head";
import { useFetchUser } from "services/authContext";
import Event from "components/Events/EventPage";
import Unauthorized from "components/Auth/Unauthorized";

function NewsPage({ event }) {
  const { user, loading } = useFetchUser();
  if (!event) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{event.attributes.metaTitle}</title>
        <meta
          property="og:description"
          content={event.attributes.metaDescription}
        />
      </Head>

      {user ? <Event event={event} /> : <Unauthorized />}
    </>
  );
}
export async function getStaticProps({ params, locale }) {
  const { slug } = params;
  const eventsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/events?populate=*&locale=${locale}`
  );
  const eventsResponseSlug = eventsResponse.data.find(
    (obj) => obj.attributes.slug === slug
  );

  return {
    props: {
      event: eventsResponseSlug,

      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
export const getStaticPaths = async () => {
  const eventsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/events?populate=*`
  );

  const paths = eventsResponse.data.map((event) => ({
    params: { slug: events.attributes.slug },
    locale: event.locales, // Use the string locale directly
  }));

  return {
    paths,
    fallback: true,
  };
};

export default NewsPage;
