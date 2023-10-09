import { useState } from "react";
import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";

import Title from "../ui/Title";

import Rubis from "../../public/img/membership/Iryna-Rubis.png";
import Kaestner from "../../public/img/membership/Lisa-Kaestner.png";
import Derevyanko from "../../public/img/membership/Anna-Derevyanko.png";
import Voloshina from "../../public/img/membership/Voloshina.png";
import Strashna from "../../public/img/membership/Oksana-Strashna.png";
import Chopivsky from "../../public/img/membership/Alexa-Chopivsky.png";
import Bielkova from "../../public/img/membership/Olga-Bielkova.png";

const Members = ({ classes }) => {
  const { t } = useTranslation("honorCircle");

  const [expandStates, setExpandStates] = useState([]);
  const toggleExpand = (index) => {
    const newExpandStates = [...expandStates];
    newExpandStates[index] = !newExpandStates[index];
    setExpandStates(newExpandStates);
  };

  const linkedin = [
    "",
    "https://www.linkedin.com/in/anna-derevyanko-b5307a1/",
    "https://www.linkedin.com/in/lisa-kaestner-1952341/",
    "https://www.linkedin.com/in/olgabelkova/",
    "https://www.linkedin.com/in/iryna-rubis/",
    "https://www.linkedin.com/in/ostrashna/",
  ];

  const imgArr = [
    Voloshina,
    Derevyanko,
    Kaestner,
    Bielkova,
    Rubis,
    // Chopivsky,
    Strashna,
  ];

  const cards = t("members.cards", { returnObjects: true });

  return (
    <section id="hc-1" className={`my-5 ${classes}`}>
      <Container>
        <Row>
          <Col xs="12">
            <Title locale="honorCircle" text="members.title" hr={false} />
          </Col>
        </Row>

        {cards.map((card, index) => (
          <Container className="my-5" key={index}>
            <Row>
              <Row className="mb-3">
                <Col
                  xs="12"
                  md="4"
                  className="d-flex flex-column justify-between align-items-center"
                >
                  <Image
                    src={imgArr[index]}
                    alt={card.name}
                    placeholder="blur"
                    className="img-fluid"
                  />
                </Col>
                <Col xs="12" md="8">
                  {/* TITLE AND QUOTE */}
                  <Row className="d-flex flex-col md:flex-col-reverse justify-between">
                    {/* TITLE */}
                    <Row className="d-flex align-items-bottom mt-3 md:mt-0">
                      <Row className="d-flex align-items-center ">
                        <Row className="mb-3">
                          <Col xs="9">
                            <h3 className="h3-title lipstick">{card.name}</h3>
                          </Col>
                          <Col xs="3">
                            {linkedin[index] && (
                              <Link href={linkedin[index]} target="_blank">
                                <p className="text-bold lipstick text-right">
                                  Linkedin
                                </p>
                              </Link>
                            )}
                          </Col>
                        </Row>
                        <Row>
                          <Col xs="12">
                            <p className="text-italic blue">{card.title}</p>
                          </Col>
                        </Row>
                      </Row>
                    </Row>
                    {/* QUOTE */}
                    <Row className="mt-3 md:mt-0">
                      <Col xs="12">
                        <h2 className="super-title text-left lipstick -mb-5 -mt-5">
                          “
                        </h2>
                        <p className="text-i-l blue -mt-5 -pt-5">
                          {card.quote}
                        </p>
                        <h2 className="super-title text-right lipstick -my-5 ">
                          ”
                        </h2>
                      </Col>
                    </Row>
                  </Row>
                  {/* BIO */}
                  <Row>
                    <Col xs="12">
                      <h4
                        className={`h4-title blue cursor-pointer my-3`}
                        onClick={() => toggleExpand(index)}
                      >
                        {t("members.bioBtn")}
                      </h4>
                      {expandStates[index] &&
                        card.bio.map((item, index) => (
                          <p key={index} className="text blue mb-3 ">
                            {item}
                          </p>
                        ))}
                      {expandStates[index] && (
                        <hr className={expandStates[index] ? "mt-5" : ""} />
                      )}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Row>
          </Container>
        ))}
      </Container>
    </section>
  );
};

export default Members;
