import { Container, Row, Col } from "react-bootstrap";
import Title from "../ui/Title";

import Image from "next/image";

import partnerLogo from "../../public/img/home/partner-wob.png";

const Partner = () => {
  return (
    <section className="my-5 ">
      <Container>
        <Row>
          <Col xs="12" md="9" className="my-auto">
            <Title locale="home" text="partners" hr={false} />
          </Col>
          <Col xs="3" className="mx-auto">
            <Image
              src={partnerLogo}
              alt="partner logo"
              className="img-fluid mx-auto"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Partner;
