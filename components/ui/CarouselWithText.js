import { useTranslation } from "next-i18next";
import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col } from "react-bootstrap";

const CarouselComponent = ({ locale, imgArr, textContent }) => {
  const { t } = useTranslation(locale);

  const carousel = t("members.carousel", { returnObjects: true });
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
              <Col
                xs="12"
                md="7"
                lg="8"
                className="d-flex flex-col md:flex-col-reverse"
              >
                <div>
                  <h3 className="h3-title lipstick mt-2">{t(item.name)}</h3>
                  <p className="text-italic blue mb-5">{t(item.title)}</p>
                </div>
                <div>
                  <h2 className="super-title text-left lipstick -mb-10">“</h2>
                  {console.log(carousel[index].quote)}
                  {carousel[index].quote.map((item, index) => (
                    <p key={index} className="text-i-l blue -mt-5 -pt-5">
                      {item}
                    </p>
                  ))}

                  <h2 className="super-title text-right lipstick -mt-5">”</h2>
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
