import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import { motion } from "framer-motion";
import BtnComponent from "../ui/BtnComponent";

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
  const womenImgs = [gl1, gl2, gl3, gl4, gl5, gl6];
  return (
    <section>
      <Container>
        <Row>
          <Col xs="12">
            <h3 className="h3-title  lipstick  my-3">{t("criteria.title")}</h3>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="text blue">{t("criteria.top")}</p>
          </Col>
        </Row>
        {/* DESKTOP-LAYOUT*/}
        <Row className="my-5 desktop-layout">
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
          <Col md="5" className="d-flex flex-col justify-around">
            <Row>
              <Col md="12">
                <Image
                  src={gl1}
                  alt="business women №1"
                  className="img-fluid mx-auto"
                  placeholder="blur"
                />
              </Col>
            </Row>
            <Row>
              <Col md="9">
                <Image
                  src={gl2}
                  alt="business women №2"
                  className="img-fluid mx-auto"
                  placeholder="blur"
                />
              </Col>
            </Row>
            <Row className="d-flex justify-end">
              <Col md="9">
                <Image
                  src={gl4}
                  alt="business women №3"
                  className="img-fluid mx-auto"
                  placeholder="blur"
                />
              </Col>
            </Row>
            <Row>
              <Col md="9">
                <Image
                  src={gl5}
                  alt="business women №5"
                  className="img-fluid mx-auto"
                  placeholder="blur"
                />
              </Col>
            </Row>
            <Row className="d-flex justify-end">
              <Col md="9">
                <Image
                  src={gl3}
                  alt="business women №4"
                  className="img-fluid mx-auto"
                  placeholder="blur"
                />
              </Col>
            </Row>

            <Row>
              <Col md="12">
                <Image
                  src={gl6}
                  alt="business woman №6"
                  className="img-fluid m-2"
                  placeholder="blur"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        {/* MOBILE-LAYOUT*/}
        <Row className="my-5 mobile-layout">
          <Col xs="12">
            {t("criteria.li", { returnObjects: true }).map((item, index) => (
              <Container key={index}>
                <Row className="my-5">
                  <Col xs="3">
                    <Image
                      src={numbers[index]}
                      alt={index + 1}
                      className="mx-auto img-fluid p-1"
                    />
                  </Col>
                  <Col xs="9">
                    <h3 className="h3-title lipstick mb-2">{item.title}</h3>
                    <p className="text blue">{item.text}</p>
                  </Col>
                </Row>
                {womenImgs[index] ? (
                  <Row>
                    <Image
                      src={womenImgs[index]}
                      alt={`business woman №${index}`}
                      className="img-fluid"
                      placeholder="blur"
                    />
                  </Row>
                ) : (
                  ""
                )}
              </Container>
            ))}
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <p className="text blue ">{t("criteria.bottom")}</p>
            <div className="mx-auto mt-5 d-flex justify-center items-center">
              <motion.div
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 1 }}
              >
                <BtnComponent
                  locale="membership"
                  link="https://forms.gle/ZVYDwdHryQcYJATh6"
                  btnText="main.btn"
                  bg="bg-blue"
                  color="white"
                />
              </motion.div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Criteria;
