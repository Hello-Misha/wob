import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MemberCard = ({ member }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        transition: { duration: 1 },
      }}
      whileTap={{ scale: 1 }}
    >
      <Link href={`/members/` + member.attributes.slug}>
        <section>
          <Container>
            <Row>
              <Col md="3">
                <Image
                  src={member.attributes.photo.data.attributes.url}
                  className={`img-fluid mb-3`}
                  width={member.attributes.photo.data.attributes.width}
                  height={member.attributes.photo.data.attributes.height}
                  alt=""
                />
                <h3 className="h3-title lipstick mb-2">
                  {member.attributes.name}
                </h3>
                <p className="text blue my-3">{member.attributes.spoiler}</p>
              </Col>
            </Row>
          </Container>
        </section>
      </Link>
    </motion.div>
  );
};

export default MemberCard;
