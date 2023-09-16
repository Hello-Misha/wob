import { useTranslation } from "next-i18next";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";

import classes from "./#UI.module.scss";

const CarouselComponent = ({ locale, imgArr, textContent }) => {
  const { t } = useTranslation(locale);
  return (
    <Carousel className="my-5">
      {t(textContent, { returnObjects: true }).map((item, index) => (
        <Carousel.Item key={index}>
          <Container>
            <Row className="d-flex align-items-center">
              <Col xs="12" md="5" lg="4">
                <Image
                  className="img-fluid d-block mx-auto"
                  src={imgArr[index]}
                  placeholder="blur"
                  alt="Slide"
                />
              </Col>
              <Col xs="12" md="7" lg="8">
                <h2 className="super-title text-left lipstick -mb-10">“</h2>
                <p className="text-italic blue -mt-5 -pt-5">{t(item.quote)}</p>
                <h2 className="super-title text-right lipstick -mt-5">”</h2>

                <h3 className="h3-title lipstick mt-2">{t(item.name)}</h3>
                <p className="text-italic blue mb-5">{t(item.title)}</p>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
