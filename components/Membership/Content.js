import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import CarouselComponent from "../ui/CarouselWithText";
import Text from "../ui/Text";

import Rubis from "../../public/img/membership/Iryna-Rubis.png";
import Derevyanko from "../../public/img/membership/Anna-Derevyanko.png";
import Strashna from "../../public/img/membership/Oksana-Strashna.png";
import Kaestner from "../../public/img/membership/Lisa-Kaestner.png";
const Content = () => {
  const { t } = useTranslation("membership");
  const imgArr = [Rubis, Derevyanko, Strashna, Kaestner];
  return (
    <section>
      <Container>
        {/* <Row className="mb-5">
          <Title locale="membership" text="title" hr={true} />
        </Row> */}

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
      </Container>
    </section>
  );
};

export default Content;
