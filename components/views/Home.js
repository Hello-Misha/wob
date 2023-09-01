import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";

import Hero from "../Home/Hero";

// images
import about from "../../public/img/about.png";

import Title from "../ui/Title";
import Text from "../ui/Text";

const Home = () => {
  // const { t } = useTranslation("common");
  return (
    <main>
      <Hero />
      <Container>
        <Row>
          <Title locale="common" text="test" hr={true} />
        </Row>
        <Row>
          <Col xs="12" md="3" className="order-md-2 order-1">
            <Image src={about} alt="about" className="img-fluid mb-3" />
          </Col>
          <Col xs="12" md="9" className="order-md-1 order-2">
            <Text
              locale="common"
              grid="9"
              text="testText"
              link="#"
              btnType={null}
              btnText="testBtn"
              bg="bg-blue"
              color="white"
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
