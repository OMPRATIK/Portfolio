import PropTypes from "prop-types";
import { FiGithub } from "react-icons/fi";
import { MdLink, MdLinkOff, MdOutlinePreview } from "react-icons/md";
import { Link } from "react-router-dom";
import Skill from "./Skill";
import NotLive from "../components/projectStatus/NotLive";
import Live from "../components/projectStatus/Live";
import OnProgress from "../components/projectStatus/OnProgress";

function Project({
  image,
  name,
  description,
  contributors,
  skills,
  status,
  type,
}) {
  return (
    <div
      className={`flex ${type ? "w-full" : "w-[95%]"} shrink-0 flex-col gap-4 rounded-md
        border-[1px] border-zinc-700 bg-zinc-800 p-2 sm:flex-row sm:gap-8 sm:p-4`}
      key={name}
    >
      <div>
        <div className="mb-4 flex gap-4">
          <img
            src={image}
            alt="Pinned project logo"
            className="h-24 w-24 rounded-md sm:h-36 sm:w-36"
          />

          <div>
            <div className="">
              <div className="mb-2 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <ProjectMetaData />
                </div>

                {status === "notLive" && <NotLive />}
                {status === "live" && <Live />}
                {status === "onProgress" && <OnProgress />}
              </div>

              <p className="mb-2 hidden text-zinc-300 sm:block">
                {description}
              </p>
            </div>
          </div>
        </div>
        <p className="mb-2 text-zinc-300 sm:hidden">{description}</p>

        <div>
          {contributors && (
            <div className="mb-3 flex flex-col sm:flex-row sm:gap-2">
              <h4 className="font-semibold">Contributors</h4>
              <ul className="flex flex-wrap items-center gap-1 text-sm text-zinc-300/70">
                {contributors.join(", ")}
              </ul>
            </div>
          )}
          {/* <h4 className="mb-1 font-semibold">Technologies Used</h4> */}
          <div className="flex flex-wrap gap-1">
            {skills.map(({ name, icon }) => (
              <Skill name={name} icon={icon} key={name} type="tech" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  contributors: PropTypes.array,
  skills: PropTypes.array,
  status: PropTypes.string,
  type: PropTypes.string,
};

function ProjectMetaData({ link, github }) {
  return (
    <div className="flex gap-2.5 text-xl">
      {link ? (
        <button>
          <MdLink />
        </button>
      ) : (
        <MdLinkOff className="text-red-300" />
      )}
      <Link to={github}>
        <FiGithub className="text-blue-500 hover:text-blue-400" />
      </Link>
      <button>
        <MdOutlinePreview className="text-yellow-200 hover:text-yellow-100" />
      </button>
    </div>
  );
}

ProjectMetaData.propTypes = {
  link: PropTypes.string,
  github: PropTypes.string,
};

export default Project;
