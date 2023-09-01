import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import Image from "next/image";

// images
import about from "../../public/img/about.png";

import Title from "../ui/Title";
import BtnComponent from "../ui/BtnComponent";
const Home = () => {
  const { t } = useTranslation("common");
  return (
    <main>
      <Container>
        <Row>
          <Title locale="common" text="test" hr={true} />
        </Row>
        <Col xs="12" md="3" className="d-flex flex-column align-items-center">
          <Image src={about} alt="about" className="img-fluid" />
        </Col>
        <Row className="mt-4">
          <Col xs="12" md="9" className="d-flex flex-column align-items-center">
            {t("testText", {
              returnObjects: true,
            }).map((item, index) => (
              <p key={index} className="text blue pb-3">
                {item}
              </p>
            ))}

            <BtnComponent
              link={"#"}
              text="testBtn"
              bg="bg-blue"
              color="white"
            />
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
