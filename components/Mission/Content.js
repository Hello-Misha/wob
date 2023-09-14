import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../ui/Title";

import Image from "next/image";
import womenPic from "../../public/img/mission-woman.png";
const Content = () => {
  const { t } = useTranslation("mission");
  return (
    <section className="overflow-visible">
      <Container>
        <Row className="mb-5">
          <Title locale="mission" text="pageTitle" hr={true} />
        </Row>
        <Row className="relative overflow-visible	">
          <Col md="7">
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
                <h3 className="h3-title  lipstick pb-3">{t("goals.title")}</h3>
                <p className="text blue pb-3">{t("goals.text")}</p>
              </Col>
            </Row>
          </Col>
          <Col md="5" className="relative">
            <div className="sticky z-1 top-10 h-[calc(100vh-2rem)] overflow-hidden">
              <Image
                src={womenPic}
                alt="business woman"
                className="img-fluid"
                placeholder="blur"
              />
            </div>
            <div class="w-[78.25rem] h-[78.25rem] rounded-[78.25rem] bg-lipstick absolute top-10 z-0 overflow-visible!important"></div>
          </Col>
        </Row>
        {/* milestones */}
        <Row className="bg-blue w-screen relative left-1/2 right-1/2 transform -translate-x-1/2 box-border">
          <Container className=" my-5 py-5 mx-auto">
            <Row>
              <Col xs="12">
                <div className="mx-auto">
                  <h3 className="h3-title white pb-3">
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
                        className="d-flex flex-col align-items-center"
                      >
                        <div class="w-20 h-20 rounded-full bg-white my-1">
                          <p className="blue h1-title text-center">
                            {index + 1}
                          </p>
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
        </Row>
      </Container>
    </section>
  );
};

export default Content;
{
}
