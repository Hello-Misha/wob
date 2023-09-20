import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import CarouselComponent from "../ui/Carousel";

// import classes from "./#Home.module.scss";

// import Image from "next/image";

import women from "../../public/img/women.png";
import women2 from "../../public/img/WoB-founders.png";
import test from "../../public/img/test.png";
import test2 from "../../public/img/test-2.png";

// import partnerLogo from "../../public/img/home/partner-wob.png";

import Text from "../ui/Text";

const Hero = () => {
  const { t } = useTranslation("home");
  const imgArr = [women, test, test2, women2];
  return (
    <section className="">
      <Container className="">
        <Row className="d-flex  justify-around my-3">
          <Col
            xs="12"
            lg="6"
            xl="6"
            className="d-flex flex-column justify-center"
          >
            <div className="mb-3">
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
            </div>
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
