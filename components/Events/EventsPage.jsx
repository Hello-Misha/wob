import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { RichTextRenderer } from "services/richTextReducer";

function EventP({ event }) {
  const { t } = useTranslation("members_space");
  return (
    <main>
      <Container>
        <Row>
          <Col xs="12" md="8" className="mx-auto">
            <h1 className="h1-title lipstick">
              {event.attributes.displayTitle}
            </h1>
            <p className="text blue ">{event.attributes.spoiler}</p>
            <hr className="my-4" />
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="8" className="mx-auto ">
            <Row>
              <Col xs="6" md="3">
                <h4 className="text-bold">{t("events.page.dateNtime")}</h4>
                <p className="text blue my-3">{event.attributes.date}</p>
                <p className="text blue my-3">
                  {event.attributes.time.slice(0, -3)} -{" "}
                  {event.attributes.endingTime.slice(0, -3)}
                </p>
              </Col>
              <Col xs="6" md="3">
                <h4 className="text-bold">{t("events.page.location")}</h4>
                <p className="text blue my-3">{event.attributes.location}</p>
              </Col>
              <Col xs="6" md="3">
                <h4 className="text-bold">{t("events.page.address")}</h4>
                <p className="text blue my-3">{event.attributes.address}</p>
              </Col>
              <Col xs="6" md="3">
                <h4 className="text-bold">{t("events.page.price")}</h4>
                <p className="text blue my-3">{event.attributes.price}</p>
              </Col>
            </Row>
            {/* <hr className="my-4" /> */}
            <Row>
              <Col xs="8" md="3" className="mx-auto">
                <Link href={event.attributes.registrationLink}>
                  <div className="btnSolid bg-lipstick hover:shadow-lg">
                    <span className="text white">{t("events.page.btn")}</span>
                  </div>
                </Link>
              </Col>
              <hr className="my-4" />
            </Row>
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="8" className="mx-auto mt-3">
            {RichTextRenderer(event.attributes.text)}
            {/* <Link href={event.attributes.registrationLink}>
              <div className="btnSolid bg-lipstick hover:shadow-lg">
                <span className="text white">{t("events.page.btn")}</span>
              </div>
            </Link> */}
            <hr className="my-4" />
          </Col>
        </Row>
        <Row>
          <Col xs="12" md="8" className="mx-auto">
            <h2 className="h2-title lipstick">{t("events.page.speakers")}</h2>
            {event.attributes.speaker.map((item, index) => (
              <Row key={index} className="mb-3">
                <Col xs="12" md="8">
                  <h3 className="h3-title blue">{item.speakerName}</h3>
                  <p className="text blue">{item.speakerBio}</p>
                </Col>
              </Row>
            ))}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default EventP;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["members_space, common"])),
    },
  };
}
