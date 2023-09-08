import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";
//numbers
import img1 from "../../public/img/membership/1.svg";
import img2 from "../../public/img/membership/2.svg";
import img3 from "../../public/img/membership/3.svg";
import img4 from "../../public/img/membership/4.svg";
import img5 from "../../public/img/membership/5.svg";
import img6 from "../../public/img/membership/6.svg";
import img7 from "../../public/img/membership/7.svg";
//gallery
import gl1 from "../../public/img/membership/gl-1.png";
import gl2 from "../../public/img/membership/gl-2.png";
import gl3 from "../../public/img/membership/gl-3.png";
import gl4 from "../../public/img/membership/gl-4.png";
import gl5 from "../../public/img/membership/gl-5.png";
import gl6 from "../../public/img/membership/gl-6.png";

const Criteria = () => {
  const { t } = useTranslation("membership");
  const numbers = [img1, img2, img3, img4, img5, img6, img7];
  const gallery = [gl1, gl2, gl3, gl4, gl5, gl6];
  return (
    <section>
      <Container>
        <Row>
          <Col xs="12">
            <p className="text blue">{t("criteria.top")}</p>
          </Col>
        </Row>
        <Row className="my-5">
          <Col md="7">
            <Container>
              {t("criteria.li", { returnObjects: true }).map((item, index) => (
                <Row key={index} className="my-5">
                  <Col md="2">
                    <Image
                      src={numbers[index]}
                      alt={index + 1}
                      className="mx-auto img-fluid p-1"
                    />
                  </Col>
                  <Col md="10">
                    <h3 className="h3-title lipstick mb-2">{item.title}</h3>
                    <p className="text blue mb-2">{item.text}</p>
                  </Col>
                </Row>
              ))}
            </Container>
          </Col>
          <Col md="5" className="d-flex flex-wrap">
            {gallery.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`business woman №${index}`}
                className="img-fluid m-2"
              />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Criteria;
