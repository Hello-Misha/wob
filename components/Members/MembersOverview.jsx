import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import MemberCard from "./MemberCard";

function MembersOverview({ members }) {
  const { t } = useTranslation("home");

  return (
    <main>
      <Container className="mb-5 mt-5">
        <h2 className={`h1-title lipstick mb-5 text-center`}>
          {t("news.title")}
        </h2>
        <Row className="mb-3 d-flex justify-content-center">
          {members &&
            members.data.map((member) => (
              <Col lg="12" md="12" key={member.id}>
                <MemberCard member={member} />
              </Col>
            ))}
        </Row>
      </Container>
    </main>
  );
}

export default MembersOverview;
