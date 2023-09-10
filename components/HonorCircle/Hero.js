import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import BtnTransparent from "../ui/BtnTransparent";

const Hero = () => {
  const { t } = useTranslation("honorCircle");
  return (
    <section>
      <Container>
        <Row>
          {t("main.btn", { returnObjects: true }).map((item, index) => (
            <Col key={index} xs="12" md="4">
              <BtnTransparent
                link={`#hc-${index}`}
                btnText={item}
                locale={"honorCircle"}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
