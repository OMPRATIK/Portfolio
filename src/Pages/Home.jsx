import About from "../Ui/About";
import Map from "../Ui/Map";
import PinnedProjects from "../Ui/PinnedProjects";
import Skills from "../Ui/Skills";
import UpcomingPlans from "../Ui/UpcomingPlans";
import User from "../Ui/User";

function Home() {
  return (
    <>
      <Map />
      <User />
      <About />
      <Skills />
      <PinnedProjects />
      <UpcomingPlans />
    </>
  );
}

export default Home;
