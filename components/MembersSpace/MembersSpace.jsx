import Title from "components/ui/Title";
import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";

import events from "public/img/icons/i9.svg";
import jobs from "public/img/icons/i10.svg";
import members from "public/img/icons/i11.svg";
import logout from "public/img/icons/i12.svg";

const MembersSpace = () => {
  const { t } = useTranslation("home");

  const buttons = [
    {
      href: "/members",
      text: "Members List",
      img: members,
    },
    {
      href: "/jobs",
      text: "Jobs Board",
      img: jobs,
    },
    {
      href: "/events",
      text: "Exclusive events",
      img: events,
    },
  ];

  return (
    <main>
      <section>
        <Container>
          <Row>
            <Col xs="12">
              <h1 className="h1-title lipstick">Members Space</h1>
              <hr />
              <p className="text blue my-5">
                Enjoy all benefits from exclusive WoB membership
              </p>
            </Col>
          </Row>
          <Row>
            <Col xs="12" md="6" lg="4">
              {buttons.map((item, index) => (
                <Link href={item.href} key={index}>
                  <div
                    style={{
                      border: "3px solid #981b46", // Add a border with the desired color
                      color: "#981b46", // Set the text color to match the border color
                    }}
                    className="py-3 my-5 pl-5 rounded d-flex align-items-center hover:shadow-lg"
                  >
                    <Image src={item.img} alt="" />
                    <h3 className="text-bold blue ml-5">{item.text}</h3>
                  </div>
                </Link>
              ))}
            </Col>
            <hr />
          </Row>
          <Row>
            <Col xs="12" md="6" lg="4">
              <Link href="/auth" className="d-flex align-items-center my-5">
                <h3 className="text-bold lipstick mr-5">Logout from system</h3>
                <Image src={logout} alt="" />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default MembersSpace;
