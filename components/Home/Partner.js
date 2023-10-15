import { Container, Row, Col } from "react-bootstrap";
import Title from "../ui/Title";

import Image from "next/image";

import WobUk from "../../public/img/home/partner-wob.png";
import Belgium_wob from "../../public/img/home/Belgium_wob.png";
import EWOB from "../../public/img/home/EWOB.png";
import Quotient from "../../public/img/home/Quotient.png";

const Partner = () => {
  const partnersArr = [WobUk, Belgium_wob, EWOB, Quotient];
  return (
    <section className="my-5 ">
      <Container>
        <Row>
          <Col xs="12" md="auto" className="mx-auto my-auto">
            <Title locale="home" text="partner" hr={false} />
          </Col>
        </Row>
        <Row className="d-flex align-items-center">
          {partnersArr.map((item, index) => (
            <Col xs="3" md="3" className="mx-auto" key={index}>
              <Image
                src={item}
                alt="partner logo"
                className="img-fluid mx-auto"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Partner;
