import Hero from "../Home/Hero";
import Icons from "../Home/Icons";
import Partner from "../Home/Partner";
import Mission from "../Home/Mission";
// import Founders from "../Home/Founders";
import JoinUs from "../Home/JoinUs";
import News from "../Home/News";

const Home = ({ articles }) => {
  return (
    <main>
      <Hero />
      <Icons />
      <Partner />
      <Mission />
      {/* <Founders /> */}
      <JoinUs />
      <News articles={articles} />
    </main>
  );
};

export default Home;
