import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { fetcher } from "../../services/fetcher";
import Head from "next/head";
import { useFetchUser } from "../../services/authContext";
import EventP from "components/Events/EventsPage";
import Unauthorized from "components/Auth/Unauthorized";

function EventPage({ event }) {
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

      {user ? <EventP event={event} /> : <Unauthorized />}
    </>
  );
}

export async function getStaticProps({ params, locale }) {
  const { slug } = params;
  const eventsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/events?populate=*,speaker.speakerPhoto&locale=${locale}`
  );
  const eventsResponseSlug = eventsResponse.data.find(
    (obj) => obj.attributes.slug === slug
  );

  return {
    props: {
      event: eventsResponseSlug,
      ...(await serverSideTranslations(locale, [
        "members_space",
        "common",
        "meta",
      ])),
    },
  };
}

export const getStaticPaths = async () => {
  const eventsResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/events?populate=*`
  );

  const paths = eventsResponse.data.map((event) => ({
    params: { slug: event.attributes.slug },
    locale: event.attributes.locale, // Use the string locale directly
  }));

  return {
    paths,
    fallback: true,
  };
};

export default EventPage;
