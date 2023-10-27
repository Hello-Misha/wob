import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

const EventsOverview = ({ event }) => {
  const { t } = useTranslation("members_space");

  return (
    <Link href={`/events/` + event.attributes.slug}>
      <section className="py-4 hover:shadow-lg rounded">
        <Container>
          <Row>
            <Col md="3">
              <Image
                src={event.attributes.mainImg.data.attributes.url}
                className={`img-fluid mb-3`}
                width={event.attributes.mainImg.data.attributes.width}
                height={event.attributes.mainImg.data.attributes.height}
                alt=""
              />
            </Col>
            <Col md="2" className="d-flex flex-col justify-between">
              <h3 className="h4-title lipstick mb-2">
                {event.attributes.displayTitle}
              </h3>
              <p className="text blue my-3">
                <span className="text-bold">{t("events.card.location")}</span>
                {event.attributes.location}
              </p>
            </Col>
            <Col md="4" className="d-flex flex-col justify-between">
              <p className="text blue my-3">{event.attributes.spoiler}</p>
              <div>
                <p className="text blue my-3">
                  <span className="text-bold">{t("events.card.date")}</span>
                  {event.attributes.date}
                </p>
                <p className="text blue my-3">
                  <span className="text-bold">{t("events.card.time")}</span>
                  {event.attributes.time.slice(0, -3)}
                </p>
              </div>
            </Col>
            <Col md="3">
              <Link href={event.attributes.slug}>
                <div className="btnSolid bg-lipstick hover:shadow-lg">
                  <span className="text white">{t("events.card.btn")}</span>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Link>
  );
};

export default EventsOverview;
