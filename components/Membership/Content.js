import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import CarouselComponent from "../ui/CarouselWithText";

import Volchko from "../../public/img/membership/M_Oksana_Volchko.png";
import Makarenko from "../../public/img/membership/M_Olena_Makarenko.png";
import Sinichkina from "../../public/img/membership/M_Lana_Sinichkina.png";
import Kaznacheeva from "../../public/img/membership/M_Nadiia_Kaznacheeva.png";
import Tomash from "../../public/img/membership/M_Olga_Tomash.png";
import Kvashnina from "../../public/img/membership/M_Maryna_Kvashnina.png";

const Content = () => {
  const { t } = useTranslation("membership");
  const imgArr = [
    Volchko,
    Makarenko,
    Sinichkina,
    Kaznacheeva,
    Tomash,
    Kvashnina,
  ];
  return (
    <section>
      <Container>
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
