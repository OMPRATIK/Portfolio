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
        <div className="flex gap-2.5">
          <img
            src="https://streak-stats.demolab.com?user=OMPRATIK&background=18181b&hide_border=true&border_radius=6&currStreakNum=d4d4d8&dates=a1a1aa&sideNums=d4d4d8&sideLabels=f59e0b"
            alt="GitHub Streak"
            className="w-full sm:w-[60%]"
          />
          <div className="hidden flex-col justify-between sm:flex">
            <p className="p-2 text-zinc-400">
              My Github showcases a diverse range of projects, from frontend,
              backend to full-stack web applications
            </p>

            <div className="flex justify-end">
              <Link
                className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 sm:text-base"
                to="/projects"
              >
                <span>Explore projects</span>
                <span className="text-xl">&rarr;</span>
              </Link>
            </div>
          </div>
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
