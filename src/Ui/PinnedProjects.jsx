import { TbPinnedFilled } from "react-icons/tb";
import SubHeading from "../components/SubHeading";

function PinnedProjects() {
  return (
    <section>
      <SubHeading heading="Pinned Projects" icon={<TbPinnedFilled />} />
      <div></div>
    </section>
  );
}

export default PinnedProjects;
