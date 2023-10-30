import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import BtnComponent from "../ui/BtnComponent";

const Unauthorized = () => {
  const { t } = useTranslation("common");
  return (
    <main>
      <section className="my-5">
        <Container className="my-5">
          <Row>
            <Col
              md="8"
              className="mx-auto d-flex flex-col justify-content-center"
            >
              {/* <div className="textContainer"> */}
              <h1 className="h1-title lipstick my-5 text-center">
                {t("unauthorized.title")}
              </h1>
              <p className="text blue text-center mb-5">
                {t("unauthorized.text")}
              </p>
              <BtnComponent
                locale="common"
                link={"/auth"}
                btnText="unauthorized.btn"
                bg="bg-lipstick"
                classes={"mb-5 mx-auto"}
                color="white"
              />
              {/* </div> */}
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Unauthorized;
