import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Title from "../ui/Title";
const Content = () => {
  const { t } = useTranslation("mission");
  return (
    <section>
      <Container>
        <Row className="mb-5">
          <Title locale="mission" text="pageTitle" hr={true} />
        </Row>
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
            <h3 className="h3-title  lipstick pb-3">{t("statement.title")}</h3>
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
        {/* milestones */}
        <Row className="mb-5">
          <Col xs="12">
            <h3 className="h3-title  lipstick pb-3">{t("milestones.title")}</h3>

            <ul>
              {t("milestones.list", {
                returnObjects: true,
              }).map((item, index) => (
                <p key={index} className="text blue pb-3">
                  <span className="text-bold lipstick">{`${index + 1}) `}</span>{" "}
                  {item}
                </p>
              ))}
            </ul>
            <p className="text blue pb-3">{t("milestones.text")}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Content;
