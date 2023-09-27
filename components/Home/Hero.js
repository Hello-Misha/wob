import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import CarouselComponent from "../ui/Carousel";

import WobFounders from "../../public/img/home/WoB-founders.png";
import test from "../../public/img/test.png";
import test2 from "../../public/img/test-2.png";

import Text from "../ui/Text";

const Hero = () => {
  const { t } = useTranslation("home");
  const imgArr = [WobFounders, test, test2];
  const first = imgArr[0];
  let rest = imgArr.slice(1);
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }
  let shuffledImgs = [first, ...rest];

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
            <CarouselComponent imgArr={shuffledImgs} />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
