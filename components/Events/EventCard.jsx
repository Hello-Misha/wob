import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";

const EventsOverview = ({ event }) => {
  return (
    <Link href={`/events/` + event.attributes.slug}>
      <section>
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
            <Col md="3">
              <h3 className="h3-title lipstick mb-2">
                {event.attributes.displayTitle}
              </h3>
              <p className="text blue my-3">{event.attributes.location}</p>
            </Col>
            <Col md="4">
              <p className="text blue my-3">{event.attributes.spoiler}</p>
              <p className="text blue my-3">{event.attributes.date}</p>
              <p className="text blue my-3">
                {event.attributes.time.slice(0, -3)}
              </p>
              {console.log(event.attributes.date)}
            </Col>
          </Row>
        </Container>
      </section>
    </Link>
  );
};

export default EventsOverview;
