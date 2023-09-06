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
            <Row className="gx-5">
              <Col xs="12" md="3" className={`mx-auto `}>
                <Image
                  className="img-fluid d-block mx-auto"
                  src={imgArr[index]}
                  placeholder="blur"
                  width={250}
                  height={250}
                  alt="Slide"
                />

                <h3 className="h3-title text-center lipstick">
                  {t(item.name)}
                </h3>
                <p className="text-italic text-center blue pb-3">
                  {t(item.title)}
                </p>
              </Col>
              <Col xs="12" md="9" className="">
                <div className={`${classes.border}`}>
                  <h2 className="h1-title text-left lipstick">“</h2>
                  <p className="text-italic blue pb-3">{t(item.quote)}</p>
                  <h2 className="h1-title text-right lipstick">”</h2>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
