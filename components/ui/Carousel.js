import Image from "next/image";
import { Carousel } from "react-bootstrap";

const CarouselComponent = ({ imgArr }) => {
  return (
    <Carousel>
      {imgArr.map((img) => (
        <Carousel.Item key={img}>
          <Image
            className="img-fluid d-block "
            src={img}
            width={1000}
            height={1000}
            alt="Slide"
            // placeholder="blur"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
