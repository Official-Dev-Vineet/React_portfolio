import Banner from "../../utils/Banner";
import Marquee from "../../utils/Marquee";
import HomeProject from "./HomeProject";

const Home = () => {

  return (
    <main className="top">
      <Banner />
      <Marquee text={"Vineet Singh"} />
      <HomeProject />
    </main>
  );
};

export default Home;
