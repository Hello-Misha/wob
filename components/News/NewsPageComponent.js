import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

import { RichTextRenderer } from "../../services/richTextReducer";

// import PhotoSlider from "@/components/TechComponents/Carousel";

function NewsPageComponent({ article }) {
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
          <Col md="4" className="mb-3">
            <Image
              src={article.attributes.mainImg.data.attributes.url}
              alt=""
              // alt={tiding.attributes.mainImgAlt}
              loading="lazy"
              width={600}
              height={600}
              className="img-fluid"
            />
          </Col>
          <Col md="8" className="mb-3">
            <h3 className="h1-title lipstick mb-3">
              {article.attributes.titleArticle}
            </h3>
            <h3 className="text-bold lipstick mb-3">
              {article.attributes.date}
            </h3>
            <p className="text blue mb-5">{article.attributes.spoiler}</p>
            <hr className="mb-5" />

            {RichTextRenderer(article.attributes.articleText)}
            <hr className="mb-5" />
            {/* {galeryArr ? <PhotoSlider imgArr={galeryArr} /> : ""} */}
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default NewsPageComponent;

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
