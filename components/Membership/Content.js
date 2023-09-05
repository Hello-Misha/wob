import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../ui/Title";
import CarouselComponent from "../ui/CarouselWithText";

import imgage from "../../public/img/membership/Iryna-Rubis.png";
const Content = () => {
  const { t } = useTranslation("membership");
  const imgArr = [imgage, imgage, imgage];
  return (
    <section>
      <Container>
        <Row className="mb-5">
          <Title locale="membership" text="title" hr={true} />
        </Row>
        {/* background */}
        <Row className="mb-5">
          <Col xs="12">
            <h3 className="h3-title  lipstick  pb-3">{t("main.title")}</h3>
            {t("main.text", { returnObjects: true }).map((item, index) => (
              <p key={index} className="text blue pb-3">
                {item}
              </p>
            ))}
          </Col>
          <Col xs="12">
            <h3 className="h3-title  lipstick  pb-3">{t("members.title")}</h3>

            <CarouselComponent
              locale={"membership"}
              imgArr={imgArr}
              textContent={"members.carousel"}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Content;
