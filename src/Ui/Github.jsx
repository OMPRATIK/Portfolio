import { FiGithub } from "react-icons/fi";
import SubHeading from "../components/SubHeading";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubCalendar from "react-github-calendar";

const theme = {
  dark: ["#383838", "#14532d", "#15803d", "#16a34a", "#22c55e"],
};

function Github() {
  return (
    <section className="mb-6 mt-5 sm:mb-10 sm:mt-10">
      <div className="mb-1.5 flex items-center justify-between sm:mb-3">
        <SubHeading heading={"Github"} icon={<FiGithub />} />
        <Link
          className="flex items-center gap-1.5 text-sm text-blue-500 hover:text-blue-400 sm:text-base"
          to="https://github.com/OMPRATIK"
          target="_blank"
        >
          <span>Github Profile</span>
          <FaExternalLinkAlt className="text-xs" />
        </Link>
      </div>
      <div
        className="flex flex-col gap-2 rounded-md border-[1px] border-zinc-700 bg-zinc-800 p-2
          sm:gap-4 sm:p-4"
      >
        <div className="mb-2 flex gap-2.5">
          <img
            src="https://github-readme-stats.vercel.app/api?username=OMPRATIK&theme=dark&show_icons=true&hide_border=true&count_private=true"
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
          <GitHubCalendar
            username="OMPRATIK"
            blockMargin={3}
            colorScheme="dark"
            theme={theme}
          />
        </div>
      </div>
    </section>
  );
}

export default Github;
