import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import EventCard from "./EventCard";

function EventsOverview({ events }) {
  const { t } = useTranslation("members_space");

  const filteredArr = events.data.sort(
    (a, b) => new Date(b.attributes.date) - new Date(a.attributes.date)
  );

  return (
    <main>
      <Container className="mb-5 mt-5">
        <h2 className={`h1-title lipstick mb-5 text-center`}>
          {t("events.title")}
        </h2>
        <Row className="mb-3 d-flex justify-content-center">
          {events &&
            events.data.map((event) => (
              <Col lg="12" md="12" key={event.id}>
                <EventCard event={event} />
              </Col>
            ))}
        </Row>
      </Container>
    </main>
  );
}

export default EventsOverview;
