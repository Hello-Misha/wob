import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import CarouselComponent from "../ui/Carousel";

// import women from "../../public/img/women.png";
import women from "../../public/img/home/WoB-founders.png";

import Text from "../ui/Text";

const Hero = () => {
  const { t } = useTranslation("home");
  const imgArr = [women, women, women];
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <h1 className="h1-title lipstick mb-4">{t("hero.title")}</h1>
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
          <Col lg="6">
            <CarouselComponent imgArr={imgArr} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
