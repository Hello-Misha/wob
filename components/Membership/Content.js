import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import Title from "../ui/Title";
import CarouselComponent from "../ui/CarouselWithText";
import Text from "../ui/Text";

import image from "../../public/img/membership/Iryna-Rubis.png";
const Content = () => {
  const { t } = useTranslation("membership");
  const imgArr = [image, image, image];
  return (
    <section>
      <Container>
        <Row className="mb-5">
          <Title locale="membership" text="title" hr={true} />
        </Row>

        <Row className="mb-5">
          <Col xs="12">
            <h3 className="h3-title  lipstick  pb-3">{t("main.title")}</h3>
            <Text
              locale="membership"
              text="main.text"
              link="#"
              btnType={null}
              btnText="main.btn"
              bg="bg-lipstick"
              color="white"
            />
          </Col>
          <Row className="mb-5">
            <Col xs="12">
              <h3 className="h3-title  lipstick  mt-5">{t("members.title")}</h3>

              <CarouselComponent
                locale={"membership"}
                imgArr={imgArr}
                textContent={"members.carousel"}
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default Content;
