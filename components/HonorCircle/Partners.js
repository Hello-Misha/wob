import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import Title from "../ui/Title";

const Partners = ({ classes }) => {
  const { t } = useTranslation("honorCircle");

  return (
    <section id="hc-3" className={`my-5 ${classes}`}>
      <Container>
        <Row>
          <Col xs="12">
            <Title locale="honorCircle" text="partners.title" hr={true} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partners;
