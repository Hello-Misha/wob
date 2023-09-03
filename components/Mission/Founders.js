import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Text from "../ui/Text";

import nina from "../../public/img/home/nina.png";
import olena from "../../public/img/home/olena.png";
import tetiana from "../../public/img/home/tetiana.png";

const Founders = () => {
  const { t } = useTranslation("mission");
  const imgCards = [nina, olena, tetiana];
  return (
    <section className="my-5">
      <Container>
        <Row>
          {/* <h3 className="h3-title  lipstick pb-3">{t("founders.title")}</h3> */}
        </Row>
        <Row className="d-flex justify-content-between">
          {t("founders", {
            returnObjects: true,
          }).map((card, index) => (
            <Col
              xs="12"
              md="4"
              key={index}
              className="d-flex flex-column mx-auto"
            >
              <Image
                src={imgCards[index]}
                alt={card.name}
                placeholder="blur"
                className="mb-2"
              />
              <h3 className="h3-title text-left lipstick">{card.name}</h3>
              <p className="text-italic blue mb-3">{card.title}</p>

              {card.bio.map((bio, index) => (
                <p key={index} className="text blue pb-3">
                  {bio}
                </p>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Founders;
