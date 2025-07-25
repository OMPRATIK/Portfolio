import PropTypes from "prop-types";
import { FiGithub } from "react-icons/fi";

import { Link } from "react-router-dom";
import Skill from "./Skill";
import NotLive from "../components/projectStatus/NotLive";
import Live from "../components/projectStatus/Live";
import OnProgress from "../components/projectStatus/OnProgress";
import { useState } from "react";

import { FaRegEye, FaRegEyeSlash, FaStar, FaUserFriends } from "react-icons/fa";
import ProjectVideo from "./ProjectVideo";

import { GoLinkExternal } from "react-icons/go";

function Project({
  image,
  name,
  description,
  contributors,
  skills,
  status,
  type,
  github,
  link,
  video,
  pinned,
}) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div
      className={`flex ${type ? "w-full" : "w-[95%]"} shrink-0 flex-col gap-4 rounded-md
        border-[1px] border-zinc-700 bg-zinc-800 p-2 sm:flex-row sm:gap-8 sm:p-4`}
      key={name}
    >
      <div>
        <div className="mb-2 flex gap-4">
          <div
            className="h-24 w-24 shrink-0 items-center justify-center rounded-md bg-zinc-700 p-0.5
              sm:h-36 sm:w-36"
          >
            <img
              src={image}
              alt="Pinned project logo"
              className="h-full w-full rounded-md"
            />
          </div>

          <div>
            <div className="">
              <div className="mb-2 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <ProjectMetaData
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    github={github}
                    link={link}
                    video={video}
                  />
                </div>

                <div className="flex items-center gap-2">
                  {pinned && (
                    <FaStar className="animate-pulse text-yellow-500" />
                  )}
                  {status === "notLive" && <NotLive />}
                  {status === "live" && <Live />}
                  {status === "onProgress" && <OnProgress />}
                </div>
              </div>

              <p className="mb-2 hidden sm:block">{description}</p>
            </div>
          </div>
        </div>
        {openModal && (
          <div className={"mb-4"}>
            <ProjectVideo src={video} />
          </div>
        )}

        <p className="ext-zinc-300 mb-2 sm:hidden">{description}</p>

        <div>
          {contributors && (
            <div className="mb-3 flex items-center gap-3">
              <h4 className="font-semibold">
                <FaUserFriends className="text-blue-400" />
              </h4>
              <ul className="flex flex-wrap items-center gap-1 text-sm text-zinc-400">
                {contributors.join(", ")}
              </ul>
            </div>
          )}
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

function ProjectMetaData({ link, github, setOpenModal, openModal, video }) {
  return (
    <div className="flex items-center gap-2.5 text-xl">
      {link !== "" ? (
        <Link to={link} target="_blank" className="text-green-500">
          <GoLinkExternal />
        </Link>
      ) : (
        <GoLinkExternal className="text-red-500" />
      )}

      {github !== "" && (
        <Link to={github} target="_blank">
          <FiGithub className="text-blue-500 hover:text-blue-400" />
        </Link>
      )}
      {video ? (
        <button
          onClick={() => setOpenModal((openModal) => !openModal)}
          disabled={!video}
          className="text-yellow-200 hover:text-yellow-100 disabled:opacity-15"
        >
          {!openModal ? <FaRegEye /> : <FaRegEyeSlash />}
        </button>
      ) : (
        <FaRegEye className="text-red-500" />
      )}
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
  github: PropTypes.string,
  link: PropTypes.string,
  video: PropTypes.string,
  pinned: PropTypes.bool,
};

ProjectMetaData.propTypes = {
  link: PropTypes.string,
  github: PropTypes.string,
  setOpenModal: PropTypes.func,
  openModal: PropTypes.bool,
  video: PropTypes.string,
};

export default Project;
