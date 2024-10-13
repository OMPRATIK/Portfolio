import PageTransition from "../components/PageTransition";
import About from "../Ui/About";
import Map from "../Ui/Map";
import User from "../Ui/User";

function Home() {
  return (
    <PageTransition>
      <Map />
      <User />
      <About />
    </PageTransition>
  );
}

export default Home;
Home;
