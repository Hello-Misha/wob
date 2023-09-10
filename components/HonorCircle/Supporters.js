import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import Title from "../ui/Title";

const Supporters = () => {
  const { t } = useTranslation("honorCircle");

  return (
    <section id="hc-1">
      <Container>
        <Row>
          <Col xs="12">
            <Title locale="honorCircle" text="supporters.title" hr={true} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Supporters;
