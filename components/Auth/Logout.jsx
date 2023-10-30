import React from "react";
import { useTranslation } from "next-i18next";
import { unsetToken } from "../../services/auth";
import { Container, Row, Col } from "react-bootstrap";

const Logout = () => {
  const { t } = useTranslation("auth");
  return (
    <section className="my-5">
      <Container className="my-5">
        <Row>
          <Col md="8" className="mx-auto d-flex flex-col">
            <h1 className="h1-title lipstick my-5 text-center">
              {t("logout.title")}
            </h1>
            <Col md="3" className="mx-auto">
              <div
                className={`rounded bg-lipstick mx-auto`}
                onClick={unsetToken}
              >
                <h4 className={`text text-center py-3 cursor-pointer white`}>
                  {t("logout.btn")}
                </h4>
              </div>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Logout;
