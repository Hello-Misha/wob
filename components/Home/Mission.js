import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import about from "../../public/img/about.png";

import Title from "../ui/Title";
import Text from "../ui/Text";

const Mission = () => {
  const { t } = useTranslation("home");
  return (
    <section className="my-5">
      <Container>
        <Row>
          <Title locale="home" text="mission.title" hr={true} />
        </Row>
        <Row>
          <Col xs="12" md="3" className="order-md-2 order-1">
            <Image src={about} alt="about" className="img-fluid mb-3" />
          </Col>
          <Col xs="12" md="9" className="order-md-1 order-2">
            <Text
              locale="home"
              text="mission.text"
              link="#"
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
