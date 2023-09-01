import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";

import women from "../../public/img/women.png";

import Text from "../ui/Text";

const Hero = () => {
  const { t } = useTranslation("home");
  return (
    <section>
      <Container>
        <Row>
          <Col md="6">
            <h1 className="h1-title lipstick">{t("hero.title")}</h1>
            <Text
              locale="home"
              text="hero.text"
              link="#"
              btnType={null}
              btnText="hero.btn"
              bg="bg-blue"
              color="white"
            />
          </Col>
          <Col md="6">
            <Image src={women} alt="founders" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
