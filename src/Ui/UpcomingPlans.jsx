import { FaPaperPlane } from "react-icons/fa";
import SubHeading from "../components/SubHeading";

function UpcomingPlans() {
  return (
    <section className="mb-6">
      <SubHeading heading="Upcoming Plans" icon={<FaPaperPlane />} />
      <div
        className="flex flex-col gap-3 rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-2
          sm:p-4 sm:text-xl"
      >
        <p>
          Learn <span className="font-bold">DevOps</span> and integrate it into
          my full-stack projects to enhance efficiency and scalability.
        </p>
        <div className="my-0.5s border-[1px] border-zinc-500 sm:my-1"> </div>
        <p>
          Learn learn <span className="font-bold">React Native</span> and{" "}
          <span className="font-bold">Expo</span> to build a mobile app focused
          on fitness and food.
        </p>

        <div className="my-0.5s border-[1px] border-zinc-500 sm:my-1" />
        <p>
          Learn <span className="font-bold">Go</span> and build backend projects
          to enhance my understanding of scalable and high-performance systems.
        </p>
        <div className="my-0.5s border-[1px] border-zinc-500 sm:my-1" />
        <p>
          I plan to host all of my projects to make them publicly accessible and
          showcase my skills in deploying production-ready applications.
        </p>
      </div>
    </section>
  );
}

export default UpcomingPlans;