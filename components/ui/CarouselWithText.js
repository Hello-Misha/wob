import { useTranslation } from "next-i18next";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";

import classes from "./#UI.module.scss";

const CarouselComponent = ({ locale, imgArr, textContent }) => {
  const { t } = useTranslation(locale);
  return (
    <Carousel>
      {t(textContent, { returnObjects: true }).map((item, index) => (
        <Carousel.Item key={index}>
          <Container>
            <Row className="gx-5">
              <Col xs="12" md="3" className={`mx-auto ${classes.border_right}`}>
                <Image
                  className="img-fluid d-block "
                  src={imgArr[index]}
                  placeholder="blur"
                  width={300}
                  height={300}
                  alt="Slide"
                />

                <h3 className="h3-title text-center lipstick">
                  {t(item.name)}
                </h3>
                <p className="text-italic text-center blue pb-3">
                  {t(item.title)}
                </p>
              </Col>
              <Col xs="12" md="9">
                <h2 className="h1-title text-left lipstick">“</h2>
                <p className="text-italic blue pb-3">{t(item.quote)}</p>
                <h2 className="h1-title text-right lipstick">”</h2>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
