import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../ui/Title";

import classes from "./#Mission.module.scss";

import Image from "next/image";
import womenPic from "../../public/img/mission-woman.png";
import circle from "../../public/img/circle.png";
// import womenPic from "../../public/img/mission-woman-2.png";
const Content = () => {
  const { t } = useTranslation("mission");
  return (
    <>
      <div className={classes.shapeContainer}>
        <Image
          src={circle}
          alt="circle"
          className={`${classes.shapeContainer__circle} img-fluid`}
        />
      </div>
      <section className="overflow-visible ">
        <Container>
          <Row className="mb-5">
            <Title locale="mission" text="pageTitle" hr={true} />
          </Row>
          <Row className="relative">
            <Col xs="12" md="7">
              {/* background */}
              <Row className="mb-5">
                <Col xs="12">
                  <h3 className="h3-title  lipstick  pb-3">
                    {t("background.title")}
                  </h3>
                  <p className="text blue pb-3">{t("background.text")}</p>
                </Col>
              </Row>
              {/* statement */}
              <Row className="mb-5">
                <Col xs="12">
                  <h3 className="h3-title  lipstick pb-3">
                    {t("statement.title")}
                  </h3>
                  <p className="text blue pb-3">{t("statement.text")}</p>
                </Col>
              </Row>
              {/* form */}
              <Row className="mb-5">
                <Col xs="12">
                  <h3 className="h3-title  lipstick pb-3">{t("form.title")}</h3>
                  <p className="text blue pb-3">{t("form.text")}</p>
                </Col>
              </Row>
              {/* goals */}
              <Row className="mb-5">
                <Col xs="12">
                  <h3 className="h3-title  lipstick pb-3">
                    {t("goals.title")}
                  </h3>
                  <p className="text blue pb-3">{t("goals.text")}</p>
                </Col>
              </Row>
            </Col>
            <Col md="5" className={`${classes.colContainer} desktop-layout`}>
              <div className={classes.colContainer__image}>
                <Image
                  src={womenPic}
                  alt="business woman"
                  className="img-fluid "
                  placeholder="blur"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* milestones */}
      <section className="bg-blue w-screen relative left-1/2 right-1/2 transform -translate-x-1/2 box-border">
        <Container className=" my-5 py-5 mx-auto">
          <Row>
            <Col xs="12">
              <div className="mx-auto">
                <h3 className="h3-title text-center white pb-3">
                  {t("milestones.title")}
                </h3>
                <hr class="border-b-3 border-white" />
                <Row className="d-flex justify-between ">
                  {t("milestones.list", {
                    returnObjects: true,
                  }).map((item, index) => (
                    <Col
                      md="2"
                      key={index}
                      className="d-flex flex-col align-items-center my-3"
                    >
                      <div class="w-20 h-20 rounded-full bg-white my-1 d-flex justify-center align-items-center">
                        <p className="blue h1-title">{index + 1}</p>
                      </div>
                      <p className="text white pb-3 text-center">{item}</p>
                    </Col>
                  ))}
                </Row>
                <p className="text white pb-3">{t("milestones.text")}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Content;
