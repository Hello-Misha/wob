import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import about from "../../public/img/about.png";

import Title from "../ui/Title";
import Text from "../ui/Text";

const Mission = () => {
  return (
    <section className="my-5">
      <Container>
        <Row>
          <Title locale="home" text="mission.title" hr={true} />
        </Row>
        <Row>
          <Col xs="12" lg="3" className="order-lg-2 order-1">
            <Image src={about} alt="about" className="img-fluid mx-auto mb-3" />
          </Col>
          <Col xs="12" lg="9" className="order-md-1 order-2">
            <Text
              locale="home"
              text="mission.text"
              link="/mission"
              btnType={null}
              btnText="mission.btn"
              bg="bg-blue"
              color="white"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Mission;
