import { useTranslation } from "next-i18next";
import { Container, Row, Col } from "react-bootstrap";

import CarouselComponent from "../ui/CarouselWithText";

import Ustynova from "../../public/img/membership/M_Ustynova.png";
import Volchko from "../../public/img/membership/M_Oksana_Volchko.png";
import Makarenko from "../../public/img/membership/M_Olena_Makarenko.png";
import Sinichkina from "../../public/img/membership/M_Lana_Sinichkina.png";
import Kaznacheeva from "../../public/img/membership/M_Nadiia_Kaznacheeva.png";
import Tomash from "../../public/img/membership/M_Olga_Tomash.png";
import Kvashnina from "../../public/img/membership/M_Maryna_Kvashnina.png";

const Content = () => {
  const { t } = useTranslation("membership");

  const imgArr = [
    Ustynova,
    Volchko,
    Makarenko,
    Sinichkina,
    Kaznacheeva,
    Tomash,
    Kvashnina,
  ];
  const textArr = t("members.carousel", { returnObjects: true });

  const firstImg = imgArr.shift();
  const firstText = textArr.shift();

  // Combine the remaining items into an array of pairs
  const combinedArr = imgArr.map((img, index) => [img, textArr[index]]);

  // Shuffle the combined array
  for (let i = combinedArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [combinedArr[i], combinedArr[j]] = [combinedArr[j], combinedArr[i]];
  }

  // Add the first item back to the beginning of the shuffled arrays
  combinedArr.unshift([firstImg, firstText]);

  // Separate the shuffled array back into two separate arrays
  const shuffledImgArr = combinedArr.map((pair) => pair[0]);
  const shuffledTextArr = combinedArr.map((pair) => pair[1]);

  return (
    <section>
      <Container>
        <Row className="mb-5 max-h-300">
          <Col xs="12">
            <h3 className="h3-title  lipstick  mt-5">{t("members.title")}</h3>

            <CarouselComponent
              locale={"membership"}
              imgArr={shuffledImgArr}
              textContent={shuffledTextArr}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Content;
