import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import CarouselComponent from "../ui/Carousel";

// import women from "../../public/img/women.png";
import women from "../../public/img/women.png";
import women2 from "../../public/img/WoB-founders.png";
import test from "../../public/img/membership/Anna-Derevyanko.png";
import test2 from "../../public/img/membership/Oksana-Strashna.png";

import Text from "../ui/Text";

const Hero = () => {
  const { t } = useTranslation("home");
  const imgArr = [women, women2, test, test2];
  return (
    <section>
      <Container>
        <Row className="d-flex align-bottom justify-around">
          <Col
            xs="12"
            lg="6"
            xl="5"
            xxl="6"
            className="d-flex flex-col justify-center mb-5"
          >
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
          <Col xs="12" lg="6" className="d-flex flex-column justify-end">
            <CarouselComponent imgArr={imgArr} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
