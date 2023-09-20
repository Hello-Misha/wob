import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import about from "../../public/img/about.png";

import Title from "../ui/Title";
import BtnComponent from "../ui/BtnComponent";

const Mission = () => {
  const { t } = useTranslation("home");
  return (
    <section className="my-5">
      <Container>
        <Row>
          <Title locale="home" text="mission.title" hr={true} />
        </Row>
        <Row>
          <Col xs="12" lg="3" className="order-lg-2 order-1">
            <Image src={about} alt="about" className="img-fluid mx-auto mb-3" />
          </Col>
          <Col xs="12" lg="9" className="order-md-1 order-2 textContainer">
            <p className="text blue pb-3">{t("mission.text.t1")}</p>
            <p className="text-bold blue pb-3">{t("mission.text.t2")}</p>
            {t("mission.text.t2_ol", { returnObjects: true }).map(
              (item, index) => (
                <ol key={index}>
                  <li className="mb-3">
                    <span className="text-bold blue">{`${index + 1}. `}</span>
                    <span className="text-bold blue">{`${item.start} `}</span>
                    <span className="text blue">{item.text}</span>
                  </li>
                </ol>
              )
            )}
            <p className="text blue pb-3">{t("mission.text.t3")}</p>
            <p className="text blue pb-3">{t("mission.text.t4")}</p>
            <BtnComponent
              locale="home"
              link="/mission"
              btnType={null}
              btnText="mission.btn"
              classes={"mx-auto"}
              bg="bg-blue"
              color="white"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Mission;
