import PageTransition from "../components/PageTransition";
import About from "../Ui/About";
import Map from "../Ui/Map";
import PinnedProjects from "../Ui/PinnedProjects";
import Skills from "../Ui/Skills";
import UpcomingPlans from "../Ui/UpcomingPlans";
import User from "../Ui/User";

function Home() {
  return (
    <PageTransition>
      <Map />
      <User />
      <About />
      <Skills />
      <UpcomingPlans />
      <PinnedProjects />
    </PageTransition>
  );
}

export default Home;
Home;
