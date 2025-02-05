import { useState } from "react";
import { GoProjectRoadmap } from "react-icons/go";

import SubHeading from "../components/SubHeading";
import projects from "../data/projects";
import Project from "../Ui/Project";

const options = ["All", "Front-end", "Back-end", "Full-stack"];

function Projects() {
  const [op, setOp] = useState("All");

  const filteredProjects =
    op === "All" ? projects : projects.filter((project) => project.type === op);

  return (
    <div className="mt-4 pb-20 sm:mt-10">
      <div className="mb-2 flex items-center justify-between sm:mb-5">
        <SubHeading heading={"Projects"} icon={<GoProjectRoadmap />} />
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
      </div>

      <div className="flex flex-col gap-2">
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
            />
          ),
        )}
      </div>
    </div>
  );
}

export default Projects;
