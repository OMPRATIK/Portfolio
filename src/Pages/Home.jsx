import About from "../Ui/About";
import Map from "../Ui/Map";
import PinnedProjects from "../Ui/PinnedProjects";
import Skills from "../Ui/Skills";
import UpcomingPlans from "../Ui/UpcomingPlans";
import User from "../Ui/User";

function Home() {
  return (
    <div className="pb-20">
      <Map />
      <User />
      <About />
      <Skills />
      <PinnedProjects />
      <UpcomingPlans />
    </div>
  );
}

export default Home;
