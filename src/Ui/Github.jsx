import { FiGithub } from "react-icons/fi";
import SubHeading from "../components/SubHeading";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

function Github() {
  return (
    <section className="mb-6 mt-10 sm:mb-10">
      <div className="mb-1.5 flex items-center justify-between sm:mb-3">
        <SubHeading heading={"Github"} icon={<FiGithub />} />
        <Link
          className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 sm:text-base"
          to="/projects"
        >
          <span>Github Profile</span>
          <FaExternalLinkAlt className="text-xs" />
        </Link>
      </div>
      <div
        className="flex flex-col gap-2 rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-2
          sm:gap-4 sm:p-4"
      >
        <div>
          <a href="https://git.io/streak-stats">
            <img
              src="https://streak-stats.demolab.com?user=OMPRATIK&background=18181b&hide_border=true&border_radius=6&currStreakNum=d4d4d8&dates=a1a1aa&sideNums=d4d4d8&sideLabels=fb923c"
              alt="GitHub Streak"
              className="w-full sm:w-[60%]"
            />
          </a>
        </div>
        <div>
          <img
            src="https://ghchart.rshah.org/14532d/OMPRATIK"
            alt="Pratik's github heatmap"
          />
        </div>
      </div>
    </section>
  );
}

export default Github;
