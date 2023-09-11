import { useState } from "react";

import Members from "../HonorCircle/Members";
import Supporters from "../HonorCircle/Supporters";
import Partners from "../HonorCircle/Partners";

import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const HonorCircle = () => {
  const { t } = useTranslation("honorCircle");
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);

  const handleClick = (newCount) => {
    setCount(newCount);
    setShow(!show);
  };

  function componentProps(num) {
    return {
      classes: count === num ? "block" : "hidden",
    };
  }

  return (
    <main>
      <Container className="sticky-row">
        <Row>
          <Col xs="12" md="4" className="py-4 sticky-row">
            <Link href={`#hc-1`}>
              <h4
                className="h4-title blue text-center"
                onClick={() => handleClick(1)}
              >
                {t("main.btn.members")}
              </h4>
            </Link>
          </Col>
          {show && (
            <div className="mobile-layout">
              <Members {...componentProps(1)} />
            </div>
          )}
          <Col xs="12" md="4" className="py-4 sticky-row">
            <Link href={`#hc-2`}>
              <h4
                className="h4-title blue text-center"
                onClick={() => handleClick(2)}
              >
                {t("main.btn.supporters")}
              </h4>
            </Link>
          </Col>
          {show && (
            <div className="mobile-layout">
              <Supporters {...componentProps(2)} />
            </div>
          )}
          <Col xs="12" md="4" className="py-4 sticky-row">
            <Link href={`#hc-3`}>
              <h4
                className="h4-title blue text-center"
                onClick={() => handleClick(3)}
              >
                {t("main.btn.partners")}
              </h4>
            </Link>
          </Col>
          {show && (
            <div className="mobile-layout">
              <Partners {...componentProps(3)} />
            </div>
          )}
        </Row>
      </Container>
      <div className="desktop-layout">
        <Members {...componentProps(1)} />
        <Supporters {...componentProps(2)} />
        <Partners {...componentProps(3)} />
      </div>
    </main>
  );
};

export default HonorCircle;
