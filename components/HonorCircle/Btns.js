import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import Link from "next/link";

const Btns = () => {
  const { t } = useTranslation("honorCircle");
  return (
    <Container className="sticky-row">
      <Row>
        {t("main.btn", { returnObjects: true }).map((item, index) => (
          <Col key={index} xs="12" md="4" className="py-4">
            <Link href={`#hc-${index}`}>
              <h4 className="h4-title blue text-center">{item}</h4>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Btns;
