import { useState } from "react";
import { GoProjectRoadmap } from "react-icons/go";

import SubHeading from "../components/SubHeading";
import projects from "../data/projects";
import Project from "../Ui/Project";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const options = ["All", "Front-end", "Back-end", "Full-stack"];

function Projects() {
  const [op, setOp] = useState("All");
  const [status, setStatus] = useState("All");

  const filteredProjects = projects.filter((project) => {
    const typeMatch = op === "All" || project.type === op;
    const statusMatch = status === "All" || project.status === status;
    return typeMatch && statusMatch;
  });

  return (
    <div className="flex min-h-screen flex-col pt-4 sm:pt-10">
      <div className="mb-2 flex items-center justify-between sm:mb-5">
        <SubHeading heading={"Projects"} icon={<GoProjectRoadmap />} />
        <div className="space-x-3 text-sm sm:text-base">
          <select
            value={op}
            onChange={(e) => setOp(e.target.value)}
            className="cursor-pointer rounded-md border-[1px] border-zinc-700 bg-zinc-800 px-2 py-1
              text-zinc-400 focus:outline-none focus:ring-[0.5px] focus:ring-zinc-600"
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="cursor-pointer rounded-md border-[1px] border-zinc-700 bg-zinc-800 px-2 py-1
              text-zinc-400 focus:outline-none focus:ring-[0.5px] focus:ring-zinc-600"
          >
            <option value="All">All Status</option>
            <option value="live">Live</option>
            <option value="notLive">Not Live</option>
            <option value="onProgress">Working</option>
          </select>
        </div>
      </div>
      {filteredProjects.length === 0 && (
        <div className="flex flex-grow items-center justify-center opacity-45">
          No Projects Found
        </div>
      )}
      {filteredProjects.length > 0 && (
        <div
          className="flex h-[calc(100vh-3.5rem)] overflow-hidden rounded-tl-md rounded-tr-md
            sm:h-[calc(100vh-6rem)]"
        >
          <div
            className="flex-grow space-y-2 overflow-scroll pb-20
              [&::-webkit-scrollbar-thumb]:bg-gray-300
              dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500
              [&::-webkit-scrollbar-track]:bg-gray-100
              dark:[&::-webkit-scrollbar-track]:bg-neutral-700 sm:[&::-webkit-scrollbar]:w-1.5"
          >
            {filteredProjects.map(
              ({
                name,
                image,
                status,
                contributors,
                description,
                skills,
                github,
                link,
                video,
                pinned,
              }) => (
                <Project
                  type="project"
                  key={name}
                  name={name}
                  image={image}
                  status={status}
                  contributors={contributors}
                  description={description}
                  skills={skills}
                  github={github}
                  link={link}
                  video={video}
                  pinned={pinned}
                />
              ),
            )}
            <div className="flex w-full items-center justify-center py-2">
              <Link
                className="flex items-center gap-1.5 text-blue-500 underline hover:text-blue-400"
                to="https://github.com/OMPRATIK?tab=repositories"
                target="_blank"
              >
                See more on Github <FaExternalLinkAlt className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
