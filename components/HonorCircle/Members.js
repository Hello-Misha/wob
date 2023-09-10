import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";
import Link from "next/link";

import Title from "../ui/Title";

import Rubis from "../../public/img/membership/Iryna-Rubis.png";
import Kaestner from "../../public/img/membership/Lisa-Kaestner.png";
import Derevyanko from "../../public/img/membership/Anna-Derevyanko.png";
// import Strashna from "../../public/img/membership/Oksana-Strashna.png";

const Members = () => {
  const { t } = useTranslation("honorCircle");

  const linkedin = [
    "https://www.linkedin.com/in/iryna-rubis/",
    "https://www.linkedin.com/in/lisa-kaestner-1952341/",
    "https://www.linkedin.com/in/anna-derevyanko-b5307a1/",
  ];

  const imgArr = [Rubis, Kaestner, Derevyanko];

  return (
    <section id="hc-0">
      <Container>
        <Row>
          <Col xs="12">
            <Title locale="honorCircle" text="members.title" hr={true} />
          </Col>
        </Row>
        {t("members.cards", { returnObjects: true }).map((card, index) => (
          <Container className="my-5" key={index}>
            <Row>
              <Col xs="12" md="3">
                <Image src={imgArr[index]} alt={card.name} placeholder="blur" />
              </Col>
              <Col xs="12" md="9">
                <Row>
                  <Col xs="12">
                    <h3 className="h3-title text-left lipstick mb-2">
                      {card.name}
                    </h3>
                  </Col>
                </Row>
                <Row className="d-flex justify-between">
                  <Col xs="9">
                    <p className="text-italic blue pb-3">{card.title}</p>
                  </Col>
                  <Col xs="3">
                    <Link href={linkedin[index]}>
                      <p className="text-bold lipstick text-right">
                        {card.btn}
                      </p>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col xs="12">
                    {card.bio.map((item, index) => (
                      <p key={index} className="text blue">
                        {item}
                      </p>
                    ))}
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <h2 className="super-title text-left lipstick -my-5">“</h2>
              <p className="text-italic blue pb-3 -my-5">{card.quote}</p>
              <h2 className="super-title text-right lipstick -mt-2">”</h2>
            </Row>
          </Container>
        ))}
      </Container>
    </section>
  );
};

export default Members;
