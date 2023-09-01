import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import classes from "./#Home.module.scss";

import BtnComponent from "../ui/BtnComponent";

import join from "../../public/img/home/join.png";

const JoinUs = () => {
  const { t } = useTranslation("home");
  return (
    <section className={`${classes.bgFullWidth} my-5`}>
      <Container className={classes.bgFullWidth__container}>
        <Row className="d-flex justify-between align-items-center">
          <Col xs="12" md="4">
            <Image
              src={join}
              alt="Join Us"
              className="img-fluid mb-3 overflow-hidden	"
            />
          </Col>
          <Col xs="12" md="8" className="py-5 textContainer">
            <h2 className="h2-title white mb-4">{t("joinUs.title")}</h2>
            <BtnComponent
              locale="home"
              link="#"
              btnType={null}
              btnText="joinUs.btn"
              bg="bg-blue"
              color="white"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinUs;
