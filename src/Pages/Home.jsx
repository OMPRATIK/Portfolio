import About from "../Ui/About";
import Exprience from "../Ui/Exprience";
import Map from "../Ui/Map";
import PinnedProjects from "../Ui/PinnedProjects";
import Skills from "../Ui/Skills";
import User from "../Ui/User";

function Home() {
  return (
    <div className="pb-20">
      <div className="overflow-hidden">
        <Map />
      </div>
      <User />
      <About />
      <Exprience />
      <Skills />
      <PinnedProjects />
      {/* <UpcomingPlans /> */}
    </div>
  );
}

export default Home;
