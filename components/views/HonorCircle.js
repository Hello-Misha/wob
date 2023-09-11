import { useState } from "react";

import Members from "../HonorCircle/Members";
import Supporters from "../HonorCircle/Supporters";
import Partners from "../HonorCircle/Partners";

import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

import { IconContext } from "react-icons";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

const HonorCircle = () => {
  const { t } = useTranslation("honorCircle");
  const [count, setCount] = useState(1);
  const [show, setShow] = useState(true);

  const handleClick = (newCount) => {
    setCount(newCount);
    setShow(!show);
  };

  const componentProps = (num) => {
    return {
      classes: count === num ? "block" : "hidden",
    };
  };

  const Arrows = ({ num }) => {
    return (
      <IconContext.Provider
        value={{
          color: "2f4858",
          size: "3rem",
        }}
      >
        {num === count ? (
          <AiOutlineArrowDown className="ml-5" />
        ) : (
          <AiOutlineArrowUp className="ml-5" />
        )}
      </IconContext.Provider>
    );
  };

  return (
    <main>
      <Container className="sticky-row">
        <Row>
          <Col xs="12" md="4" className="py-4 sticky-row">
            <Link href={`#hc-1`}>
              <div
                className="d-flex align-middle"
                onClick={() => handleClick(1)}
              >
                <h4 className="h4-title blue text-center">
                  {t("main.btn.members")}
                </h4>
                <Arrows num={1} />
              </div>
            </Link>
          </Col>
          {show && (
            <div className="mobile-layout">
              <Members {...componentProps(1)} />
            </div>
          )}
          <Col xs="12" md="4" className="py-4 sticky-row">
            <Link href={`#hc-2`}>
              <div
                className="d-flex align-middle"
                onClick={() => handleClick(2)}
              >
                <h4 className="h4-title blue ">{t("main.btn.supporters")}</h4>
                <Arrows num={2} />
              </div>
            </Link>
          </Col>
          {show && (
            <div className="mobile-layout">
              <Supporters {...componentProps(2)} />
            </div>
          )}
          <Col xs="12" md="4" className="py-4 sticky-row">
            <Link href={`#hc-3`}>
              <div
                className="d-flex align-middle"
                onClick={() => handleClick(3)}
              >
                <h4 className="h4-title blue text-center">
                  {t("main.btn.partners")}
                </h4>
                <Arrows num={3} />
              </div>
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
