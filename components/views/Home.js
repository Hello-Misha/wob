import { Container, Row, Col } from "react-bootstrap";

import Hero from "../Home/Hero";
import Icons from "../Home/Icons";
import Mission from "../Home/Mission";
import Founders from "../Home/Founders";

const Home = () => {
  return (
    <main>
      <Hero />
      <Icons />
      <Mission />
      <Founders />
    </main>
  );
};

export default Home;
