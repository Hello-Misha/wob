import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import { RichTextRenderer } from "../../services/richTextReducer";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineLinkedin,
} from "react-icons/ai";

// import PhotoSlider from "@/components/TechComponents/Carousel";

function Member({ member }) {
  // const galeryArr = [];

  // function galeryArrFetch(arr) {
  //   const uri = article.attributes.galery.data;

  //   if (Array.isArray(uri)) {
  //     uri.forEach((img) => {
  //       if (img.attributes && img.attributes.url) {
  //         arr.push(process.env.NEXT_PUBLIC_STRAPI_URL2 + img.attributes.url);
  //       }
  //     });
  //   }
  // }

  // galeryArrFetch(galeryArr);

  return (
    <main>
      <Container className="mb-5 mt-5">
        <Row>
          <Col md="12" className="mb-3">
            <Row
              className={`${
                member.attributes.honorary ? "bg-lipstick" : ""
              } mb-5`}
            >
              <Col md="12">
                <Image
                  src={member.attributes.photo.data.attributes.url}
                  alt=""
                  // alt={tiding.attributes.mainImgAlt}
                  loading="lazy"
                  width={600}
                  height={600}
                  className="img-fluid mx-auto my-5 py-5"
                />
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <h3 className="h1-title lipstick mb-3">
                  {member.attributes.name}
                </h3>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <p className="text blue mb-5">{member.attributes.spoiler}</p>
              </Col>
              <Col md="6">
                <div className="d-flex mb-4 align-items-center">
                  <IconContext.Provider
                    value={{
                      color: "981b46",
                      size: "3rem",
                    }}
                  >
                    <AiOutlineMail className="ml-5" />
                  </IconContext.Provider>
                  <p className="text blue ml-5">{member.attributes.email}</p>
                </div>
                {/* PHONE */}
                <div className="d-flex mb-4 align-items-center">
                  <IconContext.Provider
                    value={{
                      color: "981b46",
                      size: "3rem",
                    }}
                  >
                    <AiOutlinePhone className="ml-5" />
                  </IconContext.Provider>

                  <p className="text blue ml-5">{member.attributes.phone}</p>
                </div>
                {/* SOCIALS */}
                <div className="d-flex mb-4 align-items-center">
                  <motion.div
                    whileHover={{
                      scale: 1.01,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 1 }}
                  >
                    <Link
                      href={member.attributes.linkedin}
                      target="_blank"
                      className="d-flex align-items-center"
                    >
                      <IconContext.Provider
                        value={{
                          color: "981b46",
                          size: "3rem",
                        }}
                      >
                        <AiOutlineLinkedin className="ml-5" />
                      </IconContext.Provider>
                      <span className="text blue ml-5">Linkedin</span>
                    </Link>
                  </motion.div>
                </div>
              </Col>
            </Row>
            <hr className="mb-5" />

            {RichTextRenderer(member.attributes.bio)}
            <hr className="mb-5" />
            {/* {galeryArr ? <PhotoSlider imgArr={galeryArr} /> : ""} */}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Member;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
